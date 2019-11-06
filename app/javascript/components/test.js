const test = () => {

  const scrollDown = (slide, height) => {
    let navbarHeight = document.querySelector(".midiquinze-navbar").offsetHeight;
    let currentSlideNumber = parseInt(slide.dataset.number, 10);
    let nextSlideNumber = parseInt(slide.dataset.number, 10) + 1;
    let nextSlide = document.querySelector(`#page-${nextSlideNumber}`);
    let y = nextSlide.offsetTop - navbarHeight;

    document.getElementById("home").animate([
      // keyframes
      { transform: `translateY(${ currentSlideNumber * height}px)` },
      { transform: `translateY(${-(currentSlideNumber * height + y)}px)` }
    ], {
      // timing options
      fill: 'forwards',
      duration: 1000
    });
  }

  // window.addEventListener
  // querySelector(gros truc).style.transform =

  const scrollUp = (slide) => {
    let navbarHeight = document.querySelector(".midiquinze-navbar").offsetHeight;
    let previousSlideNumber = parseInt(slide.dataset.number, 10) - 1;
    let previousSlide = document.querySelector(`#page-${previousSlideNumber}`);
    let y = previousSlide.offsetTop - navbarHeight;
    console.log(document.body.scrollTop);

    document.getElementById("home").animate([
      // keyframes
      { transform: `translateY(${document.documentElement.scrollTop}px)` },
      { transform: `translateY(${y}px)` }
    ], {
      // timing options
      fill: 'forwards',
      duration: 1000
    });
  }

  const slides = document.querySelectorAll(".slide");
  slides.forEach((slide) => {
    slide.addEventListener('wheel', (event) => {
      const height = window.innerHeight;
      console.log(height);
      if (event.deltaY > 0) {
        scrollDown(slide, height);
      } else {
        scrollUp(slide);
      };
    });
  });
}

export { test };



  // slides.forEach((slide) => {
  //   slide.addEventListener('wheel', (event) => {
  //     document.getElementById("cover0").animate([
  //       // keyframes
  //       { transform: 'translateY(0px)' },
  //       { transform: 'translateY(-300px)' }
  //     ], {
  //       // timing options
  //       duration: 1000
  //     });
  //   }, {passive: false});
  // })
