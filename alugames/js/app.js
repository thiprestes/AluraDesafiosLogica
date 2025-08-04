function changeStatus(game) {
    let divElement = document.getElementById(`game-${game}`);
    let aElement = divElement.getElementsByTagName('a');

    if (aElement.item(0).classList.contains('dashboard__item__button--return')) {
        aElement.item(0).classList.remove('dashboard__item__button--return');
        aElement.item(0).innerHTML = 'Alugar';
    } else {
        aElement.item(0).classList.add('dashboard__item__button--return');
        aElement.item(0).innerHTML = 'Devolver';    
    }
}