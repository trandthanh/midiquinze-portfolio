import "bootstrap";

import { loader } from "../components/loader";
import { color } from "../components/color";
import { firstScroll } from "../components/scroll";


color();

if (document.querySelector(".loader")) {
  loader();
};

firstScroll();


const hauteur = window.innerHeight;
console.log(hauteur); // => 763
const largeur = window.innerWidth;
console.log(largeur); // => 1332
