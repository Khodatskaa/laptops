export const cart = {
    items: [],
    addItem(product) {
        this.items.push(product);
        /* this.items.forEach(item => {
            console.log(item);
            if (product.name === item.name) {
                this.items.push(product);
            }
        }); */
    },
    calculateTotal() {
        return this.items.reduce((acc, item) => {total + item.price}, 0);
    }
}

export function addToCart(product) {
    cart.addItem.bind(cart)(product);
    renderCart();
}

function renderCart() {
    const cartItems = document.getElementById('cartItems')
    cartItems.innerHTML = cart.items.map(({name, price, image})=> {
        return `<li><img src="${image}"/> <span>${name} - ${price} $<span/> </li>`
    }).join("");
}