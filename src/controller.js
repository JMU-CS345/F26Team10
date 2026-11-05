let playerSize = 50;

class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    move(key) {
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
}