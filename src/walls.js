let wallArray = [];

class Wall {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.sprite = characters[0].down;
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }

    getSprite() {
        return this.sprite;
    }
}