let restartButtonElement = document.getElementById("btn-reiniciar");
let drawButtonElement = document.getElementById("btn-sortear");
let quantityElement = document.getElementById("quantidade");
let firstElement = document.getElementById("de");
let lastElement = document.getElementById("ate");
let messageElement = document.getElementById("resultado");
const numbersSelect = [];

function draw() {
    let quantityNumber = document.getElementById("quantidade").value;
    let firstNumber = document.getElementById("de").value;
    let lastNumber = document.getElementById("ate").value;

    if (checkParams(quantityNumber, firstNumber, lastNumber)) {
        getnumbers(quantityNumber, firstNumber, lastNumber); 
        ajustRestartButton(true);
        ajustDrawButton(false);  
    };
    ajustRestartButton(false);
    ajustDrawButton(true);
}

function getnumbers(quantityNumber, firstNumber, lastNumber) {
    let count = 0;
    let number = 0;
    while (count < quantityNumber) {
        number = parseInt(Math.random() * lastNumber);
        if (number > firstNumber) {
            if (numbersSelect.find(numero => numero == number)) {
                console.log("repetido: " + number + "numbersSelect: " + numbersSelect);    
            } else {
                console.log("Escolhido: " + number + "numbersSelect: " + numbersSelect);    
                numbersSelect.push(number);
                count++
            };
        };
    };
    alert(numbersSelect);
}

function restart() {
    ajustRestartButton(true);
    ajustDrawButton(false);
    quantityElement.value = '';
    firstElement.value = '';
    lastElement.value = '';
    numbersSelect.length = 0; 
}

function checkParams(quantity, first, last) {
    let message = '';
    let possibilities = last - first;

    if (possibilities < quantity ){
        message = message + "\n Quantidade informada maior que as possibilidades";
    };

    if (last < first) {
        message = message + "\n Valores de inicio e fim incorretos";
    };

    if (message != '') {
        alert(message);
        return false;
    };

    return true;
}

function ajustRestartButton(buttonDisabled) {
    if (buttonDisabled){ 
        restartButtonElement.className = "container__botao-desabilitado";
    } else {
        restartButtonElement.className = "container__botao";
    };
    restartButtonElement.disabled = buttonDisabled;
}

function ajustDrawButton(buttonDisabled) {
    if (buttonDisabled) {
        drawButtonElement.className = "container__botao-desabilitado"; 
    } else {
        drawButtonElement.className = "container__botao";  
    };
    
    drawButtonElement.disabled = buttonDisabled; 
}