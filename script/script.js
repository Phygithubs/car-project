// let search = document.querySelector('.search-box');

// document.querySelector('#search-icon').onclick = () => {
//     search.classList.toggle('active');
//     menu.classList.remove('active');
// }

// let menu = document.querySelector('.navbar');

// document.querySelector('#menu-icon').onclick = () => {
//     menu.classList.toggle('active');
//     search.classList.remove('active');
// }

// window.onscroll = () => {
//     menu.classList.remove('active');
//     search.classList.remove('active');
// }

// let header = document.querySelector('header');

// window.addEventListener('scroll', () => {
//     header.classList.toggle('shadow', window.scrollY > 0);
// })

// const cartValue=document.querySelector(".cart-value")

// const buyNowBtn=document.querySelectorAll(".btn")
// let count = 0;

// buyNowBtn.forEach((btn) => {
//     btn.addEventListener("click" , (e) => {
//         e.preventDefault();
//         count++;
//         cartValue.textContent = count;
//     })
    
// })

// // Search Functionality
// let filter = document.getElementById("search");

// let productItem = document.querySelectorAll(".box");

// filter.addEventListener("keyup", () => {
//     let searchValue = filter.value.toUpperCase();

//     productItem.forEach((item) => {
//         let productName = item.getElementsByTagName("h3")[0].innerText.toUpperCase();
//         if (productName.indexOf(searchValue) > -1) {
//             item.style.display = "";
//         } else {
//             item.style.display = "none";
//         }
//     });
// });





// // hhhhhhhh
// // const cartValue = document.querySelector(".cart-value");
// // const buyNowBtn = document.querySelectorAll(".btn");
// const cartMenu = document.querySelector(".cart-menu");
// const cartTotal = document.querySelector(".cart-total");
// const cartItems = document.querySelector(".cart-item");
// const checkoutBtn = document.querySelector(".checkout-btn");

// // let count = ;
// let cart = [];

// // Function to update the cart display
// function updateCart() {
//     cartItems.innerHTML = ""; // Clear previous cart items
//     let total = 0;

//     cart.forEach((item, index) => {
//         total += item.price;
        
//         // Add item to cart display
//         const itemDiv = document.createElement("div");
//         itemDiv.classList.add("cart-item");
//         itemDiv.innerHTML = `
//             <span>${item.name} - $${item.price.toFixed(2)}</span>
//             <button class="remove-item" data-index="${index}">Remove</button>
//         `;
//         cartItems.appendChild(itemDiv);
//     });

//     cartTotal.textContent = `$${total.toFixed(2)}`;
//     cartValue.textContent = count;
// }

// // Function to handle Buy Now button click
// buyNowBtn.forEach((btn, index) => {
//     btn.addEventListener("click", (e) => {
//         e.preventDefault();

//         // Get item details (e.g., name and price)
//         const productBox = e.target.closest('.box');
//         const itemName = productBox.querySelector('h3').textContent;
//         const itemPrice = parseFloat(productBox.querySelector('span').textContent.replace('$', ''));

//         // Add item to cart array
//         cart.push({ name: itemName, price: itemPrice });
//         count++;

//         // Update cart display
//         updateCart();
//     });
// });

// // Remove item from cart
// cartMenu.addEventListener("click", (e) => {
//     if (e.target.classList.contains("remove-item")) {
//         const index = e.target.getAttribute("data-index");
//         cart.splice(index, 1);
//         count--;
//         updateCart();
//     }
// });

// // Checkout button logic (optional)
// checkoutBtn.addEventListener("click", () => {
//     if (cart.length > 0) {
//         alert("Thank you for your purchase!");
//         cart = [];
//         count = 0;
//         updateCart();
//     } else {
//         alert("Your cart is empty!");
//     }
// });







// ttttttttttt


// let search = document.querySelector('.search-box');
// let menu = document.querySelector('.navbar');
// let header = document.querySelector('header');
// let cartValue = document.querySelector(".cart-value");
// let buyNowBtns = document.querySelectorAll(".btn");
// let filter = document.getElementById("search");
// let productItems = document.querySelectorAll(".box");
// const cartMenu = document.querySelector(".cart-menu");
// const cartTotal = document.querySelector(".cart-total");
// const cartItems = document.querySelector(".cart-item");
// const checkoutBtn = document.querySelector(".checkout-btn");

// let count = 0;
// let cart = [];

// // Toggle Search Box
// document.querySelector('#search-icon').onclick = () => {
//     search.classList.toggle('active');
//     menu.classList.remove('active');
// };

// // Toggle Menu
// document.querySelector('#menu-icon').onclick = () => {
//     menu.classList.toggle('active');
//     search.classList.remove('active');
// };

// // Remove active states when scrolling
// window.onscroll = () => {
//     menu.classList.remove('active');
//     search.classList.remove('active');
//     header.classList.toggle('shadow', window.scrollY > 0);
// };

// // Handle 'Buy Now' button click and update cart count
// buyNowBtns.forEach((btn) => {
//     btn.addEventListener("click", (e) => {
//         e.preventDefault();

//         // Get item details (e.g., name and price)
//         const productBox = e.target.closest('.box');
//         const itemName = productBox.querySelector('h3').textContent;
//         const itemPrice = parseFloat(productBox.querySelector('span').textContent.replace('$', ''));

