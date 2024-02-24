const currencyToLocalesMap = new Map<string, string>([
  ["RUB", "ru-RU"],
  ["USD", "en-US"],
  ["EUR", "de-DE"]
]);

export function getCurrencyFormatted(price: number, currency: string = "RUB"): string {
    let c = Intl.NumberFormat(currencyToLocalesMap.get(currency), { style: 'currency', currency: currency, maximumFractionDigits: 0 });
  return c.format(price);
}