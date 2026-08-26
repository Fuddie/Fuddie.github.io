const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

// Keep the WalletFlow summary on the portfolio home aligned with the latest
// case-study implementation without duplicating analytics logic in multiple
// handwritten HTML blocks.
const walletflowCard = document.querySelector('.project-card.featured');

if (walletflowCard) {
  const summary = walletflowCard.querySelector('p');
  if (summary) {
    summary.textContent = 'A digital-wallet analytics engineering project with explicit dbt models, incremental BigQuery MERGE logic, late-arriving-data protection, tested DAU/MAU and retention KPIs, source freshness, and pull-request CI checks.';
  }

  const stats = walletflowCard.querySelector('.project-stats');
  if (stats) {
    stats.innerHTML = `
      <span><strong>5,000</strong> synthetic transactions</span>
      <span><strong>250</strong> customers</span>
      <span><strong>DAU · MAU</strong> + retention</span>
      <span><strong>CI</strong> quality checks</span>
    `;
  }

  const tags = walletflowCard.querySelector('.tags');
  if (tags) {
    tags.innerHTML = '<span>dbt</span><span>BigQuery SQL</span><span>Incremental models</span><span>Data tests</span><span>MAU / DAU</span><span>Cohort retention</span><span>GitHub Actions</span>';
  }

  const links = walletflowCard.querySelectorAll('.project-links a');
  if (links.length > 1) {
    links[1].href = 'walletflow.html';
    links[1].textContent = 'Interactive case study →';
  }
}

// Add the Snowflake/dbt production project as a featured portfolio case study.
const projectGrid = document.querySelector('.project-grid');

if (projectGrid && !document.querySelector('[data-project="olist-analytics"]')) {
  const card = document.createElement('article');
  card.className = 'project-card featured reveal visible';
  card.dataset.project = 'olist-analytics';
  card.innerHTML = `
    <a href="olist.html" aria-label="Open Olist Analytics case study" style="display:block;margin:-2px -2px 22px;overflow:hidden;border-radius:14px;border:1px solid var(--line);background:#07111f;">
      <img src="olist-analytics-preview.jpg" alt="Olist Analytics Snowflake and dbt portfolio preview" loading="lazy" style="display:block;width:100%;aspect-ratio:16/9;object-fit:cover;transition:transform .25s ease;" onmouseenter="this.style.transform='scale(1.02)'" onmouseleave="this.style.transform='scale(1)'" />
    </a>
    <div class="project-topline"><span class="project-number">03</span><span class="badge">PUBLIC E-COMMERCE</span></div>
    <h3>Olist Analytics</h3>
    <p>A production-oriented Snowflake and dbt Cloud analytics engineering pipeline using public Olist e-commerce data. It includes layered models, two transactional fact grains, ingestion-based incremental MERGE processing, automated tests, pull-request CI, isolated DEV/PROD compute, RSA service authentication and scheduled production orchestration.</p>
    <div class="project-stats">
      <span><strong>99,441</strong> orders</span>
      <span><strong>112,650</strong> order items</span>
      <span><strong>9</strong> raw sources</span>
      <span><strong>12h</strong> production schedule</span>
    </div>
    <div class="tags"><span>Snowflake</span><span>dbt Cloud</span><span>SQL</span><span>Incremental MERGE</span><span>Dimensional modelling</span><span>GitHub Actions</span><span>RBAC</span></div>
    <div class="project-links">
      <a href="olist.html">Project details →</a>
      <a href="https://github.com/Fuddie/olist-analytics" target="_blank" rel="noreferrer">Repository ↗</a>
    </div>
  `;

  const cards = projectGrid.querySelectorAll('.project-card');
  if (cards.length >= 2) {
    cards[1].insertAdjacentElement('afterend', card);
  } else {
    projectGrid.appendChild(card);
  }
}
