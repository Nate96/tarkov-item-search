#!/usr/bin/env node

import { Command } from 'commander'
import { GraphQLClient } from '../common/dist/src/tarkov/graphql-client.js'
import { getSuppressors, getAmmo } from './src/actions.js'
import { getAmmoType } from '../common/dist/src/constants/ammo-type.js'
import { outputData } from './src/output.js'

/**
 * @typedef {import('../common/dist/src/types/types.js').Maybe} Maybe
 */

const program = new Command()
const graphqlClient = new GraphQLClient('https://api.tarkov.dev/graphql');

program
  .version('1.0.0')
  .description('Tarkov Search Item')
  .option('-s, --suppressor <ammo_type>', 'Get suppressors for Ammo Type')
  .option('-a, --ammo <ammo_type>', 'Get all ammo for Ammo Type')
  .option('-o, --output <output>', 'Output to file')
  .parse(process.argv)

const options = program.opts()

const outputPath = options.output;

if(options.debug) {
  console.log(options)
} else if(options.suppressor) {
  /**
   * @type {Maybe}
   */
  const [ammoType, error] = getAmmoType(options.suppressor);
  if (!error) {
    const suppressors = await getSuppressors(graphqlClient, ammoType);
    outputData(suppressors, outputPath);
  } else {
    console.log("Ammo not implmented")
  }
} else if (options.ammo) {
  /**
   * @type {Maybe}
   */
  const [ammoType, error] = getAmmoType(options.ammo);
  if (!error) {
    const ammo = await getAmmo(graphqlClient, ammoType)
    outputData(ammo, outputPath)
  } else {
    console.log("Ammo not implmented")
  }
}
