import { Maybe } from "src/types/types.js";

const AmmoType: { [key: string]: string } = {
  '556': '5.56x45',
  '545': '5.45x39',
  '762nato': '7.62x39',
  '762x51': '7.62x51',
  '9x18': '9x18',
  '9x19': '9x19',
  '45': '.45 ACP',
  '12g': '12ga',
}

export function getAmmoType(key: string): Maybe<string> {
  const keyExists = Object.prototype.hasOwnProperty.call(AmmoType, key)
  const ammoType = keyExists ? AmmoType[key] : undefined
  const error = keyExists ? undefined : new Error('Invalid ammo type')
  return [ammoType, error]
}