'use strict';
const TARGET_SIZE = 80;
const FIELD_WIDTH = 800;
const FIELD_HEIGTH = 600;

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function func1(elmnt) {
  elmnt.style.color = (elmnt.style.color == "red") ? "blue" : "red";
}

function start() {
  var elmnt = document.getElementById('target');
  elmnt.style.height = TARGET_SIZE + "px";
  elmnt.style.width = TARGET_SIZE + "px";
  var x_pos = getRandomArbitrary(TARGET_SIZE, FIELD_WIDTH - TARGET_SIZE);
  var y_pos = getRandomArbitrary(TARGET_SIZE, FIELD_HEIGTH - TARGET_SIZE);
  elmnt.style.left = x_pos + "px";
  elmnt.style.top = y_pos + "px";
  score = 0;
  document.getElementById('currScore').textContent = score;
  timer = setInterval(dec, 300);
}

function next() {
  var elmnt = document.getElementById('target');
  score += elmnt.offsetHeight;
  document.getElementById('currScore').textContent = score;
  elmnt.style.height = TARGET_SIZE + "px";
  elmnt.style.width = TARGET_SIZE + "px";
  var x_pos = getRandomArbitrary(TARGET_SIZE, FIELD_WIDTH - TARGET_SIZE);
  var y_pos = getRandomArbitrary(TARGET_SIZE, FIELD_HEIGTH - TARGET_SIZE);
  elmnt.style.left = x_pos + "px";
  elmnt.style.top = y_pos + "px";
}

function dec() {
  var elmnt = document.getElementById('target');
  elmnt.style.height =  elmnt.offsetHeight - 10 + "px";
  elmnt.style.width = elmnt.offsetWidth - 10 + "px";
  if (elmnt.offsetHeight < 10) {
    clearInterval(timer);
    alert("You score is " + score + " points!");
    document.getElementById('target').height = "0px";
  }
}

// function score() {
//   alert("You score is " + score + " points!");
//   document.getElementById('target').height = "0px";
// }


var score = 0;
var timer;
