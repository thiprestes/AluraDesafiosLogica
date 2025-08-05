let totalCartValue = 0;
let cartItems = document.getElementById('lista-produtos');
let cartTotal = document.getElementById('valor-total');
clearCart();

function addItem() {
    let quantity = document.getElementById('quantidade').value;
    let item = document.getElementById('produto').value;
    let nameItem = item.split('-')[0];
    let valueItem = item.split('R$')[1];
    
    if (quantity == '') {
        alert('Informe uma quantidade valida!');
    } else {
        cartItems.innerHTML = cartItems.innerHTML + `<section class="carrinho__produtos__produto"> <span class="texto-azul">${quantity}x</span> ${nameItem} <span class="texto-azul">R$${valueItem}</span> </section>`;
        totalCartValue = totalCartValue + (quantity * valueItem); 
        updateTotalCart();
    }
    document.getElementById('quantidade').value = '';
}

function clearCart(){
    cartItems.innerHTML = '';
    totalCartValue = 0;
    updateTotalCart()   
}

function updateTotalCart() {
    cartTotal.innerHTML = `R$${totalCartValue}`; 
}