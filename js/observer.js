const sectionOne = document.querySelector(".home");
const sections = document.querySelectorAll(".section")

const options = {
  root: null,
  threshold: 0.5,
};

const callbackObserver = (entries, observer) => {
  entries.forEach(entry => {
    if(!entry.isIntersecting) return;
    entry.target.classList.add("section-active")
    console.log(entry.target);
    // entry.unobserve(entry.target);
  });
};

const observer = new IntersectionObserver(callbackObserver, options);

sections.forEach(section => {
  observer.observe(section);
})

