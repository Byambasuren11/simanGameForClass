const main = document.getElementById("mainContain");

const mainDiv = document.createElement("div");
mainDiv.className = "mainDiv";

const colors = ["red", "blue", "green", "yellow"];

const sounds = {
  red: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"),
  blue: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"),
  green: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"),
  yellow: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3"),
};

colors.forEach((color) => {
  const button = document.createElement("button");
  button.id = color;
  button.className = "colorButton";
  mainDiv.appendChild(button);
});

const startButton = document.createElement("button");
startButton.id = "startButton";
startButton.textContent = "Start Game";

main.appendChild(mainDiv);
main.appendChild(startButton);

let sequence = [];
let playerSequence = [];
let level = 0;

function startGame() {
  sequence = [];
  playerSequence = [];
  level = 0;
  nextLevel();
}

function playSound(color) {
  if (sounds[color]) {
    sounds[color].currentTime = 0; // Reset playback for consecutive presses
    sounds[color].play();
  }
}

function nextLevel() {
  level++;
  playerSequence = [];
  const nextColor = colors[Math.floor(Math.random() * colors.length)];
  sequence.push(nextColor);
  playSequence();
}

// Play the current sequence
function playSequence() {
  sequence.forEach((color, index) => {
    setTimeout(() => {
      flashColor(color);
    }, (index + 1) * 1000);
  });
}

// Flash the color on the screen
function flashColor(color) {
  const button = document.getElementById(color);
  playSound(color);
  button.style.animation = `ajillah${colors.indexOf(color) + 1} 1s linear`;
  setTimeout(() => {
    button.style.animation = "none";
  }, 1000);
}

// Handle player input
function handlePlayerInput(color) {
  playerSequence.push(color);
  flashColor(color); // This already includes playing the sound
  checkPlayerInput();
}

// Check if the player's input is correct
function checkPlayerInput() {
  const currentIndex = playerSequence.length - 1;

  if (playerSequence[currentIndex] !== sequence[currentIndex]) {
    alert("Game Over!"); // Temporary game over handler
    startGame();
    return;
  }

  if (playerSequence.length === sequence.length) {
    setTimeout(nextLevel, 500);
  }
}

startButton.addEventListener("click", startGame);

document.querySelectorAll(".colorButton").forEach((button) => {
  button.addEventListener("click", () => {
    handlePlayerInput(button.id);
  });
});
