// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


//Game State Variables
let boardData = [                //The 3x3 grid (0 = empty, 1 = X, -1 = O)
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
];
let player = 1;                  //Current player (1 = X, -1 = O)
let gameOver = false;            //Whether the game has ended
let winner = null;               //Stores who won (1 = X, 2 = O, 0 = tie)


//HTML Elements
const cellElements = document.querySelectorAll(".cell");  //All 9 grid cells
const resultElement = document.getElementById("result");  //Text area for messages
const restartButton = document.getElementById("restart"); //Restart button

//Setup event listeners for player input
function setupEventListeners() {
  //When each cell is clicked, call placeMarker()
  cellElements.forEach((cell, index) => {
    cell.addEventListener("click", () => placeMarker(index));
  });

  //When the restart button is clicked, reset the game
  restartButton.addEventListener("click", restartGame);
}

//Draw the current game state
function draw() {
  drawMarkers();      //Update visual board (crosses/circles)
  checkResult();      //Check for winner or tie
  updateResultText(); //Update text showing whose turn it is
}

//Handle a player's move
function placeMarker(index) {
  //Convert 1D index (0–8) to 2D grid position (row, col)
  const row = Math.floor(index / 3);
  const col = index % 3;

  //Only place a marker if the game isn’t over and cell is empty
  if (!gameOver && boardData[row][col] === 0) {
    boardData[row][col] = player;  //Place the player's marker
    switchPlayer();                //Switch to the other player
    draw();                        //Update the game
  }
}

//Switch between players X and O
function switchPlayer() {
  player *= -1; //Multiplies by -1: 1 → -1, -1 → 1
}

//Draw all X and O markers on the grid
function drawMarkers() {
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      const cell = cellElements[row * 3 + col];
      cell.classList.remove("cross", "circle"); //Clear previous visuals

      //Add correct visual for X or O
      if (boardData[row][col] === 1) {
        cell.classList.add("cross");   //X
      } 
      else if (boardData[row][col] === -1) {
        cell.classList.add("circle");  //O
      }
    }
  }
}

//Check for a winner or tie
function checkResult() {
  winner = null; // Reset winner each check

  //Check rows and columns
  for (let i = 0; i < 3; i++) {
    const rowSum = boardData[i][0] + boardData[i][1] + boardData[i][2];
    const colSum = boardData[0][i] + boardData[1][i] + boardData[2][i];

    //If total = 3 → player X wins; if -3 → player O wins
    if (rowSum === 3 || colSum === 3) {
      winner = 1;
    }
    else if (rowSum === -3 || colSum === -3) {
      winner = 2;
    }
  }

  //Check diagonals
  const diag1 = boardData[0][0] + boardData[1][1] + boardData[2][2];
  const diag2 = boardData[0][2] + boardData[1][1] + boardData[2][0];

  if (diag1 === 3 || diag2 === 3) {
    winner = 1;
  }
  else if (diag1 === -3 || diag2 === -3) {
    winner = 2;
  }

  //Check for tie (board full, no winner)
  if (!winner && boardData.flat().every(cell => cell !== 0)) {
    winner = 0;
  }

  //If there’s a winner or tie, end the game
  if (winner !== null) {
    endGame(winner);
  }
}

//Show whose turn it is
function updateResultText() {
  if (!gameOver) {
    resultElement.innerText = `Player ${player === 1 ? "X" : "O"}'s turn`;
  }
}

//Game end (win or tie)
function endGame(win) {
  gameOver = true;

  if (win === 0) {
    resultElement.innerText = "It's a tie!";
  } 
  else {
    resultElement.innerText = `Player ${win === 1 ? "X" : "O"} wins!`;
  }
}

//Restart the game, reset everything
function restartGame() {
  // Reset board and state variables
  boardData = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ];
  player = 1;
  gameOver = false;
  winner = null;

  draw(); // Refresh board and text
}

//Start the game
setupEventListeners(); // Activate click listeners
draw();                // Draw initial empty board