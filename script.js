// Mobile menu toggle
const menuBtn = document.getElementById('mobile-menu-btn');
const mobileNav = document.getElementById('mobile-nav');

menuBtn?.addEventListener('click', () => {
  mobileNav.classList.toggle('open');
  menuBtn.classList.toggle('active');
});

// Close mobile nav on link click
mobileNav?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileNav.classList.remove('open');
  });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// Animate numbers on scroll (simple)
const observerOptions = { threshold: 0.3 };

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

document.querySelectorAll('.feature-card, .step, .testimonial, .m-feature, .trade-card, .cta-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  fadeObserver.observe(el);
});

// Fake live price flicker for realism
function flickerPrice() {
  const priceEl = document.querySelector('.trade-price .price');
  if (!priceEl) return;
  const base = 43256.78;
  const delta = (Math.random() - 0.5) * 40;
  const newPrice = (base + delta).toFixed(2);
  priceEl.textContent = '$' + Number(newPrice).toLocaleString('en-US', { minimumFractionDigits: 2 });
}
setInterval(flickerPrice, 3000);

// Header shadow on scroll
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    header.style.boxShadow = '0 4px 30px rgba(0,0,0,0.4)';
  } else {
    header.style.boxShadow = 'none';
  }
});
