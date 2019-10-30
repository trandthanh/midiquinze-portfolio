const clickScroll = () => {
  const homeArrow = document.querySelector(".mq-home-arrow");
  homeArrow.addEventListener('click', (event) => {
    document.querySelector("#page-1").scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

const firstPageScroll = () => {
  const pageZero = document.querySelector("#page-0");
  pageZero.addEventListener('wheel', (event) => {
    event.preventDefault();
    document.querySelector("#page-1").scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

export { clickScroll, firstPageScroll };
