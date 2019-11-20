const mouseDownWhite = () => {
  const colorMode = document.querySelector("#mq-home").dataset.color;
  const pageZero = document.querySelector(".cover0");
  pageZero.addEventListener('mousemove', (event) => {
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;

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
  })
}

const mouseMultipleDirectionsBlack = () => {
  const slides = document.querySelectorAll(".picture-slide");

  slides.forEach((slide) => {
    const slideHeight = slide.offsetHeight;
    const slideWidth = slide.offsetWidth;

    slide.addEventListener('mousemove', (event) => {
      if (event.clientX < (slideWidth / 3)) {
        event.currentTarget.classList.add("cursor-black-left-arrow");
        event.currentTarget.classList.remove("cursor-black-right-arrow");
        event.currentTarget.classList.remove("cursor-black-down-arrow");
        event.currentTarget.classList.remove("cursor-black-up-arrow");
      } else if (event.clientX > (slideWidth / 3 * 2)) {
        event.currentTarget.classList.remove("cursor-black-left-arrow");
        event.currentTarget.classList.add("cursor-black-right-arrow");
        event.currentTarget.classList.remove("cursor-black-down-arrow");
        event.currentTarget.classList.remove("cursor-black-up-arrow");
      } else if (event.clientY < (slideHeight / 2)) {
        event.currentTarget.classList.remove("cursor-black-left-arrow");
        event.currentTarget.classList.remove("cursor-black-right-arrow");
        event.currentTarget.classList.remove("cursor-black-down-arrow");
        event.currentTarget.classList.add("cursor-black-up-arrow");
      } else {
        event.currentTarget.classList.remove("cursor-black-left-arrow");
        event.currentTarget.classList.remove("cursor-black-right-arrow");
        event.currentTarget.classList.add("cursor-black-down-arrow");
        event.currentTarget.classList.remove("cursor-black-up-arrow");
      }
    })
  })
}

export { mouseDownWhite, mouseMultipleDirectionsBlack }
