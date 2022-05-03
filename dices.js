let userscore = 0;
let computerscore = 0;
const popupContainer = document.querySelector(".popup-container");
const information = document.querySelector(".information");

const playBtn = document
  .querySelector("#playBtn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    startPlaying("You", "Computer");
  });

function startPlaying(n1, n2) {
  let playerName = [n1, n2];
  score = [];
  for (let i = 0; i < playerName.length; i++) {
    let container = document.querySelector(".container");
    let diceContainer = document.querySelector(".dice-container");
    let dice;
    let randomPlayer = Math.floor(Math.random() * 6 + 1);
    //   Generating Dice
    switch (randomPlayer) {
      case 1:
        dice = `
        <p>${playerName[i]} rolled ${randomPlayer}</p>
        <div class="dice one-dot">
        <span class="dot"></span>
      </div>`;
        break;
      case 2:
        dice = `
      <p>${playerName[i]} rolled ${randomPlayer}</p>
        <div class="dice two-dots">
        <span class="dot"></span>
        <span class="dot"></span>
      </div>`;
        break;
      case 3:
        dice = `
      <p>${playerName[i]} rolled ${randomPlayer}</p>
      <div class="dice three-dots">
        <span class="dot-left"></span>
        <span class="dot-middle"></span>
        <span class="dot-right"></span>
      </div>`;
        break;
      case 4:
        dice = `
      <p>${playerName[i]} rolled ${randomPlayer}</p>
      <div class="dice four-dots">
        <span class="dot-middle"></span>
        <span class="dot-middle"></span>
        <span class="dot-middle"></span>
        <span class="dot-middle"></span>
      </div>`;
        break;
      case 5:
        dice = `
      <p>${playerName[i]} rolled ${randomPlayer}</p>
      <div class="dice five-dots">
        <span class="dot-middle"></span>
        <span class="dot-middle"></span>
        <span class="dot-center"></span>
        <span class="dot-middle"></span>
        <span class="dot-middle"></span>
      </div>`;
        break;
      case 6:
        dice = `
      <p>${playerName[i]} rolled ${randomPlayer}</p>
      <div class="dice six-dots">
        <span class="dot-middle"></span>
        <span class="dot-middle"></span>
        <span class="dot-middle"></span>
        <span class="dot-middle"></span>
        <span class="dot-middle"></span>
        <span class="dot-middle"></span>
      </div>`;
        break;
    }
    diceContainer.innerHTML = dice;
    container.append(diceContainer);
    score.push(randomPlayer);
  }
  checkScore(score, playerName);
}

function closePopup() {
  location.reload();
}

function checkScore(score) {
  let value1 = score[0];
  let value2 = score[1];
  //   console.log(value1, value2);
  information.innerText = "";
  if (value1 < value2) {
    userscore;
    computerscore++;
    information.innerText = `Computer won this round! The score is ${userscore} : ${computerscore}`;
  } else if (value1 === value2) {
    userscore;
    computerscore;
    information.innerText = `It is a tie! The score is ${userscore} : ${computerscore}`;
  } else {
    userscore++;
    computerscore;
    information.innerText = `You won this round! The score is ${userscore} : ${computerscore}`;
  }
  showPopup(userscore, computerscore);
}

function showPopup(userscore, computerscore) {
  if (userscore === 5) {
    popupContainer.classList.remove("hidden");
    popupContainer.innerHTML = `
    <div class="popup">
    <h1>Congratulations!</h1>
    <p>You won!</p>
    <button class="popup-button">Close</button>
    </div>`;
    document.getElementById("playBtn").disabled = true;
  }

  if (computerscore === 5) {
    popupContainer.classList.remove("hidden");
    popupContainer.innerHTML = `
    <div class="popup">
    <h1>Tough luck!</h1>
    <p>You lost!</p>
    <button class="popup-button">Close</button>
    </div>`;
    document.getElementById("playBtn").disabled = true;
  }
  const popupButton = document
    .querySelector(".popup-button")
    .addEventListener("click", function (e) {
      e.preventDefault();
      closePopup();
    });
}

