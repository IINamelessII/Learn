'use strict';
const TARGET_SIZE = 80;
const FIELD_WIDTH = 1000;
const FIELD_HEIGTH = 600;


function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function func1(elmnt) {
  elmnt.style.color = (elmnt.style.color == "red") ? "blue" : "red";
}

function start(difficulty) {
  diff = difficulty;
  var elmnt = document.getElementById('target');
  elmnt.style.height = TARGET_SIZE + "px";
  elmnt.style.width = TARGET_SIZE + "px";
  var x_pos = getRandomArbitrary(TARGET_SIZE, FIELD_WIDTH - TARGET_SIZE);
  var y_pos = getRandomArbitrary(TARGET_SIZE, FIELD_HEIGTH - TARGET_SIZE);
  elmnt.style.left = x_pos + "px";
  elmnt.style.top = y_pos + "px";
  document.getElementById('currScore').style.fontSize = "56px";
  score = 0;
  document.getElementById('currScore').textContent = score;
  timer = setInterval(dec, 100);
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
  elmnt.style.height =  elmnt.offsetHeight - diff + "px";
  elmnt.style.width = elmnt.offsetWidth - diff + "px";
  if (elmnt.offsetHeight < diff) {
    over();
  }
}

function over() {
  clearInterval(timer);
  var elmnt = document.getElementById('target');
  elmnt.style.height = "0px";
  elmnt.style.width = "0px";
  document.getElementById('scores').textContent = "You last score is " + score + " points!";
}


var score = 0;
var timer;
var diff;
