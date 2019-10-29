const scroll = () => {
  const slides = document.querySelectorAll(".slide");

  // name
  const changeName = (nextSlide) => {
    let projectName = nextSlide.dataset.project;
    let projectText = document.querySelector("#project-name");
    let slash = document.querySelector("#slash");
    projectText.innerText = projectName;
    slash.innerText = "/";
  }

  const clearName = () => {
    let projectText = document.querySelector("#project-name");
    let slash = document.querySelector("#slash");
    projectText.innerText = "";
    slash.innerText = "";
  }

  slides.forEach((slide) => {
    slide.addEventListener('wheel', (event) => {
      // event.preventDefault();

       if (event.deltaY > 0) {
        let navbarHeight = document.querySelector(".midiquinze-navbar").offsetHeight;
        let nextSlideNumber = parseInt(slide.dataset.number, 10) + 1;
        let nextSlide = document.querySelector(`#page-${nextSlideNumber}`);
        let y = nextSlide.offsetTop - navbarHeight;
        // console.log(y);

        // scroll
        window.scrollTo({
          top: y,
          behavior: 'smooth'
        })
        // setTimeout(() => window.focus(), 3000);
        if (nextSlideNumber !== 0) {
          setTimeout(() => changeName(nextSlide), 1000);
        } else {
          setTimeout(() => clearName(), 1000);
        }
       } else {
        // event.preventDefault();
        let navbarHeight = document.querySelector(".midiquinze-navbar").offsetHeight;
        let previousSlideNumber = parseInt(slide.dataset.number, 10) - 1;
        let previousSlide = document.querySelector(`#page-${previousSlideNumber}`);
        let y = previousSlide.offsetTop - navbarHeight;
        // console.log(y);

        // scroll
        window.scrollTo({
          top: y,
          behavior: 'smooth'
        })
        // setTimeout(() => window.focus(), 100);
        if (previousSlideNumber !== 0) {
          setTimeout(() => changeName(previousSlide), 1000);
        } else {
          setTimeout(() => clearName(), 1000);
        }
       }

      }, { capture: true,
            passive: true
      })
  })
}

export { scroll };
