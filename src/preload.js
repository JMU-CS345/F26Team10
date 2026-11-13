let spriteHeight;

let down;
let left;
let up;
let right;

function preload() {
    down = loadImage('src/art/Sprite-0001.png');
    left = loadImage('src/art/Sprite-0002.png');
    up = loadImage('src/art/Sprite-0003.png');
    right = loadImage('src/art/Sprite-0004.png');
    spriteHeight = spriteWidth * (down.height / down.width);
}