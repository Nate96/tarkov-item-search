import { SchemaBuilder } from '../../common/dist/src/graphql/schema-builder.js';
import { Schema } from './../../common/dist/src/graphql/schema-types';
import * as fs from 'fs';
import * as path from 'path';
import { Command } from 'commander';
import ora from 'ora';
import chalk from 'chalk';
import * as readline from 'readline';
import { format } from 'prettier';

const program = new Command()

// general info
program
  .version('1.0.0')
  .description('CLI tool for crafting GraphQL queries from a schema.json file');

// TODO: setup global config for this cli tool
program
  .command('config')
  .description('Configure global settings')
  .addCommand(new Command('set').description('Set global settings'))

// generate query command
program
  .option('-s, --schema <schema>', 'Path to schema.json file')
  .option('-q, --query <query>', 'Name of the query')
  .option('-a, --args <args>', 'Query arguments as key-value pairs in a JSON object')
  .option('-o, --output <output>', 'Output path')
  .option('-v, --verbose', 'Verbose output')

program.parse(process.argv)

const options = program.opts();

// console.log(options);

// gather options
const schemaPath: string = options.schema;
const query: string = options.query;
const args: string = options.args;
const outputPath: string = options.output;
const verbose: any = options.verbose;

let schemaObj: Schema | undefined = undefined;

async function validateOptions(): Promise<void> {
  // validate schema path
  if (!fs.existsSync(schemaPath)) {
    console.error('Schema JSON file does not exist');
    process.exit(1);
  }

  if (path.extname(schemaPath).toLowerCase() !== '.json') {
    console.error('Schema must be a .json file');
    process.exit(1);
  }

  // validate output path
  if (path.extname(outputPath).toLowerCase() !== '.gql') {
    console.error('Output file must be a .gql file');
    process.exit(1);
  }

  if (!fs.existsSync(outputPath)) {
    // create directories if they don't exist
    const dirs = path.dirname(outputPath);
    if (!fs.existsSync(dirs)) {
      const confirmed = await confirmAction(`\nDirectory ${dirs} does not exist. Do you want to create it?`);
      if (confirmed) {
        fs.mkdirSync(dirs, { recursive: true });
        console.log(`\nDirectory ${dirs} created!`);
      } else {
        console.log('\nIf you want to generate the output file, please provide a valid output path or create the directory manually.');
        process.exit(1);
      }
    }
  }

  // validate args
  if (args) {
    const argsObj = JSON.parse(args);
    if (!argsObj || typeof argsObj !== 'object') {
      console.error('Invalid args');
      process.exit(1);
    }
  }

  // validate parsing of schema json
  try {
    const file = fs.readFileSync(
      schemaPath,
      "utf8"
    );

    const json: { __schema: Schema } = JSON.parse(file);
    schemaObj = json["__schema"];
    if (schemaObj === undefined) {
      throw new Error('Invalid schema JSON');
    }
  } catch (error) {
    console.error('Error parsing schema JSON');
    process.exit(1);
  }
}

async function generateQuery(schema: Schema, query: string, args: any, outputPath: string, verbose: boolean): Promise<void> {
  const spinner = ora({ text: 'Generating query...', spinner: {
    interval: 80,
    frames: ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏']
  }}).start();

  try {
    // variables here are validated beforehand
    const results = new SchemaBuilder(schema).buildQuery(query, args);
  
    // format string
    const formattedResults = await format(results, {
      parser: "graphql",
    });

    // write to file
    fs.writeFileSync(outputPath, formattedResults, "utf8");
  } catch (e) {
    console.error(chalk.red(e));
  }

  spinner.succeed('Query generated!');
}

// Function to ask confirmation question
function askQuestion(query: string): Promise<string> {
  const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
  });

  return new Promise((resolve) => {
      rl.question(query, (answer) => {
          rl.close();
          resolve(answer.trim().toLowerCase());
      });
  });
}

async function confirmAction(message: string) {
  const answer = await askQuestion(`${message} (yes/no): `);
  return answer === 'yes' || answer === 'y';
}

await validateOptions();
if (schemaObj) {
  await generateQuery(schemaObj, query, args, outputPath, verbose);
}
