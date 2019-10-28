import "bootstrap";

import { loader } from "../components/loader";
import { color } from "../components/color";
// import { scroll } from "../components/scroll";


color();

if (document.querySelector(".loader")) {
  loader();
};

// scroll();
