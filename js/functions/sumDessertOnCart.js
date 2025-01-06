import priceRefactorToHtml from "./priceRefactorToHtml.js";

function sumDessertOnCart(id, total, quantity) {
    const dessertOnCart = document.querySelectorAll(`.dessert-cart-${id}`)[1].childNodes[1].childNodes[3].childNodes;

    dessertOnCart[1].innerHTML = `${quantity}x`;
    dessertOnCart[5].innerHTML = `R$ ${priceRefactorToHtml(total)}`;
}

export default sumDessertOnCart;