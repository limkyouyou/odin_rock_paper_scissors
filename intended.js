
// Create roundCount variable and assign it to 0
let roundCount = 0;
// Create playerScore variable and assign it to 0
let playerScore = 0;
// Create computerScore variable and assign it to 0
let computerScore = 0;
// Create playerHand variable
let playerChoice;

// Create random computer choice function
function getComputerChoice() {
  let random = Math.floor(Math.random()*3);
  if (random === 0) {
    return "rock";
  } else if (random === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

// Create playRound function with two parameters, make playerSelection case-insensitive by transforming all its input to lower case, add player score and computer score
function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection.toLowerCase() === "rock" && computerSelection === "paper") ||
    (playerSelection.toLowerCase() === "paper" && computerSelection === "scissors") ||
    (playerSelection.toLowerCase() === "scissors" && computerSelection === "rock")
    ) {
    computerScore += 1;
    return `You Lose! ${computerSelection} beats ${playerSelection.toLowerCase()}`;
  } else if (
    (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") || 
    (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper") ||
    (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors")
    ) {
    playerScore += 1;
    return `You Win! ${playerSelection.toLowerCase()} beats ${computerSelection}`;
  } else if (playerSelection.toLowerCase() === computerSelection) {
    return "You draw this round!"
  }
}

// Create game function, run playRound function for 5 times, keep score and report a winner or loser at the end
function game() {
  roundCount = 0;
  playerScore = 0;
  computerScore = 0;
  for (let i = 0; i < 5; i++) { // loop for 5 rounds
    roundCount += 1; // add one to round every loop
    playerChoice = prompt("This is the intended version. Type-in rock, paper, or scissors") // prompt player to choose a hand
    console.log(playRound(playerChoice, getComputerChoice())); // run playRound function with playerChoice and getComputerChoice function as a parameter then console out

  }
  if (computerScore > playerScore) { // return winner or loser or draw depending on the score
    return `You are the Loser! Your score is ${playerScore} and The computer's score is ${computerScore}`;
  } else if (playerScore > computerScore) {
    return `You are the Winner! Your score is ${playerScore} and The computer's score is ${computerScore}`;
  } else if (playerScore === computerScore) {
    return `You draw this round! Your score is ${playerScore} and The computer's score is ${computerScore}`;
  }
}

const divPlay = document.querySelector('#playContainer');
const playBtn = document.createElement('button');

playBtn.textContent = "PLAY"

playBtn.addEventListener('click', () => {
  console.log(game());
});

divPlay.appendChild(playBtn);
