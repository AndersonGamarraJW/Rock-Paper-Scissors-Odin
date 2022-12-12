function getRandomInt(max){
    return Math.floor(Math.random() * max);
}
function getComputerChoice(){
    let option = getRandomInt(3);
    switch (option) {
        case 0:
            return 'Piedra';
        case 1:
            return 'Papel';
        case 2:
            return 'Tijera';
        default:
            break;
    }
}
const playerSelection = 'Piedra';
const computerSelection = getComputerChoice();
function gameRockScissors(playerSelection,computerSelection){
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();
    if (player === 'piedra' && computer === 'tijera'){
        return `You Win!! ${player} beats ${computer}`;
    }
    if (player === 'papel' && computer === 'piedra'){
        return `You Win! ${player} beats ${computer}`;
    }
    if (player === 'tijera' && computer === 'papel'){
        return `You Win!! ${player} beats ${computer}`;
    }
    if (player === computer){
        return `${player} and ${computer}`;
    }
    else{
        return `You Lose ${computer} beats ${player}`;
    }
}
console.log(gameRockScissors(playerSelection,computerSelection));


