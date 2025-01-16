import priceRefactorToHtml from "./priceRefactorToHtml.js";
import totalPrice from "./totalPrice.js";

function checkoutOrder(orderList) {
    const mainHtml = document.querySelector("main");

    mainHtml.innerHTML += `
        <section class="background-opacity"></section>
        <section class="order-confirmed-container">
            <img src="./assets/images/icon-order-confirmed.svg" alt="ícone de verificado, informando que o pedido foi realizado">
            <h2 class="order-title">Pedido Confirmado</h2>
            <p class="order-subtitle">Esperamos que você goste da(s) sobremesa(s)!</p>
            <div class="order-list">
                <ul class="order-list-container">
                </ul>
                <div class="order-total-price-container">
                    <p>Total do Pedido</p>
                    <span class="order-total-price total-price"></span>
                </div>
            </div>
            <button class="my-cart-button" id="checkout">Começar Novo Pedido</button>
        </section>
    `
    
    totalPrice(orderList);

    const orderContainer = mainHtml.querySelector(".order-list-container");
    for(let i = 0; i < orderList.length; i++) {
        const order = orderList[i];

        orderContainer.innerHTML += `
            <li class="order-item">
                <div class="order-img-text-container">
                    <img src="./assets/images/${order.img}" alt="${order.name}">
                    <div class="order-text-container">
                        <p>${order.name}</p>
                        <div class="order-text-details-container">
                            <span class="order-dessert-quantity">${order.quantity}x</span>
                            <span class="order-dessert-unit-price gray-text">R$ ${priceRefactorToHtml(order.price)}</span>
                        </div>
                    </div>
                </div>
                <span class="order-dessert-total-price">R$ ${priceRefactorToHtml(order.total)}</span>
            </li>            
        `
    }

    const buttonPageUpdate = document.querySelector("#checkout");
    buttonPageUpdate.addEventListener("click", pageUpdate);
}

function pageUpdate() {
    window.location.reload();
}

export default checkoutOrder;