let wallArray = [];

class Wall {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.sprite = wallSprite;
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