const CASES = [
  {
    id: 'chroma',
    name: 'Chroma Case',
    description: 'A reliable everyday opener with a balanced drop table.',
    price: 2.5,
    accent: '#4aa4ff',
    pool: [
      { item: 'AK-47 | Redline (Field-Tested)', weight: 18 },
      { item: 'M4A4 | Howl (Factory New)', weight: 10 },
      { item: 'Desert Eagle | Blaze (Factory New)', weight: 12 },
      { item: 'P250 | Asiimov (Well-Worn)', weight: 14 },
      { item: 'USP-S | Whiteout (Battle-Scarred)', weight: 16 },
      { item: 'Negev | Bratatat (Well-Worn)', weight: 13 },
      { item: 'Glock-18 | Fade (Factory New)', weight: 17 },
      { item: 'P90 | Death by Kitty (Factory New)', weight: 9 },
    ],
  },
  {
    id: 'revolver',
    name: 'Revolver Case',
    description: 'A tighter profile with a few sharp-value drops and a few wild swings.',
    price: 3.1,
    accent: '#7eb1ff',
    pool: [
      { item: 'R8 Revolver | Fade (Factory New)', weight: 19 },
      { item: 'P250 | Iron Clad (Factory New)', weight: 15 },
      { item: 'MP7 | Neon Ply (Factory New)', weight: 17 },
      { item: 'AWP | Hyper Beast (Minimal Wear)', weight: 8 },
      { item: 'Glock-18 | Water Elemental (Factory New)', weight: 14 },
      { item: 'M4A1-S | Golden Coil (Factory New)', weight: 7 },
      { item: 'PP-Bizon | Harvester (Battle-Scarred)', weight: 11 },
      { item: 'Desert Eagle | Golden Koi (Well-Worn)', weight: 9 },
    ],
  },
  {
    id: 'shadow',
    name: 'Shadow Case',
    description: 'Budget-friendly with a strong chance of hitting a flashy mid-tier skin.',
    price: 2.2,
    accent: '#be8dff',
    pool: [
      { item: 'M4A1-S | Knight (Factory New)', weight: 18 },
      { item: 'USP-S | Kill Confirmed (Factory New)', weight: 17 },
      { item: 'P250 | Re.built (Battle-Scarred)', weight: 16 },
      { item: 'AWP | Graphite (Well-Worn)', weight: 10 },
      { item: 'AK-47 | Cartel (Factory New)', weight: 9 },
      { item: 'Galil AR | Eco (Minimal Wear)', weight: 13 },
      { item: 'FAMAS | Meow 36 (Factory New)', weight: 12 },
      { item: 'Glock-18 | Bunsen Burner (Minimal Wear)', weight: 5 },
    ],
  },
  {
    id: 'danger',
    name: 'Danger Zone Case',
    description: 'This has the best volatility and a snappy route to expensive pulls.',
    price: 4.8,
    accent: '#ff947d',
    pool: [
      { item: 'AWP | Worm God (Factory New)', weight: 6 },
      { item: 'M4A1-S | Decimator (Factory New)', weight: 8 },
      { item: 'AK-47 | Elite Build (Minimal Wear)', weight: 10 },
      { item: 'P90 | Death by Kitty (Factory New)', weight: 11 },
      { item: 'Glock-18 | Bullet Queen (Battle-Scarred)', weight: 14 },
      { item: 'USP-S | Cyrex (Factory New)', weight: 17 },
      { item: 'MP9 | Food Chain (Minimal Wear)', weight: 18 },
      { item: 'Desert Eagle | Kumicho Dragon (Factory New)', weight: 16 },
    ],
  },
];

