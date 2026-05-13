// Load HTML sections
async function loadSection(containerId, fileName) {
  try {
    const response = await fetch(fileName);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const html = await response.text();
    document.getElementById(containerId).innerHTML = html;
  } catch (error) {
    console.error(`Error loading ${fileName}:`, error);
  }
}

// Load all sections
async function loadAllSections() {
  const sections = [
    { id: 'header-container', file: 'header.html' },
    { id: 'hero-container', file: 'hero.html' },
    { id: 'products-container', file: 'products.html' },
    { id: 'features-container', file: 'features.html' },
    { id: 'about-container', file: 'about.html' },
    { id: 'footer-container', file: 'footer.html' }
  ];

  const promises = sections.map(section => loadSection(section.id, section.file));
  await Promise.all(promises);

  // Setup observers after all sections are loaded
  setupObservers();
}

function setupObservers() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  const reveals = document.querySelectorAll('.reveal');
  reveals.forEach(el => observer.observe(el));
}

document.addEventListener('DOMContentLoaded', function() {
  loadAllSections();
});

// Nav shrink on scroll
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (nav) {
    nav.style.padding = window.scrollY > 60 ? '12px 48px' : '20px 48px';
  }
});

// Product action buttons → contact
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('product-action')) {
    window.location.href = 'https://valuminium.github.io/VNW-Website/contact.html';
  }
});