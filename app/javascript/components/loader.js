const loader = () => {
  document.querySelector(".loader").addEventListener('animationend', (event) => {
    document.getElementById("midiquinze-gif-loader").classList.add("display-none");
    document.getElementById("midiquinze-main").classList.remove("display-none");
    document.getElementById("midiquinze-main").classList.add("display-block");
  })
}

export { loader };
// transition end
