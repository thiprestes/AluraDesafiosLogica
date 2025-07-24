let restartButtonElement = document.getElementById("btn-reiniciar");
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
    //se estiver tudo certo 
    getnumbers(quantityNumber, firstNumber, lastNumber); 
    ajustRestartButton(true);  
    };
    ajustRestartButton(false);
}

function getnumbers(quantityNumber, firstNumber, lastNumber) {
    let count = 0;
    let number = 0;
    while (count < quantityNumber) {
        number = parseInt(Math.random() * lastNumber);
        if (number > firstNumber) {
            if (numbersSelect.find(numero => numero == number)) {
                continue;    
            } else {    
                numbersSelect.push(number);
                count++
            }
        }
    }
    alert(numbersSelect)
}

function restart() {
    ajustRestartButton(true);
    quantityElement.value = '';
    firstElement.value = '';
    lastElement.value = '';
    let teste = messageElement.getElementsByClassName("text__paragrafo")
    teste.innerHTML = 'testes';
}

function checkParams(quantity, first, last) {
    let message = '';
    let possibilities = last - first;

    if (possibilities < quantity ){
        message = message + "\n Quantidade informada maior que as possibilidades"
    }

    if (last < first) {
        message = message + "\n Valores de inicio e fim incorretos"
    }

    if (message != '') {
        alert(message);
        return false;
    };

    return true;
}

function ajustRestartButton(buttonDisabled) {
    restartButtonElement.className = "container__botao";
    restartButtonElement.disabled = buttonDisabled;
}