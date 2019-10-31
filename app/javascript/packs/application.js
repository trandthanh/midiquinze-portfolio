import "bootstrap";

import { loader } from "../components/loader";
import { color } from "../components/color";
import { clickScroll, firstPageScroll, scrollTo } from "../components/clickScroll";
import { mouse } from "../components/mouse";
import { overlay } from "../components/overlay";


color();

if (document.querySelector(".loader")) {
  loader();
};


if (document.querySelector(".page-0")) {
  clickScroll();
  firstPageScroll();
  mouse();
}


overlay();
