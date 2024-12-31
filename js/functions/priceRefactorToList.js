function priceRefactorToList(price) {
    const newPrice = price;
    const removeMoneySignal = newPrice.split("R$ ")[1]
    const replaceDot = removeMoneySignal.replace(",", ".")
    const transformNumber = Number(replaceDot);

    return transformNumber;
}

export default priceRefactorToList;