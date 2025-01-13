import checkoutOrder from "./checkoutOrder.js";

const cartContainer = document.querySelector(".my-cart-container");

function showEmptyCart(list) {
    const listLength = list.length;

    if(listLength === 0) {
        cartContainer.innerHTML += `
            <div class="my-cart-empty">
                <img class="my-cart-empty-img" src="./assets/images/illustration-empty-cart.svg" alt="desenho de um bolo sem uma das suas fatias">
                <p class="my-cart-empty-text">As sobremesas adicionadas aparecerão aqui!</p>
            </div>
        `

        const button = document.querySelector(".my-cart-button");
        const tag = document.querySelector(".my-cart-carbon");
        const totalPrice = document.querySelector(".my-cart-total");

        button.remove();
        tag.remove();
        totalPrice.remove();
    } else if(listLength === 1){
        const emptyCart = cartContainer.querySelector(".my-cart-empty");
        emptyCart.remove();

        cartContainer.innerHTML += `
            <div class="my-cart-total">
                <p>Valor total</p>
                <span class="total-price">R$ 0,00</span>
            </div>
            <div class="my-cart-carbon">
                <img src="./assets/images/icon-carbon-neutral.svg" alt="ícone de árvore">
                <p>Essa é uma entrega <strong>neutra de carbono</strong></p>
            </div>
            <button class="my-cart-button" id="orderConfirm">Confirmar pedido</button>
        `

        const confirmButton = document.querySelector("#orderConfirm");
        confirmButton.addEventListener("click", () => {
            checkoutOrder(list)
        });
    } 
}

export default showEmptyCart;