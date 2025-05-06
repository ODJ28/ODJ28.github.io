window.addEventListener('DOMContentLoaded', () => {
    const homeImg = document.querySelector('.home__img');
    setTimeout(() => {
    homeImg.classList.add('visible');
    }, 1400);
    });

    const title = document.querySelector('.home__title');
    const text = "Hello! I'm Oliver,\nJunior Developer";
    let index = 0;
  
    function typeEffect() {
      if (index < text.length) {
        const char = text[index] === "\n" ? "<br>" : text[index];
        title.innerHTML += char;
        index++;
        setTimeout(typeEffect, 60);
      }
    }
  
    title.innerHTML = "";
    typeEffect();

    const workImgs = document.querySelectorAll('.work__img');

    const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
    });
    }, {
  threshold: 0.1 // Trigger when 10% is visible
    });

    workImgs.forEach(img => observer.observe(img));

    const navToggle = document.getElementById('nav-toggle');  // Get the burger icon
    const navMenu = document.getElementById('nav-menu');  // Get the menu

    // Toggle 'show' class when burger icon is clicked
    navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');  // Add/remove 'show' class
    });