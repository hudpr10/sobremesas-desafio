import showEmptyCart from "./showEmptyCart.js";

function removeDessertFromCart(list, dessertOnCart, button, img, dessertMain) {
    // Remover sobremesa da lista
    const dessertTitle = dessertOnCart.querySelector("p").innerHTML;
    const index = list.findIndex(dessert => dessert.name === dessertTitle);
    list.splice(index, 1);
    // Remover sobremesa do carrinho
    dessertOnCart.remove();

    // Atualizar o estilo do botão
    button.style = "z-index: 1;";

    img.classList.remove("dessert-img-select");

    if(list.length === 0) {
        showEmptyCart(list);
    }

    const buttons = dessertMain.querySelectorAll(".button-quantity");
    const newDecrementButton = buttons[0].cloneNode(true);
    const newIncrementButton = buttons[1].cloneNode(true);
    buttons[0].replaceWith(newDecrementButton);
    buttons[1].replaceWith(newIncrementButton);
}

export default removeDessertFromCart;
