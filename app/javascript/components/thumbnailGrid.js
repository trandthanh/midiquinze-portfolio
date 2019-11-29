const thumbnailGrid = () => {

  const row = document.querySelector("#card-row");
  const thumbnails = document.querySelectorAll(".thumbnail");

  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener('mouseover', (event) => {
      thumbnails.forEach((thumb) => {
        if (thumb !== thumbnail) {
          thumb.classList.add("thumbnail-opacity");
        } else {
          thumb.classList.remove("thumbnail-opacity");
        }
      })
    })

    row.addEventListener("mouseleave", (event) => {
      thumbnails.forEach((thumb) => {
        thumb.classList.remove("thumbnail-opacity");
      })
    })
  })

  const cards = document.querySelectorAll(".thumbnail-wrapper");
  cards.forEach((card) => {
    card.addEventListener('mouseover', (event) => {
      cards.forEach((c) => {
        if (card !== c) {
          c.classList.add("thumbnail-background-color-white");
        } else {
          c.classList.remove("thumbnail-background-color-white");
        }
      })
    })

    row.addEventListener("mouseleave", (event) => {
      cards.forEach((c) => {
        c.classList.remove("thumbnail-background-color-white");
      })
    })
  })
}

export { thumbnailGrid };
