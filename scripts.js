function getRandomInt(max){
    return Math.floor(Math.random() * max);
}
function getComputerChoice(){
    let option = getRandomInt(3);
    switch (option) {
        case 0:
            return 'Piedra';
            break;
        case 1:
            return 'Papel';
            break;
        case 2:
            return 'Tijera';
            break;
        default:
            break;
    }
}
console.log(getComputerChoice());