const hamburgerBtn = document.getElementById('hamburger-btn');
const navbar = document.getElementById('navbar');
const overlay = document.getElementById('overlay');
const navLinks = document.querySelectorAll('.navbar-menu .texts');

function openMenu() {
  hamburgerBtn.classList.add('active');
  navbar.classList.add('open');
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  hamburgerBtn.classList.remove('active');
  navbar.classList.remove('open');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}

if (hamburgerBtn) {
  hamburgerBtn.addEventListener('click', () => {
    if (navbar.classList.contains('open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });
}

if (overlay) {
  overlay.addEventListener('click', closeMenu);
}

navLinks.forEach((link) => {
  link.addEventListener('click', closeMenu);
});