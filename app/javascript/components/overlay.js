const overlay = () => {
  /* Open when someone clicks on the span element */
  function openNav() {
    document.querySelector("#cover-27-rosiers").style.width = "50%";
  }

  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav() {
    document.querySelector("#cover-27-rosiers").style.width = "0%";
  }

  document.querySelector("#test-button").addEventListener('click', (event) => {
    openNav();
  })

  document.querySelector(".closebtn").addEventListener('click', (event) => {
    closeNav();
  })
}

export { overlay }
