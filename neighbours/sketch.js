// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

const CELL_SIZE = 50;
let grid;
let rows;
let cols;

function setup() {
  createCanvas(windowWidth, windowHeight);
  cols = Math.floor(width/ CELL_SIZE);
  rows = Math.floor(height/CELL_SIZE);
  grid = generateRandomGrid(cols, rows);
}

function draw() {
  background(220);
}

function generateRandomGrid(cols, rows) {
  let newGrid = [];
  for ( let y = 0; y < rows; y++) {
    newGrid.push([]);
    for (let x = 0; x < cols; x++) {
      if (random(100) < 50) {
        newGrid[y].push(1);
      }
      else 
    }
  }
}
