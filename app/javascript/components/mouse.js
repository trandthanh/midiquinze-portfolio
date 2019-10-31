const mouse = () => {
  window.addEventListener('mousemove', (event) => {
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    // console.log(event.clientX);
    // console.log(event.clientY);

    const home = document.querySelector(".page-0");
    if (event.clientY > (windowHeight / 2)) {
      home.classList.add("cursor-white-down-arrow");
    } else {
      home.classList.remove("cursor-white-down-arrow");
    }


    const slides = document.querySelectorAll(".picture-slide");

    slides.forEach((slide) => {
      // if (event.clientY < (windowHeight / 2) && event.clientX < (windowWidth / 2)) {
      //   slide.classList.add("cursor-black-left-arrow");
      //   slide.classList.remove("cursor-black-right-arrow");
      //   slide.classList.remove("cursor-black-down-arrow");
      // } else if (event.clientY < (windowHeight / 2) && (windowWidth / 2) < event.clientX) {
      //   slide.classList.remove("cursor-black-left-arrow");
      //   slide.classList.add("cursor-black-right-arrow");
      //   slide.classList.remove("cursor-black-down-arrow");
      // } else {
      //   slide.classList.remove("cursor-black-left-arrow");
      //   slide.classList.remove("cursor-black-right-arrow");
      //   slide.classList.add("cursor-black-down-arrow");
      // }
      if (event.clientX < (windowWidth / 3)) {
        slide.classList.add("cursor-black-left-arrow");
        slide.classList.remove("cursor-black-right-arrow");
        slide.classList.remove("cursor-black-down-arrow");
        slide.classList.remove("cursor-black-up-arrow");
      } else if (event.clientX > (windowWidth / 3 * 2)) {
        slide.classList.remove("cursor-black-left-arrow");
        slide.classList.add("cursor-black-right-arrow");
        slide.classList.remove("cursor-black-down-arrow");
        slide.classList.remove("cursor-black-up-arrow");
      } else if (event.clientY < (windowHeight / 2)) {
        slide.classList.remove("cursor-black-left-arrow");
        slide.classList.remove("cursor-black-right-arrow");
        slide.classList.remove("cursor-black-down-arrow");
        slide.classList.add("cursor-black-up-arrow");
      } else {
        slide.classList.remove("cursor-black-left-arrow");
        slide.classList.remove("cursor-black-right-arrow");
        slide.classList.add("cursor-black-down-arrow");
        slide.classList.remove("cursor-black-up-arrow");
      }
    })
  })
}

export { mouse }
