// Menú y scroll suave
const menuBtnAlt = document.querySelector('.menu-btn');
const navMenu = document.getElementById('nav-menu');
const menuToggle = document.getElementById('menu-toggle');

if(menuBtnAlt){
  menuBtnAlt.addEventListener('click', ()=> navMenu.classList.toggle('active'));
}
if(menuToggle){
  menuToggle.addEventListener('click', ()=> navMenu.classList.toggle('active'));
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