
const exploreBtn = document.getElementById('exploreBtn');
if (exploreBtn) {
  exploreBtn.addEventListener('click', () => {
    window.location.href = 'events.html';
  });
}

const ann = document.getElementById('announcements');
if (ann) {
  ann.textContent = 'Registration opens Monday • Library closed Sunday • Chapel 11AM';
}

const eventsList = document.getElementById('eventsList');
if (eventsList) {
  const sampleEvents = [
    { title: 'Worship Night', when: 'today', desc: 'Student Center 7pm' },
    { title: 'Basketball Game', when: 'week', desc: 'Gym Friday 6pm' },
    { title: 'Career Fair', when: 'week', desc: 'Hall A Thu 1–4pm' },
  ];

  function drawEvents(filter='all') {
    eventsList.innerHTML = '';
    sampleEvents
      .filter(e => filter==='all' ? true : e.when===filter)
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
    { name: 'South Hall', hours: '7am–9pm', open: true },
    { name: 'North Cafe', hours: '8am–3pm', open: false },
    { name: 'Union Food Court', hours: '11am–8pm', open: true },
    { name: 'Library Kiosk', hours: '9am–2pm', open: false },
  ];

  function drawDining(show='all') {
    diningGrid.innerHTML = '';
    halls
      .filter(h => show==='all' ? true : h.open)
      .forEach(h => {
        diningGrid.innerHTML += `
          <div class="col-md-6">
            <div class="card h-100">
              <div class="card-body">
                <h2 class="h5 mb-1">${h.name}</h2>
                <p class="text-muted mb-2">Hours: ${h.hours}</p>
                <span class="badge ${h.open?'text-bg-success':'text-bg-secondary'}">
                  ${h.open?'Open':'Closed'}
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


