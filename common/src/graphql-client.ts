import { gql, request, Variables } from 'graphql-request';
import { HandbookCategoryName, Item, ItemCategoryName, ItemType, LanguageCode } from './graphql/types.js';

export class GraphQLClient {
  url: string;

  constructor(url: string) {
    this.url = url;
  }

  async query<T>(gql: string, variables: Variables = {}): Promise<T> {
    return await request(this.url, gql, variables);
  }

  // WIP
  async getItems(opts: GetItemsOptions): Promise<Item[]> {
    if (Object.keys(opts).length === 0) {
      throw new Error('At least one option must be provided');
    }

    // const params = 'name: ""';

    const query = gql`
      {
        items(limit: 1 offset: 0) {
          name
          normalizedName
          shortName
          description
          basePrice
          width
          height
          iconLink
          baseImageLink
          image512pxLink
          wikiLink
          types
          properties {
            ... on ItemPropertiesWeapon {
              caliber
              defaultAmmo {
                id
              }
              effectiveDistance
              ergonomics
              fireModes
              fireRate
              maxDurability
              
            }
          }
          conflictingItems {
            id
          }
          conflictingSlotIds
          accuracyModifier
          recoilModifier
          ergonomicsModifier
          hasGrid
          blocksHeadphones
          link
          sellFor {
            vendor {
              name
              ... on TraderOffer {
                trader {
                  id
                }
                minTraderLevel
                taskUnlock {
                  id
                }
              }
            }
            price
            currency
            currencyItem {
              id
            }
            priceRUB
          }
          buyFor {
            vendor {
              name
              ... on TraderOffer {
                trader {
                  id
                }
                minTraderLevel
                taskUnlock {
                  id
                }
              }
            }
            price
            currency
            currencyItem {
              id
            }
            priceRUB
          }
          containsItems {
            item {
              id
            }
            count
            quantity
            attributes {
              type
              name
              value
            }
          }
          category {
            id
            name
          }
          categories {
            id
            name
          }
          bsgCategoryId
          handbookCategories {
            id
          }
          weight
          velocity
          loudness
          usedInTasks {
            id
          }
          receivedFromTasks {
            id
          }
          bartersFor {
            id
          }
          bartersUsing {
            id
          }
          craftsFor {
            id
          }
          craftsUsing {
            id
          }
        }
      }
    `

    return await this.query<Item[]>(query);
  }
}

export class GetItemsOptions {
  ids: string;
  name: string;
  names: string[];
  type: ItemType;
  types: ItemType[];
  categoryNames: ItemCategoryName[];
  handbookCategoryNames: HandbookCategoryName[];
  bsgCategoryId: string;
  bsgCategoryIds: string[];
  bsgCategory: string;
  lang: LanguageCode;
  limit: number;
  offset: number;
}