import priceRefactorToHtml from "./priceRefactorToHtml.js";

function totalPrice(list) {
    if(list.length !== 0) {
        const totalPriceContainer = document.querySelector(".my-cart-total");
    
        let total = 0;
    
        for(let i = 0; i < list.length; i++) {
            total += list[i].total;
        }
    
        totalPriceContainer.childNodes[3].innerHTML = `R$ ${priceRefactorToHtml(total)}`;
    }
}

export default totalPrice;
