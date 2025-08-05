let totalCartValue = 1400;
let cartItems = document.getElementById('lista-produtos');
let cartTotal = document.getElementById('valor-total');

function addItem() {
    let quantity = document.getElementById('quantidade').value;
    let item = document.getElementById('produto').value;
    
    if (quantity == '') {
        alert('Informe uma quantidade valida!');
    } else {
        if (item == 'Fone de ouvido - R$100') {
            cartItems.innerHTML = cartItems.innerHTML + `<section class="carrinho__produtos__produto"> <span class="texto-azul">${quantity}x</span> Fone de ouvido <span class="texto-azul">R$100</span> </section>`;
            totalCartValue = totalCartValue + (quantity * 100); 
        } else if (item == 'Celular - R$1400') {
            cartItems.innerHTML = cartItems.innerHTML + `<section class="carrinho__produtos__produto"> <span class="texto-azul">${quantity}x</span> Celular <span class="texto-azul">R$1400</span> </section>`; 
            totalCartValue = totalCartValue + (quantity * 1400);
        } else if (item == 'Oculus VR - R$5000'){
            cartItems.innerHTML = cartItems.innerHTML + `<section class="carrinho__produtos__produto"> <span class="texto-azul">${quantity}x</span> Oculus VR <span class="texto-azul">R$5000</span> </section>`; 
            totalCartValue = totalCartValue + (quantity * 5000);
        } else {
            alert('Item informado não existe na lista de itens.')
        }
    updateTotalCart();
    }

}

function clearCart(){
    cartItems.innerHTML = '';
    totalCartValue = 0;
    updateTotalCart()   
}

function checkItem(item, quantity) {
    
}

function updateTotalCart() {
    cartTotal.innerHTML = `R$${totalCartValue}`; 
}