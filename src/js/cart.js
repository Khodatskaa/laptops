export const cart = [];

export function addToCart(laptop) {
    const existingItem = cart.find(item => item.name === laptop.name);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...laptop, quantity: 1 });
    }
}

export function removeFromCart(laptopName) {
    const itemIndex = cart.findIndex(item => item.name === laptopName);
    if (itemIndex > -1) {
        cart.splice(itemIndex, 1);
    }
}

export function updateItemQuantity(laptopName, quantity) {
    const item = cart.find(item => item.name === laptopName);
    if (item) {
        item.quantity = quantity;
        if (item.quantity <= 0) {
            removeFromCart(laptopName);
        }
    }
}

export function clearCart() {
    cart.length = 0;
}
