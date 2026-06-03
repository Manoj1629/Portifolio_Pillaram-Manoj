// ============================================================
//  Pillaram Manoj Portfolio – JavaScript
// ============================================================

// Active nav highlight on scroll
const navItems = document.querySelectorAll('#navLinks a');
const sections = Array.from(navItems).map(a => document.querySelector(a.getAttribute('href')));

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY + 120;
  let current = 0;
  sections.forEach((sec, i) => {
    if (sec && sec.offsetTop <= scrollY) current = i;
  });
  navItems.forEach(a => a.classList.remove('active'));
  navItems[current].classList.add('active');
});

// Scroll-reveal for sections
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('section:not(#home)').forEach(s => observer.observe(s));
