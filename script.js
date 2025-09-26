// Menú y scroll suave
const menuBtn = document.getElementById('menu-toggle') || document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');
const menuToggle = document.getElementById('menu-toggle') || document.querySelector('.menu-btn');
const menuBtnAlt = document.querySelector('.menu-btn');

// Compatibilidad: usar el botón visible
if(menuBtnAlt){
  menuBtnAlt.addEventListener('click', ()=> navMenu.classList.toggle('active'));
}
if(menuBtn){
  menuBtn.addEventListener('click', ()=> navMenu.classList.toggle('active'));
}

const links = document.querySelectorAll('a[href^="#"]');
links.forEach(a=>{
  a.addEventListener('click', function(e){
    const href = this.getAttribute('href');
    if(!href || !href.startsWith('#')) return;
    e.preventDefault();
    const target = document.querySelector(href);
    if(!target) return;
    const headerH = document.querySelector('header').offsetHeight || 0;
    const topPos = target.offsetTop - headerH - 8;
    window.scrollTo({top: topPos, behavior:'smooth'});
    if(navMenu) navMenu.classList.remove('active');
  });
});