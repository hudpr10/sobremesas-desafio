const cartTitleContainer = document.querySelector(".my-cart-title").childNodes[1];
function totalOfDessertsOnCart(list) {
    let total = 0;

    for(let i = 0; i < list.length; i++) {
        total += list[i].quantity;
    }

    if(total === 0) {
        cartTitleContainer.innerHTML = "";
    } else {
        cartTitleContainer.innerHTML = `(${total})`;
    }
}

export default totalOfDessertsOnCart;
