const addedDessertsContainer = document.querySelector(".my-cart-dessert-added");

function addDessertToCart(name, price, quantity, id) {
    addedDessertsContainer.innerHTML += `
        <div class="my-cart-dessert dessert-cart-${id}">
            <div class="my-cart-dessert-texts">
                <p>${name}</p>
                <div class="my-cart-details">
                    <span class="my-cart-dessert-quantity">${quantity}x</span>
                    <span class="my-cart-dessert-unit">${price}</span>
                    <span class="my-cart-dessert-total">${price}</span>
                </div>
            </div>
            <button class="my-cart-dessert-button" data-remove="${id}">
                <img src="./assets/images/icon-remove-item.svg" alt="ícone para remover item do carrinho">
            </button>
        </div>
    `;
}

export default addDessertToCart;
