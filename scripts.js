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
let playerPoints = 0;
function gameRockScissors(playerSelection,computerSelection){
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();
    if (player === 'piedra' && computer === 'tijera'){
        playerPoints++;
        return `You Win!! ${player} beats ${computer}`;
    }
    if (player === 'papel' && computer === 'piedra'){
        playerPoints++;
        return `You Win! ${player} beats ${computer}`;
    }
    if (player === 'tijera' && computer === 'papel'){
        playerPoints++;
        return `You Win!! ${player} beats ${computer}`;
    }
    if (player === computer){
        return `${player} and ${computer}`;
    }
    else{
        return `You Lose ${computer} beats ${player}`;
    }
}
function game(){
    let playerSelection;
    let computerSelection;
    for (let i = 0;i<5;i++){
        computerSelection = getComputerChoice();
        playerSelection = prompt('Introduce tu opción');
        console.log(gameRockScissors(playerSelection,computerSelection));
    }
    if (playerPoints>=3){
        console.log(`Player win with ${playerPoints} points`);
    }
    else{
        console.log(`Player lose with ${playerPoints} points`);
    }
}
game();

