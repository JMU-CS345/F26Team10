const playerSize = 50;
const spriteWidth = 40;

class Player {
    constructor(x, y, health, mana) {
        this.x = x;
        this.y = y;
        this.sprite = down;
        this.health = health;
        this.mana = mana;
        this.inventory = {};
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