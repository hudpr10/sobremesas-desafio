import priceRefactorToHtml from "./priceRefactorToHtml.js";

const dessertContainer = document.querySelector(".dessert-container");

function addDessertOnScreen(data) {
    for(let i = 0; i < data.length; i++) {
        let img = ""

        if(window.innerWidth < 560) {
            img = data[i].image.mobile;
        } else if(window.innerWidth < 850) {
            img = data[i].image.tablet;
        } else {
            img = data[i].image.desktop;
        }
        
        dessertContainer.innerHTML += `
            <div class="dessert dessert-cart-${i}">
                <div>
                    <img class="dessert-img" src="${img}" alt="${data[i].name}">
                    <div class="button-container">
                        <button class="dessert-cart-button dessert-cart-button-non-add">
                            <img src="/assets/images/icon-add-to-cart.svg" alt="ícone de carrinho">
                            <span>Adicionar ao Carrinho</span>  
                        </button>
                        <div class="dessert-cart-button dessert-cart-button-add">
                        <button class="button-quantity" id="decrement${i}">
                                <img src="/assets/images/icon-decrement-quantity.svg" alt="ícone de mais, para adicionar mais sobremesas ao carrinho">
                        </button>
                        <span class="dessert-quantity">1</span>
                        <button class="button-quantity" id="increment${i}">
                                <img src="/assets/images/icon-increment-quantity.svg" alt="ícone de menos, para diminuir a quantidade de sobremesas no carrinho">
                        </button>
                    </div>
                    </div>
                </div>
                <div>
                    <span class="dessert-category">${data[i].category}</span>
                    <h3 class="dessert-title">${data[i].name}</h3>
                    <span class="dessert-price">R$ ${priceRefactorToHtml(data[i].price)}</span>
                </div>
            </div>
        `;
    }
}

export default addDessertOnScreen;
