(function(){
  const html = document.documentElement;
  const btn = document.getElementById('themeToggle');
  if (btn) {
    btn.addEventListener('click', () => {
      const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', next);
    });
  }
  // Minimal confetti effect using CSS burst
  window.confettiBurst = function(element){
    if (!element) return;
    element.classList.add('confetti-burst');
    setTimeout(() => element.classList.remove('confetti-burst'), 900);
  }
})();