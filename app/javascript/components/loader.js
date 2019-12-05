const loader = () => {
  const appear = () => {
    document.getElementById("midiquinze-gif-loader").classList.add("display-none");
    document.getElementById("midiquinze-main").classList.remove("display-none");
    document.getElementById("midiquinze-main").classList.add("display-block");

    document.querySelector(".midiquinze-footer").classList.remove("display-none");
    document.querySelector(".midiquinze-footer").classList.add("position-fixed");
  }

  if (document.querySelector("#midiquinze-gif-loader")) {
    setTimeout(appear, 4000);
  } else {
    document.getElementById("midiquinze-main").classList.remove("display-none");
  }

}



export { loader };
// transition end
