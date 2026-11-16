# Howard Card Vault

Phone-friendly collection tracker for the family's trading cards: Naruto Kayou, Pokémon, Yu-Gi-Oh!, KPop Demon Hunters and more.

## What is in it
- **Collection**: every card with rarity, serial status, raw value, Beckett 10 estimate, top-loaded flag and keep / trade / sell decision. Values and serials can stay marked unverified.
- **Rip log**: each product with pack count, price, shipment condition and replacement or refund status, plus the pulls from each pack.
- **Hits**: photo gallery of the best pulls.
- **Raw vs BGS 10**: side by side value comparison with a grading fee.
- **Search + Scan**: search the vault and the card catalog, scan one card, scan a whole binder page, import a CSV.
- **What's hot**: MSRP versus live listings, best hit rates, and a personal price watch.
- **Sets**: set lists per game.
- **Serial check**: step by step checklist for numbered cards, with the Chapter Jin Series 3 rarity ladder.

## Files
- `index.html` is the whole app. Double-click it to open it in a browser.
- `data/reference.js` holds set ladders, set lists and the What's Hot snapshot. Update this file to refresh market data.

## Two ways it runs
- **Inside Claude (published artifact)**: data syncs across devices, photos are stored with the vault, and Claude reads scanned cards. Card images from outside sites cannot load there.
- **Opened directly or hosted (for example GitHub Pages)**: data is saved in that browser only, and live Pokémon and Yu-Gi-Oh! catalog search with card pictures and set logos works.
