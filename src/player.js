const down = await loadImage('src/art/Sprite-0001.png');
const left = await loadImage('src/art/Sprite-0002.png');
const up = await loadImage('src/art/Sprite-0003.png');
const right = await loadImage('src/art/Sprite-0004.png');

let current = down;
const playerSize = 50;
const spriteWidth = 40;
const spriteHeight = spriteWidth * current.height / current.width;


class Player {
    constructor(x, y, sprite) {
        this.x = x;
        this.y = y;
        this.sprite = sprite;
    }

    drawPlayer() {
        image(current, x, y, spriteWidth, spriteHeight);
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

const player = new Player(25, 25, down);