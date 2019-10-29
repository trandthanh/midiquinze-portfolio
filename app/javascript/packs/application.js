import "bootstrap";

import { loader } from "../components/loader";
import { color } from "../components/color";
import { scroll } from "../components/scroll";
import { scrollTwo } from "../components/scrollTwo";


color();

if (document.querySelector(".loader")) {
  loader();
};

scroll();
// scrollTwo();


const hauteur = window.innerHeight;
console.log(hauteur); // => 763
const largeur = window.innerWidth;
console.log(largeur); // => 1332



// $('#page-0').on('wheel', function(){

//   var dest = $('#page-1');

//   $("html, body").animate({
//     scrollTop: $(dest).offset().top + (-140)
//   }, 2000);
// })

