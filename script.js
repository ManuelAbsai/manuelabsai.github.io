const posts = [
  { id:1, tag:"Ensayo",    title:"El pensamiento que no cabe en 280 caracteres", excerpt:"Hay ideas que necesitan tiempo, espacio y varias vueltas de tuerca antes de revelarse. Este blog existe para eso.",          date:"13 mayo 2026", readTime:"5 min",  featured:true  },
  { id:2, tag:"Análisis",  title:"Cuando los datos mienten con elegancia",        excerpt:"Las estadísticas son herramientas neutras. La interpretación, en cambio, nunca lo es.",                                         date:"7 mayo 2026",  readTime:"8 min",  featured:false },
  { id:3, tag:"Reflexión", title:"Lo que la academia no te enseña sobre pensar",  excerpt:"El rigor metodológico y la creatividad no son opuestos. Son la misma cosa vista desde ángulos distintos.",                    date:"1 mayo 2026",  readTime:"6 min",  featured:false },
  { id:4, tag:"Nota",      title:"Tres libros que cambiaron cómo formulo preguntas", excerpt:"No se trata de tener respuestas más inteligentes. Se trata de aprender a hacer mejores preguntas.",                       date:"22 abr 2026",  readTime:"4 min",  featured:false },
  { id:5, tag:"Ensayo",    title:"La distancia entre saber y comprender",          excerpt:"Acumular información no es lo mismo que desarrollar criterio. La diferencia importa más de lo que creemos.",                 date:"15 abr 2026",  readTime:"7 min",  featured:false },
  { id:6, tag:"Análisis",  title:"Internet como espacio psíquico",                 excerpt:"La red no es solo un medio de comunicación. Es también un territorio donde se despliegan fantasías, miedos y deseos colectivos.", date:"8 abr 2026", readTime:"9 min", featured:false },
];

let menuOpen = false;

function goTo(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
  const target = document.getElementById('page-' + pageId);
  if (target) {
    target.classList.remove('hidden');
    target.style.animation = 'none';
    target.offsetHeight;
    target.style.animation = '';
  }
  document.querySelectorAll('.ni, .ni-mob').forEach(btn => {
    btn.classList.toggle('on', btn.dataset.page === pageId);
  });
  menuOpen = false;
  document.getElementById('nav-mobile').classList.remove('open');
  updateHamburger();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleMenu() {
  menuOpen = !menuOpen;
  document.getElementById('nav-mobile').classList.toggle('open', menuOpen);
  updateHamburger();
}

function updateHamburger() {
  const btn = document.getElementById('hamburger');
  btn.innerHTML = menuOpen
    ? `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`
    : `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`;
}

function filterTag(tag) {
  document.querySelectorAll('.tb').forEach(btn => {
    btn.classList.toggle('on', btn.dataset.tag === tag);
  });
  document.querySelectorAll('.art-card').forEach(card => {
    card.classList.toggle('hidden', tag !== 'Todos' && card.dataset.tag !== tag);
  });
}

function buildGrid(containerId, items) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = items.map(p => `
    <div class="card art-card" data-tag="${p.tag}">
      <div class="card-tag">■ ${p.tag}</div>
      <div class="card-title">${p.title}</div>
      <p class="card-exc">${p.excerpt}</p>
      <div class="card-foot">
        <span class="card-date">${p.date}</span>
        <span class="card-rt">${p.readTime} lectura</span>
      </div>
    </div>`).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  buildGrid('recent-grid', posts.slice(1, 4));
  buildGrid('art-grid', posts);
  goTo('inicio');
});
