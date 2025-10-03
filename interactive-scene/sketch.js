// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"



let xPos = 200;
let yPos = 0;
let speed = 5;
let score = 0;
let rectX = 100;
let rectY = 150;
let w = 200;
let h = 100;
let gameState = "start";

function setup() {
  createCanvas(400, 400);
}

function draw(){
  if (gameState === "start") {
    background("blue");
    showButton();
    showText();
    showInstruction();
  }
  
  if (gameState === "ball") {
    background(220);
    noStroke();
    showCircle();
    ballDrop();
    ballPoint();
    scoreText();
    rectBox();
  }
}  
    
function showCircle(){
  fill(0,0,255);
  circle(xPos, yPos += speed, 50);  
}

function ballDrop(){
  if (yPos > height){
    yPos = 0;
    xPos = random(width);
    speed -= 1; 
  }
}  

function ballPoint(){
  if (dist(xPos, yPos, mouseX, 350)< 25){
    yPos = 0;
    xPos = random(width);
    speed += 1;
    score += 1;
  }
}

function scoreText(){
  textSize(25);
  text("Score:", 25, 50);
  text(score, 100, 50);
}

function rectBox(){
  rectMode(CENTER);
  rect(mouseX,350, 100, 25);
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

function showText() {
  textSize(75);
  textStyle(BOLDITALIC);
  fill("black");
  text("Start", width/3.5, 225);
  text("Ball Catch", width/20, height/4)
}
function showInstruction(){
  textSize(20);
  textStyle(BOLDITALIC);
  fill("black");
  text("Use mouse to control slider to catch the balls",
      0, 350);
}