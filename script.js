// Toggle menú en móvil
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll(".nav-menu a");
const btns = document.querySelectorAll(".btn, .card-btn");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

function smoothScrollHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    if (!href || !href.startsWith("#")) return;
    const targetId = href.substring(1);
    const target = document.getElementById(targetId);
    if (!target) return;
    const headerHeight = document.querySelector("header").offsetHeight || 0;
    const targetPos = target.offsetTop - headerHeight - 8;
    window.scrollTo({ top: targetPos, behavior: "smooth" });
    navMenu.classList.remove("active");
}

navLinks.forEach(link => link.addEventListener("click", smoothScrollHandler));
btns.forEach(b => b.addEventListener("click", smoothScrollHandler));