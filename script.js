// take user answer, set to lowercase
let getUserAnswer = () =>
  prompt(`Choose between rock paper and scissors:`).toLowerCase();

// store userAnswer in variable
let userAnswer = getUserAnswer();

// set initial score to 0
let score = 0;

// set initial tries to 0
let tries = 0;

const options = ["rock", "paper", "scissors"];

// generate random computerChoice
let computerChoice;
function choose() {
  let num = Math.floor(Math.random() * 3);
  num === 0
    ? (computerChoice = "rock")
    : num === 1
      ? (computerChoice = "paper")
      : (computerChoice = "scissors");
  console.log(`Computer chose: ${computerChoice}`);
}

// Check if userAnswer is valid
function validateAnswer() {
  if (!options.includes(userAnswer)) {
    console.log(`${userAnswer} is an invalid answer`);
  } else {
    console.log(`User chose: ${userAnswer}`);
  }
}

function isWin() {
  score += 1;
  console.log("You WON!");
  console.log(`Score: ${score}`);
}

function isLose() {
  console.log("You LOST");
  console.log(`Score: ${score}`);
}

function whoWins() {
  if (userAnswer === computerChoice) {
    console.log("Its a draw!");
  } else {
    switch (userAnswer) {
      case "rock":
        computerChoice === "paper" ? isWin() : isLose();
        break;
      case "paper":
        computerChoice === "scissors" ? isWin() : isLose();
        break;
      case "scissors":
        computerChoice === "rock" ? isWin() : isLose();
        break;
      default:
        console.log("Choose correct answer from options");
    }
  }
}

choose();
validateAnswer();
while (tries != 5) {
  whoWins();
}
