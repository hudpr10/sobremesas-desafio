import addDessertOnScreen from './functions/addDessertOnScreen.js';
import dessertData from "./data.js";
import addDessertToCart from "./functions/addDessertToCart.js";
import priceRefactorToList from "./functions/priceRefactorToList.js";
import removeDessertFromCart from "./functions/removeDessertFromCart.js";
import sumDessertOnCart from "./functions/sumDessertOnCart.js";
import totalOfDessertsOnCart from "./functions/totalOfDessertsOnCart.js";
import totalPrice from "./functions/totalPrice.js";

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
                    const dessertDataRemove = button.getAttribute("data-remove");
                    // Utilizando o Id para pegar o botão
                    const removeHtmlButton = document.querySelector(`[data-remove="${dessertDataRemove}"]`);
                    // Pegando todo o elemento html da sobremesa no carrinho
                    const desserthtml = removeHtmlButton.parentNode;

                    const syncClass = desserthtml.classList[1];

                    removeDessertFromCart(allDessertsOnCart, desserthtml, buttonNonAdd, img);
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

            sumDessertOnCart(id, total, quantity);

            totalOfDessertsOnCart(allDessertsOnCart);
            totalPrice(allDessertsOnCart);
        })
                    
        decrementButton.addEventListener("click", () => {
            if(quantity === 1) {
                const dessertOnCart = document.querySelectorAll(`.dessert-cart-${id}`)[1];
                removeDessertFromCart(allDessertsOnCart, dessertOnCart, buttonNonAdd, img);
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
            }   

            totalOfDessertsOnCart(allDessertsOnCart);
            totalPrice(allDessertsOnCart);
        })
    });
}

// Finalizar pedido
const confirmButton = document.querySelector(".my-cart-button");
confirmButton.addEventListener("click", () => {
    console.log(allDessertsOnCart);
});