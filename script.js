// game start

// create an array hands variable ['rock', 'paper', 'scissors']
const hands = ['rock', 'paper', 'scissors'];
// create an array round variable ['1st', '2nd', '3rd', '4th', '5th']
const round = ['1st', '2nd', '3rd', '4th', '5th'];

// create rock variable and assign false
let rock;
// create paper variable and assign false
let paper;
// create scissors variable and assign false
let scissors;

// create roundCount variable and assign 0
let roundCount = 0;
// create userPoint variable and assign 0
let userPoint = 0;
// create machinePoint variable and assign 0
let machinePoint = 0;

// create an empty winningHand variable
let winningHand;
// create an empty roundWinner variable
let roundWinner;
// create an empty play variable
// create an empty prompt variable
let promptValue;
// create an empty userHand variable
let userHand;

// create whichHand function with parameter
// if parameter is 0, assign rock true
// if parameter is 1, assign paper true
// if parameter is 2, assign scissors true
function whichHand(hand) {
  if (hand === 0) {
    rock = true;
  } else if (hand === 1) {
    paper = true;
  } else if (hand === 2) {
    scissors = true;
  }
}

// create battle function
// add 1 to roundCount
// if rock is true and paper is true then assign 1 to winningHand
// if rock is true and scissors is true then assign 0 to winningHand
// if paper is true and scissors is true then assign 2 to winningHand
// else assign 3 to winningHand
function battle() {
  roundCount += 1;
  if (rock === true && paper === true) {
    winningHand = 1;
  } else if (rock === true && scissors === true) {
    winningHand = 0;
  } else if (paper === true && scissors === true) {
    winningHand = 2;
  } else {
    winningHand = 3;
  }
}

// create endRoundMessage
// if winningHand value equals to 3 'You: $hands[userHand] \\ The machine: $hands[machineHand]', 'You draw the $round[roundCount - 1] round'
// , 'Score - You: $userPoint, The machine: $machinePoint', 'Click okay to move on to the next round'
// else 'You: $hands[userHand] \\ The machine: $hands[machineHand]', '$roundWinner won the $round[roundCount - 1] round'
// , 'Score - You: $userPoint, The machine: $machinePoint', 'Click okay to move on to the next round'
function endRoundMessage() {
  if (winningHand === 3) {
    confirm(`You: ${hands[userHand]}\nThe machine: ${hands[machineHand]}\n\nYou draw the ${round[roundCount - 1]} round!\n\nScore\nYou: ${userPoint}\nThe machine: ${machinePoint}\n\nClick OK to move on to the next round.`)
  } else {
    confirm(`You: ${hands[userHand]}\nThe machine: ${hands[machineHand]}\n\n${roundWinner} won the ${round[roundCount - 1]} round!\n\nScore\nYou: ${userPoint}\nThe machine: ${machinePoint}\n\nClick OK to move on to the next round.`)
  }
}

// create givePoint function
// if winningHand value equals to userHand value, add 1 to userPoint, assing 'You' to roundWinner
// if winningHand value equals to machineHand value, add 1 to machinePoint, assign 'The machine' to roundWinner
function givePoint() {
  if (winningHand === userHand) {
    userPoint += 1;
    roundWinner = 'You';
  } else if (winningHand === machineHand) {
    machinePoint += 1;
    roundWinner = 'The machine';
  }
}

// confirm message 'Do you want to play rock, paper, scissors with the machine?'
let confirmation = confirm('Do you want to play rock, paper, scissors with the machine?')

// the user click cancel, game closes
// if okay, prompt prompt user for input, 'Type-in rock, paper, or scissors then click okay.' and assign to play variable
if (confirmation) {
  promptValue = prompt('Type-in rock, paper, or scissors then click OK.');
}

// the user input and click okay
// user's input is converted to lower case then translated into number according to hands variable then assign to new variable userHand
userHand = hands.indexOf(promptValue.toLowerCase());

// run whichHand with userHand as parameter
whichHand(userHand);

// create machineHand and assgin it to randomly pick one out of 0, 1, or 2
let machineHand = Math.floor(Math.random()*3);
// run whichHand with machineHand as parameter
whichHand(machineHand);

// compare the choice between the user and the computer
battle();

// give a point to the winner
givePoint();

// prompt end of round message 
endRoundMessage();

console.log(rock)
console.log(paper)
console.log(scissors)
console.log(winningHand)
console.log(userPoint)
console.log(machinePoint)
console.log(roundWinner)
// the user click okay
// if roundCount is < 5 then prompt input box again, repeat
// else run endGameMessage function

// create endGameMessage function with parameters (winner, userPoint, machinePoint) 
// and assign 'The winner of the game is $winner !', 'The final score is You: $userPoint, The machine: $machinePoint', 'Do you want to play again?' 
// if userPoint value equals to 3 then run endGameMessage('You', userPoint, machinePoint)
// if machinePoint value equals to 3 then run endGameMessage('The Machine', userPoint, machinePoint)
// if roundCount value equals 5 and userPoint value is bigger than machinePoint then run endGameMessage('You', userPoint, machinePoint)
// if roundCount value equals 5 and machinePoint value is bigger than userPoint then run run endGameMessage('The machine', userPoint, machinePoint)
// if roundCount value equals 5 and machinePoint value equals to userPoint then run 'There is no winner for this game'
// , 'The final score is You: $userPoint, The machine: $machinePoint', 'Do you want to play again?'

// the user press okay to play again
// all variables assign initial value
// prompt input box