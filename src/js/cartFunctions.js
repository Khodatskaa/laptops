import { cart, updateItemQuantity, clearCart } from './cart.js';

export function updateCartUI() {
    const cartItemsList = document.getElementById("cartItems");
    const cartTotal = document.getElementById("cartTotal");

    cartItemsList.innerHTML = "";

    let total = 0;

    cart.forEach(item => {
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${item.name} - $${item.price} x ${item.quantity}</span>
            <button class="increaseQty">+</button>
            <button class="decreaseQty">-</button>
        `;
        cartItemsList.appendChild(li);

        total += item.price * item.quantity;
    });

    cartTotal.textContent = total.toFixed(2);

    document.querySelectorAll('.increaseQty').forEach(button => {
        button.addEventListener('click', (e) => {
            const name = e.target.closest('li').querySelector('span').textContent.split(' - ')[0];
            const item = cart.find(product => product.name === name);
            if (item) {
                updateItemQuantity(name, item.quantity + 1);
                updateCartUI();
            }
        });
    });

    document.querySelectorAll('.decreaseQty').forEach(button => {
        button.addEventListener('click', (e) => {
            const name = e.target.closest('li').querySelector('span').textContent.split(' - ')[0];
            const item = cart.find(product => product.name === name);
            if (item) {
                updateItemQuantity(name, item.quantity - 1);
                updateCartUI();
            }
        });
    });
}

export function clearCartUI() {
    clearCart();
    updateCartUI();
}
