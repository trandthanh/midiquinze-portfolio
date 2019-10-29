const scrollTwo = () => {
  const slides = document.querySelectorAll(".slide");

  slides.forEach((slide) => {
    slide.addEventListener('wheel', (event) => {
      console.log(event);
      let nextSlideNumber = parseInt(slide.dataset.number, 10) + 1;
      let nextSlide = document.querySelector(`#page-${nextSlideNumber}`);




      nextSlide.scrollIntoView();


    })
  })


}

export { scrollTwo };
