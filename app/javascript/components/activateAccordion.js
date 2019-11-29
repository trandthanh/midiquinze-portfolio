const accordionTitle = () => {
  const titles = document.querySelectorAll(".accordion-title");
  titles.forEach((title) => {
    title.addEventListener('click', (event) => {
      titles.forEach((t) => {
        if (title === t) {
          title.classList.toggle("activate-title");
        } else {
          t.classList.remove("activate-title");
        }
      })
    })

    // title.addEventListener('mouseover', (event) => {
    //   if (title.classList.contains("activate-title")) {
    //     console.log(title.firstChild);
    //     title.firstChild.classList.remove("hover-border-bottom-100-gold")
    //   } else {
    //     title.firstChild.classList.add("hover-border-bottom-100-gold")
    //   }
    // })
  })
}

export { accordionTitle }
