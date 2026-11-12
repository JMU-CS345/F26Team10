let settingsButton;
let closeButton;
let isSettingsOpen = false;

const x = 200;
const y = 200;
const w = 400;
const h = 400;

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
  closeButton.elt.focus();
}

function closeSettings() {
  if (!isSettingsOpen) return;
  isSettingsOpen = false;
  closeButton.remove();
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
  pop();
}