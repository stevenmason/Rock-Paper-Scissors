const contPlayer = document.querySelector(".player");
const pSElement = document.createElement("div");
pSElement.setAttribute("id", "playerCount");
pSElement.textContent = 0;
pSElement.style.fontSize = "80px";
pSElement.style.padding = "20px";
contPlayer.appendChild(pSElement);

const contComputer = document.querySelector(".comp");
const cSElement = document.createElement("div");
cSElement.setAttribute("id", "compCount");
cSElement.textContent = 0;
cSElement.style.fontSize = "80px";
cSElement.style.padding = "20px";
contComputer.appendChild(cSElement);

let playerScore = 0;
let computerScore = 0;
function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    alert("It was a draw");
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    playerScore++;
    document.getElementById("playerCount").innerHTML = `${playerScore}`;
    alert("You win! (rock beats scissors)");
    return;
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    playerScore++;
    document.getElementById("playerCount").innerHTML = `${playerScore}`;
    alert("You win! (paper beats rock)");
    return;
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    playerScore++;
    document.getElementById("playerCount").innerHTML = `${playerScore}`;
    alert("You win! (scissors beats paper)");
    return;
  } else {
    computerScore++;
    document.getElementById("compCount").innerHTML = `${computerScore}`;
    alert("You lose (" + computerSelection + " beats " + playerSelection + ")");
    return;
  }
}
function reset() {
  playerScore = 0;
  document.getElementById("playerCount").innerHTML = `${playerScore}`;
  computerScore = 0;
  document.getElementById("compCount").innerHTML = `${computerScore}`;
}
function gameEnd() {
  if (playerScore === 5) {
    alert("You got away");
    reset();
  } else if (computerScore === 5 || computerScore == playerScore + 2) {
    alert("You got caught");
    reset();
  }
}
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(button.id);
    function computerMath() {
      return Math.floor(Math.random() * 3 + 1);
    }
    const computerNumber = computerMath();
    function getComputerChoice(computerResult) {
      if (computerResult === 1) {
        return "rock";
      } else if (computerResult === 2) {
        return "paper";
      } else {
        return "scissors";
      }
    }
    playRound(button.id, getComputerChoice(computerNumber));
    gameEnd();
  });
});
