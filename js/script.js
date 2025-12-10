const exploreBtn = document.getElementById('exploreBtn');
if (exploreBtn) {
  exploreBtn.addEventListener('click', () => {
    window.location.href = 'events.html';
  });
}

const ann = document.getElementById('announcements');
if (ann) {
  ann.textContent = 'Dining Hall Time Changes • RA Applications 2026 Open • Chapel 10:30AM Wednesday';
}

const eventsList = document.getElementById('eventsList');
if (eventsList) {
  const sampleEvents = [
    { title: 'Worship Night', when: 'today', desc: 'Fri 6pm @ University Ministries (JC123)' },
    { title: ' JV Mens Basketball NPU vs Elmhurst', when: 'week', desc: 'Mon 7pm @ Carlson Tower' },
    { title: 'Career Fair', when: 'week', desc: 'Thu 1pm-4pm @ Hamming Hall' },
  ];

  function drawEvents(filter = 'all') {
    eventsList.innerHTML = '';
    sampleEvents
      .filter(e => filter === 'all' ? true : e.when === filter)
      .forEach(e => {
        eventsList.innerHTML += `
          <div class="col-md-4">
            <div class="card h-100">
              <div class="card-body">
                <h2 class="h5">${e.title}</h2>
                <p class="text-muted mb-2">${e.desc}</p>
                <button class="btn btn-sm btn-primary">RSVP</button>
              </div>
            </div>
          </div>`;
      });
  }
  drawEvents();

  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => drawEvents(btn.dataset.filter));
  });
}

const diningGrid = document.getElementById('diningGrid');
if (diningGrid) {
  const halls = [
    { name: 'Dinner @ Dining Hall', hours: '5pm–7pm', open: false },
    { name: 'Viking Market @ Carlson Tower', hours: '8am–10pm', open: true },
    { name: '1891 Bread Co.', hours: '8am–7pm', open: true },
    { name: 'Lunch @ Dining Hall', hours: '11am–1:30pm', open: true },
    { name: 'Breakfast @ Dining Hall', hours: '7am–9am', open: false },
  ];

  function drawDining(show = 'all') {
    diningGrid.innerHTML = '';
    halls
      .filter(h => show === 'all' ? true : h.open)
      .forEach(h => {
        diningGrid.innerHTML += `
          <div class="col-md-6">
            <div class="card h-100">
              <div class="card-body">
                <h2 class="h5 mb-1">${h.name}</h2>
                <p class="text-muted mb-2">Hours: ${h.hours}</p>
                <span class="badge ${h.open ? 'text-bg-success' : 'text-bg-secondary'}">
                  ${h.open ? 'Open' : 'Closed'}
                </span>
                <button class="btn btn-sm btn-outline-primary float-end">View Menu</button>
              </div>
            </div>
          </div>`;
      });
  }
  drawDining();

  document.querySelectorAll('.dining-filter').forEach(btn => {
    btn.addEventListener('click', () => drawDining(btn.dataset.open));
  });
}

// -------- External API: Quote of the Day --------
const quoteEl = document.getElementById('quoteText');
if (quoteEl) {
  async function loadQuote() {
    try {
      const res = await fetch('https://api.quotable.io/random');
      const data = await res.json();
      quoteEl.textContent = `"${data.content}" — ${data.author}`;
    } catch (err) {
      quoteEl.textContent = 'Could not load quote right now. Please try again later.';
      console.error('Quote API error:', err);
    }
  }

  loadQuote();
}
