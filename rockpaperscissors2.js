function playRound(playerSelection, computerSelection) {
  // code here
  if (playerSelection === computerSelection) {
    tieCount++;
    return "It's a tie! Both picked " + computerSelection + ".";
  }
    else if (playerSelection === "rock") {
      if (computerSelection === "paper") {
        computerScore++;
        return "You lose! Paper covers rock.";
      } else {
        playerScore++;
        return "You win! Rock smashes scissors.";
      }
    } else if (playerSelection === "paper") {
      if (computerSelection === "rock") {
        playerScore++;
        return "You win! Paper covers rock.";
      } else {
        computerScore++;
        return "You lose! Scissors cut paper.";
      }
    } else if (playerSelection === "scissors") {
      if (computerSelection === "rock") {
        computerScore++;
        return "You lose! Rock smashes scissors.";
      } else {
        playerScore++;
        return "You win! Scissors cut paper.";
      }
    } else {
      // this case should never happen, because we check for this before the function is called
      return "It broke! This should have been caught earlier in the program. Investigate!";
    }
}

function computerPlay() {
  return optionList[Math.floor(Math.random()*(optionList.length))];
};

const optionList = ["rock","paper","scissors"];
let playerScore = 0;
let computerScore = 0;
let tieCount = 0;

// plays 5 games
for (let i = 0; i < 5; i++) {
  let playerSelection = prompt("Round " + (i+1) + ": Rock, paper, scissors?").toLowerCase().trim();
  // first, checks player input to make sure it's one of the valid three options
  if (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
    console.log("You played something else! Please play \"rock\", \"paper\", or \"scissors\".");
    i--; // decreases value of i by 1, so it doesn't count towards the loop
  } else {
    let computerSelection = computerPlay();
    console.log("You played: " + playerSelection);
    console.log("Computer plays: " + computerSelection);
    console.log(playRound(playerSelection, computerSelection));
};
  if (i === 4) {
    let tiePlural = (tieCount === 1) ? " tie." : " ties."; // checks single condition, decides between 2 outcomes
    console.log("Final score: player wins " + playerScore + ", computer wins "
        + computerScore + ", " + tieCount + tiePlural);
    if (playerScore === computerScore) {
      console.log("In the end, it's a tie!");
    } else if (playerScore > computerScore) {
      console.log("In the end, you won!");
    } else {
      console.log("In the end, you lost!");
    };
  };
};
