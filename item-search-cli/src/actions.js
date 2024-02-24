import { TarkovApiItemQueries } from "../../common/dist/src/tarkov/queries.js";

/**
 * @typedef {import('../../common/dist/src/tarkov/graphql-client.js').GraphQLClient} GraphQLClient
 * @typedef {import('../../common/dist/src/graphql/types.js').Item} Item
 */

/**
 * Retreives a weapon by name and outputs to the console
 * @param {GraphQLClient} graphqlClient
 * @param {string} weaponName
 */
export async function getWeapon(graphqlClient, weaponName) {
  const query = TarkovApiItemQueries.Weapons.findByName(weaponName);
  return getData(graphqlClient, query);
}

/**
 * Retreives suppressors for a given ammo type and outputs to the console
 * @param {GraphQLClient} graphqlClient
 * @param {string} ammoType
 */
export async function getSuppressors(graphqlClient, ammoType) {
  const query = TarkovApiItemQueries.Suppressors.findByAmmoType(ammoType);
  return getData(graphqlClient, query);
}

/**
 * Retreives various calibers for a given ammo type and outputs to the console
 * @param {GraphQLClient} graphqlClient
 * @param {string} ammoType
 */
export async function getAmmo(graphqlClient, ammoType) {
  const query = TarkovApiItemQueries.Ammo.findByAmmoType(ammoType);
  return getData(graphqlClient, query);
}

/**
 * Runs a query and outputs the results to the console
 * @param {GraphQLClient} graphqlClient
 * @param {string} query
 */
async function getData(graphqlClient, query) {
  /**
   * @type {any[]}
   */
  return await graphqlClient.query(query);
}
