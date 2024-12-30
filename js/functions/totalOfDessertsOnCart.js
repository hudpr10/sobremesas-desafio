const cartTitleContainer = document.querySelector(".my-cart-title").childNodes[1];
function totalOfDessertsOnCart(list) {
    let total = 0;

    for(let i = 0; i < list.length; i++) {
        total += list[i].quantity;
    }

    cartTitleContainer.innerHTML = `(${total})`;
}

export default totalOfDessertsOnCart;