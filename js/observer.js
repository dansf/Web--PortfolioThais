document.addEventListener("DOMContentLoaded", () => {
  console.log("Func 0");

  const sections = document.querySelectorAll(".spy");
  const links = document.querySelectorAll(".nav__link");

  window.addEventListener("scroll", () => {
    console.log("Func 1")
    let sectionMargin = 10;
    const current =
      sections.length -
      [...sections]
        .reverse()
        .findIndex(
          section => window.scrollY >= section.offsetTop - sectionMargin
        ) -
      1;

    const makeActive = link => links[link].classList.add("active");
    const removeActive = link => links[link].classList.remove("active");

    const removeAllActive = () =>
      [...Array(sections.length).keys()].forEach(link => removeActive(link));
  });

  // const scrollspy = (() => {
  //   let targets = document.querySelectorAll(".spy");
  //   let options = {
  //     threshold: 0.5,
  //   };

  //   if (IntersectionObserver in window) {
  //     (() => {
  //       let inView = target => {
  //         console.log("Func 1");
  //         let interSecObs = new IntersectionObserver(entries => {
  //           console.log("Func 2");
  //           entries.forEach(entry => {
  //             console.log("Func 3");
  //             let elem = entry.target;
  //             let currentNav = document.querySelector(
  //               `.nav__ul .nav__item a[href='#${elem.id}']`
  //             );
  //             entry.isIntersecting
  //               ? currentNav.classList.add("active")
  //               : currentNav.classList.remove("active");
  //           });
  //         }, options);
  //         interSecObs.observe(target);
  //       };
  //       targets.forEach(inView);
  //     })();
  //   }
  // })();
});
