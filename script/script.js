
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

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
    menu.classList.remove('active');
};

document.querySelector('#menu-icon').onclick = () => {
    menu.classList.toggle('active');
    search.classList.remove('active');
};

window.onscroll = () => {
    menu.classList.remove('active');
    search.classList.remove('active');
    header.classList.toggle('shadow', window.scrollY > 0);
};

buyNowBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();

        const productBox = e.target.closest('.box');
        const itemName = productBox.querySelector('h3').textContent;
        const itemPrice = parseFloat(productBox.querySelector('span').textContent.replace('$', ''));
        const itemImage = productBox.querySelector('img').src; // Get the image URL

        let itemInCart = cart.find(item => item.name === itemName);

        if (itemInCart) {
            itemInCart.quantity++;
        } else {
            cart.push({ name: itemName, price: itemPrice, quantity: 1, image: itemImage }); // Add image to cart data
        }
        count++;
        updateCart();
    });
});

function updateCart() {
    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price * item.quantity;

        const itemDiv = document.createElement("div");
        itemDiv.classList.add("cart-item");
        itemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-image"> <!-- Display the image -->
            <span>${item.name} - $${item.price.toFixed(2)} x ${item.quantity}</span>
            <button class="remove-item" data-index="${index}">Remove</button>
        `;
        cartItems.appendChild(itemDiv);
    });

    cartTotal.textContent = `$${total.toFixed(2)}`;
    cartValue.textContent = count;
}

cartMenu.addEventListener("click", (e) => {
    if (e.target.classList.contains("remove-item")) {
        const index = e.target.getAttribute("data-index");
        count -= cart[index].quantity;
        cart.splice(index, 1);
        updateCart();
    }
});

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
cartMenu.addEventListener("click", (e) => {
    if (e.target.classList.contains("remove-item")) {
        const index = e.target.getAttribute("data-index");

        // Show confirmation alert before removing the item
        const confirmation = confirm("Are you sure you want to delete this item?");
        
        if (confirmation) {
            count -= cart[index].quantity;
            cart.splice(index, 1);
            updateCart();
        }
    }
});





