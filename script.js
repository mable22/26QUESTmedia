// NONSCHOLASTIC - Data, Rendering, Interactions

// ------------------------------
// Sample Data
// ------------------------------
const SAMPLE_ACTIVITIES = [
  {
    id: 'a1',
    title: 'Beginner Guitar Jam',
    category: 'Music',
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1200&auto=format&fit=crop',
    provider: 'Allegro Academy',
    rating: 4.7,
    price: 899,
    weekend: true,
    trial: true,
    ageMin: 8,
    ageMax: 14,
    badge: 'Popular'
  },
  {
    id: 'a2',
    title: 'Kids Robotics Lab',
    category: 'STEM',
    image: 'https://images.unsplash.com/photo-1581091870633-1e7eab84edcd?q=80&w=1200&auto=format&fit=crop',
    provider: 'RoboSpark',
    rating: 4.8,
    price: 1299,
    weekend: false,
    trial: false,
    ageMin: 10,
    ageMax: 15,
    badge: 'New'
  },
  {
    id: 'a3',
    title: 'Contemporary Dance Crew',
    category: 'Dance',
    image: 'https://images.unsplash.com/photo-1514517220035-2b3617a86d83?q=80&w=1200&auto=format&fit=crop',
    provider: 'Move Studio',
    rating: 4.6,
    price: 699,
    weekend: true,
    trial: true,
    ageMin: 9,
    ageMax: 16,
    badge: 'Trial'
  },
  {
    id: 'a4',
    title: 'Indoor Rock Climbing',
    category: 'Sports',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop',
    provider: 'Summit Gym',
    rating: 4.5,
    price: 999,
    weekend: true,
    trial: false,
    ageMin: 12,
    ageMax: 18,
    badge: 'Weekend'
  },
  {
    id: 'a5',
    title: 'After-school Chess Club',
    category: 'Clubs',
    image: 'https://images.unsplash.com/photo-1549057446-9f5c6ac91a04?q=80&w=1200&auto=format&fit=crop',
    provider: 'Checkmate Hub',
    rating: 4.9,
    price: 499,
    weekend: false,
    trial: true,
    ageMin: 7,
    ageMax: 14,
    badge: 'Budget'
  },
  {
    id: 'a6',
    title: 'Creative Coding with Scratch',
    category: 'STEM',
    image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop',
    provider: 'CodePlay',
    rating: 4.3,
    price: 899,
    weekend: false,
    trial: true,
    ageMin: 8,
    ageMax: 12,
    badge: 'After-school'
  },
  {
    id: 'a7',
    title: 'Watercolor Art Basics',
    category: 'Art',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop',
    provider: 'Palette Studio',
    rating: 4.4,
    price: 749,
    weekend: true,
    trial: false,
    ageMin: 6,
    ageMax: 12,
    badge: 'Indoor'
  }
];

const TOP_CATEGORIES = [
  { name: 'Sports', icon: '🏀', color: 'var(--color-sky-blue)' },
  { name: 'Dance', icon: '💃', color: 'var(--color-pastel-pink)' },
  { name: 'Music', icon: '🎸', color: 'var(--color-mint-green)' },
  { name: 'STEM', icon: '🧠', color: 'var(--color-sunshine-yellow)' },
  { name: 'Art', icon: '🎨', color: 'var(--color-pastel-pink)' },
  { name: 'Drama', icon: '🎭', color: 'var(--color-sky-blue)' },
  { name: 'Languages', icon: '🗣️', color: 'var(--color-mint-green)' },
  { name: 'Fitness', icon: '🏋️', color: 'var(--color-sunshine-yellow)' }
];

