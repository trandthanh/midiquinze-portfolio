const clickVerticalHorizontal = () => {
  const slides = document.querySelectorAll(".slide");
  const windowHeight = window.innerHeight;
  const windowWidth = window.innerWidth;
  const numberOfProjects = parseInt(document.querySelector("#mq-home").dataset.projectCount, 10);

  const scrollIntoViewSlide = (selector) => {
    document.querySelector(selector).scrollIntoView({
      behavior: 'smooth'
    })
  }

  const stopClickPropagation = (element) => {
    element.addEventListener("click", (event) => {
      event.stopPropagation(); //this is important! If removed, you'll get both alerts
    }, false);
  }

  const stopOverlayPropagation = (openButton, closeButton, overlayArea) => {
    stopClickPropagation(openButton);
    stopClickPropagation(closeButton);
    stopClickPropagation(overlayArea);
  }

  slides.forEach((slide) => {

    const number = parseInt(slide.dataset.number, 10);
    const nextNumber = number + 1;
    const previousNumber = number - 1;

    const project = slide.dataset.project;

    const panoIndex = parseInt(slide.dataset.panoIndex, 10);
    const nextPanoIndex = panoIndex + 1;
    const previousPanoIndex = panoIndex - 1;

    const button = slide.dataset.button;

    const openBtn = document.querySelector(`#openbtn-${project}-${button}`);
    const closeBtn = document.querySelector(`#closebtn-${project}-${button}`);
    const overlay = document.querySelector(`#overlay-${project}-${button}`);

    const numberOfSlides = parseInt(slide.dataset.panoCount, 10);

    // last row cover
    if (slide == document.querySelector(`.cover${numberOfProjects}`)) {

      slide.addEventListener('click', (event) => { // click on last row cover

        if (event.clientX < (windowWidth / 3)) { // left on the cover
          // nothing to do
        } else if (event.clientX > (windowWidth / 3 * 2)) { // right
          scrollIntoViewSlide(`.pano${nextPanoIndex}-${project}`);
        } else if (event.clientY < (windowHeight / 2)) { // up
          scrollIntoViewSlide(`.cover${previousNumber}`);
        } else { // down
          scrollIntoViewSlide(".cover1");
        }

      })

      stopOverlayPropagation(openBtn, closeBtn, overlay);

    } else { // other slides

      slide.addEventListener('click', (event) => {

        if (event.clientX < (windowWidth / 3)) { // left

          if (slide == document.querySelector(`.cover${number}`)) { // left on the cover
            // nothing to do
          } else { // other slides
            scrollIntoViewSlide(`.pano${previousPanoIndex}-${project}`);
          }

        } else if (event.clientX > (windowWidth / 3 * 2)) { // right

          if (panoIndex == numberOfSlides) { // last slide on row
            scrollIntoViewSlide(`.cover${number}`);
          } else { // other slides
            scrollIntoViewSlide(`.pano${nextPanoIndex}-${project}`);
          }

        } else if (event.clientY < (windowHeight / 2)) { // up

          scrollIntoViewSlide(`.cover${previousNumber}`);

        } else { // down

          if (number == numberOfProjects) { // last row slides except last row cover
            scrollIntoViewSlide(".cover1");
          } else { // other slides
            scrollIntoViewSlide(`.cover${nextNumber}`);
          }

        } // if

      }) // eventListener

      stopOverlayPropagation(openBtn, closeBtn, overlay);

    } // last row cover vs others

  }) // listeners on each slide

} // function

export { clickVerticalHorizontal }