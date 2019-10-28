const firstScroll = () => {
  const firstSlide = document.querySelector("#page-0");
  const secondSlide = document.querySelector("#page-1");

  const yourElement = document.getElementById("page-1");
  const y = yourElement.getBoundingClientRect().top - 140;

  console.log(y);

  firstSlide.addEventListener('wheel', (event) => {
    window.scrollTo({
      top: y,
      behavior: 'smooth'
    });
  });
}

export { firstScroll };
