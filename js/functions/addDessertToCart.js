import priceRefactor from "./priceRefactor.js";
import totalPrice from "./totalPrice.js";
const addedDessertsContainer = document.querySelector(".my-cart-dessert-added");

function addDessertToCart(name, id, price, quantity, list) {
    addedDessertsContainer.innerHTML += `
        <div class="my-cart-dessert">
            <div class="my-cart-dessert-texts">
                <p>${name}</p>
                <div class="my-cart-details ${id}">
                    <span class="my-cart-dessert-quantity">${quantity}x</span>
                    <span class="my-cart-dessert-unit">R$ ${priceRefactor(price)}</span>
                    <span class="my-cart-dessert-total">R$ ${priceRefactor(price)}</span>
                </div>
            </div>
            <button class="my-cart-dessert-button" data-remove="${id}">
                <img src="./assets/images/icon-remove-item.svg" alt="ícone para remover item do carrinho">
            </button>
        </div>
    `;

    const buttons = document.querySelectorAll(`[data-remove]`);
    buttons.forEach(button => {
        const dessert = button.getAttribute("data-remove");

        removeDessertFromCart(dessert, list);
    });
}

export default addDessertToCart;

function removeDessertFromCart(dessert, list) {
    const htmlDessert = document.querySelector(`[data-remove=${dessert}]`);
    htmlDessert.addEventListener("click", () => {
        // Removendo sobremesa do carrinho (visual)
        const children = htmlDessert.parentNode;
        addedDessertsContainer.removeChild(children);

        // Removendo sobremesa da lista
        const name = children.childNodes[1].childNodes[1].innerHTML;
        const index = list.findIndex(dessert => dessert.name === name);
        list.splice(index, 1);

        // Atualizando preço
        totalPrice(list);
    });
}