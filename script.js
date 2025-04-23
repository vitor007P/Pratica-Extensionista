const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.classList.contains(current)) {
      link.classList.add("active");
    }
  });
});

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(e.target.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    section.style.transform = "translateY(50px)";
    section.classList.add("animate");
  });
});

function toggleMenu() {
  const menu = document.querySelector("nav ul");
  menu.classList.toggle("show");
}

function closeMenu() {
  const menu = document.querySelector("nav ul");
  menu.classList.remove("show");
}

window.addEventListener("load", function () {
  document.querySelectorAll("iframe").forEach(function (iframe) {
    iframe.removeAttribute("style");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector("nav ul");
  const menuToggle = document.querySelector(".menu-toggle");

  function closeMenu() {
    menu.classList.remove("show");
  }

  document.addEventListener("click", (event) => {
    const isClickInsideMenu = menu.contains(event.target);
    const isMenuButton = menuToggle.contains(event.target);

    if (!isClickInsideMenu && !isMenuButton) {
      closeMenu();
    }
  });

  document.querySelectorAll(".menu a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
});
