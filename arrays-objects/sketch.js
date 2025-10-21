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
let rectX = 100;
let rectY = 150;
let w = width/2;
let h = height/2;
let gameState = "start";
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
  if (gameState === "start") {
    background("lightblue");
    showButton();
    showText();
    showInstruction();
  }

  if (gameState === "ball") {
    background(220);
    spawnRectangle();
  }
}

function spawnRectangle() {
  fill("black");
  rect(windowWidth/2, windowHeight - blockheight, blockWidth, blockheight);
}

function dropRectangle() {
  
}

function mousePressed() {
  if (gameState === "start") {
    if (mouseX >= rectX && 
        mouseX <= rectX + w &&
        mouseY >= rectY && 
        mouseY <= rectY + h) {
      gameState = "ball";
    }
  }
}

function showButton() {
  fill("white");
  rect(rectX, rectY, w, h);
}

//Title and start text for the start screen
function showText() {
  textSize(75);
  textStyle(BOLDITALIC);
  fill("black");
  text("Start", width/3.5, 225);
  text("Block Stack", width/2, height/2);
}

//Text for the instruction on the start screen
function showInstruction(){
  textSize(25);
  textStyle(BOLDITALIC);
  fill("black");
  text("Use the arrow keys to \n stack the blocks to the top",
    width/10, 350);
}