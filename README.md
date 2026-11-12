export default async function handler(req, res) {
  const { items } = req.query;

  if (!items) {
    res.status(400).json({ error: 'Missing items query parameter.' });
    return;
  }

  let names = [];

  try {
    names = JSON.parse(decodeURIComponent(items));
  } catch (error) {
    res.status(400).json({ error: 'Invalid items payload.' });
    return;
  }

  const uniqueNames = [...new Set(names.filter(Boolean))];

  const results = {};
  const lookup = [];

  for (const name of uniqueNames) {
    lookup.push(
      fetch(`https://steamcommunity.com/market/priceoverview/?country=US&currency=1&appid=730&market_hash_name=${encodeURIComponent(name)}`)
        .then(async (response) => {
          const data = await response.json();
          const value = data && data.lowest_price ? data.lowest_price : data && data.median_price ? data.median_price : null;
          if (value) {
            const numeric = Number(String(value).replace(/[^\d.]/g, ''));
            results[name] = numeric;
          }
        })
        .catch(() => {
          results[name] = 0;
        })
    );
  }

  await Promise.all(lookup);

  res.status(200).json({ success: true, results });
}
