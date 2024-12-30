import dessertData from "./data.js";
import priceRefactor from "./functions/priceRefactor.js";
import addDessertToCart from "./functions/addDessertToCart.js";
import sumDessertOnCart from "./functions/sumDessertOnCart.js";
import dessertIsOnCart from "./functions/dessertIsOnCart.js";
import totalPrice from "./functions/totalPrice.js";
import totalOfDessertsOnCart from "./functions/totalOfDessertsOnCart.js";

const allDessertsOnCart = [];

// Adicionando Sobremesas na Tela
const dessertContainer = document.querySelector(".dessert-container");
for(let i = 0; i < dessertData.length; i++) {
    dessertContainer.innerHTML += `
        <div class="dessert" id="${i}">
            <div>
                <img class="dessert-img" src="${dessertData[i].image.desktop}" alt="${dessertData[i].name}">
                <button class="dessert-cart-button" id="0">
                    <img src="/assets/images/icon-add-to-cart.svg" alt="ícone de carrinho">
                    <span>Adicionar ao Carrinho</span>  
                </button>
            </div>
            <div>
                <span class="dessert-category">${dessertData[i].category}</span>
                <h3 class="dessert-title">${dessertData[i].name}</h3>
                <span class="dessert-price">R$ ${priceRefactor(dessertData[i].price)}</span>
            </div>
        </div>
    `;
}

// Capturando Click nos Botões da Sobremesa
const allDessertButtons = document.querySelectorAll(".dessert-cart-button");
for(let i = 0; i < allDessertButtons.length; i++) {
    allDessertButtons[i].addEventListener("click", () => {
        // Variáveis para auxiliar na manipulação dos dados
        const id = `dessert${i}`
        let quantity = Number(allDessertButtons[i].id);

        if(quantity === 0) {
            allDessertButtons[i].id = 1;

            // Adicionar sobremesa ao carrinho
            addDessertToCart(dessertData[i].name, id, dessertData[i].price, 1, allDessertsOnCart);

            console.log(quantity)

            // Adicionar sobremesa a lista de sobremesas adicionadas
            allDessertsOnCart.push({
                name: dessertData[i].name,
                price: dessertData[i].price,
                total: dessertData[i].price,
                quantity: 1
            });
        } else {
            quantity += 1
            allDessertButtons[i].id = quantity;

            // Aumentar quantidade de sobremesa no carrinho
            sumDessertOnCart(id, dessertData[i].price, quantity);

            // Verifica se a sobremesa está no carrinho e aumenta a quantidade
            dessertIsOnCart(allDessertsOnCart, dessertData[i].name);
        }
        
        // Quantidade de sobremesas no carrinho
        totalOfDessertsOnCart(allDessertsOnCart);

        // Calcula o valor total das sobremesas adicionadas ao carrinho
        totalPrice(allDessertsOnCart);
    });
}

