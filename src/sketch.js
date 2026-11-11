let current;
let down, up, right, left;
let loaded = false;
const mapSize = 800;
const gridDivision = 50;
let button;
let isRunning = false;
let isSelecting = false;
let charButtons = [];
let settings;

const characters = [
  {
    name: 'Mage 1',
    files: ['src/art/Sprite-0001.png', 'src/art/Sprite-0002.png', 'src/art/Sprite-0003.png', 'src/art/Sprite-0004.png'],
  },
  {
    name: 'Mage 2',
    files: ['src/art/Sprite-0001.png', 'src/art/Sprite-0002.png', 'src/art/Sprite-0003.png', 'src/art/Sprite-0004.png'],
  },
  {
    name: 'Mage 3',
    files: ['src/art/Sprite-0001.png', 'src/art/Sprite-0002.png', 'src/art/Sprite-0003.png', 'src/art/Sprite-0004.png'],
  },
];

async function setup() {
  createCanvas(mapSize, mapSize);
  background(220);

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
  settings = createButton('SETTINGS');

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


function keyPressed() {
  if (!isRunning) return;

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
