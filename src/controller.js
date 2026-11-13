const down = await loadImage('src/art/Sprite-0001.png');
const left = await loadImage('src/art/Sprite-0002.png');
const up = await loadImage('src/art/Sprite-0003.png');
const right = await loadImage('src/art/Sprite-0004.png');

class PlayerController {
    constructor(player) {
        this.player = player;
        this.playerX = player.getX();
        this.playerY = player.getY();
        this.sprite = down;
    }

    move(key) {
        if (!this.checkCollision(key) || !loaded) {
            return;
        }

        switch (key) {
            case 'a':
                this.player.setX(this.playerX -= gridDivision)
                this.playerX = this.player.getX();
                this.sprite = left;
                drawPlayer(left);
                break;
            case 'd':
                this.player.setX(this.playerX += gridDivision)
                this.playerX = this.player.getX();
                this.sprite = right;
                drawPlayer(right);
                break;
            case 's':
                this.player.setY(this.playerY += gridDivision)
                this.playerY = this.player.getY();
                this.sprite = down;
                drawPlayer(down);
                break;
            case 'w':
                this.player.setY(this.playerY -= gridDivision)
                this.playerY = this.player.getY();
                this.sprite = up;
                drawPlayer(up);
                break;
        }
    }

    checkCollision(key) {
        switch (key) {
        case 'a':
            return this.playerX - gridDivision > 0;

        case 'd':
            return this.playerX + gridDivision < mapSize;

        case 's':
            return this.playerY + gridDivision < mapSize;

        case 'w':
            return this.playerY - gridDivision > 0;

        default:
            return false;
        }
    }
}

const playerController = new PlayerController(player);