import "bootstrap";

import { loader } from "../components/loader";
import { color } from "../components/color";
import { clickScroll, firstPageScroll, scrollTo, withoutWheel } from "../components/clickScroll";
import { mouse } from "../components/mouse";
import { overlay } from "../components/overlay";
import { debounce } from "../components/debounce";
// import _ from "underscore";

// import { updateLayout } from "../components/debounceUnderscore";


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
// withoutWheel();


// Add the event listener
const pageZero = document.querySelector(".page-0")
pageZero.addEventListener("wheel", (e) => {
  e.preventDefault();
  console.log(e);

  const thingsToDo = () => {
    // Does all the layout updating here
    document.querySelector(".page-1").scrollIntoView({
      behavior: 'smooth'
    })
  }

  debounce(thingsToDo(), 0, true);
});
