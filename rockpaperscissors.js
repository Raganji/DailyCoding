
function playRound(playerSelection, computerSelection) {
  // code here
  console.log("Game starting now.");
  if (playerSelection === computerSelection) {
    return "It's a tie! Both picked " + computerSelection + ".";
  }
    else if (playerSelection === "rock") {
      if (computerSelection === "paper") {
        return "You lose! Paper covers rock.";
      } else {
        return "You win! Rock smashes scissors.";
      }
    } else if (playerSelection === "paper") {
      if (computerSelection === "rock") {
        return "You win! Paper covers rock.";
      } else {
        return "You lose! Scissors cut paper.";
      }
    } else if (playerSelection === "scissors") {
      if (computerSelection === "rock") {
        return "You lose! Rock smashes scissors.";
      } else {
        return "You win! Scissors cut paper.";
      }
    } else {
      return "You played something else! Please play \"rock\", \"paper\", or \"scissors\".";
    }
}

function computerPlay() {
  return optionList[Math.floor(Math.random()*(optionList.length))];
};

const playerSelection = prompt("Rock, paper, scissors?").toLowerCase().trim();
const optionList = ["rock","paper","scissors"];
const computerSelection = computerPlay();
console.log("You played: " + playerSelection)
console.log("Computer plays: " + computerSelection);
console.log(playRound(playerSelection, computerSelection));
