const themeToggle = document.querySelector('.theme-toggle');

function updateThemeButton() {
  const isDark = document.body.classList.contains('dark');
  themeToggle.textContent = isDark ? '☼' : '◐';
  themeToggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
  themeToggle.setAttribute('title', isDark ? 'Switch to light mode' : 'Switch to dark mode');
}

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  updateThemeButton();
});

updateThemeButton();

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth' });
  });
});
