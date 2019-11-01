import { debounce } from "../components/debounce";

const scrollVerticalHorizontal = () => {

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

      slide.addEventListener('wheel', (event) => { // click on last row cover

        if (event.deltaY > 0) { // scroll down
          event.preventDefault();
          // debounce(scrollIntoViewSlide(".cover1"), 0, true);
          debounce(scrollIntoViewSlide(".cover1"), 0, true);
        } else if (event.deltaY < 0) { // scroll up
          event.preventDefault();
          debounce(scrollIntoViewSlide(`.cover${previousNumber}`), 0, true);
        } else if (event.deltaX > 0) { // scroll right
          event.preventDefault();
          debounce(scrollIntoViewSlide(`.pano${nextPanoIndex}-${project}`), 0, true);
        } else { // scroll left
          event.preventDefault();
          debounce(scrollIntoViewSlide(`.cover${previousNumber}`), 0, true);
        }

      })

      stopOverlayPropagation(openBtn, closeBtn, overlay);

    } else { // other slides

      slide.addEventListener('wheel', (event) => {

        if (event.deltaX < 0) { // left

          if (slide == document.querySelector(`.cover${number}`)) { // left on the cover
            event.preventDefault();
            debounce(scrollIntoViewSlide(`.cover${previousNumber}`), 0, true);
          } else { // other slides
            event.preventDefault();
            debounce(scrollIntoViewSlide(`.pano${previousPanoIndex}-${project}`), 0, true);
          }

        } else if (event.deltaX > 0) { // right

          if (panoIndex == numberOfSlides) { // last slide on row
            event.preventDefault();
            debounce(scrollIntoViewSlide(`.cover${number}`), 0, true);
          } else { // other slides
            event.preventDefault();
            debounce(scrollIntoViewSlide(`.pano${nextPanoIndex}-${project}`), 0, true);
          }

        } else if (event.deltaY < 0) { // up

          event.preventDefault();
          debounce(scrollIntoViewSlide(`.cover${previousNumber}`), 0, true);

        } else { // down

          if (number == numberOfProjects) { // last row slides except last row cover
            event.preventDefault();
            debounce(scrollIntoViewSlide(".cover1"), 0, true);
          } else { // other slides
            event.preventDefault();
            debounce(scrollIntoViewSlide(`.cover${nextNumber}`), 0, true);
          }

        } // if

      }) // eventListener

      stopOverlayPropagation(openBtn, closeBtn, overlay);

    } // last row cover vs others

  }) // listeners on each slide

  // const pageZero = document.querySelector(".cover0");
  // pageZero.addEventListener("wheel", (e) => {
  //   e.preventDefault();
  //   console.log(e);
  //   debounce(scrollZero(), 0, true);
  // });

}

export { scrollVerticalHorizontal }