const ITEM_LIBRARY = {
  'AK-47 | Redline (Field-Tested)': { rarity: 'Covert', fallbackPrice: 27.4 },
  'M4A4 | Howl (Factory New)': { rarity: 'Covert', fallbackPrice: 62.8 },
  'Desert Eagle | Blaze (Factory New)': { rarity: 'Restricted', fallbackPrice: 38.6 },
  'P250 | Asiimov (Well-Worn)': { rarity: 'Restricted', fallbackPrice: 30.1 },
  'USP-S | Whiteout (Battle-Scarred)': { rarity: 'Restricted', fallbackPrice: 18.5 },
  'Negev | Bratatat (Well-Worn)': { rarity: 'Classified', fallbackPrice: 9.1 },
  'Glock-18 | Fade (Factory New)': { rarity: 'Restricted', fallbackPrice: 21.4 },
  'P90 | Death by Kitty (Factory New)': { rarity: 'Classified', fallbackPrice: 16.7 },
  'R8 Revolver | Fade (Factory New)': { rarity: 'Restricted', fallbackPrice: 34.5 },
  'P250 | Iron Clad (Factory New)': { rarity: 'Classified', fallbackPrice: 15.8 },
  'MP7 | Neon Ply (Factory New)': { rarity: 'Classified', fallbackPrice: 12.2 },
  'AWP | Hyper Beast (Minimal Wear)': { rarity: 'Covert', fallbackPrice: 58.4 },
  'Glock-18 | Water Elemental (Factory New)': { rarity: 'Restricted', fallbackPrice: 20.9 },
  'M4A1-S | Golden Coil (Factory New)': { rarity: 'Covert', fallbackPrice: 72.4 },
  'PP-Bizon | Harvester (Battle-Scarred)': { rarity: 'Classified', fallbackPrice: 8.6 },
  'Desert Eagle | Golden Koi (Well-Worn)': { rarity: 'Restricted', fallbackPrice: 22.2 },
  'M4A1-S | Knight (Factory New)': { rarity: 'Restricted', fallbackPrice: 25 },
  'USP-S | Kill Confirmed (Factory New)': { rarity: 'Restricted', fallbackPrice: 18.9 },
  'P250 | Re.built (Battle-Scarred)': { rarity: 'Classified', fallbackPrice: 7.2 },
  'AWP | Graphite (Well-Worn)': { rarity: 'Covert', fallbackPrice: 42.3 },
  'AK-47 | Cartel (Factory New)': { rarity: 'Covert', fallbackPrice: 26.7 },
  'Galil AR | Eco (Minimal Wear)': { rarity: 'Restricted', fallbackPrice: 11.4 },
  'FAMAS | Meow 36 (Factory New)': { rarity: 'Classified', fallbackPrice: 8.8 },
  'Glock-18 | Bunsen Burner (Minimal Wear)': { rarity: 'Covert', fallbackPrice: 50.2 },
  'AWP | Worm God (Factory New)': { rarity: 'Covert', fallbackPrice: 90.4 },
  'M4A1-S | Decimator (Factory New)': { rarity: 'Covert', fallbackPrice: 55.4 },
  'AK-47 | Elite Build (Minimal Wear)': { rarity: 'Covert', fallbackPrice: 61.2 },
  'MP9 | Food Chain (Minimal Wear)': { rarity: 'Restricted', fallbackPrice: 18.3 },
  'Glock-18 | Bullet Queen (Battle-Scarred)': { rarity: 'Classified', fallbackPrice: 7 },
  'USP-S | Cyrex (Factory New)': { rarity: 'Restricted', fallbackPrice: 21.2 },
  'Desert Eagle | Kumicho Dragon (Factory New)': { rarity: 'Covert', fallbackPrice: 47.8 },
};

const STORAGE_KEY = 'casebreak-labs-v1';

