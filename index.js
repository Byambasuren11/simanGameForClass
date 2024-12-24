const main = document.getElementById("mainContain");

const mainDiv = document.createElement("div");
mainDiv.className = "mainDiv";

const colors = ["red", "blue", "green", "yellow"];

colors.forEach((color) => {
  const button = document.createElement("button");
  button.className = color;
  mainDiv.appendChild(button);
});

const startButton = document.createElement("div");
startButton.textContent = "Start Game";
startButton.addEventListener("click", startGame);
startButton.className = "start";

mainDiv.appendChild(startButton);
main.appendChild(mainDiv);

let sequence = [];
let playerSequence = [];
let level = 0;

function startGame() {
  sequence = [];
  playerSequence = [];
  level = 0;
  nextLevel();
}
function nextLevel() {
  level++;
  document.getElementById("level").textContent = level;
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  sequence.push(randomColor);
  playSequence();
}

function playSequence() {
  sequence.forEach((color, index) => {
    setTimeout(() => {
      document.getElementsByClassName(color)[0].classList.add("active");
      setTimeout(() => {
        document.getElementsByClassName(color)[0].classList.remove("active");
      }, 500);
    }, 1000 * index);
  });

  let currentIndex = 0;
  document.addEventListener("keydown", (event) => {
    const userColor = event.key;
    if (userColor === sequence[currentIndex]) {
      currentIndex++;
      if (currentIndex === sequence.length) {
        setTimeout(nextLevel, 1000);
      }
    } else {
      gameOver();
    }
  });
}

function gameOver() {
  alert("Game Over! Your final score is " + level);
  startGame();
}

startGame();
