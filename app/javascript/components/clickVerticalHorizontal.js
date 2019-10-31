const clickVerticalHorizontal = () => {
  const slides = document.querySelectorAll(".slide");
  const windowHeight = window.innerHeight;
  const windowWidth = window.innerWidth;
  const numberOfProjects = parseInt(document.querySelector("#mq-home").dataset.projectCount, 10);

  slides.forEach((slide) => {
    // last cover slide
    if (slide == document.querySelector(`.cover${numberOfProjects}`)) {
      slide.addEventListener('click', (event) => {
        document.querySelector(".cover1").scrollIntoView({
          behavior: 'smooth'
        })
      })
    } else {
      slide.addEventListener('click', (event) => {
        const number = parseInt(slide.dataset.number, 10);
        const nextNumber = number + 1;
        const previousNumber = number - 1;

        const project = slide.dataset.project;

        const panoIndex = parseInt(slide.dataset.panoIndex, 10);
        const nextPanoIndex = panoIndex + 1;
        const previousPanoIndex = panoIndex - 1;

        // left
        if (event.clientX < (windowWidth / 3)) {
          document.querySelector(`.pano${previousPanoIndex}-${project}`).scrollIntoView({
            behavior: 'smooth'
          })

        // right
        } else if (event.clientX > (windowWidth / 3 * 2)) {
          // console.log('right');
          // if (slide == document.querySelector(`.cover${number}`)) {
          //   document.querySelector(`.pano0-${project}`).scrollIntoView({
          //     behavior: 'smooth'
          //   })
          // } else {
            document.querySelector(`.pano${nextPanoIndex}-${project}`).scrollIntoView({
              behavior: 'smooth'
            })
          // }

        // up
        } else if (event.clientY < (windowHeight / 2)) {
          document.querySelector(`.cover${previousNumber}`).scrollIntoView({
            behavior: 'smooth'
          })

        // down
        } else {
          document.querySelector(`.cover${nextNumber}`).scrollIntoView({
            behavior: 'smooth'
          })
        }
      })

    }
  })
}

export { clickVerticalHorizontal }
