const getComputerChoice = function (computerNumber) { // once random number is selected a hand is chosen
if (computerNumber === 1) {
    return "Rock"
}
else if (computerNumber === 2) {
    return "Paper"
}
else {
    return "Scissors"
}
}
const computerSelection = getComputerChoice(Math.floor((Math.random()*3)+1)); // chooses a random number between 1-3

console.log(computerSelection)


/*function playRound(playerSelection, computerSelection) {

  }
   
  
  const playerSelection = "rock";

  console.log(playRound(playerSelection, computerSelection));
  */