const state = loadState();
const elements = {
  walletDisplay: document.getElementById('walletDisplay'),
  levelDisplay: document.getElementById('levelDisplay'),
  inventoryValueDisplay: document.getElementById('inventoryValueDisplay'),
  caseList: document.getElementById('caseList'),
  caseName: document.getElementById('caseName'),
  caseDescription: document.getElementById('caseDescription'),
  casePrice: document.getElementById('casePrice'),
  caseDropChance: document.getElementById('caseDropChance'),
  currentCaseTitle: document.getElementById('currentCaseTitle'),
  currentCaseBadge: document.getElementById('currentCaseBadge'),
  resultDisplay: document.getElementById('resultDisplay'),
  openCaseButton: document.getElementById('openCaseButton'),
  quickCashButton: document.getElementById('quickCashButton'),
  refreshMarketButton: document.getElementById('refreshMarketButton'),
  xpDisplay: document.getElementById('xpDisplay'),
  xpBar: document.getElementById('xpBar'),
  casesOpenedDisplay: document.getElementById('casesOpenedDisplay'),
  soldTotalDisplay: document.getElementById('soldTotalDisplay'),
  bestPullDisplay: document.getElementById('bestPullDisplay'),
  dailyBonusDisplay: document.getElementById('dailyBonusDisplay'),
  dailyBonusButton: document.getElementById('dailyBonusButton'),
  inventoryCount: document.getElementById('inventoryCount'),
  inventoryList: document.getElementById('inventoryList'),
  alertList: document.getElementById('alertList'),
  resetButton: document.getElementById('resetButton'),
};

const selectedCaseId = state.selectedCaseId || CASES[0].id;
state.selectedCaseId = selectedCaseId;

function loadState() {
  const defaultState = {
    wallet: 1200,
    xp: 0,
    level: 1,
    casesOpened: 0,
    soldTotal: 0,
    bestPull: 0,
    selectedCaseId: CASES[0].id,
    inventory: [],
    alerts: [],
    marketPrices: {},
    dailyBonusAt: null,
    lastInventoryValue: 0,
  };

  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    return { ...defaultState, ...parsed };
  } catch (error) {
    return defaultState;
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function formatCurrency(value) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 2,
  }).format(value || 0);
}

function normalizeMarketValue(raw) {
  if (typeof raw === 'number') return raw;
  if (typeof raw !== 'string') return 0;
  const match = raw.match(/\d+(?:\.\d+)?/g);
  if (!match) return 0;
  return Number(match[0].replace(/,/g, ''));
}

function currentLevelProgress() {
  const xpNeeded = state.level * 100;
  return Math.min(100, (state.xp / xpNeeded) * 100);
}

function computeInventoryValue() {
  return state.inventory.reduce((sum, item) => sum + (item.marketValue || 0), 0);
}

function pickWeightedItem(pool) {
  const total = pool.reduce((sum, entry) => sum + entry.weight, 0);
  let roll = Math.random() * total;

  for (const entry of pool) {
    roll -= entry.weight;
    if (roll <= 0) return entry.item;
  }

  return pool[pool.length - 1].item;
}

function getSelectedCase() {
  return CASES.find((c) => c.id === state.selectedCaseId) || CASES[0];
}

function computeCaseDropChance(caseDef) {
  const total = caseDef.pool.reduce((sum, entry) => sum + entry.weight, 0);
  return `${Math.max(5, ((Math.max(...caseDef.pool.map((entry) => entry.weight)) / total) * 100).toFixed(1))}%`;
}

function getItemMeta(name) {
  return ITEM_LIBRARY[name] || { rarity: 'Classified', fallbackPrice: 8 };
}

function seedMarketPrices(names) {
  names.forEach((name) => {
    if (!state.marketPrices[name]) {
      const base = getItemMeta(name).fallbackPrice || 3;
      state.marketPrices[name] = base;
    }
  });
}

async function refreshMarketPrices() {
  const names = [
    ...new Set([
      ...CASES.flatMap((theCase) => theCase.pool.map((entry) => entry.item)),
      ...state.inventory.map((item) => item.name),
    ]),
  ].slice(0, 28);

  if (!names.length) return;

  seedMarketPrices(names);

  try {
    const response = await fetch(`/api/prices?items=${encodeURIComponent(JSON.stringify(names))}`);
    if (!response.ok) throw new Error('Failed to refresh prices');
    const payload = await response.json();

    if (payload && payload.results) {
      Object.entries(payload.results).forEach(([name, value]) => {
        const normalized = normalizeMarketValue(value);
        if (normalized > 0) {
          state.marketPrices[name] = normalized;
        }
      });
    }

    state.inventory = state.inventory.map((item) => ({
      ...item,
      marketValue: state.marketPrices[item.name] ?? item.marketValue ?? 0,
    }));

    evaluateInventoryAlerts();
    render();
    saveState();
  } catch (error) {
    console.warn('Using fallback market pricing.', error);
    pushAlert('Steam market poll failed. Fallback prices are still active.', 'warning');
    render();
  }
}

