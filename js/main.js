import addDessertOnScreen from './functions/addDessertOnScreen.js';
import dessertData from "./data.js";
import addDessertToCart from "./functions/addDessertToCart.js";
import priceRefactorToList from "./functions/priceRefactorToList.js";
import removeDessertFromCart from "./functions/removeDessertFromCart.js";
import sumDessertOnCart from "./functions/sumDessertOnCart.js";
import totalOfDessertsOnCart from "./functions/totalOfDessertsOnCart.js";
import totalPrice from "./functions/totalPrice.js";
import showEmptyCart from './functions/showEmptyCart.js';

export const allDessertsOnCart = [];
addDessertOnScreen(dessertData);

// Capturando Click nos Botões da Sobremesa
let allDessertButtons = document.querySelectorAll(".dessert-cart-button-non-add");
for(let i = 0; i < allDessertButtons.length; i++) {
    allDessertButtons[i].addEventListener("click", () => {
        // Variáveis para auxiliar na manipulação dos dados
        const htmlDessert = allDessertButtons[i].parentNode.parentNode.parentNode;
        const id = i;

        const titleDessert = htmlDessert.querySelector(".dessert-title").innerHTML;
        const priceDessert = htmlDessert.querySelector(".dessert-price").innerHTML;
        let index = allDessertsOnCart.findIndex(dessert => dessert.name === titleDessert);

        const buttonsContainer = htmlDessert.querySelector(".button-container");
        const buttonNonAdd = buttonsContainer.querySelector("button");
        const img = htmlDessert.querySelector(".dessert-img");
        const buttonQuantity = htmlDessert.querySelector(".dessert-quantity");

        if(index === -1) {
            // Adicionando Sobremesa no Carrinho
            allDessertsOnCart.push({
                name: titleDessert,
                price: priceRefactorToList(priceDessert),
                total: priceRefactorToList(priceDessert),
                quantity: 1
            });

            showEmptyCart(allDessertsOnCart.length);

            // Adicionando Sobremesa na seção do carrinho
            addDessertToCart(titleDessert, priceDessert, 1, id);
            totalOfDessertsOnCart(allDessertsOnCart);
            totalPrice(allDessertsOnCart);
            
            // Mudando estilo do botão
            buttonNonAdd.style = "z-index: 0;";

            const img = htmlDessert.querySelector(".dessert-img");
            img.classList.add("dessert-img-select");

            const buttons = document.querySelectorAll(`[data-remove]`);
            buttons.forEach(button => {
                button.addEventListener("click", () => {
                    // Pegando o Id da sobremesa
                    const dessertId = button.getAttribute("data-remove");
                    // Utilizando o Id para pegar o botão
                    const removeHtmlButton = document.querySelector(`[data-remove="${dessertId}"]`);
                    // Pegando todo o elemento html da sobremesa no carrinho
                    const desserthtml = removeHtmlButton.parentNode;
                    // Pegando imagem
                    const dessertToUpdate = document.querySelectorAll(`.dessert-cart-${dessertId}`)[0];
                    const quantityToUpdate = dessertToUpdate.querySelector(".dessert-quantity");
                    const imgToUptade = dessertToUpdate.querySelector(".dessert-img");

                    quantityToUpdate.innerHTML = 1;

                    const syncClass = desserthtml.classList[1];
                    const buttonToRemove = document.querySelector(`.${syncClass}`).querySelector(".dessert-cart-button-non-add");

                    removeDessertFromCart(allDessertsOnCart, desserthtml, buttonToRemove, imgToUptade);
                    totalPrice(allDessertsOnCart);
                    totalOfDessertsOnCart(allDessertsOnCart);
                })
            });
        } 
        // Variáveis para auxiliar na manipulação dos dados
        const incrementButton = document.querySelector(`#increment${id}`);
        const decrementButton = document.querySelector(`#decrement${id}`);
        index = allDessertsOnCart.findIndex(dessert => dessert.name === titleDessert);

        let quantity = allDessertsOnCart[index].quantity;

        incrementButton.addEventListener("click", () => {
            quantity += 1

            const total = quantity * allDessertsOnCart[index].price
            allDessertsOnCart[index] = {
                name: titleDessert,
                price: priceRefactorToList(priceDessert),
                total: total,
                quantity: quantity
            };

            buttonQuantity.innerHTML = quantity;

            sumDessertOnCart(id, total, quantity);

            totalOfDessertsOnCart(allDessertsOnCart);
            totalPrice(allDessertsOnCart);
        })
                    
        decrementButton.addEventListener("click", () => {
            if(quantity === 1) {
                const dessertOnCart = document.querySelectorAll(`.dessert-cart-${id}`)[1];
                removeDessertFromCart(allDessertsOnCart, dessertOnCart, buttonNonAdd, img);
                buttonQuantity.innerHTML = quantity;

            } else {
                quantity -= 1
                const total = allDessertsOnCart[index].price * quantity;

                allDessertsOnCart[index] = {
                    name: titleDessert,
                    price: priceRefactorToList(priceDessert),
                    total: total,
                    quantity: quantity
                };

                sumDessertOnCart(id, total, quantity);
                buttonQuantity.innerHTML = quantity;
            }   

            totalOfDessertsOnCart(allDessertsOnCart);
            totalPrice(allDessertsOnCart);
        })
    });
}
