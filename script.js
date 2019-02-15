
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

import 'carousel';

/*
  Put the JavaScript code you want below.
*/

document.getElementById("staticEmail").innerHTML = document.getElementById("exampleInputEmail1").value

// Activate Carousel
$('.carousel').carousel({
  interval: 2000
})
