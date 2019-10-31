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


const withoutWheel = () => {
  // const test = () => {
  //   // event.preventDefault();
  //   document.querySelector(".page-1").scrollIntoView({
  //     behavior: 'smooth'
  //   })
  // }

  // const no = () => {
  //   const home = document.querySelector("#mq-home");
  //   home.classList.remove("position-fixed");
  // }
  // const page0 = document.querySelector(".page-0");
  // page0.addEventListener('wheel', (event) => {
  //   // if (window.scrollY > 0) {
  //     console.log(event);
  //     // setTimeout(no, 100);
  //     event.preventDefault();
  //     setTimeout(test, 20);
  //   // } else {
  //   //   console.log('no')
  //   // }
  // })
}


export { clickScroll, firstPageScroll, withoutWheel };
