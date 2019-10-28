import "bootstrap";

import { loader } from "../components/loader";
import { color } from "../components/color";


color();

if (document.querySelector(".loader")) {
  loader();
};
