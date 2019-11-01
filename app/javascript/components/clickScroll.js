const clickScroll = () => {
  const home = document.querySelector(".cover0");
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
  const page0 = document.querySelector(".page-0");
  let fired = false;
  console.log(fired);
  page0.addEventListener('wheel', (event) => {
    if (fired) {
      console.log(fired)
    } else {
      console.log('hi')
      event.preventDefault();
      document.querySelector(".page-1").scrollIntoView({
        behavior: 'smooth'
      })
    }
    fired = true;
  })
}


export { clickScroll, firstPageScroll };
