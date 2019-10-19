const loader = () => {
  document.querySelector(".loader").addEventListener('animationend', (event) => {
    document.getElementById("midiquinze-gif-loader").classList.add("display-none");
    document.getElementById("home").classList.remove("display-none");
    document.getElementById("home").classList.add("display-block");
  })
}

export { loader };
// transition end
