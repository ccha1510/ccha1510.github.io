document.addEventListener('DOMContentLoaded', () => {
 const cartItems = [];
  const cartItemsList = document.getElementById('cart-items');
 const totalPriceElement = document.getElementById('total-price');

document.querySelectorAll('.bouquet button').forEach(button => {
button.addEventListener('click', () => {
 const bouquet = button.parentElement;
const name = bouquet.querySelector('h3').textContent;
const price = parseFloat(bouquet.querySelector('p').textContent.replace('Price: $', ''));

cartItems.push({ name, price });
updateCart();
        });
    });

    function updateCart() {
cartItemsList.innerHTML = '';
let totalPrice = 0;

        cartItems.forEach(item => {
const li = document.createElement('li');
li.textContent = `${item.name} - $${item.price}`;
cartItemsList.appendChild(li);
totalPrice += item.price;
});

totalPriceElement.textContent = totalPrice.toFixed(2);}
});
