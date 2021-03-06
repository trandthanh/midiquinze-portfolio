const overlay = () => {

  /* Open when someone clicks on the span element */
  function openNav(slide) {
    let project = slide.dataset.project;
    let diapo = slide.dataset.button;
    let overlay = document.querySelector(`#overlay-${project}-${diapo}`);

    function mediaQueries(x) {
      if (x.matches) { // If media query matches
        overlay.style.width = "28%";
      } else {
        overlay.style.width = "28%";
      }
    }

    var x = window.matchMedia("(max-width: 992px)")
    mediaQueries(x) // Call listener function at run time
    x.addListener(mediaQueries) // Attach listener function on state changes
  }

  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav(slide) {
    let project = slide.dataset.project;
    let diapo = slide.dataset.button;
    let overlay = document.querySelector(`#overlay-${project}-${diapo}`);

    overlay.style.width = "0%";
  }

  const slides = document.querySelectorAll(".slide");
  slides.forEach((slide) => {
    let project = slide.dataset.project;
    let diapo = slide.dataset.button;
    let openBtn = document.querySelector(`#openbtnplus-${project}-${diapo}`);
    let closeBtn = document.querySelector(`#closebtnplus-${project}-${diapo}`);

    openBtn.addEventListener('click', (event) => {
      closeBtn.classList.add("rotation-clockwork45");
      openNav(slide);
    })

    closeBtn.addEventListener('click', (event) => {
      closeBtn.classList.remove("rotation-clockwork45");
      closeBtn.classList.add("rotation-counterclockwork45");
      closeNav(slide);

      const removeClasses = () => {
        closeBtn.classList.remove("rotation-counterclockwork45");
      }

      setTimeout(removeClasses, 1000);
    })

    slide.addEventListener("mouseover", (event) => {
      slides.forEach((slide) => {
        if (slide !== event.currentTarget) {
          closeNav(slide);
        }
      })
    })
  })
}

export { overlay }


