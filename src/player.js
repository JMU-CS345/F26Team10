let up, down, left, right;

const playerSize = 50;
const spriteWidth = 40;
const spriteHeight = spriteWidth;// * (current.height / current.width);

function preload() {
    down = loadImage('src/art/Sprite-0001.png');
    left = loadImage('src/art/Sprite-0002.png');
    up = loadImage('src/art/Sprite-0003.png');
    right = loadImage('src/art/Sprite-0004.png');
}

class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.sprite = down;
    }

    drawPlayer(img) {
        console.log(img);
        image(img, this.x, this.y, spriteWidth, spriteHeight);
    }

    setSprite(img) {
        this.sprite = img;
    }

    setX(x) {
        this.x = x;
    }

    setY(y) {
        this.y = y;
    }

    getSprite() {
        return this.sprite;
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }
}

globalThis.player = new Player(50, 50);