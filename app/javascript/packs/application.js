import "bootstrap";

import { loader } from "../components/loader";
import { color } from "../components/color";
import { clickScroll, firstPageScroll, scrollTo, withoutWheel } from "../components/clickScroll";
import { mouse } from "../components/mouse";
import { overlay } from "../components/overlay";
import { debounce } from "../components/debounce";


color();

if (document.querySelector(".loader")) {
  loader();
};


if (document.querySelector(".page-0")) {
  clickScroll();
  // firstPageScroll();
  mouse();
}


overlay();
withoutWheel();
