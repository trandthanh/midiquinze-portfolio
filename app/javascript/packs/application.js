import "bootstrap";
// import "animate.css";

import { mouseDownWhite, mouseMultipleDirectionsBlack } from "../components/mouse";
import { loader } from "../components/loader";
// import { glitch } from "../components/glitch";
import { overlay } from "../components/overlay";
import { clickVerticalHorizontal } from "../components/clickVerticalHorizontal";
import { clickScroll } from "../components/clickScroll";
import { projectName } from "../components/projectName";
import { color } from "../components/color";
import { mobileOverlay } from "../components/mobileOverlay";
import { buttonOverlay } from "../components/buttonOverlay";

if (document.querySelector(".cover0")) {
  mouseDownWhite();
  clickScroll();
}

if (document.querySelector(".loader")) {
  loader();
};

if (document.getElementById("mq-home")) {
  overlay();
  projectName();
  clickVerticalHorizontal();
  mouseMultipleDirectionsBlack();
}

// glitch();

if (document.querySelector(".midiquinze-navbar-mobile")) {
  mobileOverlay();
}

buttonOverlay();

// color();




