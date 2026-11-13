let loaded = false;
const mapSize = 800;
const gridDivision = 50;
let button;
let isRunning = false;
let player;

async function setup() {
  createCanvas(mapSize, mapSize);
  background(220);

  player = new Player(50, 50, 5, 10);
  playerController = new PlayerController(player);

  textSize(70);
  textAlign(CENTER, CENTER);
  fill(0);

  text('MageQuest', width / 2, height / 2);
  button = createButton('PLAY');
  button.position(380, 450);
  button.mouseClicked(startGame);

  loaded = true;
}


function startGame() {
  isRunning = true;
  button.remove();
}


function draw() {
  if (isRunning) {
    background(220);
    drawGrid();
  }
  if (isRunning) {
    if (loaded) {
      (player);
      drawPlayer();
    }
  }
}

/* Iterates through the X and Y coords to create a line every 50 spaces */
function drawGrid() {
  stroke(1);

  /* Vertical lines*/
  for (let i = 0; i < mapSize + 1; i += gridDivision) {
    line(i, 0, i, mapSize);
  }

  /* Horizontal lines */
  for (let i = 0; i < mapSize + 1; i += gridDivision) {
    line(0, i, mapSize, i);
  }
}

function drawPlayer() {
  image(player.getSprite(), player.getX(), player.getY(), spriteWidth, spriteHeight);
}