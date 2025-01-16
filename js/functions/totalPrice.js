import priceRefactorToHtml from "./priceRefactorToHtml.js";

function totalPrice(list) {
    if(list.length !== 0) {
        const totalPriceContainer = document.querySelectorAll(".total-price");

        let total = 0;
    
        for(let i = 0; i < list.length; i++) {
            total += list[i].total;
        }
    
        totalPriceContainer[0].innerHTML = `R$ ${priceRefactorToHtml(total)}`;
        totalPriceContainer[1].innerHTML = `R$ ${priceRefactorToHtml(total)}`;
    }
}

export default totalPrice;
