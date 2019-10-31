import "bootstrap";

import { loader } from "../components/loader";
import { color } from "../components/color";
import { clickScroll, firstPageScroll, scrollTo, withoutWheel } from "../components/clickScroll";
import { mouse } from "../components/mouse";
import { overlay } from "../components/overlay";
import { debounce } from "../components/debounce";
import { clickVerticalHorizontal } from "../components/clickVerticalHorizontal";
// import _ from "underscore";

// import { updateLayout } from "../components/debounceUnderscore";



if (document.querySelector(".loader")) {
  loader();
};


if (document.querySelector(".page-0")) {
  clickScroll();
  // firstPageScroll();
  mouse();
  const scrollZero = () => {
    document.querySelector(".page-1").scrollIntoView({
      behavior: 'smooth'
    })
  }

  const pageZero = document.querySelector(".page-0");
  pageZero.addEventListener("wheel", (e) => {
    e.preventDefault();
    // console.log(e);
    debounce(scrollZero(), 0, true);
  });
}

if (document.querySelector("#mq-home")) {
  clickVerticalHorizontal();
}


color();
overlay();



