const contenedorProductos = document.getElementById("contenedorProductos");

const contenedorCarrito = document.getElementById("contenedorCarrito");

const vaciarCarrito = document.getElementById('vaciarCarrito');

let carrito = [];

const agregarAlCarrito = (prodId) => {
    const item = productos.find((prod) => prod.id === prodId);
    carrito.push(item);
    actualizarCarrito();
    
}

productos.forEach((producto) => {
    const div = document.createElement('div');
    div.classList.add('producto')
    div.innerHTML = `
    <img src="${producto.imagen}" alt"" class="imgProducts">
    <div class="pAndElseContenedor">
    <h3>${producto.nombre}</h3>
    <p>${producto.descripcion} </p>
    <p>Talle: ${producto.talle}</p>
    <p class="precioProducto">Precio: $${producto.precio}</p>
    <button id="agregar${producto.id}" class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>
    </div>
    `
    contenedorProductos.appendChild(div);

    let btn_agregarAlCarrito = document.getElementById(`agregar${producto.id}`)
   
    btn_agregarAlCarrito.addEventListener('click', () => {
        agregarAlCarrito(producto.id);
    })
})



const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId);
    const indice = carrito.indexOf(item);
    carrito.splice(indice, 1);
    actualizarCarrito();
}

const actualizarCarrito = () => {
    contenedorCarrito.innerHTML = ""


    carrito.forEach((prod) => {
        const div2 = document.createElement('div');
        div2.className = ('productoEnCarrito');
        div2.innerHTML = `
        <p>${prod.nombre}</p>
        <p>Precio: $${prod.precio}</p>
        <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
        <p>Talle: ${prod.talle}</p>
        <button onclick="eliminarDelCarrito(${prod.id})" class="botonEliminar"><i class="fas fa-trash-alt"></i></button>
        `;
        contenedorCarrito.appendChild(div2);
    })
}




