const scroll = () => {
  const slides = document.querySelectorAll(".slide");

  // name
  const changeName = (nextSlide) => {
    let projectName = nextSlide.dataset.project;
    let projectText = document.querySelector("#project-name");
    let slash = document.querySelector("#slash");
    projectText.innerText = projectName;
    slash.innerText = "/";
  }

  slides.forEach((slide) => {
    slide.addEventListener('wheel', (event) => {





      let navbarHeight = document.querySelector(".midiquinze-navbar").offsetHeight;
      let nextSlideNumber = parseInt(slide.dataset.number, 10) + 1;
      let nextSlide = document.querySelector(`#page-${nextSlideNumber}`);
      let y = nextSlide.offsetTop - navbarHeight;
      // console.log(y);



      // scroll
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      })


      setTimeout(() => changeName(nextSlide), 1000);


    })
  })
}

export { scroll };
