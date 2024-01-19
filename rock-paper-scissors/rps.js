let playerScore = 0;
let computerScore = 0;

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
    const selection = document.querySelector('#selection');

    selection.innerHTML = "Player selected: " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1) + " and Computer selected: " + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)
    if (lowerCase == "rock") {
        if (computerSelection == "scissors") {
            winRound();
            return 1;
        }
        else if (computerSelection == "paper") {
            loseRound();
            return 0;
        }
    }
    else if (lowerCase == "paper") {
        if (computerSelection == "rock") {
            winRound();
            return 1;
        }
        else if (computerSelection == "scissors") {
            loseRound();
            return 0;
        }
    }
    else if (lowerCase == "scissors") {
        if (computerSelection == "paper") {
            winRound();
            return 1;
        }
        else if (computerSelection == "rock") {
            loseRound();
            return 0;
        }
    }
}

function winRound() {
    const gameResult = document.querySelector('#gameResult');
    gameResult.innerHTML = "You've won the round";
}

function loseRound() {
    const gameResult = document.querySelector('#gameResult');
    gameResult.innerHTML = "You've lost the round";
}

function game(playerSelection) {

    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;

    if (playRound(playerSelection, getComputerChoice()) == 1) playerScore++;
    else computerScore++;

    updateScore();

    if (playerScore == 5 || computerScore == 5) {
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
    }
    else {
        rockBtn.disabled = false;
        paperBtn.disabled = false;
        scissorsBtn.disabled = false;
    }
}

function updateScore() {
    const playerScoreText = document.querySelector('#playerScore');
    const computerScoreText = document.querySelector('#computerScore');
    const winner = document.querySelector('#winner');

    playerScoreText.innerHTML = "Player Score: " + playerScore;
    computerScoreText.innerHTML = "Computer Score: " + computerScore;

    if (playerScore == 5) {
        winner.innerHTML = "Congratulations, you've won!";
    }
    else if (computerScore == 5) {
        winner.innerHTML = "Unfortunately, you've lost.";
    }
}