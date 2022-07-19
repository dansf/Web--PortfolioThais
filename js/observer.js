const sectionOne = document.querySelector(".home");
const sections = document.querySelectorAll(".section");
const navLinks = document.querySelectorAll(".nav__link");

const options = {
  root: null,
  threshold: 0.6,
  // rootMargin: "0px 0px 0px"
};

const sectionsNames = [
  "home",
  "psicanalise",
  "psicopedagogia",
  "psicoeducacao",
  "about",
];

const scrollSpy = component => {
  navLinks.forEach((item, i) => {
    component.target.classList.contains(sectionsNames[i])
      ? item.classList.add("spyActive")
      : item.classList.remove("spyActive");
  });
};

const callbackObserver = (entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("section-active");
    scrollSpy(entry);
  });
};

const observer = new IntersectionObserver(callbackObserver, options);

sections.forEach(section => {
  observer.observe(section);
});
