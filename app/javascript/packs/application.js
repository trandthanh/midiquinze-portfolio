import "bootstrap";

import { loader } from "../components/loader";
import { color } from "../components/color";
import { clickScroll, firstPageScroll, scrollTo, withoutWheel } from "../components/clickScroll";
import { mouse } from "../components/mouse";
import { overlay } from "../components/overlay";
import { debounce } from "../components/debounce";
import { clickVerticalHorizontal } from "../components/clickVerticalHorizontal";
import { scrollVerticalHorizontal } from "../components/scrollVerticalHorizontal";
// import _ from "underscore";

// import { updateLayout } from "../components/debounceUnderscore";



if (document.querySelector(".loader")) {
  loader();
};


if (document.querySelector(".cover0")) {
  clickScroll();
  // firstPageScroll();
  mouse();
  const scrollZero = () => {
    document.querySelector(".cover1").scrollIntoView({
      behavior: 'smooth'
    })
  }

  const pageZero = document.querySelector(".cover0");
  pageZero.addEventListener("wheel", (e) => {
    e.preventDefault();
    debounce(scrollZero(), 0, true);
  });
}

if (document.querySelector("#mq-home")) {
  clickVerticalHorizontal();
  scrollVerticalHorizontal();
}


color();
overlay();



