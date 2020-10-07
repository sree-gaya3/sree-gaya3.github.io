// Button effect used in project section

Array.from(document.querySelectorAll(".navigation-button")).forEach(item => {
  item.onclick = () => {
    item.parentElement.parentElement.classList.toggle("change");
  };
});

// Timeline

(function() {

  'use strict';
  var items = document.querySelectorAll(".timeline li");
  
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
      }
    }
  }

  // listen for events
  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);
})();

// Login-Register

const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

//sub heading

var otTitle = document.getElementById("textBox"),
		sSpan = document.getElementsByClassName('text').length,
		letters = document.getElementsByClassName('text'),
		whichLetter = 0,
		trailAmount = 7;


//Used to get random colors
function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

//Animate color change 
setInterval(function() {
	var rColor = getRandomColor();
	var tColor = getRandomColor();
	if (whichLetter < sSpan + trailAmount) {
		if (whichLetter > (trailAmount - 1)) {
			letters[(whichLetter - trailAmount)].style.color = 'whitesmoke';
		}
		if (whichLetter < sSpan) {
			letters[whichLetter].style.color = rColor;
			letters[whichLetter].style.textShadow = '0px 0px 10px ' + tColor;
		}
		whichLetter++;
	} else if (whichLetter > sSpan + (trailAmount - 1)) whichLetter = 0;
}, 75)

//Navigation-bar

const menuIcon = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("change1");
});