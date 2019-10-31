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
  let alreadyFire = false;
  const pageZero = document.querySelector(".page-0");
  pageZero.addEventListener('mousewheel', (event) => {
    // if (alreadyFire) { return null };
    console.log(event)
    event.preventDefault();
    document.querySelector(".page-1").scrollIntoView({
      behavior: 'smooth'
    })
    alreadyFire = true;
    // je vais à l'ancre
  })
}


export { clickScroll, firstPageScroll };
