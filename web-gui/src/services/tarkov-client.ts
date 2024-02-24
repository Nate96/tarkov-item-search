import { TarkovApiItemQueries } from '../../../common/src/queries.js';
import { GraphQLClient } from '../../../common/src/graphql-client.js';
import { Item } from '../../../common/src/graphql/types.js';
import { Singleton } from '../core/singleton.js';
import { getAmmoType } from '../../../common/src/constants/ammo-type.js';

export class TarkovClient extends Singleton {
  graphqlClient: GraphQLClient;

  protected constructor() {
    super();
    
    this.graphqlClient = new GraphQLClient('https://api.tarkov.dev/graphql');
  }

  getSuppressors(ammoType: string): Promise<{ items: Item[] }> {
    const [ammo, error] = getAmmoType(ammoType);
    if (error) {
      console.log(error);
      return Promise.reject(error);
    }
    const query = TarkovApiItemQueries.Suppressors.findByAmmoType(ammo);
    const items = this.graphqlClient.query<{ items: Item[] }>(query);
    return items;
  }
}