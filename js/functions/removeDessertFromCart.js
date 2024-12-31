function removeDessertFromCart(list, dessert) {
    // Remover sobremesa da lista
    const dessertTitle = dessert.querySelector("p").innerHTML;
    const index = list.findIndex(dessert => dessert.name === dessertTitle);
    list.splice(index, 1);

    // Remover sobremesa do carrinho
    dessert.remove();
}

export default removeDessertFromCart;