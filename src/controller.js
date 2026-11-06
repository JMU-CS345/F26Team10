let playerSize = 50;

class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    move(key) {
        if (!this.checkCollision(key)) {
            return;
        }

        switch (key) {
            case 'a':
                this.x -= gridDivision;
                break;
            case 'd':
                this.x += gridDivision;
                break;
            case 's':
                this.y += gridDivision;
                break;
            case 'w':
                this.y -= gridDivision;
                break;
        }
    }

    checkCollision(key) {
        switch (key) {
        case 'a':
            return this.x - gridDivision > 0;

        case 'd':
            return this.x + gridDivision < mapSize;

        case 's':
            return this.y + gridDivision < mapSize;

        case 'w':
            return this.y - gridDivision > 0;

        default:
            return false;
        }
    }
}