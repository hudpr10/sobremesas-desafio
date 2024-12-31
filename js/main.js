import dessertData from "./data.js";
import addDessertToCart from "./functions/addDessertToCart.js";
import priceRefactorToHtml from "./functions/priceRefactorToHtml.js";
import priceRefactorToList from "./functions/priceRefactorToList.js";
import sumDessertOnCart from "./functions/sumDessertOnCart.js";
import totalOfDessertsOnCart from "./functions/totalOfDessertsOnCart.js";
import totalPrice from "./functions/totalPrice.js";

export const allDessertsOnCart = [];

// Adicionando Sobremesas na Tela
const dessertContainer = document.querySelector(".dessert-container");
for(let i = 0; i < dessertData.length; i++) {
    dessertContainer.innerHTML += `
        <div class="dessert" id="${i}">
            <div>
                <img class="dessert-img" src="${dessertData[i].image.desktop}" alt="${dessertData[i].name}">
                <button class="dessert-cart-button">
                    <img src="/assets/images/icon-add-to-cart.svg" alt="ícone de carrinho">
                    <span>Adicionar ao Carrinho</span>  
                </button>
            </div>
            <div>
                <span class="dessert-category">${dessertData[i].category}</span>
                <h3 class="dessert-title">${dessertData[i].name}</h3>
                <span class="dessert-price">R$ ${priceRefactorToHtml(dessertData[i].price)}</span>
            </div>
        </div>
    `;
}

// Capturando Click nos Botões da Sobremesa
const allDessertButtons = document.querySelectorAll(".dessert-cart-button");
for(let i = 0; i < allDessertButtons.length; i++) {
    allDessertButtons[i].addEventListener("click", () => {
        // Variáveis para auxiliar na manipulação dos dados
        const htmlDessert = allDessertButtons[i].parentNode.parentNode;
        const id = i;

        const titleDessert = htmlDessert.querySelector(".dessert-title").innerHTML;
        const priceDessert = htmlDessert.querySelector(".dessert-price").innerHTML;

        const index = allDessertsOnCart.findIndex(dessert => dessert.name === titleDessert);

        if(index === -1) {
            // Adicionando Sobremesa no Carrinho
            allDessertsOnCart.push({
                name: titleDessert,
                price: priceRefactorToList(priceDessert),
                total: priceRefactorToList(priceDessert),
                quantity: 1
            });

            // Adicionando Sobremesa na seção do carrinho
            addDessertToCart(titleDessert, priceDessert, 1, id, allDessertsOnCart);
        } else {
            // Variáveis para auxiliar na manipulação dos dados
            const quantity = allDessertsOnCart[index].quantity + 1
            const total = quantity * allDessertsOnCart[index].price

            // Somando na lista a quantidade e total da sobremesa
            allDessertsOnCart[index] = {
                name: titleDessert,
                price: priceRefactorToList(priceDessert),
                total: total,
                quantity: quantity
            };

            // Somando Sobremesa na seção do carrinho
            sumDessertOnCart(id, total, quantity);
        }

        // Ajeitando quantidade de sobremesas (totais) e preço total
        totalOfDessertsOnCart(allDessertsOnCart);
        totalPrice(allDessertsOnCart);
    });
}

// Finalizar pedido
const confirmButton = document.querySelector(".my-cart-button");
confirmButton.addEventListener("click", () => {
    console.log(allDessertsOnCart);
});
