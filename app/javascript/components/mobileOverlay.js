const mobileOverlay = () => {
  /* Open when someone clicks on the span element */
  function openNav() {
    document.getElementById("midiquinze-mobile-navbar-overlay").style.height = "95vh";
    // document.querySelector(".midiquinze-navbar-mobile").classList.add("background-color-black");
  }

  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav() {
    document.getElementById("midiquinze-mobile-navbar-overlay").style.height = "0%";
    // document.querySelector(".midiquinze-navbar-mobile").classList.remove("background-color-black");
  }

  const mobileOpenButton = document.querySelector("#burger-openbtn");
  const mobileCloseButton = document.querySelector("#burger-closebtn");

  mobileOpenButton.addEventListener('click', (event) => {
    if (document.getElementById("midiquinze-mobile-navbar-overlay").style.height === "100%") {
      closeNav();
    } else {
      openNav();
    }
  })

  mobileCloseButton.addEventListener('click', (event) => {
    closeNav();
  })

  // mobileCloseButton.addEventListener('click', (event) => {
  //   closeNav();
  // })
}

export { mobileOverlay }
