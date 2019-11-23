const buttonOverlay = () => {
  const slides = document.querySelectorAll(".picture-slide");
  slides.forEach((slide) => {
    const button = slide.querySelector(".openbtn");

    slide.addEventListener('mouseover', (event) => {
      button.classList.add('animated', 'bounceIn')
      button.style.display = "block";
      console.log(event);
    })

    slide.addEventListener('mouseout', (event) => {
      button.setAttribute('style', 'display:none !important');
      button.style.transition = "all 1s ease-out";
    })
  })
}

export { buttonOverlay };
