function keyPressed() {
  let movementKey = movementKeyPress(key);

  if (movementKey !== undefined) {
    playerController.move(movementKey);
  }
}

function movementKeyPress(key) {
  if (key === 'a' || key === 'A' || keyCode === LEFT_ARROW) {
    console.log(key);
    return 'a';
  } 
  else if (key === 'd' || key === 'D' || keyCode === RIGHT_ARROW) {
    return 'd';
  } 
  else if (key === 's' || key === 'S' || keyCode === DOWN_ARROW) {
    return 's';
  } 
  else if (key === 'w' || key === 'W' || keyCode === UP_ARROW) {
    return 'w';
  }
}