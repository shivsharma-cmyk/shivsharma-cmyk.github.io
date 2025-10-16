// Project Title
// Block Stacker
// Your Name
//Shivansh Sharma
// Date
//10/10/2025
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

const blockWidth = 300;
const blockheight = 30;
let r;
let g;
let b;

function setup() {
  createCanvas(windowWidth, windowHeight);
  r = random(255);
  g = random(255);
  b = random(255);
}

function draw() {
  background(220);
}

function spawnRectangle(){
  rect(windowWidth/2, windowHeight/2 , blockWidth, blockheight);
}