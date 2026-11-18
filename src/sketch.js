let loaded = false;
const mapSize = 800;
const gridDivision = 50;
let button;
let isRunning = false;
let player;
let isSelecting = false;
let charButtons = [];

const playerSize = 50;
const spriteWidth = 40;
let spriteHeight;



async function setup() {
  createCanvas(mapSize, mapSize);
  background(220);

  player = new Player(400, 400, 5, 10);
  playerController = new PlayerController(player);

  for (let i = 0; i < 5; i++) {
    wallArray[i] = new Wall(0 + (50 * i) , 0 + (50 * i));
  }

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
  isSelecting = true;
  button.remove();

  for (let i = 0; i < characters.length; i++) {
    let b = createButton(characters[i].name);
    b.size(120, 40);
    b.position(140 + i * 200, 500);
    b.mouseClicked(() => chooseCharacter(i));
    charButtons.push(b);
  }
}

function chooseCharacter(i) {
  if (!loaded) return;

  down = characters[i].down;
  left = characters[i].left;
  up = characters[i].up;
  right = characters[i].right;
  player.setSprite(down);
  player.setClassID(i)

  for (let b of charButtons) b.remove();
  charButtons = [];

  isSelecting = false;
  isRunning = true;
  spriteHeight = spriteWidth * player.getSprite().height / player.getSprite().width;
}


function draw() {
  if (isSelecting) {
    background(220);
    drawSelect();
  }
  if (isRunning) {
    if (loaded) {
      background(220);
      drawGrid();
      drawPlayer();
      drawWalls();
    }
  }
}

function drawSelect() {
  fill(0);
  noStroke();
  textSize(40);
  text('CHOOSE YOUR CHARACTER', width / 2, 150);

  if (loaded) {
    for (let i = 0; i < characters.length; i++) {
      let img = characters[i].down;
      let w = 80;
      let h = w * img.height / img.width;
      image(img, 200 + i * 200 - w / 2, 350, w, h);
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
  let direction;
  switch(player.getDirection()) {
    case 'down':
      direction = down;
      break;
    case 'up':
      direction = up;
      break;
    case 'left':
      direction = left;
      break;
    case 'right':
      direction = right;
      break;
  }
  image(direction , player.getX(), player.getY(), spriteWidth, spriteHeight);
}

function drawWalls() {
  for (wall of wallArray) {
    image(wall.getSprite(), wall.getX(), wall.getY(), spriteWidth, spriteHeight);
  }
}
