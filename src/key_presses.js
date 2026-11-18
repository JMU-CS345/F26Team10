function keyPressed() {
  if (keyCode === ESCAPE) {
    if (isRunning) toggleSettings();
    return;
  }

  if (isRunning && isSettingsOpen) {
    if (keyCode === UP_ARROW) {
      changeVolume(volStep);
    } else if (keyCode === DOWN_ARROW) {
      changeVolume(-volStep);
    }
    return false;
  }

  let movementKey = movementKeyPress(key);

  if (movementKey !== undefined) {
    playerController.move(movementKey);
  }
}

function movementKeyPress(key) {
  if (key === 'a' || key === 'A' || keyCode === LEFT_ARROW) {
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