const loader = () => {
  const timer = () => {
    setTimeout(showPage, 6000)
  }
  const showPage = () => {

    document.getElementById("midiquinze-gif-loader").style.display = "none";
    document.getElementById("home").style.display = "block";
  }

  timer();
}

export { loader };
// transition end
