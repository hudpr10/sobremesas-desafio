import showEmptyCart from "./showEmptyCart.js";

function removeDessertFromCart(list, dessert, button, img) {
    // Remover sobremesa da lista
    const dessertTitle = dessert.querySelector("p").innerHTML;
    const index = list.findIndex(dessert => dessert.name === dessertTitle);
    list.splice(index, 1);

    // Remover sobremesa do carrinho
    dessert.remove();

    // Atualizar o estilo do botão
    button.style = "z-index: 1;";

    img.classList.remove("dessert-img-select");

    if(list.length === 0) {
        showEmptyCart(list.length);
    }
}

export default removeDessertFromCart;