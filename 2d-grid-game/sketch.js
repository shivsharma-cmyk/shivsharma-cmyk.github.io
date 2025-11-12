// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let boardData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
];
let player = 1;
let gameOver = false;
let winner = null;


const cellElements = document.querySelectorAll(".cell");
const resultElement = document.getElementById("result");
const restartButton = document.getElementById("restart");


function setupEventListeners() {
  cellElements.forEach((cell, index) => {
    cell.addEventListener("click", () => placeMarker(index));
  });

  restartButton.addEventListener("click", restartGame);
}


function draw() {
  drawMarkers();
  checkResult();
  updateResultText();
}


function placeMarker(index) {
  const row = Math.floor(index / 3);
  const col = index % 3;

  if (!gameOver && boardData[row][col] === 0) {
    boardData[row][col] = player;
    switchPlayer();
    draw();
  }
}


function switchPlayer() {
  player *= -1;
}


function drawMarkers() {
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      const cell = cellElements[row * 3 + col];
      cell.classList.remove("cross", "circle");

      if (boardData[row][col] === 1) {
        cell.classList.add("cross");  
      } 
      else if (boardData[row][col] === -1) {
        cell.classList.add("circle"); 
      }
    }
  }
}


function checkResult() {
  winner = null;

  for (let i = 0; i < 3; i++) {
    const rowSum = boardData[i][0] + boardData[i][1] + boardData[i][2];
    const colSum = boardData[0][i] + boardData[1][i] + boardData[2][i];

    if (rowSum === 3 || colSum === 3) {
      winner = 1;
    }
    else if (rowSum === -3 || colSum === -3) {
      winner = 2;
    }
  }

  const diag1 = boardData[0][0] + boardData[1][1] + boardData[2][2];
  const diag2 = boardData[0][2] + boardData[1][1] + boardData[2][0];

  if (diag1 === 3 || diag2 === 3) {
    winner = 1;
  }
  else if (diag1 === -3 || diag2 === -3) {
    winner = 2;
  }
  if (!winner && boardData.flat().every(cell => cell !== 0)) {
    winner = 0;
  }
  if (winner !== null) {
    endGame(winner);
  }
}


function updateResultText() {
  if (!gameOver) {
    resultElement.innerText = `Player ${player === 1 ? "X" : "O"}'s turn`;
  }
}


function endGame(win) {
  gameOver = true;
  if (win === 0) {
    resultElement.innerText = "It's a tie!";
  }
  else {
    resultElement.innerText = `Player ${win === 1 ? "X" : "O"} wins!`;
  }
}


function restartGame() {
  boardData = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ];
  player = 1;
  gameOver = false;
  winner = null;

  draw(); 
}

setupEventListeners();
draw();