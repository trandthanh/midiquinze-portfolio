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

export { clickScroll };
