function totalOfDessertsOnCart(list) {
    const cartTitleContainer = document.querySelector(".my-cart-title").childNodes[1];

    let total = 0;

    for(let i = 0; i < list.length; i++) {
        total += list[i].quantity;
    }

    if(total === 0) {
        cartTitleContainer.innerHTML = "(0)";
    } else {
        cartTitleContainer.innerHTML = `(${total})`;
    }
}

export default totalOfDessertsOnCart;
