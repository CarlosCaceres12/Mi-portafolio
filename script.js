// Menú hamburguesa
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Scroll suave al hacer clic en los enlaces
const links = document.querySelectorAll('.nav-links a, .btn');

links.forEach(link => {
  link.addEventListener("click", (e) => {
    if (link.getAttribute("href").startsWith("#")) {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const headerHeight = document.querySelector("header").offsetHeight;
        window.scrollTo({
          top: targetElement.offsetTop - headerHeight,
          behavior: "smooth"
        });
      }

      // Cierra el menú después de hacer clic (en móvil)
      navLinks.classList.remove("active");
    }
  });
});
