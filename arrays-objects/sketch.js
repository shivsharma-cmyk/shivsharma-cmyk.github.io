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
let rectX = 760;
let rectY = 350;
let w = 250;
let h = 125;
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
    background("turquoise");
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

function showButton() {
  fill("white");
  rect(rectX, rectY, w, h);
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

//Title and start text for the start screen
function showText() {
  textSize(100);
  textStyle(BOLDITALIC);
  fill("black");
  text("Start", width/2.5, 450);
  text("Block Stack", width/3, 200);
}

//Text for the instruction on the start screen
function showInstruction(){
  textSize(50);
  textStyle(BOLDITALIC);
  fill("black");
  text("Use the arrow keys to stack the blocks to the top",
    width/5, 700);
}