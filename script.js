const menuButton = document.querySelector('.menu-toggle');
const topbar = document.querySelector('.topbar');
menuButton?.addEventListener('click', () => {
  const isOpen = topbar.classList.toggle('menu-open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});
document.querySelectorAll('.nav a').forEach((link) => link.addEventListener('click', () => {
  topbar.classList.remove('menu-open');
  menuButton?.setAttribute('aria-expanded', 'false');
}));
document.getElementById('year').textContent = new Date().getFullYear();
