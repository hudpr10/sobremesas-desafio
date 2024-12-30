import priceRefactor from "./priceRefactor.js";

function sumDessertOnCart(id, price, quantity) {
    const total = quantity * price;

    const dessertOnCart = document.querySelector(`.${id}`).childNodes;
    dessertOnCart[1].innerHTML = `${quantity}x`;
    dessertOnCart[5].innerHTML = `R$ ${priceRefactor(total)}`;
}

export default sumDessertOnCart;