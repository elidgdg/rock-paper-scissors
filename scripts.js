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

function playGame(playerSelection) {
    const computerSelection = getComputerChoice();
    const roundWinner = getRoundWinner(playerSelection, computerSelection);

    updatePoints(roundWinner);
    results.textContent = getRoundWinnerMessage(playerSelection, computerSelection);

    if (playerPoints === 5 || computerPoints === 5) {endGame()};
}

function endGame() {
    gameEndText.textContent = getGameWinnerMessage(playerPoints, computerPoints);
    selectionButtons.forEach((button) => {
        button.disabled = true;
        button.classList.toggle('hover-zoom');
    })

    gameEndDiv.classList.toggle('is-hidden');
    gameEndDiv.classList.toggle('flex-center-column');
}

function resetGame() {
    updatePoints('reset');
    selectionButtons.forEach((button) => {
        button.disabled = false;
        button.classList.toggle('hover-zoom');
    })
    gameEndDiv.classList.toggle('is-hidden');
    gameEndDiv.classList.toggle('flex-center-column');
}

const selectionButtons = document.querySelectorAll(".selection-button");
const results = document.querySelector('.results');
const playerScore = document.querySelector('.player-score');
const computerScore = document.querySelector('.computer-score');
const gameEndText = document.querySelector('.gameend-text');
const gameEndDiv = document.querySelector('.gameend-div');
const resetButton = document.querySelector('.play-again')

// Play a round
selectionButtons.forEach((button) => {
    button.addEventListener('click', () => playGame(button.id));
    })


resetButton.addEventListener('click', () => resetGame());