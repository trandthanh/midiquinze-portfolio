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
import { thumbnailGrid } from "../components/thumbnailGrid";
import { accordionTitle } from "../components/activateAccordion";
import { messageTime, mobileMessageTime, horizontalTime } from "../components/time";

if (document.querySelector(".cover0")) {
  mouseDownWhite();
  clickScroll();
}

if (document.querySelector("#midiquinze-main")) {
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

if (document.querySelector(".midiquinze-card")) {
  thumbnailGrid();
}


if (document.getElementById("about-accordion")) {
  accordionTitle();
}

if (document.getElementById("time")) {
  messageTime();
}

if (document.getElementById("mobile-time")) {
  mobileMessageTime();
}

if (document.querySelectorAll(".horizontal-time")) {
  horizontalTime();
}


