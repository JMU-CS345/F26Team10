class PlayerController {
    constructor(player) {
        this.player = player;
        this.playerX = player.getX();
        this.playerY = player.getY();
        this.class = player.getClassID();
    }

    move(key) {
        if (!this.checkCollision(key) || !loaded) {
            return;
        }
        switch (key) {
            case 'a':
                this.player.setX(this.playerX -= gridDivision)
                this.playerX = this.player.getX();
                this.player.setDirection('left')
                this.player.setSprite(characters[this.class].files[1]);
                break;
            case 'd':
                this.player.setX(this.playerX += gridDivision)
                this.playerX = this.player.getX();
                this.player.setDirection('right')
                this.player.setSprite(characters[this.class].files[3]);
                break;
            case 's':
                this.player.setY(this.playerY += gridDivision)
                this.playerY = this.player.getY();
                this.player.setDirection('down')
                this.player.setSprite(characters[this.class].files[0]);
                break;
            case 'w':
                this.player.setY(this.playerY -= gridDivision)
                this.playerY = this.player.getY();
                this.player.setDirection('up')
                this.player.setSprite(characters[this.class].files[2]);
                break;
        }
    }

    checkCollision(key) {
        switch (key) {
            case 'a':
                return this.playerX - gridDivision > 0 && !this.wallCollision('a');

            case 'd':
                return this.playerX + gridDivision < mapSize && !this.wallCollision('d');

            case 's':
                return this.playerY + gridDivision < mapSize && !this.wallCollision('s');

            case 'w':
                return this.playerY - gridDivision > 0 && !this.wallCollision('w');

            default:
                return false;
        }
    }

    wallCollision(key) {
        let nextX = this.playerX;
        let nextY = this.playerY;

        switch (key) {
            case 'a':
                nextX -= gridDivision;
                break;

            case 'd':
                nextX += gridDivision;
                break;

            case 's':
                nextY += gridDivision;
                break;

            case 'w':
                nextY -= gridDivision;
                break;

            default:
                return false;
        }

        for (let wall of wallArray) {
            if (wall.getX() === nextX && wall.getY() === nextY) {
                return true;
            }
        }
        return false;
    }
}