function pushAlert(message, type = 'positive') {
  const entry = {
    id: Date.now() + Math.random(),
    type,
    message,
    at: new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }),
  };

  state.alerts = [entry, ...state.alerts].slice(0, 8);
  renderAlerts();
}

function evaluateInventoryAlerts() {
  const inventoryValue = computeInventoryValue();

  if (state.lastInventoryValue && inventoryValue !== state.lastInventoryValue) {
    const delta = inventoryValue - state.lastInventoryValue;
    if (Math.abs(delta) >= 5) {
      pushAlert(
        delta >= 0 ? `Inventory value increased by ${formatCurrency(delta)}.` : `Inventory value dropped by ${formatCurrency(Math.abs(delta))}.`,
        delta >= 0 ? 'positive' : 'warning'
      );
    }
  }

  state.lastInventoryValue = inventoryValue;

  state.inventory.forEach((item) => {
    if (Number.isFinite(item.alertThreshold) && item.alertThreshold > 0) {
      if (item.marketValue >= item.alertThreshold && !item.alertTriggered) {
        pushAlert(`${item.name} crossed your alert threshold at ${formatCurrency(item.marketValue)}.`, 'positive');
        item.alertTriggered = true;
      }
      if (item.marketValue < item.alertThreshold && item.alertTriggered) {
        item.alertTriggered = false;
      }
    }
  });
}

function createItemRecord(name) {
  const meta = getItemMeta(name);
  const inventoryValue = state.marketPrices[name] ?? meta.fallbackPrice;

  return {
    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    name,
    marketValue: Number(inventoryValue) || 0,
    rarity: meta.rarity,
    alertThreshold: null,
    alertTriggered: false,
  };
}

function updateWallet(delta) {
  state.wallet = Math.max(0, state.wallet + delta);
}

function levelUpIfNeeded() {
  const xpNeeded = state.level * 100;
  while (state.xp >= xpNeeded) {
    state.xp -= xpNeeded;
    state.level += 1;
  }
}

function openSelectedCase() {
  const theCase = getSelectedCase();
  if (state.wallet < theCase.price) {
    pushAlert('Not enough cash for that case. Earn a quick job or claim bonus.', 'danger');
    return;
  }

  state.wallet -= theCase.price;
  state.casesOpened += 1;

  const itemName = pickWeightedItem(theCase.pool);
  const item = createItemRecord(itemName);
  state.inventory.unshift(item);

  state.xp += 30 + Math.round(item.marketValue / 10);
  levelUpIfNeeded();

  state.bestPull = Math.max(state.bestPull, item.marketValue);
  state.lastInventoryValue = computeInventoryValue();

  if (item.marketValue >= 50) {
    pushAlert(`Huge hit: ${item.name} for ${formatCurrency(item.marketValue)}.`, 'positive');
  } else {
    pushAlert(`Opened ${theCase.name} and pulled ${item.name} for ${formatCurrency(item.marketValue)}.`, 'info');
  }

  evaluateInventoryAlerts();
  render();
  saveState();
}

function sellItem(itemId) {
  const itemIndex = state.inventory.findIndex((item) => item.id === itemId);
  if (itemIndex === -1) return;

  const item = state.inventory[itemIndex];
  const value = Number(item.marketValue || 0) * 0.9;
  state.wallet += value;
  state.soldTotal += value;
  state.inventory.splice(itemIndex, 1);
  pushAlert(`${item.name} sold for ${formatCurrency(value)}.`, 'positive');
  state.lastInventoryValue = computeInventoryValue();
  evaluateInventoryAlerts();
  render();
  saveState();
}

function setAlertThreshold(itemId) {
  const item = state.inventory.find((entry) => entry.id === itemId);
  if (!item) return;

  const promptValue = window.prompt(`Set a target value for ${item.name} (USD):`, item.alertThreshold || item.marketValue || '');
  if (promptValue === null) return;

  const next = Number(promptValue);
  if (!Number.isFinite(next) || next <= 0) {
    pushAlert('Alert value must be a positive number.', 'warning');
    return;
  }

  item.alertThreshold = next;
  item.alertTriggered = false;
  pushAlert(`${item.name} alert set at ${formatCurrency(next)}.`, 'positive');
  render();
  saveState();
}

