let cart = [];

function addToCart(name, price) {
  cart.push({ name, price });
  renderCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  renderCart();
}

function renderCart() {
  const cartElement = document.getElementById('cart');
  cartElement.innerHTML = '';
  let total = 0;
  cart.forEach((item, index) => {
    const itemElement = document.createElement('div');
    itemElement.innerHTML = `
      <span>${item.name}</span>
      <span>${item.price} €</span>
      <button onclick="removeFromCart(${index})">Pašlinti</button>
    `;
    cartElement.appendChild(itemElement);
    total += item.price;
  });
  const totalElement = document.createElement('div');
  totalElement.innerHTML = `<strong>Išviso: ${total} €</strong>`;
  cartElement.appendChild(totalElement);
}

