// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"



let x;
let y;
let dx; //or use xSpeed
let dy;
let r;
let g;
let b;
let radius = 75;
let rectx = 100;
let recty = 150;
let w = 200;
let h = 100;
let gameState = "start";

function setup() {
  createCanvas(400, 400);
  noStroke();
  x = width/2;
  y = height/2;
  dx = random(-3, 3);
  dy = random(-3, 3);
  randomizeColor();
}

function draw() {
  if (gameState === "start") {
    background("blue");
    showButton();
    showText();
  }
  
  if (gameState === "ball") {
    background("red");
    moveCircle();
    bounceIfNeeded();
    showCircle();
    // console.log(y);
  }
}

function moveCircle() {
  x = x + dx;
  y += dy;
}

function bounceIfNeeded() {
  //should i bounce?
  if (x < 0 + radius || x > width - radius) {
    dx = dx * -1;
    randomizeColor();
  }
  if (y < 0 + radius || y > height - radius) {
    dy = dy * -1;
    randomizeColor();
  }
}

function randomizeColor() {
  r = random(255);
  g = random(255);
  b = random(255);
}

function showCircle() {
  fill(r, g, b);
  circle(x, y, radius*2);
}

function showButton() {
  fill("white");
  rect(rectx, recty, w, h);
  
}

function mousePressed() {
  if (gameState === "start") {
    if (mouseX >= rectx && mouseX <= rectx + w && 
        mouseY >= recty && mouseY <= recty + h) {
      gameState = "ball";
    }
  }
}

function showText() {
  textSize(75);
  textStyle(BOLDITALIC);
  fill("black");
  text("Start", width/3.5, 225);
  text("F1", width/2.5, height/4);
}