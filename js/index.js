

// Función para obtener el carrito del LocalStorage
function getCart() {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
}

// Función para guardar el carrito en el LocalStorage
function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Función para añadir un producto al carrito
function addToCart(product) {
    const cart = getCart();
    cart.push(product);
    saveCart(cart);
    alert(`${product.name} ha sido añadido al carrito.`);
    updateCartCount(); // Actualiza el contador del carrito
}

// Función para eliminar un producto del carrito
function removeFromCart(index) {
    const cart = getCart();
    cart.splice(index, 1); // Elimina el producto en la posición 'index'
    saveCart(cart);
    updateCartDisplay(); // Actualiza la visualización del carrito
    updateCartCount(); // Actualiza el contador del carrito
}

// Función para mostrar el carrito en la página carrito.html
function updateCartDisplay() {
    const cartItems = document.getElementById('cartItems');
    const totalPrice = document.getElementById('totalPrice');
    
    cartItems.innerHTML = ''; // Limpiar la lista de productos

    const cart = getCart();
    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        
        // Crear botón de eliminar
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Eliminar';
        removeBtn.onclick = () => {
            removeFromCart(index); // Llama a la función para eliminar
        };

        li.appendChild(removeBtn);
        cartItems.appendChild(li);
    });

    // Calcular y mostrar el total
    const total = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);
    totalPrice.textContent = `Total: $${total}`;
}

// Función para actualizar el contador del carrito en el encabezado
function updateCartCount() {
    const cart = getCart();
    const cartCount = document.getElementById('cuenta-carrito');
    cartCount.textContent = cart.length;
}

// Asignar evento al botón "Añadir al carrito"
document.getElementById('botondetalles')?.addEventListener('click', function() {
    const product = {
        name: this.getAttribute('data-nombre'),
        price: parseFloat(this.getAttribute('data-precio'))
    };
    addToCart(product);
});

// Si estamos en la página del carrito, actualizamos la visualización
if (window.location.pathname.includes('carrito.html')) {
    updateCartDisplay();
    updateCartCount(); // Actualiza el contador del carrito
}