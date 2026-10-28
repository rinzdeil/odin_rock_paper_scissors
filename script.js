// set initial score to 0
// set initial rounds to 5
const options = ["rock", "paper", "scissors"];
let scoreUser = 0;
let scoreComputer = 0;
let rounds = 5;

let computerChoice;
let userChoice;

// take user answer, set to lowercase, validate
function getUserAnswer() {
  userChoice = prompt(`Choose between rock paper and scissors:`);
  userChoice.toLowerCase();
  if (!options.includes(userChoice)) {
    console.log(`${userChoice} is an invalid answer`);
    return;
  } else {
    console.log(`User chose: ${userChoice}`);
    return userChoice;
  }
}

// generate random computerChoice
function getComputerChoice() {
  let num = Math.floor(Math.random() * 3);
  if (num === 0) computerChoice = "rock";
  else if (num === 1) computerChoice = "paper";
  else if (num === 2) computerChoice = "scissors";
  console.log(`Computer chose: ${computerChoice}`);
  return computerChoice;
}

function isWin(condition) {
  if (condition) {
    scoreUser += 1;
    console.log(`${userChoice} wins over ${computerChoice}. You WON!`);
    return;
  } else {
    scoreComputer += 1;
    console.log("You LOST");
    return;
  }
}

function whoWins() {
  userChoice = getUserAnswer();
  computerChoice = getComputerChoice();

  if (computerChoice === userChoice) {
    console.log("Its a draw!");
    return;
  } else {
    switch (userChoice) {
      case "rock":
        computerChoice === "scissors" ? isWin(true) : isWin(false);
        break;
      case "paper":
        computerChoice === "rock" ? isWin(true) : isWin(false);
        break;
      case "scissors":
        computerChoice === "paper" ? isWin(true) : isWin(false);
        break;
      default:
        console.log("Choose correct answer from options");
    }
  }
  return;
}

function play() {
  whoWins();
  console.log(`User Score: ${scoreUser} | Computer Score: ${scoreComputer}`);
}

// if rounds <= 5 execute whoWins, i++
for (let i = 0; i < rounds; i++) {
  play();
  console.log(`${rounds - (i + 1)} rounds left`);
}

if (scoreComputer == scoreUser) {
  console.log(
    `Its a DRAW! User Score: ${scoreUser} | Computer Score: ${scoreComputer}`,
  );
} else if (scoreUser > scoreComputer) {
  console.log(
    `User WINS! User Score: ${scoreUser} | Computer Score: ${scoreComputer}`,
  );
} else if (scoreUser < scoreComputer) {
  console.log(
    `Computer WINS! User Score: ${scoreUser} | Computer Score: ${scoreComputer}`,
  );
} else {
  console.log(`Game Over!`);
}
