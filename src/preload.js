let wallSprite;
let backgroundSprite;

const characters = [
    {
        name: 'Fire',
        files: ['src/art/Fire_Down.png', 'src/art/Fire_Left.png', 'src/art/Fire_Up.png', 'src/art/Fire_Right.png'],
    },
    {
        name: 'Ice',
        files: ['src/art/Ice_Down.png', 'src/art/Ice_Left.png', 'src/art/Ice_Up.png', 'src/art/Ice_Right.png'],
    },
    {
        name: 'Psychic',
        files: ['src/art/Mind_Down.png', 'src/art/Mind_Left.png', 'src/art/Mind_Up.png', 'src/art/Mind_Right.png'],
    },
];

function preload() {
    for (const c of characters) {
        c.down = loadImage(c.files[0]);
        c.left = loadImage(c.files[1]);
        c.up = loadImage(c.files[2]);
        c.right = loadImage(c.files[3]);
    }
    wallSprite = loadImage('src/art/Wall_Sprite.png');
    backgroundSprite = loadImage('src/art/Dungeon_Background.png');
}