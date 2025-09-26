const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll(".nav-menu a");
const btns = document.querySelectorAll(".btn");

// Abrir / cerrar menú
menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Función para scroll suave hacia sección
function smoothScroll(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  if (!href.startsWith("#")) return;
  const targetId = href.substring(1);
  const targetSection = document.getElementById(targetId);
  if (!targetSection) return;

  const headerHeight = document.querySelector("header").offsetHeight;
  const targetPos = targetSection.offsetTop - headerHeight;

  window.scrollTo({
    top: targetPos,
    behavior: "smooth"
  });

  // cerrar menú en móvil luego de clic
  navMenu.classList.remove("active");
}

// Aplicar scroll suave a los enlaces del menú
navLinks.forEach(link => {
  link.addEventListener("click", smoothScroll);
});
// Aplicar scroll suave al botón “Ver mis proyectos”
btns.forEach(btn => {
  btn.addEventListener("click", smoothScroll);
});