let settingsButton;
let closeButton;
let isSettingsOpen = false;
let volume = 50;
let volDown;
let volUp;

const x = 200;
const y = 200;
const w = 400;
const h = 400;
const volStep = 5;

function createSettingsButton() {
  settingsButton = createButton('SETTINGS');
  settingsButton.size(80, 30);
  settingsButton.position(mapSize - 90, 10);
  settingsButton.mouseClicked(openSettings);
}

function openSettings() {
  if (isSettingsOpen) return;
  isSettingsOpen = true;
  settingsButton.hide();

  closeButton = createButton('X');
  closeButton.size(30, 30);
  closeButton.position(x + w - 40, y + 10);
  closeButton.mouseClicked(closeSettings);
  
  volDown = createButton('▼');
  volDown.size(40, 40);
  volDown.position(320, 340);
  volDown.attribute('aria-label', 'Decrease volume');
  volDown.mouseClicked(() => changeVolume(-volStep));

  volUp = createButton('▲');
  volUp.size(40, 40);
  volUp.position(440, 340);
  volUp.attribute('aria-label', 'Increase volume');
  volUp.mouseClicked(() => changeVolume(volStep));

  closeButton.elt.focus();
}

function closeSettings() {
  if (!isSettingsOpen) return;
  isSettingsOpen = false;
  closeButton.remove();
  volDown.remove();
  volUp.remove();
  settingsButton.show();
  settingsButton.elt.focus();
}

function toggleSettings() {
  if (isSettingsOpen) {
    closeSettings();
  } else {
    openSettings();
  }
}

function changeVolume(amount) {
    volume = constrain(volume + amount, 0, 100);
}

function drawSettings() {
  if (!isSettingsOpen) return;

  push();
  fill(255);
  stroke(0);
  strokeWeight(2);
  rect(x, y, w, h);

  fill(0);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(30);
  text('Settings', x + w / 2, y + 40);

  textSize(24);
  text('VOLUME', x + w / 2, 300);

  textSize(30);
  text(volume, x + w / 2, 360);
  pop();
}