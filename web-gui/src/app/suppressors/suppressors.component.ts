import { Component } from "../base/base.component.js";
import { Item, ItemPrice } from "../../../../common/src/graphql/types.js";
import { getCheapestBuyPrice } from "../../../../common/src/graphql/extensions/item.js";
import { TarkovClient } from "../../services/tarkov-client.js";
import { getCurrencyFormatted } from "../../../../common/src/functions/currency.js";

interface ItemUI extends Item {
  cheapestBuyPrice?: ItemPrice;
}

export class SuppressorsComponent implements Component {
  items: ItemUI[] = [];

  // services
  tarkovClient: TarkovClient;

  constructor() {
    this.tarkovClient = TarkovClient.getInstance<TarkovClient>();
  }

  async init(): Promise<{ htmlString: string, cssFileUrl: string}> {
    const htmlString = await fetch('/src/app/suppressors/suppressors.component.html').then(response => response.text());
    const lines = htmlString.split('\n');
    // remove script tag
    if (lines.length > 0 && lines[0].startsWith('<script')) {
      lines.shift();
    }
    return { htmlString: lines.join('\n'), cssFileUrl: '/src/app/suppressors/suppressors.component.css' };
  }

  async render(): Promise<void> {
    this.items = await this.tarkovClient.getSuppressors("556").then(response => response.items);
    this.items = this.items.map(item => ({
      ...item,
      cheapestBuyPrice: getCheapestBuyPrice(item)
    }));
    this.items.sort((a, b) => (a.cheapestBuyPrice?.priceRUB ?? 0) - (b.cheapestBuyPrice?.priceRUB ?? 0));

    const tbody = document.querySelector('.suppressor-table tbody');
    if (!tbody) return;

    if ("content" in document.createElement("template")) {
      const template = document.querySelector(".suppressor-template") as HTMLTemplateElement;
      this.items?.forEach(item => {
        if (!item) {
          return;
        }

        const clonedTemplate = template.content.cloneNode(true) as HTMLTemplateElement;
        if (!clonedTemplate) return;

        const suppressorImage = clonedTemplate.querySelector(".suppressor-image") as HTMLImageElement;
        if (suppressorImage) {
          // set src
          suppressorImage.src = item.iconLink ?? '';
        }

        const suppressorName = clonedTemplate.querySelector(".suppressor-name");
        if (suppressorName) {
          suppressorName.textContent = item.name ?? '';
        }

        const suppressorErgo = clonedTemplate.querySelector(".suppressor-ergonomics");
        if (suppressorErgo) {
          suppressorErgo.textContent = item.ergonomicsModifier?.toString() ?? '';
        }

        const suppressorRecoil = clonedTemplate.querySelector(".suppressor-recoil");
        if (suppressorRecoil) {
          suppressorRecoil.textContent = item.recoilModifier?.toString() ?? '';
        }

        const cheapestItemPrice = item.cheapestBuyPrice;
        if (cheapestItemPrice) {
          const suppressorCheapestPrice = clonedTemplate.querySelector(".suppressor-cheapest-price");
          if (suppressorCheapestPrice) {
            let text = getCurrencyFormatted(cheapestItemPrice.priceRUB ?? 0);
            
            if (cheapestItemPrice.currency !== "RUB") {
              const c2 = getCurrencyFormatted(cheapestItemPrice.price ?? 0, cheapestItemPrice.currency ?? "RUB")
              text += ` (${c2})`;
            }

            suppressorCheapestPrice.textContent = text;
          }

          const suppressorSoldBy = clonedTemplate.querySelector(".suppressor-sold-by");
          if (suppressorSoldBy) {
            suppressorSoldBy.textContent = cheapestItemPrice.vendor?.name ?? '';
          }
        }

        tbody.appendChild(clonedTemplate);
      });
    }
  }
}