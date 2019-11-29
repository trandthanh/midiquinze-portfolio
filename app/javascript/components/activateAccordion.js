const accordionTitle = () => {
  const titles = document.querySelectorAll(".accordion-title");
  titles.forEach((title) => {
    title.addEventListener('click', (event) => {
      titles.forEach((t) => {
        if (title === t) {
          title.classList.toggle("activate-title");
          // title.firstChild.nextElementSibling.toggle("hover-border-bottom-100-gold");
          title.childNodes[1].classList.toggle("hover-border-bottom-100-gold");
        } else {
          t.classList.remove("activate-title");
        }
      })
    })
  })
}

export { accordionTitle }
