const scrollThree = () => {
  document.addEventListener('wheel',function (event){
    //only vertical scroll
    if (event.deltaY > 0)
    {
      event.preventDefault();
      smoothScroll(document.documentElement,5000,5)
    }
  }, { passive: false})
  function smoothScroll (domElement,pixel,delay)
  {
    const intervalToRepeat = 25;
    const step = (intervalToRepeat * pixel) / delay;
    if ( step < pixel)
    {
      domElement.scrollTop += step;
      setTimeout(function (){
        smoothScroll(domElement,pixel - step,delay)
      },intervalToRepeat);
    }


  }
}

export { scrollThree };
