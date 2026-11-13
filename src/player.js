const playerSize = 50;
const spriteWidth = 40;
const spriteHeight = spriteWidth * current.height / current.width;


class Player {
    constructor(x, y, sprite) {
        this.x = x;
        this.y = y;
    }

    drawPlayer(img) {
        image(img, x, y, spriteWidth, spriteHeight);
    }

    setX(x) {
        this.x = x;
    }

    setY(y) {
        this.y = y;
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }
}

globalThis.player = new Player(25, 25, down);