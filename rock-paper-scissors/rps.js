function getComputerChoice() {
    let rndInt = Math.floor(Math.random() * 3) + 1;
    if (rndInt == 1) {
        return "rock";
    }
    else if (rndInt == 2) {
        return "paper";
    }
    else return "scissors";
}

function playRound(playerSelection, computerSelection) {
    let lowerCase = playerSelection.toLowerCase();
    while (lowerCase == computerSelection) {
        computerSelection = getComputerChoice();
    }
    console.log(computerSelection);
    if (lowerCase == "rock") {
        if (computerSelection == "scissors") return 1;
        else if (computerSelection == "paper") return 0;
    }
    else if (lowerCase == "paper") {
        if (computerSelection == "rock") return 1;
        else if (computerSelection == "scissors") return 0;
    }
    else if (lowerCase == "scissors") {
        if (computerSelection == "paper") return 1;
        else if (computerSelection == "rock") return 0;
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    while (playerScore != 3 && computerScore != 3) {
        let playerSelection = prompt("Player Score = " + playerScore + "\nComputer Score = " + computerScore + "\nPlease enter Rock, Paper, or Scissors").toLowerCase();
        while (["rock", "paper", "scissors"].indexOf(playerSelection) === -1)
            playerSelection = prompt("Player Score = " + playerScore + "\nComputer Score = " + computerScore + "\nPlease enter Rock, Paper, or Scissors").toLowerCase();
        if(playRound(playerSelection, getComputerChoice()) == 1) playerScore++;
        else computerScore++;
    }
    if (playerScore == 3) console.log("You win");
    else console.log("You lose");
    console.log("Final score is \nPlayer Score = " + playerScore + "\nComputer Score = " + computerScore);
}

game();