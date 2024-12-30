function dessertIsOnCart(list, dessert) {
    for(let i = 0; i < list.length; i++) {
        if(list[i].name === dessert) {
            list[i].quantity += 1;
            list[i].total += list[i].price;
        }
    }
}

export default dessertIsOnCart;