const CASES = [
  { id: 'chroma', name: 'Chroma Case', description: 'A reliable everyday opener with a balanced drop table.', price: 2.5, accent: '#4aa4ff', pool: [{ item: 'AK-47 | Redline (Field-Tested)', weight: 18 }, { item: 'M4A4 | Howl (Factory New)', weight: 10 }, { item: 'Desert Eagle | Blaze (Factory New)', weight: 12 }, { item: 'P250 | Asiimov (Well-Worn)', weight: 14 }, { item: 'USP-S | Whiteout (Battle-Scarred)', weight: 16 }, { item: 'Negev | Bratatat (Well-Worn)', weight: 13 }, { item: 'Glock-18 | Fade (Factory New)', weight: 17 }, { item: 'P90 | Death by Kitty (Factory New)', weight: 9 }] },
  { id: 'revolver', name: 'Revolver Case', description: 'A tighter profile with a few sharp-value drops and a few wild swings.', price: 3.1, accent: '#7eb1ff', pool: [{ item: 'R8 Revolver | Fade (Factory New)', weight: 19 }, { item: 'P250 | Iron Clad (Factory New)', weight: 15 }, { item: 'MP7 | Neon Ply (Factory New)', weight: 17 }, { item: 'AWP | Hyper Beast (Minimal Wear)', weight: 8 }, { item: 'Glock-18 | Water Elemental (Factory New)', weight: 14 }, { item: 'M4A1-S | Golden Coil (Factory New)', weight: 7 }, { item: 'PP-Bizon | Harvester (Battle-Scarred)', weight: 11 }, { item: 'Desert Eagle | Golden Koi (Well-Worn)', weight: 9 }] },
  { id: 'shadow', name: 'Shadow Case', description: 'Budget-friendly with a strong chance of hitting a flashy mid-tier skin.', price: 2.2, accent: '#be8dff', pool: [{ item: 'M4A1-S | Knight (Factory New)', weight: 18 }, { item: 'USP-S | Kill Confirmed (Factory New)', weight: 17 }, { item: 'P250 | Re.built (Battle-Scarred)', weight: 16 }, { item: 'AWP | Graphite (Well-Worn)', weight: 10 }, { item: 'AK-47 | Cartel (Factory New)', weight: 9 }, { item: 'Galil AR | Eco (Minimal Wear)', weight: 13 }, { item: 'FAMAS | Meow 36 (Factory New)', weight: 12 }, { item: 'Glock-18 | Bunsen Burner (Minimal Wear)', weight: 5 }] },
  { id: 'danger', name: 'Danger Zone Case', description: 'This has the best volatility and a snappy route to expensive pulls.', price: 4.8, accent: '#ff947d', pool: [{ item: 'AWP | Worm God (Factory New)', weight: 6 }, { item: 'M4A1-S | Decimator (Factory New)', weight: 8 }, { item: 'AK-47 | Elite Build (Minimal Wear)', weight: 10 }, { item: 'P90 | Death by Kitty (Factory New)', weight: 11 }, { item: 'Glock-18 | Bullet Queen (Battle-Scarred)', weight: 14 }, { item: 'USP-S | Cyrex (Factory New)', weight: 17 }, { item: 'MP9 | Food Chain (Minimal Wear)', weight: 18 }, { item: 'Desert Eagle | Kumicho Dragon (Factory New)', weight: 16 }] },
];
const ITEM_LIBRARY = {
  'AK-47 | Redline (Field-Tested)': { rarity: 'Covert', fallbackPrice: 27.4 }, 'M4A4 | Howl (Factory New)': { rarity: 'Covert', fallbackPrice: 62.8 }, 'Desert Eagle | Blaze (Factory New)': { rarity: 'Restricted', fallbackPrice: 38.6 }, 'P250 | Asiimov (Well-Worn)': { rarity: 'Restricted', fallbackPrice: 30.1 }, 'USP-S | Whiteout (Battle-Scarred)': { rarity: 'Restricted', fallbackPrice: 18.5 }, 'Negev | Bratatat (Well-Worn)': { rarity: 'Classified', fallbackPrice: 9.1 }, 'Glock-18 | Fade (Factory New)': { rarity: 'Restricted', fallbackPrice: 21.4 }, 'P90 | Death by Kitty (Factory New)': { rarity: 'Classified', fallbackPrice: 16.7 },
  'R8 Revolver | Fade (Factory New)': { rarity: 'Restricted', fallbackPrice: 34.5 }, 'P250 | Iron Clad (Factory New)': { rarity: 'Classified', fallbackPrice: 15.8 }, 'MP7 | Neon Ply (Factory New)': { rarity: 'Classified', fallbackPrice: 12.2 }, 'AWP | Hyper Beast (Minimal Wear)': { rarity: 'Covert', fallbackPrice: 58.4 }, 'Glock-18 | Water Elemental (Factory New)': { rarity: 'Restricted', fallbackPrice: 20.9 }, 'M4A1-S | Golden Coil (Factory New)': { rarity: 'Covert', fallbackPrice: 72.4 }, 'PP-Bizon | Harvester (Battle-Scarred)': { rarity: 'Classified', fallbackPrice: 8.6 }, 'Desert Eagle | Golden Koi (Well-Worn)': { rarity: 'Restricted', fallbackPrice: 22.2 },
  'M4A1-S | Knight (Factory New)': { rarity: 'Restricted', fallbackPrice: 25 }, 'USP-S | Kill Confirmed (Factory New)': { rarity: 'Restricted', fallbackPrice: 18.9 }, 'P250 | Re.built (Battle-Scarred)': { rarity: 'Classified', fallbackPrice: 7.2 }, 'AWP | Graphite (Well-Worn)': { rarity: 'Covert', fallbackPrice: 42.3 }, 'AK-47 | Cartel (Factory New)': { rarity: 'Covert', fallbackPrice: 26.7 }, 'Galil AR | Eco (Minimal Wear)': { rarity: 'Restricted', fallbackPrice: 11.4 }, 'FAMAS | Meow 36 (Factory New)': { rarity: 'Classified', fallbackPrice: 8.8 }, 'Glock-18 | Bunsen Burner (Minimal Wear)': { rarity: 'Covert', fallbackPrice: 50.2 },
  'AWP | Worm God (Factory New)': { rarity: 'Covert', fallbackPrice: 90.4 }, 'M4A1-S | Decimator (Factory New)': { rarity: 'Covert', fallbackPrice: 55.4 }, 'AK-47 | Elite Build (Minimal Wear)': { rarity: 'Covert', fallbackPrice: 61.2 }, 'MP9 | Food Chain (Minimal Wear)': { rarity: 'Restricted', fallbackPrice: 18.3 }, 'Glock-18 | Bullet Queen (Battle-Scarred)': { rarity: 'Classified', fallbackPrice: 7 }, 'USP-S | Cyrex (Factory New)': { rarity: 'Restricted', fallbackPrice: 21.2 }, 'Desert Eagle | Kumicho Dragon (Factory New)': { rarity: 'Covert', fallbackPrice: 47.8 },
};
const STORAGE_KEY = 'casebreak-labs-v1';
function loadState() {
  const defaults = { wallet: 1200, xp: 0, level: 1, casesOpened: 0, soldTotal: 0, bestPull: 0, selectedCaseId: CASES[0].id, inventory: [], alerts: [], marketPrices: {}, dailyBonusAt: null, lastInventoryValue: 0, lastResult: null };
  try { return { ...defaults, ...JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}') }; } catch { return defaults; }
}
const state = loadState();
const el = Object.fromEntries(['walletDisplay','levelDisplay','inventoryValueDisplay','caseList','caseName','caseDescription','casePrice','caseDropChance','currentCaseTitle','currentCaseBadge','resultDisplay','openCaseButton','quickCashButton','refreshMarketButton','xpDisplay','xpBar','casesOpenedDisplay','soldTotalDisplay','bestPullDisplay','dailyBonusDisplay','dailyBonusButton','inventoryCount','inventoryList','alertList','resetButton'].map((id) => [id, document.getElementById(id)]));
function saveState() { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
function money(value) { return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 }).format(Number(value) || 0); }
function itemMeta(name) { return ITEM_LIBRARY[name] || { rarity: 'Classified', fallbackPrice: 8 }; }
function seedPrices(names) { names.forEach((name) => { if (!state.marketPrices[name]) state.marketPrices[name] = itemMeta(name).fallbackPrice; }); }
function totalValue() { return state.inventory.reduce((sum, item) => sum + (Number(item.marketValue) || 0), 0); }
function selectedCase() { return CASES.find((item) => item.id === state.selectedCaseId) || CASES[0]; }
function odds(caseDef) { const total = caseDef.pool.reduce((sum, entry) => sum + entry.weight, 0); return `${((Math.max(...caseDef.pool.map((entry) => entry.weight)) / total) * 100).toFixed(1)}%`; }
function weightedPick(pool) { let roll = Math.random() * pool.reduce((sum, item) => sum + item.weight, 0); for (const entry of pool) { roll -= entry.weight; if (roll <= 0) return entry.item; } return pool.at(-1).item; }
function addAlert(message, type = 'positive') { state.alerts.unshift({ id: Date.now() + Math.random(), type, message, at: new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }) }); state.alerts = state.alerts.slice(0, 8); }
function evaluateValueAlerts(previousValue) {
  const nextValue = totalValue(); const delta = nextValue - previousValue;
  if (previousValue > 0 && Math.abs(delta) >= 5) addAlert(`Inventory value ${delta > 0 ? 'increased' : 'dropped'} by ${money(Math.abs(delta))}.`, delta > 0 ? 'positive' : 'warning');
  state.inventory.forEach((item) => {
    if (Number.isFinite(item.alertThreshold) && item.alertThreshold > 0) {
      if (item.marketValue >= item.alertThreshold && !item.alertTriggered) { addAlert(`${item.name} crossed your alert threshold at ${money(item.marketValue)}.`); item.alertTriggered = true; }
      if (item.marketValue < item.alertThreshold) item.alertTriggered = false;
    }
  });
  state.lastInventoryValue = nextValue;
}
async function refreshPrices() {
  const names = [...new Set([...CASES.flatMap((item) => item.pool.map((drop) => drop.item)), ...state.inventory.map((item) => item.name)])].slice(0, 40);
  seedPrices(names);
  try {
    const response = await fetch(`/api/prices?items=${encodeURIComponent(JSON.stringify(names))}`);
    if (!response.ok) throw new Error(`Price endpoint returned ${response.status}`);
    const payload = await response.json();
    if (payload.results) Object.entries(payload.results).forEach(([name, value]) => { if (Number.isFinite(value) && value > 0) state.marketPrices[name] = value; });
    const oldValue = totalValue();
    state.inventory.forEach((item) => { item.marketValue = state.marketPrices[item.name] ?? item.marketValue; });
    evaluateValueAlerts(oldValue); render(); saveState();
  } catch (error) { console.warn('Using fallback market prices.', error); addAlert('Live Steam price lookup unavailable; showing sample fallback prices.', 'warning'); render(); saveState(); }
}
function levelUp() { while (state.xp >= state.level * 100) { state.xp -= state.level * 100; state.level += 1; addAlert(`Level up! You reached level ${state.level}.`); } }
function openCase() {
  const box = selectedCase();
  if (state.wallet < box.price) { addAlert('Not enough dummy cash. Do a quick job or claim your daily bonus.', 'danger'); render(); return; }
  const before = totalValue(); state.wallet -= box.price; state.casesOpened += 1;
  const name = weightedPick(box.pool); const meta = itemMeta(name); const item = { id: `${Date.now()}-${Math.random().toString(16).slice(2)}`, name, marketValue: state.marketPrices[name] ?? meta.fallbackPrice, rarity: meta.rarity, alertThreshold: null, alertTriggered: false };
  state.inventory.unshift(item); state.xp += 30 + Math.round(item.marketValue / 10); levelUp(); state.bestPull = Math.max(state.bestPull, item.marketValue);
  state.lastResult = { itemName: name, rarity: item.rarity, value: item.marketValue, caseName: box.name };
  addAlert(item.marketValue >= 50 ? `Huge hit: ${name} for ${money(item.marketValue)}.` : `Opened ${box.name} and pulled ${name} for ${money(item.marketValue)}.`, item.marketValue >= 50 ? 'positive' : 'info');
  evaluateValueAlerts(before); render(); saveState();
}
function sellItem(id) { const index = state.inventory.findIndex((item) => item.id === id); if (index < 0) return; const before = totalValue(); const [item] = state.inventory.splice(index, 1); const payout = (Number(item.marketValue) || 0) * .9; state.wallet += payout; state.soldTotal += payout; addAlert(`${item.name} sold for ${money(payout)}.`, 'positive'); evaluateValueAlerts(before); render(); saveState(); }
function setPriceAlert(id) { const item = state.inventory.find((entry) => entry.id === id); if (!item) return; const value = window.prompt(`Set a target value for ${item.name} (USD):`, item.alertThreshold || item.marketValue || ''); if (value === null) return; const target = Number(value); if (!Number.isFinite(target) || target <= 0) { addAlert('Alert value must be a positive number.', 'warning'); render(); return; } item.alertThreshold = target; item.alertTriggered = false; addAlert(`${item.name} alert set at ${money(target)}.`); render(); saveState(); }
function quickCash() { state.wallet += 150; state.xp += 15; levelUp(); addAlert(`Quick job complete. +${money(150)} added to wallet.`); render(); saveState(); }
function dailyBonus() { const elapsed = Date.now() - (Number(state.dailyBonusAt) || 0); if (state.dailyBonusAt && elapsed < 86400000) { addAlert(`Daily bonus is available in ${((86400000 - elapsed) / 3600000).toFixed(1)} hours.`, 'warning'); render(); return; } state.wallet += 300; state.dailyBonusAt = Date.now(); state.xp += 25; levelUp(); addAlert(`Daily bonus claimed: +${money(300)}.`); render(); saveState(); }
function render() {
  const box = selectedCase();
  el.walletDisplay.textContent = money(state.wallet); el.levelDisplay.textContent = state.level; el.inventoryValueDisplay.textContent = money(totalValue());
  el.caseList.innerHTML = CASES.map((item) => `<button class="case-item ${item.id === state.selectedCaseId ? 'active' : ''}" data-case-id="${item.id}"><div class="case-item-header"><span class="case-item-name">${item.name}</span><span class="case-item-price">${money(item.price)}</span></div><div class="case-item-meta"><span>Drop odds</span><span>${odds(item)}</span></div></button>`).join('');
  el.caseList.querySelectorAll('[data-case-id]').forEach((button) => button.addEventListener('click', () => { state.selectedCaseId = button.dataset.caseId; render(); saveState(); }));
  el.currentCaseTitle.textContent = box.name; el.currentCaseBadge.textContent = 'Case'; el.caseName.textContent = box.name; el.caseDescription.textContent = box.description; el.casePrice.textContent = money(box.price); el.caseDropChance.textContent = odds(box);
  document.getElementById('caseHero').style.borderColor = `${box.accent}50`; document.getElementById('caseVisual').style.boxShadow = `inset 0 0 24px ${box.accent}30`; document.getElementById('caseVisual').style.background = `linear-gradient(145deg, ${box.accent}25, rgba(11,18,22,.95))`; document.querySelector('.case-glow').style.background = `radial-gradient(circle, ${box.accent}88, transparent 50%)`;
  const required = state.level * 100; el.xpDisplay.textContent = `${state.xp} / ${required}`; el.xpBar.style.width = `${Math.min(100, state.xp / required * 100)}%`; el.casesOpenedDisplay.textContent = state.casesOpened; el.soldTotalDisplay.textContent = money(state.soldTotal); el.bestPullDisplay.textContent = money(state.bestPull);
  el.dailyBonusDisplay.textContent = !state.dailyBonusAt || Date.now() - Number(state.dailyBonusAt) >= 86400000 ? 'Ready' : 'Locked';
  el.inventoryCount.textContent = `${state.inventory.length} item${state.inventory.length === 1 ? '' : 's'}`;
  el.inventoryList.innerHTML = state.inventory.length ? state.inventory.map((item) => `<div class="inventory-item"><div class="inventory-thumb"></div><div class="inventory-copy"><strong class="rarity-${item.rarity.toLowerCase()}">${item.name}</strong><small>${item.rarity} • ${money(item.marketValue)}</small></div><div class="item-price">${money(item.marketValue)}</div><div class="inventory-actions"><button class="alert-button" data-alert-id="${item.id}">Alert</button><button class="sell-button" data-sell-id="${item.id}">Sell</button></div></div>`).join('') : '<div class="empty-inventory">Your inventory is empty.</div>';
  el.inventoryList.querySelectorAll('[data-sell-id]').forEach((button) => button.addEventListener('click', () => sellItem(button.dataset.sellId))); el.inventoryList.querySelectorAll('[data-alert-id]').forEach((button) => button.addEventListener('click', () => setPriceAlert(button.dataset.alertId)));
  el.alertList.innerHTML = state.alerts.length ? state.alerts.map((alert) => `<div class="alert-item alert-${alert.type}"><div class="alert-copy">${alert.message}</div><div class="alert-time">${alert.at}</div></div>`).join('') : '<div class="empty-alerts">Market and inventory alerts will appear here.</div>';
  el.resultDisplay.innerHTML = state.lastResult ? `<div class="unbox-card"><div class="unbox-thumb"></div><div><strong>${state.lastResult.itemName}</strong><small>${state.lastResult.rarity} • ${state.lastResult.caseName}</small></div><div class="price-tag">${money(state.lastResult.value)}</div></div>` : '<div class="empty-state">No result yet. Start opening cases.</div>';
}
document.getElementById('openCaseButton').addEventListener('click', openCase);
document.getElementById('quickCashButton').addEventListener('click', quickCash);
document.getElementById('dailyBonusButton').addEventListener('click', dailyBonus);
document.getElementById('refreshMarketButton').addEventListener('click', refreshPrices);
document.getElementById('resetButton').addEventListener('click', () => { if (!window.confirm('Reset everything back to the default state?')) return; localStorage.removeItem(STORAGE_KEY); location.reload(); });
seedPrices(CASES.flatMap((item) => item.pool.map((drop) => drop.item))); render(); refreshPrices();
