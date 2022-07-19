const menu = document.querySelector(".menu");
const toggleMenu = document.querySelector(".toggle");
const closeMenu = document.querySelector(".close");

toggleMenu.addEventListener("click", () => menu.classList.add("show-menu"));
closeMenu.addEventListener("click", () => menu.classList.remove("show-menu"));

const navLinks = document.querySelectorAll(".nav__link");

navLinks.forEach((navLink, index) => {
  navLink.addEventListener("click", () => {
    menu.classList.contains("show-menu")
      ? menu.classList.remove("show-menu")
      : null;
  });
});
