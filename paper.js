let playerScore = 0;
let computerScore = 0;
const playerScore_span = document.getElementById("player-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard = document.querySelector(".score-board");
const resultBoard = document.querySelector(".result");
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

function getComputerChoice() {
  const choice = ["rock", "paper", "scissors"];
  const randomChoice = Math.floor(Math.random() * 3);
  return choice[randomChoice];
}
function win(userChoice, computerChoice) {
  playerScore++;
  playerScore_span.innerHTML = playerScore;
  resultBoard.innerHTML = `You chose ${userChoice} and the computer chose ${computerChoice}. You Win!`;
  document.getElementById(userChoice).classList.add("win-select");
  setTimeout(function () {
    document.getElementById(userChoice).classList.remove("win-select");
  }, 500);
}

function lose(userChoice, computerChoice) {
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  resultBoard.innerHTML = `You chose ${userChoice} and the computer chose ${computerChoice}. You Lose!`;
  document.getElementById(userChoice).classList.add("lose-select");
  setTimeout(function () {
    document.getElementById(userChoice).classList.remove("lose-select");
  }, 500);
}

function tie(userChoice, computerChoice) {
  console.log(userChoice);
  console.log(computerChoice);
  resultBoard.innerHTML = `You chose ${userChoice} and the computer chose ${computerChoice}. It's a tie!`;
  document.getElementById(userChoice).classList.add("tie-select");
  setTimeout(function () {
    document.getElementById(userChoice).classList.remove("tie-select");
  }, 500);
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rockscissors":
    case "paperrock":
    case "scissorsrock":
      win(userChoice, computerChoice);
      break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      lose(userChoice, computerChoice);
      break;
    case "rockpaper":
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      tie(userChoice, computerChoice);
      break;
  }
}

function main() {
  rockButton.addEventListener("click", function () {
    game("rock");
  });
  paperButton.addEventListener("click", function () {
    game("paper");
  });
  scissorsButton.addEventListener("click", function () {
    game("scissors");
  });
}

main();
