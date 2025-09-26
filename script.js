// Menú hamburguesa
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Scroll suave al hacer clic en los enlaces
const links = document.querySelectorAll('.nav-links a');

links.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 70, // Ajusta por el header fijo
        behavior: "smooth"
      });
    }

    // Cierra el menú después de hacer clic (en móvil)
    navLinks.classList.remove("active");
  });
});
