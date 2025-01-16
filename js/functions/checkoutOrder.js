import priceRefactorToHtml from "./priceRefactorToHtml.js";
import totalPrice from "./totalPrice.js";

function checkoutOrder(orderList) {
    const background = document.querySelector(".background-opacity");
    const orderContainer = document.querySelector(".order-confirmed-container");

    totalPrice(orderList);
    background.style.display = "block";
    orderContainer.style.display = "block";    

    const orderListContainer = orderContainer.querySelector(".order-list-container")
    for(let i = 0; i < orderList.length; i++) {
        const order = orderList[i];

        orderListContainer.innerHTML += `
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
}

export default checkoutOrder;
