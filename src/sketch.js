let loaded = false;
const mapSize = 800;
const gridDivision = 50;
let button;
let isRunning = false;
let player;
let isSelecting = false;
let charButtons = [];

const characters = [
  {
    name: 'Fire',
    files: ['src/art/Fire_Down.png', 'src/art/Fire_Left.png', 'src/art/Fire_Up.png', 'src/art/Fire_Right.png'],
  },
  {
    name: 'Ice',
    files: ['src/art/Ice_Down.png', 'src/art/Ice_Left.png', 'src/art/Ice_Up.png', 'src/art/Ice_Right.png'],
  },
  {
    name: 'Psychic',
    files: ['src/art/Mind_Down.png', 'src/art/Mind_Left.png', 'src/art/Mind_Up.png', 'src/art/Mind_Right.png'],
  },
];

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

  for (const c of characters) {
    c.down = await loadImage(c.files[0]);
    c.left = await loadImage(c.files[1]);
    c.up = await loadImage(c.files[2]);
    c.right = await loadImage(c.files[3]);
  }

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
  current = down;

  for (let b of charButtons) b.remove();
  charButtons = [];

  isSelecting = false;
  isRunning = true;
}


function draw() {
  if (isSelecting) {
    background(220);
    drawSelect();
  }
  if (isRunning) {
    if (loaded) {
      (player);
      drawPlayer();
      
    background(220);
    drawGrid(); 
    let spriteWidth = 40;
    let spriteHeight = spriteWidth * current.height / current.width;
    image(current, 0, 0, spriteWidth, spriteHeight);
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
  image(player.getSprite(), player.getX(), player.getY(), spriteWidth, spriteHeight);
}
