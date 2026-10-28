// set initial score to 0
// set initial tries to 5
const options = ["rock", "paper", "scissors"];
let score = 0;
let tries = 5;

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
    score += 1;
    console.log(`${userChoice} wins over ${computerChoice}. You WON!`);
    return;
  } else {
    console.log("You LOST");
    return;
  }
}

function whoWins() {
  userChoice = getUserAnswer();
  computerChoice = getComputerChoice();

  if (computerChoice === userChoice) {
    console.log("Its a draw!");
  } else {
    switch (userChoice) {
      case "rock":
        computerChoice === "paper" ? isWin(true) : isWin(false);
        break;
      case "paper":
        computerChoice === "scissors" ? isWin(true) : isWin(false);
        break;
      case "scissors":
        computerChoice === "rock" ? isWin(true) : isWin(false);
        break;
      default:
        console.log("Choose correct answer from options");
    }
  }
}

function play() {
  // getComputerChoice();
  // validateAnswer();
  whoWins();
  console.log(`Score: ${score}`);
}

// if tries <= 5 execute whoWins, i++
for (let i = 0; i <= tries; i++) {
  play();
}
