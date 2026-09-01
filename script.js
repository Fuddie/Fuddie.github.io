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
if (heroActions && !heroActions.querySelector('[data-resume-download]')) {
  const resumeDownload = document.createElement('a');
  resumeDownload.className = 'button secondary';
  resumeDownload.href = 'Fuad_Adebisi_Analytics_Engineer_CV.pdf';
  resumeDownload.setAttribute('download', 'Fuad_Adebisi_Analytics_Engineer_CV.pdf');
  resumeDownload.dataset.resumeDownload = 'true';
  resumeDownload.textContent = 'Download CV';
  heroActions.appendChild(resumeDownload);
}

if (navLinks && !navLinks.querySelector('[data-resume-nav]')) {
  const resumeNav = document.createElement('a');
  resumeNav.href = 'resume.html';
  resumeNav.dataset.resumeNav = 'true';
  resumeNav.textContent = 'CV';
  navLinks.appendChild(resumeNav);
}

const contactActions = document.querySelector('#contact .hero-actions');
if (contactActions && !contactActions.querySelector('[data-linkedin-contact]')) {
  const linkedIn = document.createElement('a');
  linkedIn.className = 'button secondary';
  linkedIn.href = 'https://www.linkedin.com/in/FuadAdebisi';
  linkedIn.target = '_blank';
  linkedIn.rel = 'noreferrer';
  linkedIn.dataset.linkedinContact = 'true';
  linkedIn.textContent = 'LinkedIn';
  contactActions.appendChild(linkedIn);
}

const revealElements = document.querySelectorAll('.reveal');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReducedMotion || !('IntersectionObserver' in window)) {
  revealElements.forEach((element) => element.classList.add('visible'));
} else {
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

  revealElements.forEach((element) => observer.observe(element));
}
