import { inspect } from "util";
import { TarkovApiItemQueries } from "./common/dist/queries.js";

/**
 * @typedef {import('./common/dist/graphql-client.js').GraphQLClient} GraphQLClient
 * @typedef {import('./common/dist/graphql/types.js').Item} Item
 */

/**
 * Retreives a weapon by name and outputs to the console
 * @param {GraphQLClient} graphqlClient
 * @param {string} weaponName
 */
export async function getWeapon(graphqlClient, weaponName) {
  const query = TarkovApiItemQueries.Weapons.findByName(weaponName);
  outputItems(graphqlClient, query);
}

/**
 * Retreives suppressors for a given ammo type and outputs to the console
 * @param {GraphQLClient} graphqlClient
 * @param {string} ammoType
 */
export async function getSuppressors(graphqlClient, ammoType) {
  const query = TarkovApiItemQueries.Suppressors.findByAmmoType(ammoType);
  outputItems(graphqlClient, query);
}

/**
 * Retreives various calibers for a given ammo type and outputs to the console
 * @param {GraphQLClient} graphqlClient
 * @param {string} ammoType
 */
export async function getAmmo(graphqlClient, ammoType) {
  const query = TarkovApiItemQueries.Ammo.findByAmmoType(ammoType);
  outputItems(graphqlClient, query);
}

/**
 * Runs a query and outputs the results to the console
 * @param {GraphQLClient} graphqlClient
 * @param {string} query
 */
async function outputItems(graphqlClient, query) {
  /**
   * @type {Item[]}
   */
  const items = await graphqlClient.query(query);
  console.log(inspect(items, false, null, true));
}
