const mapSize = 800;
const gridDivision = 50;

function setup() {
  createCanvas(mapSize, mapSize);
}

function draw() {
  background(220);
  drawGrid();
}

/* Iterates through the X and Y coords to create a line every 50 spaces */
function drawGrid() {
  stroke(1);

  /* Vertical lines*/
  for (let i = 0; i < mapSize + 1; i += gridDivision){
    line(i, 0, i, mapSize);
  }

  /* Horizontal lines */
  for (let i = 0; i < mapSize + 1; i += gridDivision){
    line(0, i, mapSize, i);
  }
}