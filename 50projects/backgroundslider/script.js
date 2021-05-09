const body = document.body;
const slides = document.querySelectorAll(".slide");
const letftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

let activeSlide = 0;
setBgToBody();

function setBgToBody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}
