let order = [];
let clickedOrder = [];
let score = 0;

//0 -- verde
//1 -- vermelho
//2 -- amarelo
//3 -- azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const gree = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

//cria ordem aleatoria
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() = 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order){
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

//acende a proxima cor
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    });
}

//checa os botoes clicados se sao os mesmo da ordem gerada
let checkOrder = () => {
    for(let i in clickedOrder){
        if(clickedOrder[i] != order[i]){
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length){
        alert(`Pontuação: ${score}\nVoce acertou! Iniciando proximo nivel!`);
        nextLevel();
    }
}

//função para o clique do usuario
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },250);
}

//função que retorna a cor
let createColorElement = (color) =>{
    if(color == 0){
        return grenn;
    }else if(color == 1){
        return red;
    }else if(color == 2){
        return yellow;
    }else if(color == 3){
        return blue;
    }
}

let nextLevel = () => {
    score++;
    shuffleOrder();
}

let gameOver = () =>{
    alert(`Pontuação: ${score}\nVoce perdeu o jogo!\nclique em OK para inicia um novo jogo`);
    order = [];
    clickedOrder = [];

    playGame();
}

//função de inicio do jogo

let playGame = () =>{
    alert('Bem vindo ap Genesis! Iniciando novo jogo')
    score = 0;

    nextLevel();
}




//eventos de click para as cores
gree.onclick = () => click(0)
red.onclick = () => click(1)
yellow.onclick = () => click(2)
blue.onclick = () => click(3)

//inicio do jogo
playGame();

