function buy() {
    let qtyFloor = parseInt(document.getElementById('qtd-pista').innerHTML);
    let qtyUpperLevel = parseInt(document.getElementById('qtd-superior').innerHTML);
    let qtyLowerLevel = parseInt(document.getElementById('qtd-inferior').innerHTML);
    let ticketSelected = document.getElementById('tipo-ingresso').value;
    let qtyOrdered = parseInt(document.getElementById('qtd').value);
    if (ticketSelected == 'pista') {
        if (qtyFloor >= qtyOrdered) {
            document.getElementById('qtd-pista').innerHTML = qtyFloor - qtyOrdered;
        } else {
            qtyInvalid(qtyOrdered);
        }
    } else if (ticketSelected == 'inferior') {
        if (qtyLowerLevel >= qtyOrdered){
            document.getElementById('qtd-inferior').innerHTML = qtyLowerLevel - qtyOrdered
        } else {
            qtyInvalid(qtyOrdered);
        }
    } else if (ticketSelected == 'superior') {
        if (qtyUpperLevel >= qtyOrdered){
            document.getElementById('qtd-superior').innerHTML = qtyUpperLevel - qtyOrdered;
        } else {
            qtyInvalid(qtyOrdered);
        }
    }
    document.getElementById('qtd').value = '';
}

function qtyInvalid(qty) {
    alert(`O Ingresso selecionado não possui ${qty} unidades disponíveis!`);
}
