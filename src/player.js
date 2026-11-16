class Player {
    constructor(x, y, health, mana) {
        this.x = x;
        this.y = y;
        this.class = 0;
        this.sprite = characters[0].down;
        this.health = health;
        this.mana = mana;
        this.inventory = {};
        this.direction = 'down';
    }

    setClassID(characterID) {
        this.class = characterID;
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

    setDirection(direction) {
        this.direction = direction;
    }


    getClassID() {
        return this.class;
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

    getDirection() {
        return this.direction;
    }
}