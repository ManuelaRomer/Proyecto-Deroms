// Inicializamos un array para el carrito
let cart = [];

// Función para añadir un producto al carrito
function addToCart(product) {
    cart.push(product);
    updateCartDisplay();
}

// Función para eliminar un producto del carrito
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartDisplay();
}

// Función para calcular el total
function calculateTotal() {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
}

// Función para actualizar la visualización del carrito
function updateCartDisplay() {
    const cartItems = document.getElementById('cartItems');
    const totalPrice = document.getElementById('totalPrice');
    const cartCount = document.getElementById('cartCount');
    
    cartItems.innerHTML = ''; // Limpiar el carrito visual

    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        
        // Crear botón de eliminar
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Eliminar';
        removeBtn.className = 'remove-btn';
        removeBtn.onclick = () => removeFromCart(index);

        li.appendChild(removeBtn);
        cartItems.appendChild(li);
    });

    // Actualizar el total
    totalPrice.textContent = `Total: $${calculateTotal()}`;
    // Actualizar el contador del carrito
    cartCount.textContent = cart.length;
}

// Asignar eventos a los botones de añadir al carrito
document.querySelectorAll('.addToCartBtn').forEach(button => {
    button.addEventListener('click', () => {
        const product = {
            name: button.getAttribute('data-name'),
            price: parseFloat(button.getAttribute('data-price'))
        };
        addToCart(product);
    });
});