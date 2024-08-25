document.addEventListener("DOMContentLoaded", function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartItemCount = document.querySelector('.cart-icon span');
    const cartItemList = document.querySelector('.cart-item');
    const cartTotal = document.querySelector('.cart-total');
    const cartIcon = document.querySelector('.cart-icon');
    const sidebar = document.querySelector('.sidebar');
    const sidebarClose = document.querySelector('.sidebar-close');

    let cartItems = [];
    let totalAmount = 0;

    addToCartButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const itemName = document.querySelectorAll('.card-title')[index].textContent;
            const itemPrice = parseFloat(
                document.querySelectorAll('.price')[index].textContent.slice(1)
            );

            const item = {
                name: itemName,
                price: itemPrice,
                quantity: 1,
            };

            const existingItem = cartItems.find(
                (cartItem) => cartItem.name === item.name
            );
            if (existingItem) {
                existingItem.quantity++;
                totalAmount += existingItem.price;
            } else {
                cartItems.push(item);
                totalAmount += item.price;
            }

            updateCartUI();
        });
    });

    function updateCartUI() {
        // Update the cart item count (total quantity)
        cartItemCount.textContent = cartItems.reduce((sum, item) => sum + item.quantity, 0);

        // Render the cart items in the sidebar
        cartItemList.innerHTML = cartItems.map((item) =>
            `<div class="cart-item">
                <span>${item.name} x ${item.quantity}</span>
                <span>$${(item.price * item.quantity).toFixed(2)}</span>
        
            </div>`
        ).join('');

        // Update the total price in the sidebar
        cartTotal.textContent = `$${totalAmount.toFixed(2)}`;
    }

    // Add event listener to open the sidebar when the cart icon is clicked
    cartIcon.addEventListener('click', () => {
        sidebar.style.right = '0';
    });

    // Add event listener to close the sidebar when the close button is clicked
    sidebarClose.addEventListener('click', () => {
        sidebar.style.right = '-300px';
    });
});
