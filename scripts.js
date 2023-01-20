// return random selection from rock, paper, scissors
function getComputerChoice() {
    let randInt = Math.floor(Math.random() * 3);

    switch(randInt) {
        case 0:
            return 'Rock';
        case 1:
            return 'Paper';
        case 2:
            return 'Scissors'
        default:
            return 'Error';
    }
}

function getPlayerChoice() {
    let playerChoice;

    while (true){
        playerChoice = prompt('Rock, Paper, Scissors?');
        lowerPlayerChoice = playerChoice.toLowerCase();

        if (lowerPlayerChoice === 'rock' || lowerPlayerChoice === 'paper' || lowerPlayerChoice === 'scissors') {
            return lowerPlayerChoice;
        }

        alert("That's not an option!");
    }



}

// return the winner of a round
function GetRoundWinner(playerSelection, computerSelection) {
    const optionsArray = ['rock','paper','scissors'];
    let  playerIndex = optionsArray.indexOf(playerSelection.toLowerCase());
    let computerIndex = optionsArray.indexOf(computerSelection.toLowerCase());

    if ((playerIndex + 1) % 3 === computerIndex) {
        return 'computer';
    } else if (playerIndex === computerIndex) {
        return 'draw';
    } else {
        return 'player';
    }
}

// play a round, and return a message specific to the outcome
function playRound(playerSelection, computerSelection) {
    let winner = GetRoundWinner(playerSelection, computerSelection);
    
    switch (winner) {
        case 'computer':
            return `You lose! ${computerSelection} beats ${playerSelection}.`;
        case 'draw':
            return "It's a draw!";
        case 'player':
            return `You win! ${playerSelection} beats ${computerSelection}.`
        default:
            return 'error';
    }
}

// Return a message, declaring the overall winner of the game, or if its a draw
function getGameWinnerMessage(playerPoints, computerPoints) {
    if (playerPoints > computerPoints){
        return `Player: ${playerPoints}\nComputer: ${computerPoints}\nYou Win!`;
    } else if (playerPoints < computerPoints) {
        return `Player: ${playerPoints}\nComputer: ${computerPoints}\nYou Lose!`;
    } else {
        return `Player: ${playerPoints}\nComputer: ${computerPoints}\nIts a draw!`;
    }

}

// Play a five round match of rock paper scissors
function game() {
    let playerPoints = 0;
    let computerPoints = 0;

    for (let i = 0; i < 5; i++) {
        playerSelection = getPlayerChoice();
        computerSelection = getComputerChoice();

        roundOutcome = playRound(playerSelection, computerSelection);

        winner = GetRoundWinner(playerSelection, computerSelection);
        if (winner === 'player') {
            playerPoints++;
        } else if (winner === 'computer') {
            computerPoints++;
        }

        console.log(roundOutcome);
    }
    console.log(getGameWinnerMessage(playerPoints, computerPoints));
}

game();