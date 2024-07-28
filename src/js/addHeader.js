export function addHeader() {
    const header = `<ul> <li>Home</li> <li>Price</li> <li>Contacts</li> </ul> <img class="cart_icon" src="https://static-00.iconduck.com/assets.00/shopping-cart-icon-2048x2047-gv68pvgw.png"/>`;
    document.querySelector("header").insertAdjacentHTML('beforeend', header);
}