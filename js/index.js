const contenedorTarjetas = document.getElementById("productos-container")

function crearTarjetaProductosInicio(productos){
    productos.forEach(producto => {
        const nuevoProducto = document.createElement("div");
        nuevoProducto.classList = "tarjeta-producto";
        contenedorTarjetas.appendChild(nuevoProducto);
    });
}


crearTarjetaProductosInicio(productos)