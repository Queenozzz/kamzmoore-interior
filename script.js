//--- parralax images ---

var image1 = document.getElementsByClassName('image1');
var image2= document.getElementsByClassName('image2');
var image3 = document.getElementsByClassName('image3');
var image4 = document.getElementsByClassName('image4');
var image5 = document.getElementsByClassName('image5');

//--- hide and show navbar ---
const nav = document.querySelector(".nav");
let lastScrollY = window.scrollY;

//--- parralax images ---
new simpleParallax(image1, {
    orientation: 'up right'
    ,overflow: true,
    scale: 1.9,
    delay: 0.35
});

new simpleParallax(image2, {
	scale: 2.1
    ,overflow: true,
    delay: 0.2
});

new simpleParallax(image3, {
    orientation: 'up left'
    ,overflow: true,
    scale: 1.9,
    delay: 0.4
});

new simpleParallax(image4, {
    scale: 2.0,
	delay: .6,
    overflow:true
	
});

new simpleParallax(image5, {
    scale: 2.0,
	delay: .6,
    overflow:true
	
});

//--- hide and show navbar ---
window.addEventListener("scroll", () => {
  if(lastScrollY < window.scrollY) {
    nav.classList.add("nav-hidden");
  } else{
    nav.classList.remove("nav-hidden");
  }

  lastScrollY = window.scrollY;
});