#!/usr/bin/env node

import { Command } from 'commander'
import { GraphQLClient } from './common/dist/graphql-client.js'
import { getSuppressors, getAmmo } from './actions.js'
import { AmmoType } from './common/dist/constants/ammo-type.js'

const program = new Command()
const graphqlClient = new GraphQLClient('https://api.tarkov.dev/graphql');

program
  .version('1.0.0')
  .description('Tarkov Search Item')
  .option('-s, --suppressor <ammo_type>', 'Get suppressors for Ammo Type')
  .option('-a, --ammo <ammo_type>', 'Get all ammo for Ammo Type')
  .parse(process.argv)

const options = program.opts()
if(options.debug) {
  console.log(options)
} else if(options.suppressor) {
  if (AmmoType.hasOwnProperty(options.suppressor)) {
    getSuppressors(graphqlClient, AmmoType[options.suppressor])
  } else {
    console.log("Ammo not implmented")
  }
} else if (options.ammo) {
  if (AmmoType.hasOwnProperty(options.ammo)) {
    getAmmo(graphqlClient, AmmoType[options.ammo])
  } else {
    console.log("Ammo not implmented")
  }
}
