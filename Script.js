window.addEventListener('DOMContentLoaded', () => {
    const homeImg = document.querySelector('.home__img');
    setTimeout(() => {
    homeImg.classList.add('visible');
    }, 1400); // slight delay for smoother effect
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
  
    // Optional: clear old text and start fresh
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
