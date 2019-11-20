import "bootstrap";

// Reviewed
import { mouseDownWhite, mouseMultipleDirectionsBlack } from "../components/mouse";
import { loader } from "../components/loader";
import { glitch } from "../components/glitch";
import { overlay } from "../components/overlay";
import { clickVerticalHorizontal } from "../components/clickVerticalHorizontal";
import { clickScroll } from "../components/clickScroll";


import { color } from "../components/color";
import { debounce } from "../components/debounce";
import { scrollVerticalHorizontal } from "../components/scrollVerticalHorizontal";
import { mobileOverlay } from "../components/mobileOverlay";

// import _ from "underscore";
// import { updateLayout } from "../components/debounceUnderscore";

if (document.querySelector(".cover0")) {
  mouseDownWhite();
}

if (document.querySelector(".projects-map")) {
  mouseMultipleDirectionsBlack();
}

if (document.querySelector(".loader")) {
  loader();
};

if (document.getElementById("mq-home")) {
  overlay();
  clickVerticalHorizontal();
  clickScroll();
}

glitch();



// if (document.querySelector(".cover0")) {
//   clickScroll();
//   // firstPageScroll();
//   const scrollZero = () => {
//     document.querySelector(".cover1").scrollIntoView({
//       behavior: 'smooth'
//     })
//   }

//   const pageZero = document.querySelector(".cover0");
//   pageZero.addEventListener("wheel", (e) => {
//     e.preventDefault();
//     debounce(scrollZero(), 0, true);
//   });
// }



// color();
// mobileOverlay();