function quickCash() {
  const payout = 150;
  state.wallet += payout;
  state.xp += 15;
  levelUpIfNeeded();
  pushAlert(`Quick job complete. +${formatCurrency(payout)} added to wallet.`, 'positive');
  render();
  saveState();
}

function claimDailyBonus() {
  const now = Date.now();
  const lastClaim = state.dailyBonusAt ? new Date(state.dailyBonusAt).getTime() : 0;
  const hoursPassed = (now - lastClaim) / (1000 * 60 * 60);

  if (lastClaim && hoursPassed < 24) {
    const waitTime = Math.max(0, 24 - hoursPassed);
    pushAlert(`Daily bonus is available in ${waitTime.toFixed(1)} hours.`, 'warning');
    return;
  }

  const payout = 300;
  state.wallet += payout;
  state.dailyBonusAt = now;
  state.xp += 25;
  levelUpIfNeeded();
  pushAlert(`Daily bonus claimed: +${formatCurrency(payout)}.`, 'positive');
  render();
  saveState();
}

function renderCaseList() {
  elements.caseList.innerHTML = CASES.map((theCase) => {
    const isActive = theCase.id === state.selectedCaseId;
    return `
      <button class="case-item ${isActive ? 'active' : ''}" data-case-id="${theCase.id}">
        <div class="case-item-header">
          <span class="case-item-name">${theCase.name}</span>
          <span class="case-item-price">${formatCurrency(theCase.price)}</span>
        </div>
        <div class="case-item-meta">
          <span>Drop odds</span>
          <span>${computeCaseDropChance(theCase)}</span>
        </div>
      </button>
    `;
  }).join('');

  elements.caseList.querySelectorAll('.case-item').forEach((button) => {
    button.addEventListener('click', () => {
      state.selectedCaseId = button.dataset.caseId;
      render();
      saveState();
    });
  });
}

function renderCurrentCase() {
  const theCase = getSelectedCase();
  elements.currentCaseTitle.textContent = `${theCase.name}`;
  elements.currentCaseBadge.textContent = 'Case';
  elements.caseName.textContent = theCase.name;
  elements.caseDescription.textContent = theCase.description;
  elements.casePrice.textContent = formatCurrency(theCase.price);
  elements.caseDropChance.textContent = computeCaseDropChance(theCase);
  document.getElementById('caseHero').style.borderColor = `${theCase.accent}50`;
  document.getElementById('caseVisual').style.boxShadow = `inset 0 0 24px ${theCase.accent}30`;
  document.getElementById('caseVisual').style.background = `linear-gradient(145deg, ${theCase.accent}25, rgba(11, 18, 22, 0.95))`;
  document.getElementById('caseVisual').querySelector('.case-glow').style.background = `radial-gradient(circle, ${theCase.accent}88, transparent 50%)`;
}

function renderInventory() {
  const inventory = state.inventory;
  elements.inventoryCount.textContent = `${inventory.length} item${inventory.length === 1 ? '' : 's'}`;

  if (!inventory.length) {
    elements.inventoryList.innerHTML = '<div class="empty-inventory">Your inventory is empty.</div>';
    return;
  }

  elements.inventoryList.innerHTML = inventory.map((item) => {
    const rarityClass = `rarity-${(item.rarity || 'Classified').toLowerCase().replace(/\s+/g, '-')}`;
    return `
      <div class="inventory-item">
        <div class="inventory-thumb"></div>
        <div class="inventory-copy">
          <strong class="${rarityClass}">${item.name}</strong>
          <small>${item.rarity || 'Classified'} • ${formatCurrency(item.marketValue || 0)}</small>
        </div>
        <div class="item-price">${formatCurrency(item.marketValue || 0)}</div>
        <div class="inventory-actions">
          <button class="alert-button" data-alert-id="${item.id}">Alert</button>
          <button class="sell-button" data-sell-id="${item.id}">Sell</button>
        </div>
      </div>
    `;
  }).join('');

  elements.inventoryList.querySelectorAll('[data-sell-id]').forEach((button) => {
    button.addEventListener('click', () => sellItem(button.dataset.sellId));
  });

  elements.inventoryList.querySelectorAll('[data-alert-id]').forEach((button) => {
    button.addEventListener('click', () => setAlertThreshold(button.dataset.alertId));
  });
}

