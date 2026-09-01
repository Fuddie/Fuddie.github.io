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

const heroActions = document.querySelector('.hero .hero-actions');
if (heroActions && !heroActions.querySelector('[data-resume-link]')) {
  const resumeLink = document.createElement('a');
  resumeLink.className = 'button secondary';
  resumeLink.href = 'resume.html';
  resumeLink.dataset.resumeLink = 'true';
  resumeLink.textContent = 'View CV';
  heroActions.appendChild(resumeLink);
}

if (navLinks && !navLinks.querySelector('[data-resume-nav]')) {
  const resumeNav = document.createElement('a');
  resumeNav.href = 'resume.html';
  resumeNav.dataset.resumeNav = 'true';
  resumeNav.textContent = 'CV';
  navLinks.appendChild(resumeNav);
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
