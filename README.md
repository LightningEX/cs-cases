# CaseBreak Labs

A Vercel-friendly CS2-style case-opening demo with a dummy wallet, persistent inventory, sell flow, progression, and price alerts.

## Features

- Four selectable simulated cases and weighted dummy drops
- Persistent browser save data using `localStorage`
- Dummy wallet with quick-job and daily bonus ways to earn more
- Inventory, simulated selling, XP, levels, best pull, and case statistics
- Price alerts and inventory value-shift notifications
- Vercel serverless function that requests Steam Community Market price-overview data for the demo's skins
- Built-in sample prices when Steam does not provide a price or the request is unavailable
- Responsive layout

## Run and deploy

The project is a static front end with a Vercel Function at `/api/prices`.

```bash
npm install
npx vercel dev
```

Import the repository into Vercel and deploy with the default static-site settings. The function is in `api/prices.js`.

## Price and gameplay notes

The gameplay, item drops, wallet, and sales are entirely simulated. No real money, items, or Steam transactions are involved. Steam Market price lookups may fail, be unavailable for an item, or be subject to Steam's access limits; the page falls back to sample prices in that case. The built-in case prices are demo values, not live quotes. Treat displayed prices as informational rather than guaranteed current market valuations.
