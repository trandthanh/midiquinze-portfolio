import "bootstrap";

import { loader } from "../components/loader";
import { color } from "../components/color";
import { clickScroll } from "../components/clickScroll";
import { mouse } from "../components/mouse";


color();

if (document.querySelector(".loader")) {
  loader();
};


if (document.querySelector(".mq-home-arrow")) {
  clickScroll();
}


mouse();
