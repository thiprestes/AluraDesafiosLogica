let quantityElement = document.getElementById("quantidade");
let firstElement = document.getElementById("de");
let lastElement = document.getElementById("ate");
let messageElement = document.getElementById("resultado");
const numbersSelect = [];

function draw() {
    let quantityNumber = parseInt(document.getElementById("quantidade").value);
    let firstNumber = parseInt(document.getElementById("de").value);
    let lastNumber = parseInt(document.getElementById("ate").value);

    if (checkParams(quantityNumber, firstNumber, lastNumber)) {
        getnumbers(quantityNumber, firstNumber, lastNumber); 
        ajustRestartButton();
        ajustDrawButton();  
    };
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
    alterLabelSelectNumbers();
}

function restart() {
    quantityElement.value = '';
    firstElement.value = '';
    lastElement.value = '';
    numbersSelect.length = 0;
    ajustRestartButton();
    ajustDrawButton();
    alterLabelSelectNumbers(); 
}

function checkParams(quantity, first, last) {
    let message = '';
    let possibilities = last - first;

    if (possibilities < quantity ){
        message = message + "\n Quantidade informada maior que as possibilidades.";
    };

    if (last < first) {
        message = message + "\n Valores de inicio e fim incorretos.";
    };

    if (quantity <=0 ) {
       message = message + "\n Informe uma quantidade maior que 0."; 
    }

    if (message != '') {
        alert(message);
        return false;
    };

    return true;
}

function ajustRestartButton() {
    let restartButtonElement = document.getElementById("btn-reiniciar");
    if (restartButtonElement.classList.contains('container__botao')
    ) {
        restartButtonElement.classList.remove('container__botao');
        restartButtonElement.classList.add('container__botao-desabilitado');
        restartButtonElement.disabled = true; 
    } else {
        restartButtonElement.classList.remove('container__botao-desabilitado');
        restartButtonElement.classList.add('container__botao');
        restartButtonElement.disabled = false;
    };
}

function ajustDrawButton() {
    let drawButtonElement = document.getElementById("btn-sortear");
    if (drawButtonElement.classList.contains('container__botao-desabilitado')
    ) {
        drawButtonElement.classList.remove('container__botao-desabilitado');
        drawButtonElement.classList.add('container__botao');
        drawButtonElement.disabled = false; 
    } else {
        drawButtonElement.classList.remove('container__botao');
        drawButtonElement.classList.add('container__botao-desabilitado');
        drawButtonElement.disabled = true; 
    };
}

function alterLabelSelectNumbers() {
    let results = document.getElementById('resultado');
    if (numbersSelect.length > 0) {
        results.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${numbersSelect}.</label>`
    } else {
        results.innerHTML = `<label class="texto__paragrafo">Números sorteados: nenhum até agora.</label>`
    }
}