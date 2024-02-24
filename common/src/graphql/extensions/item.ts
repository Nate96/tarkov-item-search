import { Item, ItemPrice } from "../types.js";

export function getCheapestBuyPrice(item: Item): ItemPrice | undefined {
  return item?.buyFor?.sort((a: ItemPrice, b: ItemPrice) => (a.price ?? 0) - (b.price ?? 0))[0];
}