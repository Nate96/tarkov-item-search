#!/usr/bin/env node

import { request, gql } from 'graphql-request'
import { inspect } from 'node:util'
import { Command } from 'commander'
const program = new Command()

function getSuppressors(ammoType) {
  const query = gql`
  {
    items(name: "${ammoType} sound suppressor") {
      name
      shortName
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
  request('https://api.tarkov.dev/graphql', query).then((data) => console.log(inspect(data, false, null, true)))
}

function getAmmo(ammoTyp) {
  const query = gql`
  {
    items(name: "${ammoTyp}") {
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
  request('https://api.tarkov.dev/graphql', query).then((data) => console.log(inspect(data, false, null, true)))
}

program
  .version('1.0.0')
  .description('Tarkov Search Item')
  .option('-s, --suppressors <type>', 'Get suppressor Detail')
  .option('-a, --ammo <type>', 'Get Ammo Detail')
  .parse(process.argv)

const options = program.opts()
if(options.debug) {
  console.log(options)
} else if(options.suppressors ) {
  switch (options.suppressors) {
    case "556":
      getSuppressors("5.56x45")
      break
    case "545":
      getSuppressors("5.45x39")
      break
    case "12g":
      getSuppressors("12ga")
      break
    case "45":
      getSuppressors(".45 ACP")
      break
    default:
      console.log("Ammo not implmented")
  }
} else if (options.ammo) {
  switch (options.ammo) {
    case "556":
      getAmmo("5.56x45mm")
      break
    case "545":
      getAmmo("5.45x39mm")
      break
    case "12g":
      getAmmo("12ga")
      break
    case "762nato":
      getAmmo('7.62x51mm')
      break
    default:
      console.log("Ammo not implmented")
  }
}
