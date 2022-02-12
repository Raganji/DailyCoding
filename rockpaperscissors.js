
function computerPlay(optionList) {
  let computerSelection = optionList[Math.floor(Math.random()*(optionList.length))];
  console.log("Computer plays: " + computerSelection);
};

const optionList = ["rock","paper","scissors"];
computerPlay(optionList);
