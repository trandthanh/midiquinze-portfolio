const glitch = () => {
  const logo = document.getElementById("mq-logo");

  const glitchedLogo = document.getElementById("mq-glitch-logo");
  const glitchesArray = Object.values(glitchedLogo.dataset);

  logo.addEventListener("mouseenter", (event) => {
    const randomGlitch = glitchesArray[Math.floor(Math.random()*glitchesArray.length)];
    // console.log(randomGlitch);

    logo.classList.add("display-none");
    glitchedLogo.src = randomGlitch;
    glitchedLogo.classList.remove("display-none");
  });

  glitchedLogo.addEventListener("mouseout", (event) => {
    glitchedLogo.classList.add("display-none");
    logo.classList.remove("display-none");
  })
}

export { glitch };
