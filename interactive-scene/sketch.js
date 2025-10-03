// Project Title
//Ball Catch
// Your Name
//Shivansh Sharma
// Date
//10/3/2025
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//All the variables used in the code.
let xPos = 200;
let yPos = 0;
let speed = 5;
let score = 0;
let rectX = 100;
let rectY = 150;
let w = 200;
let h = 100;
let gameState = "start";

//Making the canvas.
function setup() {
  createCanvas(400, 400);
}

//Using all the functions in it and divided it with start and game screen
function draw(){
  if (gameState === "start") {
    background("lightblue");
    showButton();
    showText();
    showInstruction();
  }
  
  if (gameState === "ball") {
    background("gray");
    noStroke();
    showCircle();
    ballDrop();
    ballPoint();
    scoreText();
    rectBox();
  }
}  

//Making the balls for the game
function showCircle(){
  fill("lightblue");
  circle(xPos, yPos += speed, 50);  
}

//Droping the ball down to catch
function ballDrop(){
  if (yPos > height){
    yPos = 0;
    xPos = random(width);
    speed -= 1; 
  }
}  

//If the ball caught score a point and increase speed
function ballPoint(){
  if (dist(xPos, yPos, mouseX, 350)< 25){
    yPos = 0;
    xPos = random(width);
    speed += 1;
    score += 1;
  }
}

//Making the score board
function scoreText(){
  textSize(25);
  text("Score:", 25, 50);
  text(score, 100, 50);
}

//Making the slider to catch the balls
function rectBox(){
  rectMode(CENTER);
  rect(mouseX,350, 100, 25);
}  

//Start button on start screen
function showButton() {
  fill("white");
  rect(rectX, rectY, w, h);
}

//Making the start button work if pressed
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
  textSize(75);
  textStyle(BOLDITALIC);
  fill("black");
  text("Start", width/3.5, 225);
  text("Ball Catch", width/20, height/4);
}

//Text for the instruction on the start screen
function showInstruction(){
  textSize(25);
  textStyle(BOLDITALIC);
  fill("black");
  text("Use mouse to control slider \n      to catch the balls",
    width/10, 350);
}