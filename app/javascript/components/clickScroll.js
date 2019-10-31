const clickScroll = () => {
  const home = document.querySelector(".page-0");
  const windowHeight = window.innerHeight;
  home.addEventListener('click', (event) => {
    if (event.clientY > (windowHeight / 2)) {
      document.querySelector(".page-1").scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  })
}

const firstPageScroll = () => {
  const pageZero = document.querySelector(".page-0");
  pageZero.addEventListener('wheel', (event) => {
    // event.preventDefault();
    // document.querySelector("#page-1").scrollIntoView({
    //   behavior: 'smooth'
    // })
  })
}


export { clickScroll, firstPageScroll };
