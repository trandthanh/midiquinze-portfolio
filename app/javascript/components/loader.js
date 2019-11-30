const loader = () => {
  const appear = () => {
    document.getElementById("midiquinze-gif-loader").classList.add("display-none");
    document.getElementById("midiquinze-main").classList.remove("display-none");
    document.getElementById("midiquinze-main").classList.add("display-block");

    document.querySelector(".midiquinze-footer").classList.add("position-fixed");
  }

  setTimeout(appear, 4000);
}



export { loader };
// transition end