function renderAlerts() {
  if (!state.alerts.length) {
    elements.alertList.innerHTML = '<div class="empty-alerts">Market and inventory alerts will appear here.</div>';
    return;
  }

  elements.alertList.innerHTML = state.alerts.map((alert) => `
    <div class="alert-item alert-${alert.type}">
      <div class="alert-copy">${alert.message}</div>
      <div class="alert-time">${alert.at}</div>
    </div>
  `).join('');
}

function renderHeader() {
  elements.walletDisplay.textContent = formatCurrency(state.wallet);
  elements.levelDisplay.textContent = String(state.level);
  elements.inventoryValueDisplay.textContent = formatCurrency(computeInventoryValue());

  const xpNeeded = state.level * 100;
  elements.xpDisplay.textContent = `${state.xp} / ${xpNeeded}`;
  elements.xpBar.style.width = `${currentLevelProgress()}%`;

  elements.casesOpenedDisplay.textContent = String(state.casesOpened);
  elements.soldTotalDisplay.textContent = formatCurrency(state.soldTotal);
  elements.bestPullDisplay.textContent = formatCurrency(state.bestPull);

  const dailyBonusAvailable = !state.dailyBonusAt || ((Date.now() - new Date(state.dailyBonusAt).getTime()) / (1000 * 60 * 60)) >= 24;
  elements.dailyBonusDisplay.textContent = dailyBonusAvailable ? 'Ready' : 'Locked';
}

function renderResultDisplay() {
  const lastResult = state.lastResult;
  if (!lastResult) {
    elements.resultDisplay.innerHTML = '<div class="empty-state">No result yet. Start opening cases.</div>';
    return;
  }

  const { itemName, rarity, value, caseName } = lastResult;
  elements.resultDisplay.innerHTML = `
    <div class="unbox-card">
      <div class="unbox-thumb"></div>
      <div>
        <strong>${itemName}</strong>
        <small>${rarity} • ${caseName}</small>
      </div>
      <div class="price-tag">${formatCurrency(value)}</div>
    </div>
  `;
}

function render() {
  renderHeader();
  renderCaseList();
  renderCurrentCase();
  renderResultDisplay();
  renderInventory();
  renderAlerts();
}

function resetProgress() {
  const confirmed = window.confirm('Reset everything back to the default state?');
  if (!confirmed) return;

  Object.assign(state, {
    wallet: 1200,
    xp: 0,
    level: 1,
    casesOpened: 0,
    soldTotal: 0,
    bestPull: 0,
    selectedCaseId: CASES[0].id,
    inventory: [],
    alerts: [],
    marketPrices: {},
    dailyBonusAt: null,
    lastInventoryValue: 0,
    lastResult: null,
  });

  saveState();
  render();
}

function bindEvents() {
  elements.openCaseButton.addEventListener('click', () => {
    openSelectedCase();
  });

  elements.quickCashButton.addEventListener('click', quickCash);
  elements.dailyBonusButton.addEventListener('click', claimDailyBonus);
  elements.refreshMarketButton.addEventListener('click', () => {
    refreshMarketPrices();
  });
  elements.resetButton.addEventListener('click', resetProgress);
}

function initialize() {
  bindEvents();
  seedMarketPrices([
    ...new Set(CASES.flatMap((theCase) => theCase.pool.map((entry) => entry.item))),
  ]);

  if (!state.lastResult) {
    state.lastResult = {
      itemName: 'No item opened yet',
      rarity: 'Case',
      value: 0,
      caseName: 'Awaiting first pull',
    };
  }

  render();
  refreshMarketPrices();
}

initialize();
