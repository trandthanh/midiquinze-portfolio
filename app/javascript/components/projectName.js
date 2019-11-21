const projectName = () => {
  const slides = document.querySelectorAll(".vertical-snap");
  slides.forEach((slide) => {
    slide.addEventListener('mouseover', (event) => {
      const projectName = document.querySelector("#project-name");
      const slash = document.querySelector("#slash");

      projectName.classList.remove('open');
      slash.classList.remove('open');

      const project = event.currentTarget.dataset.projectName;

      function addOpen() {
        projectName.classList.add('open');
        slash.classList.add('open');

        projectName.innerText = `${project}`;
        if (project === "") {
          slash.innerText = "";
        } else {
          slash.innerText = "/";
        }
      }

      setTimeout(addOpen, 500);


    })
  })
}

export { projectName };
