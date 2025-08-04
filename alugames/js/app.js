function changeStatus(game) {
    let liElement = document.getElementById(`game-${game}`);
    
    changeLabel(liElement);
    
    changeImg(liElement);
    
}

function changeLabel(Element) {
    let aElement = Element.getElementsByTagName('a');

    if (aElement.item(0).classList.contains('dashboard__item__button--return')) {
        aElement.item(0).classList.remove('dashboard__item__button--return');
        aElement.item(0).innerHTML = 'Alugar';
    } else {
        aElement.item(0).classList.add('dashboard__item__button--return');
        aElement.item(0).innerHTML = 'Devolver';  
    };
}

function changeImg(Element) {
    let divElement = Element.getElementsByTagName('div');

    if (divElement.item(0).classList.contains('dashboard__item__img--rented')) {
        divElement.item(0).classList.remove('dashboard__item__img--rented');
    } else {
        divElement.item(0).classList.add('dashboard__item__img--rented');
    };
}