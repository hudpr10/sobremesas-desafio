import removeDessertFromCart from "./removeDessertFromCart.js";
import totalOfDessertsOnCart from "./totalOfDessertsOnCart.js";
import totalPrice from "./totalPrice.js";

const addedDessertsContainer = document.querySelector(".my-cart-dessert-added");

function addDessertToCart(name, price, quantity, id, list) {
    addedDessertsContainer.innerHTML += `
        <div class="my-cart-dessert" id="${id}">
            <div class="my-cart-dessert-texts">
                <p>${name}</p>
                <div class="my-cart-details dessert${id}">
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

    const buttons = document.querySelectorAll(`[data-remove]`);
    buttons.forEach(button => {
        // Pegando o Id da sobremesa
        const dessertDataRemove = button.getAttribute("data-remove");
        // Utilizando o Id para pegar o botão
        const removeHtmlButton = document.querySelector(`[data-remove="${dessertDataRemove}"]`);
        // Pegando todo o elemento html da sobremesa no carrinho
        const desserthtml = removeHtmlButton.parentNode;

        button.addEventListener("click", () => {
            removeDessertFromCart(list, desserthtml);
            totalPrice(list);
            totalOfDessertsOnCart(list);
        })
    });
}

export default addDessertToCart;
