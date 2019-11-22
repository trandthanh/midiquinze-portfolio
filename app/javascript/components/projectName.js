const projectName = () => {
  const slides = document.querySelectorAll(".vertical-snap");
  const slash = document.querySelector("#slash");

  slides.forEach((slide) => {
    slide.addEventListener('mouseenter', (event) => {
      const projectName = document.querySelector("#project-name");

      projectName.classList.remove('open');

      const project = event.currentTarget.dataset.projectName;

      function addOpen() {
        projectName.classList.add('open');

        if (project !== "") {
          projectName.innerHTML = `${project} <span id="slash" class="ml-16px">/</span>`;
        } else {
          projectName.innerText = "";
        }
      }

      setTimeout(addOpen, 100);
    })
  })
}

export { projectName };
