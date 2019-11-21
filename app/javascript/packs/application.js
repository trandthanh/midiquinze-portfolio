import "bootstrap";

import { mouseDownWhite, mouseMultipleDirectionsBlack } from "../components/mouse";
import { loader } from "../components/loader";
import { glitch } from "../components/glitch";
import { overlay } from "../components/overlay";
import { clickVerticalHorizontal } from "../components/clickVerticalHorizontal";
import { clickScroll } from "../components/clickScroll";
import { projectName } from "../components/projectName";

import { color } from "../components/color";
import { mobileOverlay } from "../components/mobileOverlay";

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
  projectName();
}

clickScroll();
clickVerticalHorizontal();

glitch();


// color();
// mobileOverlay();




