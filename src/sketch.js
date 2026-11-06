const mapSize = 800;
const gridDivision = 50;
let button;

function setup() {
  createCanvas(mapSize, mapSize);
  background(220);

  textSize(70);
  textAlign(CENTER, CENTER);
  textFont('Dungeon Quest')
  fill(0);

  text('MageQuest', width/2, height/2);
  button = createButton('PLAY');
  button.position(380, 450);
}

button.mousePressed(draw());

function draw() {
  background(220);
  drawGrid();
  ellipse(player.getX(),player.getY(), playerSize, playerSize);
  
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