function goToLink() {
    window.location.href = "https://sites.google.com/view/nongrakpee";
  }
  function toggleMenu() {
    const menu = document.getElementById('dropdown');
    const overlay = document.getElementById('overlay');
  
    const isOpen = menu.style.display === 'flex';
  
    menu.style.display = isOpen ? 'none' : 'flex';
    overlay.style.display = isOpen ? 'none' : 'block';
  }
  window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    const body = document.querySelector('body');
    
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
      body.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
      body.classList.remove('scrolled');
    }
  });