const cart = document.querySelector("nav .cart")
const cartSidebar = document.querySelector(".cart-sidebar")
const closeCart = document.querySelector(".close-cart")
const burger = document.querySelector(".burger")
const menusiderbar = document.querySelector(".menu-sidebar")
const closeMenu = document.querySelector(".close-menu")
const cartItemTotal = document.querySelector("noi")
const carPriceTotal= document.querySelector(".total-amount")
const cartUi= document.querySelector(".cart-sidebar .cart")
const totalDiv= document.querySelector(".total-sum")
const clearBtn= document.querySelector(".clear-cart-btn")
const cartContent = document.querySelector(".cart-content")


let Cart=[];
let buttonsDOM = [];

cart.addEventListener("click" , function(){
    cartSidebar.style.transform = "translate(0%)"
    const bodyOverlay = document.createElement("div")
    bodyOverlay.classList.add("overlay");
    setTimeout(function(){
        document.querySelector("body").append(bodyOverlay)
    },300)

})

closeCart.addEventListener("click", function(){
    cartSidebar.style.transform = "translate(100%)"
    const bodyOverlay = document.querySelector(".overlay")
    document.querySelector("body").removeChild(bodyOverlay)
})

burger.addEventListener("click", function(){
    menusiderbar.style.transform ="translate(0%)"

})

closeMenu.addEventListener("click", function(){
    menusiderbar.style.transform= "translate(-100%)"
})

class product {
    async getProduct(){
        const response = await fetch("products.json");
        const data = await response.json();
        let products = data.items;
        products = products.map(item=>{
            const{title,price}= item.fields;
            const{id} = item.sys;
            const image = item.fields.image.fields.file.url;
            return{title,price,id,image};
        })
        return products;
    }
    // class UI {
    //     displayProducts(products){
    //         let result = "";
    //         products.forEach(product =>{
    //             const productDiv = document.createElement("div")
    //             productDiv.innerHTML=`<Div class = "product-card">
    //             <img src="${product.img}" alt="product"
    //             <span class= "add-to-cart" date-id="${product.id}">
    //             <i class= "fa fa-cart -- plus fa-1x" 
    //             style = "margin-right : 0.1em; font-size: 1em;"></i>
    //             Add to Cart
    //             </span>
    //             <div class = "product-name">${product.title}</div>
    //             <div class = "product-pricing">${product.price}</div>
    //             </div>`

    //     const p = document.querySelector(".product")
    //     p.append(productDiv)

    //         })
    //     }

// getButtons(){
//     const btns = document.querySelectorAll(".add-to.cart")
//     Array.from(btns)
//     buttonsDOM=btns;
//     btns.forEach((btn)=> {
//         let id = btn.dataset.id
//         let inCart = Cart.find((item)=>item.id ==id);
//         if(inCart)
//         {
//             btn.innerHTML = "In Cart"
//             btn.dissabled = true
//         }
//         btn.addEventListener("click", (e)=>{
//             e.currentTarget.innerHTML = "In Cart"
//             e.currentTarget.style.color = "white"
//             e.currentTarget.style.pointerEvents = "none"
//             let cartItem = {...Storage.getStorageProducts(id), "amount":1 }
//             Cart.push(cartItem)
//             Storage.saveCart(Cart)
//             this.setCartValues(Cart)
//             this.addCartItem(cartItem)


//         })
//     })
// }
// setCartValues(cart){
//     let tempTotal = 0;
//     let itemsTotal = 0;
//     Cart.map((item)=>{
//         tempTotal += (item.price*item.amount);
//         itemsTotal = item.amount;
//         parseFloat(tempTotal.toFixed(2))
//     })
//     cartItemTotal.innerHTML = itemsTotal
//     carPriceTotal.innerHTML = parseFloat(tempTotal.toFixed(2))
}
// addCartItem(cartItem){
//     let cartItemUi - document.createElement('div')
//     cartItemUi.innerHTML = <div class = "cart-product">
//                             <div class = "product-image">
//                                 img src = "${cartItem.image} alt = "product"
//                             </div>
//                             <div class = "cart-product-content">
//                                 <div class = "cart-product-name">
//                                     <h3> ${cartItem.title} </h3>
//                                 </div>
                                
//                             </div>
//                             <div class = "cart-product-price">
//                                 <h3>${cartItem.price}</h3>
//                             </div>
//                             <div class = "cart-product-remove date-id="${cartItem.id}"
//                             href = "#" style = "color:red;"> remmove</a></div>
                            
//     </div>
// }
//     }
// }