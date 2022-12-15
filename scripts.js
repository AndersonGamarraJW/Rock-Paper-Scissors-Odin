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
function game(e){
    const computerSelection = getComputerChoice();
    const playerSelection = this.textContent;
    const result = document.querySelector('.result').textContent = gameRockScissors(playerSelection,computerSelection);
    const puntaje = document.querySelector('.points-result').textContent = playerPoints.toString();
    alertWin(); 
    
}
function alertWin(){
    if(playerPoints === 5){
        alert('GANASTE');
    }
}

const buttons = document.querySelectorAll('.button');
buttons.forEach(button => button.addEventListener('click',game));

