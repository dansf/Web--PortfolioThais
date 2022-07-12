document.addEventListener("DOMContentLoaded", () => {
  console.log("Func 0");

  const scrollspy = (() => {
    let targets = document.querySelectorAll("section");
    let options = {
      threshold: 0.5,
    };

    if (IntersectionObserver in window) {
      (() => {
        let inView = target => {
          console.log("Func 1");
          let interSecObs = new IntersectionObserver(entries => {
            console.log("Func 2");
            entries.forEach(entry => {
              console.log("Func 3");
              let elem = entry.target;
              let currentNav = document.querySelector(
                `.nav__ul .nav__item a[href='#${elem.id}']`
              );
              entry.isIntersecting
                ? currentNav.classList.add("active")
                : currentNav.classList.remove("active");
            });
          }, options);
          interSecObs.observe(target);
        };
        targets.forEach(inView);
      })();
    }
  })();
});