const COLLECTIONS = [
  { title: 'Indoor picks', image: 'https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?q=80&w=1200&auto=format&fit=crop' },
  { title: 'After-school 5–6 PM', image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop' },
  { title: 'New this month', image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Budget under ₹999', image: 'https://images.unsplash.com/photo-1510936111840-65e151ad71bb?q=80&w=1200&auto=format&fit=crop' }
];

const PROVIDERS = [
  'Allegro Academy',
  'RoboSpark',
  'Move Studio',
  'Summit Gym',
  'Checkmate Hub',
  'CodePlay',
  'Palette Studio'
];

// ------------------------------
// Utilities
// ------------------------------
const byId = (id) => document.getElementById(id);

function formatPrice(inr) { return `₹${inr}`; }
function stars(r) { return `⭐ ${r.toFixed(1)}`; }

// ------------------------------
// Rendering
// ------------------------------
function renderSkeletons(container, count = 6) {
  container.innerHTML = Array.from({ length: count }).map(() => `<div class="skeleton card"></div>`).join('');
}

function renderActivityCard(a) {
  return `
    <article class="card" data-id="${a.id}">
      <div class="card-image">
        <img src="${a.image}" alt="${a.title}"/>
        ${a.badge ? `<span class="card-badge">${a.badge}</span>` : ''}
      </div>
      <div class="card-content">
        <div class="card-title">${a.title}</div>
        <div class="card-meta">
          <span>${a.provider}</span>
          <span class="rating">${stars(a.rating)}</span>
          <span class="price">${formatPrice(a.price)}</span>
        </div>
      </div>
      <div class="card-actions">
        <button class="btn-outline" data-action="save">♡ Save</button>
        <button class="btn-outline" data-action="compare">⇄ Compare</button>
        <a class="btn" href="/workspace/listing.html?id=${a.id}">🎟️ Book Trial</a>
      </div>
    </article>
  `;
}

function renderActivities(container, activities) {
  if (!activities.length) {
    container.innerHTML = `<div class="empty">No classes match your filters — try widening your search.</div>`;
    return;
  }
  container.innerHTML = activities.map(renderActivityCard).join('');
}

function renderCategories(container) {
  container.innerHTML = TOP_CATEGORIES.map(c => `
    <a class="tile" href="/workspace/explore.html?category=${encodeURIComponent(c.name)}" style="border-left: 6px solid ${c.color}">
      <span class="icon">${c.icon}</span>
      <div>
        <div class="card-title">${c.name}</div>
        <div class="muted">Explore ${c.name} classes</div>
      </div>
    </a>
  `).join('');
}

function renderCollections(container) {
  container.innerHTML = COLLECTIONS.map(c => `
    <a class="card" href="/workspace/explore.html?collection=${encodeURIComponent(c.title)}">
      <div class="card-image"><img src="${c.image}" alt="${c.title}"/></div>
      <div class="card-content">
        <div class="card-title">${c.title}</div>
        <div class="card-meta">Curated picks for you</div>
      </div>
    </a>
  `).join('');
}

function renderProviders(container) {
  container.innerHTML = PROVIDERS.map(p => `
    <div class="provider-logo"><span>${p}</span></div>
  `).join('');
}

// ------------------------------
// Search & Filters (Home quick filters)
// ------------------------------
function applyHomeFilters() {
  const q = byId('q')?.value.trim().toLowerCase() || '';
  const ageSel = byId('age')?.value || '';
  const chips = Array.from(document.querySelectorAll('.quick-filters .chip.active')).map(c => c.dataset.filter);

  let result = SAMPLE_ACTIVITIES.filter(a =>
    a.title.toLowerCase().includes(q) || a.category.toLowerCase().includes(q) || a.provider.toLowerCase().includes(q)
  );

  if (ageSel) {
    const [minS, maxS] = ageSel.split('-').map(Number);
    result = result.filter(a => !(a.ageMax < minS || a.ageMin > maxS));
  }

  if (chips.includes('weekend')) result = result.filter(a => a.weekend);
  if (chips.includes('trial')) result = result.filter(a => a.trial);
  if (chips.includes('under999')) result = result.filter(a => a.price <= 999);

  renderActivities(byId('nearbyGrid'), result);
}

// ------------------------------
// Dark mode
// ------------------------------
const DARK_KEY = 'ns.dark';
function setDarkMode(enabled) {
  const root = document.documentElement;
  if (enabled) root.classList.add('dark-mode'); else root.classList.remove('dark-mode');
  try { localStorage.setItem(DARK_KEY, String(enabled)); } catch {}
  const btn = document.getElementById('darkToggle');
  if (btn) btn.setAttribute('aria-pressed', String(enabled));
}
function initDarkMode() {
  let enabled = false;
  try { enabled = localStorage.getItem(DARK_KEY) === 'true'; } catch {}
  setDarkMode(enabled);
  const toggle = document.getElementById('darkToggle');
  if (toggle) toggle.addEventListener('click', () => setDarkMode(!document.documentElement.classList.contains('dark-mode')));
}

// ------------------------------
// Init Home Page
// ------------------------------
function initHome() {
  const grid = byId('nearbyGrid');
  if (!grid) return; // not on home
  renderSkeletons(grid, 8);
  setTimeout(() => {
    renderActivities(grid, SAMPLE_ACTIVITIES);
  }, 420);

  // Fill auxiliary sections
  const cats = document.getElementById('topCategories');
  const cols = document.getElementById('collections');
  const prov = document.getElementById('providers');
  if (cats) renderCategories(cats);
  if (cols) renderCollections(cols);
  if (prov) renderProviders(prov);

  // Search and filters
  document.getElementById('searchBtn')?.addEventListener('click', applyHomeFilters);
  document.getElementById('q')?.addEventListener('keydown', (e) => { if (e.key === 'Enter') applyHomeFilters(); });
  document.querySelectorAll('.quick-filters .chip').forEach(chip => {
    chip.addEventListener('click', () => { chip.classList.toggle('active'); applyHomeFilters(); });
  });

  // Footer year
  const y = document.getElementById('year'); if (y) y.textContent = String(new Date().getFullYear());
}

// ------------------------------
// Global init
// ------------------------------
document.addEventListener('DOMContentLoaded', () => {
  initDarkMode();
  initHome();
});

