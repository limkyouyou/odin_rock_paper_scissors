// game start

// create an array hands variable ['rock', 'paper', 'scissors']
// add 'bazooka' to the array as cheat code
const hands = ['rock', 'paper', 'scissors', 'bazooka'];
// create an array round variable ['1st', '2nd', '3rd', '4th', '5th']
const round = ['1st', '2nd', '3rd', '4th', '5th'];

// create empty rock variable
let rock;
// create empty paper variable
let paper;
// create empty scissors variable
let scissors;
// create empty bazooka variable
let bazooka;

// create an empty winningHand variable
let winningHand;
// create an empty roundWinner variable
let roundWinner;
// create an empty userHand variable
let userHand;
// create an empty machineHand variable
let machineHand;

let userPoint = 0;
// create machinePoint variable and assign 0
let machinePoint = 0;

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
  } else if (hand === 3) {
    bazooka = true;
  }
}

// confirm message 'Do you want to play rock, paper, scissors with the machine?'
// the user click cancel, game closes
let confirmation = confirm('Do you want to play rock, paper, scissors with the machine?')
// if onfirmation is true then run game()
if (confirmation) {
  game()
}

// create game function
function game() {
  // create i vairable for loop
  let i = 0;
  // create roundCount variable and assign 0
  let roundCount = 0;
  // assign userPoint variable to initial value of 0
  userPoint = 0;
  // assign machinePoint variable to initial value of 0
  machinePoint = 0;

  for (i = 0; i < 5; i++) {
    // assign rock, paper, scissors variables to initial value
    rock = false;
    paper = false;
    scissors = false;
    // assign bazooka variable to initial value
    bazooka = false;

    // prompt user for input, 'Type-in rock, paper, or scissors then click okay.' and assign to play variable
    let promptValue = prompt('Type-in rock, paper, or scissors then click OK.');

    if (promptValue === null) { // if user click cancel alert and exit game 
      alert("Exiting the game")
      i = 5;
    } // if user input matches one of the hands items
      else if (promptValue.toLowerCase() === hands[0] || promptValue.toLowerCase() === hands[1] || promptValue.toLowerCase() === hands[2] || promptValue.toLowerCase() === hands[3]){
      //  user's input is converted to lower case then translated into number according to hands variable then assign to new variable userHand
      userHand = hands.indexOf(promptValue.toLowerCase());
      // run whichHand with userHand as parameter
      whichHand(userHand);
      
      // create machineHand and assgin it to randomly pick one out of 0, 1, or 2
      machineHand = Math.floor(Math.random()*3);
      // run whichHand with machineHand as parameter
      whichHand(machineHand);
      
      // compare the choice between the user and the computer
      // add 1 to roundCount
      // if rock is true and paper is true then assign 1 to winningHand
      // if rock is true and scissors is true then assign 0 to winningHand
      // if paper is true and scissors is true then assign 2 to winningHand
      // if bazooka is true then assign 3 to winningHand
      // else assign 4 to winningHand
      roundCount += 1;
      if (rock === true && paper === true) {
        winningHand = 1;
      } else if (rock === true && scissors === true) {
        winningHand = 0;
      } else if (paper === true && scissors === true) {
        winningHand = 2;
      } else if (bazooka === true) {
        winningHand = 3;
      } else {
        winningHand = 4;
      }
      
      // give a point to the winner and alert end of round message
      // create givePoint function
      // if winningHand value equals to userHand value, add 1 to userPoint, alert end of round message
      // if winningHand value equals to machineHand value, add 1 to machinePoint, alert end of round message
      if (winningHand === userHand) {
        userPoint += 1;
        alert(`You: ${hands[userHand]}\nThe machine: ${hands[machineHand]}\n\nYou won the ${round[roundCount - 1]} round!\n\nScore\nYou: ${userPoint}\nThe machine: ${machinePoint}\n\nClick OK to move on to the next round.`)
      } else if (winningHand === machineHand) {
        machinePoint += 1;
        alert(`You: ${hands[userHand]}\nThe machine: ${hands[machineHand]}\n\nThe machine won the ${round[roundCount - 1]} round!\n\nScore\nYou: ${userPoint}\nThe machine: ${machinePoint}\n\nClick OK to move on to the next round.`)
      } else if (winningHand === 4) {
        alert(`You: ${hands[userHand]}\nThe machine: ${hands[machineHand]}\n\nYou draw the ${round[roundCount - 1]} round!\n\nScore\nYou: ${userPoint}\nThe machine: ${machinePoint}\n\nClick OK to move on to the next round.`)
      }
      
      // if roundCount is < 5 then prompt input box again, repeat
      // if roundCount value equals 5 and userPoint value is bigger than machinePoint then run endGameMessage('You')
      // if roundCount value equals 5 and machinePoint value is bigger than userPoint then run run endGameMessage('The machine')
      // if roundCount value equals 5 and machinePoint value equals to userPoint then run 'There is no winner for this game'
      // , 'The final score is You: $userPoint, The machine: $machinePoint', 'Do you want to play again?'
      // if userPoint value equals to 3 then run endGameMessage('You')
      // if machinePoint value equals to 3 then run endGameMessage('The Machine')
      if (roundCount === 5 && userPoint > machinePoint) {
        endGameMessage('You');
      } else if (roundCount === 5 && userPoint < machinePoint) {
        endGameMessage('The machine');
      } else if (roundCount === 5 && userPoint === machinePoint) {
        endGameDrawMessage();
      } else if (userPoint === 3 && roundCount !== 5) {
        endGameMessage('You');
        // assign 5 to i so the loop can stop
        i = 5;
      } else if (machinePoint === 3 && roundCount !== 5) {
        endGameMessage('The machine');
        // assign 5 to i so the loop can stop
        i = 5;
      }
    } else { // if the input does not match null or any hands items, alert messgae and subtract 1 from i so the this loop is repeated
      alert("That's not a hand! Please type-in again");
      i -= 1;
    }
    // assing promptValue to null so that forgets previous value
    promptValue = null;
  }
}

// create endGameMessage function with parameters (winner) 
// and confirm message 'The winner of the game is $winner !', 'The final score is You: $userPoint, The machine: $machinePoint', 'Do you want to play again?'
function endGameMessage(winner) {
  confirmation = confirm(`The winner of the game is ${winner}!\n\nThe final score is\nYou: ${userPoint}\nThe machine: ${machinePoint}\n\nDo you want to play again?`);
  if (confirmation) {
    game() // if confirmation is true then run game()
  }
}
// create endGameDrawMessage function
function endGameDrawMessage() {
  confirmation = confirm(`There is no winner for this game!\n\nThe final score is\nYou: ${userPoint}\nThe machine: ${machinePoint}\n\nDo you want to play again?`)
  if (confirmation) {
    game() // if confirmation is true then run game()
  }
}