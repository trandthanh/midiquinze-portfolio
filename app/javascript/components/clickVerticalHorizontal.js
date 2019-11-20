const clickVerticalHorizontal = () => {
  const slides = document.querySelectorAll(".slide");
  const pictureWidth = document.querySelector(".picture-slide").offsetWidth;
  const numberOfProjects = parseInt(document.querySelector("#mq-home").dataset.projectCount, 10);

  const scrollIntoViewSlide = (selector) => {
    document.querySelector(selector).scrollIntoView({
      behavior: 'smooth',
      block: "center",
      inline: "end"
    })
  }

  const stopClickPropagation = (element) => {
    element.addEventListener("click", (event) => {
      event.stopPropagation();
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

    const slideHeight = slide.offsetHeight;
    const slideWidth = slide.offsetWidth;

    // last row cover
    if (slide == document.querySelector(`.cover${numberOfProjects}`)) {

      slide.addEventListener('click', (event) => { // click on last row cover

        if (event.clientX < (slideWidth / 3)) { // left on the cover
          scrollIntoViewSlide(`.cover${previousNumber}`);
        } else if (event.clientX > (slideWidth / 3 * 2)) { // right
          scrollIntoViewSlide(`.pano${nextPanoIndex}-${project}`);
        } else if (event.clientY < (slideHeight / 2)) { // up
          scrollIntoViewSlide(`.cover${previousNumber}`);
        } else { // down
          scrollIntoViewSlide(".cover1");
        }

      })

      stopOverlayPropagation(openBtn, closeBtn, overlay);

    } else { // other slides

      slide.addEventListener('click', (event) => {

        if (event.clientX < (slideWidth / 3)) { // left

          if (slide == document.querySelector(`.cover${number}`)) { // left on the cover
            scrollIntoViewSlide(`.cover${previousNumber}`);
          } else { // other slides
            scrollIntoViewSlide(`.pano${previousPanoIndex}-${project}`);
          }

        } else if (event.clientX > (pictureWidth / 3 * 2)) { // right
          // console.log(pictureWidth / 3 * 2);
          // console.log(event.clientX);
          console.log(event.clientX > (pictureWidth / 3 * 2));

          if (panoIndex == numberOfSlides) { // last slide on row
            scrollIntoViewSlide(`.cover${previousNumber}`);
          } else { // other slides
            console.log(document.querySelector(`.pano${nextPanoIndex}-${project}`));
            scrollIntoViewSlide(`.pano${nextPanoIndex}-${project}`);
          }

        } else if (event.clientY < (slideHeight / 2)) { // up

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
