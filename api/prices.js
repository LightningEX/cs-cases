export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  let names;
  try {
    const raw = Array.isArray(req.query.items) ? req.query.items[0] : req.query.items;
    names = JSON.parse(raw);
  } catch {
    return res.status(400).json({ error: 'Invalid items query parameter.' });
  }

  if (!Array.isArray(names) || names.length > 40 || names.some((name) => typeof name !== 'string')) {
    return res.status(400).json({ error: 'Items must be an array of up to 40 item names.' });
  }

  const results = {};
  await Promise.all([...new Set(names)].map(async (name) => {
    try {
      const url = new URL('https://steamcommunity.com/market/priceoverview/');
      url.search = new URLSearchParams({ country: 'US', currency: '1', appid: '730', market_hash_name: name }).toString();
      const response = await fetch(url, { headers: { Accept: 'application/json' } });
      if (!response.ok) return;
      const data = await response.json();
      const rawPrice = data?.lowest_price || data?.median_price;
      if (typeof rawPrice !== 'string') return;
      const numericPrice = Number(rawPrice.replace(/[^\d.,]/g, '').replace(/,(?=\d{3}(?:\D|$))/g, '').replace(',', '.'));
      if (Number.isFinite(numericPrice) && numericPrice > 0) results[name] = numericPrice;
    } catch {
      // A missing price is handled by the front end's clearly labeled sample fallback.
    }
  }));

  res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=600');
  return res.status(200).json({ success: true, results });
}
