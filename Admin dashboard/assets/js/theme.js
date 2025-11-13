(function () {
  // Theme toggle: toggles .dark-mode on <body>, persists choice to localStorage, updates icon/title
  function updateIcon() {
    const icon = document.getElementById('themeIcon');
    const btn = document.getElementById('themeToggle');
    if (!icon || !btn) return;
    if (document.body.classList.contains('dark-mode')) {
      icon.className = 'bi bi-sun';
      btn.setAttribute('aria-label', 'Switch to light mode');
      btn.title = 'Switch to light mode';
      btn.classList.remove('btn-outline-light');
      btn.classList.add('btn-outline-warning');
    } else {
      icon.className = 'bi bi-moon';
      btn.setAttribute('aria-label', 'Switch to dark mode');
      btn.title = 'Switch to dark mode';
      btn.classList.remove('btn-outline-warning');
      btn.classList.add('btn-outline-light');
    }
  }

  function setTheme(theme) {
    if (theme === 'dark') document.body.classList.add('dark-mode');
    else document.body.classList.remove('dark-mode');
    updateIcon();
  }

  function toggleTheme() {
    const isDark = document.body.classList.toggle('dark-mode');
    localStorage.setItem('admindash-theme', isDark ? 'dark' : 'light');
    updateIcon();
  }

  // Initialize on DOMContentLoaded
  document.addEventListener('DOMContentLoaded', () => {
    const saved = localStorage.getItem('admindash-theme');
    if (saved) setTheme(saved);
    else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) setTheme('dark');
    else setTheme('light');

    const btn = document.getElementById('themeToggle');
    if (btn) btn.addEventListener('click', toggleTheme);
  });
})();
