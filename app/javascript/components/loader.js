const loader = () => {
  const test = () => {
    document.getElementById("midiquinze-gif-loader").classList.add("display-none");
    document.getElementById("midiquinze-main").classList.remove("display-none");
    document.getElementById("midiquinze-main").classList.add("display-block");

    document.querySelector(".midiquinze-footer").classList.add("position-fixed");
  }

  setTimeout(test, 5000);
}



export { loader };
// transition end
