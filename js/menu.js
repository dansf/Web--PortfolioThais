const menu = document.querySelector(".menu");
const toggleMenu = document.querySelector(".toggle");
const closeMenu = document.querySelector(".close");

toggleMenu.addEventListener("click", () => menu.classList.add("show-menu"));
closeMenu.addEventListener("click", () => menu.classList.remove("show-menu"));
