import { gql } from "graphql-request";

export class TarkovApiItemQueries {
  static AllItems = {
    getAllItems: (limit: number = 1, offset: number = 0) => gql`
      {
        items(limit: ${limit} offset: ${offset}) {
          
        }
      }
    `
  }

  static Suppressors = {
    findByAmmoType: (ammoType: string) => gql`
    {
      items(name: "${ammoType} sound suppressor") {
        name
        shortName
        iconLink
        image512pxLink
        ergonomicsModifier
        recoilModifier
        weight
        velocity
        loudness
        hasGrid
        buyFor {
          vendor {
            name
              ... on TraderOffer {
                minTraderLevel
                taskUnlock {
                  name
                  trader {
                    name
                  }
                  map {
                    name
                  }
                  minPlayerLevel
                  traderRequirements {
                    trader {
                      name
                    }
                    requirementType
                    compareMethod
                    value
                  }
    
                }
              }
          }
          price
          currency
          currencyItem {
            name
          }
          priceRUB
        }
      }
    }
    `
  }

  static Ammo = {
    findByAmmoType: (ammoType: string) => gql`
    {
      items(name: "${ammoType}") {
        name
        properties {
          ... on ItemPropertiesAmmo {
            caliber
            stackMaxSize
            tracer
            tracerColor
            ammoType
            projectileCount
            damage
            armorDamage
            fragmentationChance
            ricochetChance
            penetrationChance
            penetrationPower
            penetrationPowerDeviation
            accuracyModifier
            recoilModifier
            initialSpeed
            lightBleedModifier
            heatFactor
            durabilityBurnFactor
            heatFactor
            staminaBurnPerDamage
            ballisticCoeficient
            bulletDiameterMilimeters
            bulletMassGrams
          }
        }
        buyFor {
          vendor {
            name
              ... on TraderOffer {
                name
                trader {
                  name
                  resetTime
                  currency {
                    name
                  }
                  discount
                }
                minTraderLevel
                taskUnlock {
                  name
                  trader {
                    name
                  }
                  map {
                    name
                  }
                  minPlayerLevel
                  traderRequirements {
                    trader {
                      name
                    }
                    requirementType
                    compareMethod
                    value
                  }
  
                }
              }
          }
          price
          currency
          currencyItem {
            name
          }
          priceRUB
        }
      }
    }
    `
  }

  static Weapons = {
    findByName: (weaponName: string) => gql`
    {
      items(name: ${weaponName}) {
        id
        name
        # normalizedName
        shortName
        # description
        # basePrice
        # updated
        # width
        # height
        # backgroundColor
        # iconLink
        # gridImageLink
        # baseImageLink
        # inspectImageLink
        # image512pxLink
        # image8xLink
        # wikiLink
        # types
        # avg24hPrice
        properties {
          ... on ItemPropertiesWeapon {
            slots {
              name
              filters {
                allowedCategories {
                  name
                }
                allowedItems {
                  name
                  shortName
                  iconLink
                }
              }
              required
            }
          }
          ... on ItemPropertiesWeaponMod {
            slots {
              name
              filters {
                allowedCategories {
                  name
                }
                allowedItems {
                  name
                  shortName
                  iconLink
                }
              }
              required
            }
          }
          ... on ItemPropertiesBarrel {
            slots {
              name
              filters {
                allowedCategories {
                  name
                }
                allowedItems {
                  name
                  shortName
                  iconLink
                }
              }
              required
            }
          }
          ... on ItemPropertiesMagazine {
            slots {
              name
              filters {
                allowedCategories {
                  name
                }
                allowedItems {
                  name
                  shortName
                  iconLink
                }
              }
              required
            }
          }
          ... on ItemPropertiesScope {
            slots {
              name
              filters {
                allowedCategories {
                  name
                }
                allowedItems {
                  name
                  shortName
                  iconLink
                }
              }
              required
            }
          }
        }
        conflictingItems {
          name
        }
        # conflictingSlotIds
        # accuracyModifier
        # recoilModifier
        # ergonomicsModifier
        # hasGrid
        # blocksHeadphones
        # link
        # lastLowPrice
        # changeLast48h
        # changeLast48hPercent
        # low24hPrice
        # high24hPrice
        # lastOfferCount
        # sellFor {
        #   vendor {
        #     name
        #   }
        #   price
        #   currency
        #   currencyItem {
        #     name
        #   }
        #   priceRUB
        # }
        # buyFor {
        #   vendor {
        #     name
        #   }
        #   price
        #   currency
        #   currencyItem {
        #     name
        #   }
        #   priceRUB
        # }
        containsItems {
          item {
            name
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
          name
        }
        categories {
          name
        }
        # bsgCategoryId
        # handbookCategories {
        #   name
        # }
        # weight
        # velocity
        # loudness
        # usedInTasks {
        #   name
        # }
        # receivedFromTasks {
        #   name
        # }
        # bartersFor {
        #   trader {
        #     name
        #   }
        # }
        # bartersUsing {
        #   trader {
        #     name
        #   }
        # }
        # craftsFor {
        #   station {
        #     name
        #   }
        # }
        # craftsUsing {
        #   station {
        #     name
        #   }
        # }
        # historicalPrices
        # fleaMarketFee
      }
    }
  `
  }
}