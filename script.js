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
