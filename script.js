// take user answer, set to lowercase
let userAnswer = prompt(`Choose between rock paper and scissors:`);
userAnswer = userAnswer.toLowerCase();

const options = ["rock", "paper", "scissors"];

// generate random choice
let choice;
function choose() {
  let num = Math.floor(Math.random() * 3);
  num === 0
    ? (choice = "rock")
    : num === 1
      ? (choice = "paper")
      : (choice = "scissors");
  console.log(`Computer chose: ${choice}`);
}

// Check if userAnswer is valid
function validateAnswer() {
  if (!options.includes(userAnswer)) {
    console.log(`${userAnswer} is an invalid answer`);
  } else {
    console.log(`user chose: ${userAnswer}`);
  }
}

function isDraw() {
  if (userAnswer === choice) {
    console.log("It's a draw!");
    return;
  }
}

function whoWins() {
  isDraw();

  if (userAnswer === choice) {
    console.log("Its a draw!");
  } else {
    switch (userAnswer) {
      case "rock":
        choice === "paper" ? console.log("WIN") : console.log("LOSE");
        break;
      case "paper":
        choice === "scissors" ? console.log("WIN") : console.log("LOSE");
        break;
      case "scissors":
        choice === "rock" ? console.log("WIN") : console.log("LOSE");
        break;
      default:
        console.log("Choose correct answer from options");
    }
  }
}

choose();
validateAnswer();
whoWins();
