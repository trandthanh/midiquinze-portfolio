const mouse = () => {
  window.addEventListener('mousemove', (event) => {
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;

    const colorMode = document.querySelector("#mq-home").dataset.color;

    const pageZero = document.querySelector(".cover0");
    if (colorMode == "black") {
      if (event.clientY > (windowHeight / 2)) {
        pageZero.classList.add("cursor-white-down-arrow");
      } else {
        pageZero.classList.remove("cursor-white-down-arrow");
      }
    } else {
      if (event.clientY > (windowHeight / 2)) {
        pageZero.classList.add("cursor-black-down-arrow");
      } else {
        pageZero.classList.remove("cursor-black-down-arrow");
      }
    }

    const slides = document.querySelectorAll(".picture-slide");

    slides.forEach((slide) => {
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
