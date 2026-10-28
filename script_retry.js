// - set score to 0
// - set how many tries = 5
let score = 0;
const tries = 5;
const options = ["rock", "paper", "scissors"];

// - get user input. set to lowercase
function getUserAnswer() {
  let userAnswer = prompt("Choose between rock, paper, scissors");
  userAnswer = userAnswer.toLowerCase();

  if (!options.includes(userAnswer)) {
    console.log("Invalid input, try again");
  } else {
    console.log(`User Chose: ${userAnswer}`);
    return userAnswer;
  }
}

// - let computer choose RPS
function getComputerAnswer() {
  let num = Math.floor(Math.random() * 3);
  let computerAnswer;
  if (num === 0) computerAnswer = "rock";
  else if (num === 1) computerAnswer = "paper";
  else if (num === 2) computerAnswer = "scissors";
  console.log(`Computer chose: ${computerAnswer}`);
  return computerAnswer;
}

// - if win show Win, score + 1, tries + 1
// - if lose show Lose, tries + 1
function isWin(condition) {
  if (condition) {
    score += 1;
    console.log(`${choiceUser} wins over ${choiceComputer}. you win!`);
  } else {
    console.log("You LOST!");
  }
}

let choiceUser;
let choiceComputer;

// - compare user choice and computer choice
function whoWins() {
  choiceUser = getUserAnswer();
  choiceComputer = getComputerAnswer();
  if (choiceUser === choiceComputer) {
    console.log("Its a DRAW!");
    return;
  } else {
    switch (choiceUser) {
      case "rock":
        choiceComputer === "scissors" ? isWin(true) : isWin(false);
        break;
      case "paper":
        choiceComputer === "rock" ? isWin(true) : isWin(false);
        break;
      case "scissors":
        choiceComputer === "paper" ? isWin(true) : isWin(false);
        break;
    }
    return;
  }
}

// - make play function
function play() {
  whoWins();
  console.log(`Score: ${score}`);
}

// - if tries <= 5, execute play again
for (let i = 0; i < tries; i++) {
  play();
  console.log(`${tries - (i + 1)} tries left`);
  continue;
}
