import priceRefactorToHtml from "./priceRefactorToHtml.js";

function sumDessertOnCart(id, total, quantity) {
    const dessertOnCart = document.querySelector(`.dessert${id}`).childNodes;
    dessertOnCart[1].innerHTML = `${quantity}x`;
    dessertOnCart[5].innerHTML = `R$ ${priceRefactorToHtml(total)}`;
}

export default sumDessertOnCart;