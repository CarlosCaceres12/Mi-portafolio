// Scroll suave y fade-in
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Animación fade-in al hacer scroll
const faders = document.querySelectorAll('.fade-in');
const options = { threshold: 0.2 };
const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, options);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// Efecto máquina de escribir con frases rotativas
const typedText = document.getElementById('typed-text');
const cursor = document.querySelector('.cursor');
const textArray = ["Software Developer", "Backend Developer", "Web Developer", "Programador"];
let arrayIndex = 0;
let charIndex = 0;
let typing = true;

function typeEffect() {
  if (typing) {
    if (charIndex < textArray[arrayIndex].length) {
      typedText.textContent += textArray[arrayIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typeEffect, 120);
    } else {
      typing = false;
      setTimeout(typeEffect, 2000);
    }
  } else {
    if (charIndex > 0) {
      typedText.textContent = textArray[arrayIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(typeEffect, 60);
    } else {
      typing = true;
      arrayIndex = (arrayIndex + 1) % textArray.length;
      setTimeout(typeEffect, 200);
    }
  }
}
document.addEventListener("DOMContentLoaded", typeEffect);
