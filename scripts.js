let playerPoints = 0;
let computerPoints = 0;

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

// return the winner of a round
function getRoundWinner(playerSelection, computerSelection) {
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

// return a message specific to the outcome of a round
function getRoundWinnerMessage(playerSelection, computerSelection) {
    let winner = getRoundWinner(playerSelection, computerSelection);
    
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

function updatePoints(reciever) {
    if (reciever === 'computer') {
        computerPoints++;
    } else if (reciever === 'player') {
        playerPoints++;
    } else if (reciever === 'reset') {
        computerPoints = 0;
        playerPoints = 0;
    }

    playerScore.textContent = `You: ${playerPoints}`;
    computerScore.textContent = `Computer: ${computerPoints}`;
}

// Return a message, declaring the overall winner of the game, or if its a draw
function getGameWinnerMessage(playerPoints, computerPoints) {
    if (playerPoints > computerPoints){
        return 'You Win!';
    } else if (playerPoints < computerPoints) {
        return 'You Lose!';
    } else {
        return `Player: ${playerPoints}\nComputer: ${computerPoints}\nIts a draw!`;
    }

}

// Play a five round match of rock paper scissors
// function game() {
//     let playerPoints = 0;
//     let computerPoints = 0;

//     for (let i = 0; i < 5; i++) {
//         playerSelection = getPlayerChoice();
//         computerSelection = getComputerChoice();

//         roundOutcome = playRound(playerSelection, computerSelection);

//         winner = GetRoundWinner(playerSelection, computerSelection);
//         if (winner === 'player') {
//             playerPoints++;
//         } else if (winner === 'computer') {
//             computerPoints++;
//         }

//         console.log(roundOutcome);
//     }
//     console.log(getGameWinnerMessage(playerPoints, computerPoints));
// }

function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    const roundWinner = getRoundWinner(playerSelection, computerSelection);

    updatePoints(roundWinner);
    results.textContent = getRoundWinnerMessage(playerSelection, computerSelection);

    if (playerPoints === 5 || computerPoints === 5) {endRound()};
}

function endRound() {
    results.textContent = getGameWinnerMessage(playerPoints, computerPoints);
    updatePoints('reset');
}

const selectionButtons = document.querySelectorAll(".selection");
const results = document.querySelector('.results');
const playerScore = document.querySelector('.player-score');
const computerScore = document.querySelector('.computer-score');

// Play a round
selectionButtons.forEach((button) => {
    button.addEventListener('click', () => playRound(button.id));
    })