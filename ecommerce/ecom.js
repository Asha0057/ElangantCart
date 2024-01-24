// ecom.js

let cart = [];

function addToCart(productId, productName, productPrice) {
    let newItem = {
        id: productId,
        name: productName,
        price: Number(productPrice)
    };

    cart.push(newItem);
    updateCartUI();
}
function updateCartUI() {
    let cartList = document.getElementById('cartList');
    let totalAmount = 0;

    // Clear previous cart items
    cartList.innerHTML = '';

    // Add each item to the cart UI
    cart.forEach(item => {
        let listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        listItem.innerHTML = `${item.name} - ₹${item.price} <button class="btn btn-danger btn-sm" onclick="removeFromCart(${item.id})">Remove</button>`;
        cartList.appendChild(listItem);

        // Accumulate the total amount
        totalAmount += item.price;
    });
    document.getElementById('cartPage').style.display = 'block';
    // Display the total amount
    let totalElement = document.createElement('li');
    totalElement.className = 'list-group-item';
    totalElement.innerHTML = `<strong>Total: ₹${totalAmount}</strong>`;
    cartList.appendChild(totalElement);

    // Display the Cart Page section
    
}
