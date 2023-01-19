/* getComputerChoice()
pick random number 0-2
if 0, rock
if 1, paper
if 2, scissors */

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

console.log(getComputerChoice());