function setup() {
  createCanvas(800, 800);

}

let playerX = 25;
let playerY = 25;
function draw() {
    background(220);
    ellipse(playerX,playerY,50, 50);
}

function keyPressed() {
  if ((key === 'a' || key === 'A' || keyIsDown(LEFT_ARROW)) && playerX - 50 > 0) {
    playerX -= 50;
  }

  if ((key === 'd' || key === 'D' || keyIsDown(RIGHT_ARROW)) && playerX + 50 < 800) {
    playerX += 50;
  }

  if ((key === 's' || key === 'S' || keyIsDown(DOWN_ARROW)) && playerY + 50 < 800) {
    playerY += 50;
  }
  
  if ((key === 'w' || key === 'W' || keyIsDown(UP_ARROW)) && playerY - 50 > 0) {
    playerY -= 50;
  }
}