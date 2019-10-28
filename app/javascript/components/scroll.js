const scroll = () => {
  const slides = document.querySelectorAll(".slide");
  slides.forEach((slide) => {
    slide.addEventListener('wheel', (event) => {

      const bodyRect = document.body.getBoundingClientRect();

      let navbarHeight = document.querySelector(".midiquinze-navbar").offsetHeight;
      console.log(navbarHeight);
      let nextSlideNumber = parseInt(slide.dataset.number, 10) + 1;
      console.log(nextSlideNumber);
      let nextSlide = document.querySelector(`#page-${nextSlideNumber}`);
      console.log(nextSlide);
      let y = nextSlide.offsetTop - navbarHeight;
      console.log(y);

      window.scrollTo({
        top: y,
        behavior: 'smooth'
      })
    })
  })
}

export { scroll };
