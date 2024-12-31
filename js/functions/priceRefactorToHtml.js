function priceRefactorToHtml(price) {
    let newPrice = (price).toString().replace(".", ",");
    if(newPrice.includes(",")) {
        newPrice = newPrice.concat("0");
    } else {
        newPrice = newPrice.concat(",00");
    }
    return newPrice;
}

export default priceRefactorToHtml;
