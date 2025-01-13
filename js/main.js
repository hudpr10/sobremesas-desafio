import addDessertOnScreen from './functions/addDessertOnScreen.js';
import dessertData from "./data.js";
import addDessertToCart from "./functions/addDessertToCart.js";
import priceRefactorToList from "./functions/priceRefactorToList.js";
import removeDessertFromCart from "./functions/removeDessertFromCart.js";
import sumDessertOnCart from "./functions/sumDessertOnCart.js";
import totalOfDessertsOnCart from "./functions/totalOfDessertsOnCart.js";
import totalPrice from "./functions/totalPrice.js";
import showEmptyCart from './functions/showEmptyCart.js';
import imgConvert from './functions/imgConvert.js';

export const allDessertsOnCart = [];
addDessertOnScreen(dessertData);

// Capturando Click nos Botões da Sobremesa
let allDessertButtons = document.querySelectorAll(".dessert-cart-button-non-add");
for(let id = 0; id < allDessertButtons.length; id++) {
    allDessertButtons[id].addEventListener("click", () => {
        // Variáveis para auxiliar na manipulação dos dados
        const htmlDessert = allDessertButtons[id].parentNode.parentNode.parentNode;

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
                quantity: 1,
                img: imgConvert(img)
            });

            showEmptyCart(allDessertsOnCart);

            // Adicionando Sobremesa na seção do carrinho
            addDessertToCart(titleDessert, priceDessert, 1, id);
            totalOfDessertsOnCart(allDessertsOnCart);
            totalPrice(allDessertsOnCart);
            
            // Mudando estilo do botão e da imagem
            buttonNonAdd.style = "z-index: 0;";
            img.classList.add("dessert-img-select");

            const buttons = document.querySelectorAll(`[data-remove]`);
            buttons.forEach(button => {
                button.addEventListener("click", () => {
                    // Pegando o Id da sobremesa
                    const dessertId = button.getAttribute("data-remove");

                    const dessert = document.querySelectorAll(`.dessert-cart-${dessertId}`);
                    const quantityToUpdate = dessert[0].querySelector(".dessert-quantity");
                    const imgToUptade = dessert[0].querySelector(".dessert-img");
                    const buttonToRemove = dessert[0].querySelector(".dessert-cart-button-non-add");

                    quantityToUpdate.innerHTML = 1;
                    
                    removeDessertFromCart(allDessertsOnCart, dessert[1], buttonToRemove, imgToUptade, dessert[0]);
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

        function incrementFunction() {
            quantity += 1
        
            const total = quantity * allDessertsOnCart[index].price
            allDessertsOnCart[index] = {
                name: titleDessert,
                price: priceRefactorToList(priceDessert),
                total: total,
                quantity: quantity,
                img: imgConvert(img)
            };
        
            buttonQuantity.innerHTML = quantity;
        
            sumDessertOnCart(id, total, quantity);
            totalOfDessertsOnCart(allDessertsOnCart);
            totalPrice(allDessertsOnCart);
        }

        function decrementFunction() {
            if(quantity === 1) {
                const dessert = document.querySelectorAll(`.dessert-cart-${id}`);

                removeDessertFromCart(allDessertsOnCart, dessert[1], buttonNonAdd, img, dessert[0]);
                buttonQuantity.innerHTML = quantity;
            } else {
                quantity -= 1;
                const total = allDessertsOnCart[index].price * quantity;

                allDessertsOnCart[index] = {
                    name: titleDessert,
                    price: priceRefactorToList(priceDessert),
                    total: total,
                    quantity: quantity,
                    img: imgConvert(img)
                };

                sumDessertOnCart(id, total, quantity);
                buttonQuantity.innerHTML = quantity;
            }   

            totalOfDessertsOnCart(allDessertsOnCart);
            totalPrice(allDessertsOnCart);
        }

        incrementButton.addEventListener("click", incrementFunction);
        decrementButton.addEventListener("click", decrementFunction);
    });
}
