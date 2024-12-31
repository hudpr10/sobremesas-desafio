import priceRefactorToHtml from "./priceRefactorToHtml.js";

const totalPriceContainer = document.querySelector(".my-cart-total");

function totalPrice(list) {
    let total = 0;

    for(let i = 0; i < list.length; i++) {
        total += list[i].total;
    }

    totalPriceContainer.childNodes[3].innerHTML = `R$ ${priceRefactorToHtml(total)}`;
}

export default totalPrice;
