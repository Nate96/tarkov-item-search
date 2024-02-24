import * as fs from "fs";
import { inspect } from "util";

/**
 * 
 * @param {object} data 
 * @param {string} outputPath 
 */
export function outputData(data, outputPath) {
  if (outputPath) {
    writeToFile(data, outputPath);
  } else {
    writeToConsole(data);
  }
}

/**
 * 
 * @param {object} data 
 */
function writeToConsole(data) {
  console.log(inspect(data, false, null, true));
}

/**
 * Write data to a file with a unique name
 * @param {object} data 
 * @param {string} filePath 
 * @returns name of the file written
 */
function writeToFile(data, filePath) {
  fs.writeFileSync(filePath, JSON.stringify(data));
  return filePath;
}