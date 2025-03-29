let lastScrollTop = 0;
window.addEventListener('scroll', function() {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  const header = document.querySelector('header');
  
  if (currentScroll > lastScrollTop && currentScroll > 70) {
    // Scrolling down & past the initial view
    header.style.transform = 'translateY(-100%)';
  } else {
    // Scrolling up
    header.style.transform = 'translateY(0)';
  }
  
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
}, false);