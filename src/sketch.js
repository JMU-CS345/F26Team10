let current;
let down, up, right, left;
let loaded = false;
const mapSize = 800;
const gridDivision = 50;

async function setup() {
  createCanvas(mapSize, mapSize);
  
  down = await loadImage('src/art/Sprite-0001.png');
  left = await loadImage('src/art/Sprite-0002.png');
  up = await loadImage('src/art/Sprite-0003.png');
  right = await loadImage('src/art/Sprite-0004.png');

  current = down;
  loaded = true;
}

function draw() {
  background(220);
  drawGrid();

  if (loaded) {
    let spriteWidth = 112;
    let spriteHeight = spriteWidth * current.height / current.width;

    image(current, 0, 0, spriteWidth, spriteHeight);
  }
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

function keyPressed() {
  if (!loaded) return;

  if (key === 'a' || keyCode === LEFT_ARROW) {
    current = left;
  } else if (key === 'd' || keyCode === RIGHT_ARROW) {
    current = right;
  } else if (key === 'w' || keyCode === UP_ARROW) {
    current = up;
  } else if (key === 's' || keyCode === DOWN_ARROW) {
    current = down;
  }
}