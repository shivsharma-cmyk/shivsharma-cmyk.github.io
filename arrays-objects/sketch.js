// Project Title
// Rock Paper Scissor
// Your Name
//Shivansh Sharma
// Date
//10/10/2025
// Extra for Experts:
// - describe what you did to take this project "above and beyond"  

let rectX = 300;
let rectY = 275;
let w = 250;
let h = 125;
let gameState = "start";
let choices = ["rock", "paper", "scissors"];
let results = [];

let player = {
  name: "Player",
  choice: "",
  score: 0
};

let computer = {
  name: "Computer",
  choice: "",
  score: 0
};
let message = "Click a button to start!";
let gameOver = false;

function setup() {
  createCanvas(800, 600);
  textAlign(CENTER, CENTER);
  textSize(16);
}

function draw() {
  if (gameState === "start") {
    background("lightblue");
    showButton();
    showText();
    showInstruction();
  }
  if (gameState === "ball") {  
    background("lightblue");
    showTitle();
    showScore();
    showMessage();
    showButtons();
    checkMouseClick();
  }  
}

// Title
function showTitle() {
  textSize(40);
  fill(0);
  text("Rock Paper Scissors", width / 2, 80);
}

// score for computer and player
function showScore() {
  textSize(24);
  text("Player: " + player.score + "   Computer: " + computer.score, width / 2, 160);
}

// Title in the game
function showMessage() {
  textSize(22);
  fill(0);
  text(message, width / 2, 250);
}

// Buttons 
function showButtons() {
  if (!gameOver) {
    drawButton(250, 450, "ROCK 🪨");
    drawButton(400, 450, "PAPER 📄");
    drawButton(550, 450, "SCISSORS ✂️");
  } 
  else {
    fill(255);
    rectMode(CENTER);
    rect(width / 2, 450, 200, 60, 15);
    fill(0);
    textSize(20);
    text("Restart Game", width / 2, 450);
  }
}

// Drawing of how the button will look
function drawButton(x, y, label) {
  fill(255);
  stroke(0);
  strokeWeight(2);
  rectMode(CENTER);
  rect(x, y, 150, 70, 15);
  noStroke();
  fill(0);
  textSize(20);
  text(label, x, y);
}

// Button the player use for the game and with comp results
function checkMouseClick() {
  if (mouseIsPressed) {
    if (!gameOver) {
      // Rock button
      if (mouseX > 175 && mouseX < 325 && mouseY > 415 && mouseY < 485) {
        player.choice = "rock";
        playRound();
      }
      // Paper button
      else if (mouseX > 325 && mouseX < 475 && mouseY > 415 && mouseY < 485) {
        player.choice = "paper";
        playRound();
      }
      // Scissors button
      else if (mouseX > 475 && mouseX < 625 && mouseY > 415 && mouseY < 485) {
        player.choice = "scissors";
        playRound();
      }
    } 
    else {
      // Restart button clicked
      if (mouseX > width / 2 - 100 && mouseX < width / 2 + 100 && mouseY > 420 && mouseY < 480) {
        resetGame();
      }
    }
  }
}

// Comp random play and its turnouts
function playRound() {
  computer.choice = random(choices);
  let result = "";

  if (player.choice === computer.choice) {
    result = "It's a tie!";
  } 
  else if (
    (player.choice === "rock" && computer.choice === "scissors") ||
    (player.choice === "paper" && computer.choice === "rock") ||
    (player.choice === "scissors" && computer.choice === "paper")
  ) {
    result = "You win this round!";
    player.score++;
  } 
  else {
    result = "Computer wins this round!";
    computer.score++;
  }

  message = player.choice + " vs " + computer.choice + " → " + result;
  results.push(message);

  // Check if someone reached 10 points
  if (player.score >= 10) {
    message = "🎉 You won the game! 🎉";
    gameOver = true;
  } 
  else if (computer.score >= 10) {
    message = "💻 Computer won the game! 💻";
    gameOver = true;
  }

  mouseIsPressed = false;
}

// Reset button to reset the game
function resetGame() {
  player.score = 0;
  computer.score = 0;
  results = [];
  message = "Click a button to start!";
  gameOver = false;
  mouseIsPressed = false;
}

// White button
function showButton() {
  fill("white");
  rect(rectX, rectY, w, h);
}

// Button, if pressed takes you into the game
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
  text("Start", width/1.9, 335);
  text("Rock Paper Scissors", width/2, 150);
}

//Text for the instruction on the start screen
function showInstruction(){
  textSize(30);
  textStyle(BOLDITALIC);
  fill("black");
  text("Press a button and try to win against the comp",
    width/2, 500);
}