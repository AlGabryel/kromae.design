const items = document.querySelectorAll('.card, .work, .review');

items.forEach(el => {
  el.style.opacity = 0;
  el.style.transform = 'translateY(20px)';
  el.style.transition = '0.6s';
});

window.addEventListener('scroll', () => {
  items.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 60) {
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    }
  });
});
