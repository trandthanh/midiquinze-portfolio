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
    const slideHeight = window.innerHeight;
    const slideWidth = window.innerWidth;

    slide.addEventListener('mousemove', (event) => {
      const clickZoneTop = slide.querySelector(".openbtn").getBoundingClientRect().top;
      const clickZoneLeft = slide.querySelector(".openbtn").getBoundingClientRect().left;
      const clickZoneRight = slide.querySelector(".openbtn").getBoundingClientRect().right;
      const clickZoneBottom = slide.querySelector(".openbtn").getBoundingClientRect().bottom;

      const slideTop = slide.getBoundingClientRect().top;
      const slideBottom = slide.getBoundingClientRect().bottom;
      const slideLeft = slide.getBoundingClientRect().left;
      const slideRight = slide.getBoundingClientRect().right;
      const slideDistance = slideBottom - slideTop;

      if ((event.clientX > clickZoneLeft) && (event.clientX < clickZoneRight) && (event.clientY > clickZoneTop) && (event.clientY < clickZoneBottom)) {
        event.currentTarget.classList.add("cursor-pointer");
        event.currentTarget.classList.remove("cursor-black-left-arrow");
        event.currentTarget.classList.remove("cursor-black-right-arrow");
        event.currentTarget.classList.remove("cursor-black-down-arrow");
        event.currentTarget.classList.remove("cursor-black-up-arrow");
      } else if ((event.clientX > slideLeft) && (event.clientX < (slideWidth / 3))) { // left
        event.currentTarget.classList.add("cursor-black-left-arrow");
        event.currentTarget.classList.remove("cursor-black-right-arrow");
        event.currentTarget.classList.remove("cursor-black-down-arrow");
        event.currentTarget.classList.remove("cursor-black-up-arrow");
      } else if ((event.clientX > (slideWidth / 3)) && (event.clientX < (slideWidth / 3 * 2)) && (event.clientY > slideTop) && (event.clientY < (slideHeight / 2))) { // up
        event.currentTarget.classList.remove("cursor-black-left-arrow");
        event.currentTarget.classList.remove("cursor-black-right-arrow");
        event.currentTarget.classList.remove("cursor-black-down-arrow");
        event.currentTarget.classList.add("cursor-black-up-arrow");
      } else if (event.clientX > (slideWidth / 3 * 2) && (event.clientX < slideRight)) { // right
        event.currentTarget.classList.remove("cursor-black-left-arrow");
        event.currentTarget.classList.add("cursor-black-right-arrow");
        event.currentTarget.classList.remove("cursor-black-down-arrow");
        event.currentTarget.classList.remove("cursor-black-up-arrow");
      } else if ((event.clientX > slideWidth / 3) && (event.clientX < (slideWidth / 3 * 2) && (event.clientY > (slideHeight / 2)) && (event.clientY < (slideBottom)))) { // down
        event.currentTarget.classList.remove("cursor-black-left-arrow");
        event.currentTarget.classList.remove("cursor-black-right-arrow");
        event.currentTarget.classList.add("cursor-black-down-arrow");
        event.currentTarget.classList.remove("cursor-black-up-arrow");
      } else {
      }
    })
  })
}

export { mouseDownWhite, mouseMultipleDirectionsBlack }
