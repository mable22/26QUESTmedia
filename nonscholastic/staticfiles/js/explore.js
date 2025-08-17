(function(){
  const listings = JSON.parse(document.getElementById('initial-listings').textContent);
  const center = window.MAP_CENTER || {lat: 12.9716, lng: 77.5946};
  const grid = document.getElementById('grid');
  const map = L.map('map', { zoomControl: false }).setView([center.lat, center.lng], 12);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19, attribution: '&copy; OpenStreetMap' }).addTo(map);
  L.control.zoom({ position: 'bottomright' }).addTo(map);

  const markers = new Map();

  function createCard(item){
    const el = document.createElement('a');
    el.className = 'card card-glass masonry-item mb-4 text-reset text-decoration-none card-hover';
    el.href = '#';
    el.innerHTML = `
      <div class="card-img-wrap">
        <img src="${item.image}" class="card-img-top" alt="${item.title}">
        <div class="card-actions">
          <button class="btn btn-light btn-sm action-save" title="Save">❤</button>
          <button class="btn btn-light btn-sm action-compare" title="Compare">⇄</button>
          <button class="btn btn-primary btn-sm action-book" title="Book Trial">Trial</button>
        </div>
      </div>
      <div class="card-body">
        <div class="d-flex justify-content-between align-items-center mb-1">
          <span class="badge bg-category">${item.category}</span>
          <span class="text-muted small">${item.age_min}-${item.age_max}</span>
        </div>
        <h5 class="card-title mb-1">${item.title}</h5>
        <div class="d-flex justify-content-between align-items-center small text-muted">
          <span>₹${item.price}${item.trial ? ' • Trial' : ''}</span>
          <span>⭐ ${item.rating}</span>
        </div>
        <div class="text-muted small mt-1">${item.location}</div>
      </div>
    `;
    el.querySelector('.action-compare').addEventListener('click', (e) => {
      e.preventDefault();
      toggleCompare(item);
    });
    return el;
  }

  function showGrid(items){
    grid.innerHTML = '';
    items.forEach(item => grid.appendChild(createCard(item)));
  }

  function makeMarker(item){
    const icon = L.divIcon({
      className: 'pin',
      html: `<div class="pin-dot"></div>`,
      iconSize: [24, 24],
      iconAnchor: [12, 24],
    });
    const m = L.marker([item.lat, item.lng], { icon }).addTo(map);
    m.bindTooltip(`<div class='small'><strong>${item.title}</strong><br/>₹${item.price}</div>`, { direction: 'top' });
    markers.set(item.id, m);
  }

  function refreshMarkers(items){
    markers.forEach(m => map.removeLayer(m));
    markers.clear();
    items.forEach(makeMarker);
  }

  // Filters
  const filterCategory = document.getElementById('filterCategory');
  const filterAge = document.getElementById('filterAge');
  const filterPrice = document.getElementById('filterPrice');
  const filterWeekend = document.getElementById('filterWeekend');
  const filterTrial = document.getElementById('filterTrial');
  const priceValue = document.getElementById('priceValue');
  filterPrice.value = 2999;
  priceValue.textContent = '₹' + filterPrice.value;

  function applyFilters(){
    const cat = filterCategory.value;
    const age = filterAge.value; // e.g., "5-8"
    const maxPrice = parseInt(filterPrice.value, 10);
    const weekendOnly = filterWeekend.checked;
    const trialOnly = filterTrial.checked;

    const filtered = listings.filter(l => {
      if (cat && l.category !== cat) return false;
      if (age) {
        const [a,b] = age.split('-').map(Number);
        if (!(l.age_min <= b && l.age_max >= a)) return false;
      }
      if (l.price > maxPrice) return false;
      if (weekendOnly && !l.weekend) return false;
      if (trialOnly && !l.trial) return false;
      return true;
    });

    showGrid(filtered);
    refreshMarkers(filtered);
  }

  [filterCategory, filterAge, filterPrice, filterWeekend, filterTrial].forEach(el => {
    el.addEventListener('input', () => {
      if (el === filterPrice) priceValue.textContent = '₹' + filterPrice.value;
      applyFilters();
    });
    el.addEventListener('change', applyFilters);
  });

  // Compare tray
  const tray = document.getElementById('compareTray');
  const trayItems = document.getElementById('compareItems');
  const clearBtn = document.getElementById('clearCompare');
  const compareSet = new Map();

  function renderTray(){
    trayItems.innerHTML = '';
    compareSet.forEach(item => {
      const chip = document.createElement('span');
      chip.className = 'chip';
      chip.textContent = item.title;
      const close = document.createElement('button');
      close.className = 'btn btn-sm btn-link text-muted';
      close.textContent = '×';
      close.addEventListener('click', () => { compareSet.delete(item.id); renderTray(); });
      const wrap = document.createElement('span');
      wrap.className = 'd-inline-flex align-items-center gap-1 me-1';
      wrap.appendChild(chip);
      wrap.appendChild(close);
      trayItems.appendChild(wrap);
    });
    tray.classList.toggle('hidden', compareSet.size === 0);
  }

  function toggleCompare(item){
    if (compareSet.has(item.id)) {
      compareSet.delete(item.id);
    } else {
      if (compareSet.size >= 4) return;
      compareSet.set(item.id, item);
    }
    renderTray();
  }

  clearBtn.addEventListener('click', () => { compareSet.clear(); renderTray(); });

  // Initial render
  showGrid(listings);
  refreshMarkers(listings);
})();