// set initial score to 0
// set initial tries to 5
const options = ["rock", "paper", "scissors"];
let score = 0;
let tries = 5;

let computerChoice = getComputerChoice();
let userChoice = getUserAnswer();

// take user answer, set to lowercase
function getUserAnswer() {
  return prompt(`Choose between rock paper and scissors:`).toLowerCase();
}

// Check if getUserAnswer is valid
function validateAnswer() {
  let userChoice = getUserAnswer();
  if (!options.includes(userChoice)) {
    console.log(`${userChoice} is an invalid answer`);
  } else {
    console.log(`User chose: ${userChoice}`);
    return userChoice;
  }
}

// generate random computerChoice
function getComputerChoice() {
  let num = Math.floor(Math.random() * 3);
  if (num === 0) return "rock";
  else if (num === 1) return "paper";
  else if (num === 2) return "scissors";
  console.log(computerChoice);
}

function play() {
  getComputerChoice();
  validateAnswer();
  compare();
  console.log(score);
}
function compare() {
  // console.log(`User Chose: ${userChoice}`);
  // console.log(`Computer Chose: ${computerChoice}`);

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

function isWin(condition) {
  if (condition == true) {
    score += 1;
    console.log("You WON!");
  } else {
    console.log("You LOST");
  }
  console.log(`Score: ${score}`);
}

// if tries <= 5 execute whoWins, i++
for (let i = 0; i <= tries; i++) {
  play();
}