//         // Add item to cart array (no check for duplicates)
//         cart.push({ name: itemName, price: itemPrice });
//         count++;

//         // Update cart display
//         updateCart();

//         // Show alert for each item added
//         alert(`You have added 1 ${itemName} to your cart.`);
//     });
// });

// // Update cart display
// function updateCart() {
//     cartItems.innerHTML = ""; // Clear previous cart items
//     let total = 0;

//     cart.forEach((item, index) => {
//         total += item.price;

//         // Add item to cart display
//         const itemDiv = document.createElement("div");
//         itemDiv.classList.add("cart-item");
//         itemDiv.innerHTML = `
//             <span>${item.name} - $${item.price.toFixed(2)}</span>
//             <button class="remove-item" data-index="${index}">Remove</button>
//         `;
//         cartItems.appendChild(itemDiv);
//     });

//     cartTotal.textContent = `$${total.toFixed(2)}`;
//     cartValue.textContent = count;
// }

// // Remove item from cart
// cartMenu.addEventListener("click", (e) => {
//     if (e.target.classList.contains("remove-item")) {
//         const index = e.target.getAttribute("data-index");
//         cart.splice(index, 1);
//         count--;
//         updateCart();
//     }
// });

// // Checkout button logic (optional)
// checkoutBtn.addEventListener("click", () => {
//     if (cart.length > 0) {
//         alert("Thank you for your purchase!");
//         cart = [];
//         count = 0;
//         updateCart();
//     } else {
//         alert("Your cart is empty!");
//     }
// });

// // Search Functionality
// filter.addEventListener("keyup", () => {
//     let searchValue = filter.value.toUpperCase();

//     productItems.forEach((item) => {
//         let productName = item.getElementsByTagName("h3")[0].innerText.toUpperCase();
//         if (productName.indexOf(searchValue) > -1) {
//             item.style.display = "";
//         } else {
//             item.style.display = "none";
//         }
//     });
// });


// eeeeeeeeeeeeeeeeeeeeeeeeeeeeee

let search = document.querySelector('.search-box');
let menu = document.querySelector('.navbar');
let header = document.querySelector('header');
let cartValue = document.querySelector(".cart-value");
let buyNowBtns = document.querySelectorAll(".btn");
let filter = document.getElementById("search");
let productItems = document.querySelectorAll(".box");
const cartMenu = document.querySelector(".cart-menu");
const cartTotal = document.querySelector(".cart-total");
const cartItems = document.querySelector(".cart-item");
const checkoutBtn = document.querySelector(".checkout-btn");

let count = 0;
let cart = [];

// Toggle Search Box
document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
    menu.classList.remove('active');
};

// Toggle Menu
document.querySelector('#menu-icon').onclick = () => {
    menu.classList.toggle('active');
    search.classList.remove('active');
};

// Remove active states when scrolling
window.onscroll = () => {
    menu.classList.remove('active');
    search.classList.remove('active');
    header.classList.toggle('shadow', window.scrollY > 0);
};

// Handle 'Buy Now' button click and update cart count
buyNowBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();

        // Get item details (e.g., name and price)
        const productBox = e.target.closest('.box');
        const itemName = productBox.querySelector('h3').textContent;
        const itemPrice = parseFloat(productBox.querySelector('span').textContent.replace('$', ''));

        // Check if item is already in the cart
        const itemInCart = cart.find(item => item.name === itemName);

        if (itemInCart) {
            // If duplicate, show a message in the cart instead of an alert
            const message = document.createElement("div");
            message.classList.add("duplicate-message");
            message.textContent = `You already have ${itemName} in your cart.`;
            cartMenu.insertBefore(message, cartMenu.firstChild);

            // Remove the message after 2 seconds
            setTimeout(() => {
                message.remove();
            }, 2000);
        } else {
            // Add item to cart array (no alert)
            cart.push({ name: itemName, price: itemPrice });
            count++;

            // Update cart display
            updateCart();

            // Scroll to the cart to show the newly added item
            cartMenu.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Update cart display
function updateCart() {
    cartItems.innerHTML = ""; // Clear previous cart items
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;

        // Add item to cart display
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("cart-item");
        itemDiv.innerHTML = `
            <span>${item.name} - $${item.price.toFixed(2)}</span>
            <button class="remove-item" data-index="${index}">Remove</button>
        `;
        cartItems.appendChild(itemDiv);
    });

    cartTotal.textContent = `$${total.toFixed(2)}`;
    cartValue.textContent = count;
}

// Remove item from cart
cartMenu.addEventListener("click", (e) => {
    if (e.target.classList.contains("remove-item")) {
        const index = e.target.getAttribute("data-index");
        cart.splice(index, 1);
        count--;
        updateCart();
    }
});

// Checkout button logic (optional)
checkoutBtn.addEventListener("click", () => {
    if (cart.length > 0) {
        alert("Thank you for your purchase!");
        cart = [];
        count = 0;
        updateCart();
    } else {
        alert("Your cart is empty!");
    }
});

// Search Functionality
filter.addEventListener("keyup", () => {
    let searchValue = filter.value.toUpperCase();

    productItems.forEach((item) => {
        let productName = item.getElementsByTagName("h3")[0].innerText.toUpperCase();
        if (productName.indexOf(searchValue) > -1) {
            item.style.display = "";
        } else {
            item.style.display = "none";
        }
    });
});
