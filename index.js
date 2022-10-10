const contenedorProductos = document.getElementById("contenedorProductos");

const contenedorCarrito = document.getElementById("contenedorCarrito");

const vaciarCarrito = document.getElementById('vaciarCarrito');

const contadorCarrito = document.getElementById('contadorCarrito');

const precioFinal = document.getElementById("precioFinal");
// const offCanvaCarrito = document.getElementById("offCanvaContenedor");

// offCanvaCarrito.addEventListener('click',  desplegarCarrito)

/* function desplegarCarrito() {
    let div = document.createElement('div');
    div.innerHTML = `
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div class="offcanvas-header">
            <h5 id="offcanvasRightLabel">Offcanvas right</h5>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>

        <div class="offcanvas-body">
        
        <div class="productoContenedor">
        
        </div>
        
        </div>
    </div>
    `
} */
let carrito = [];

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')) {
        carrito = JSON.parse(localStorage.getItem('carrito'));
        actualizarCarrito();
    }
})

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
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Se ha agregado al carrito',
            showConfirmButton: false,
            timer: 1000
          })
    })
})



const eliminarDelCarrito = (prodId) => {
    Swal.fire({
        title: '¿Quieres eliminar el producto del carrito?',
        text: "",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Si, eliminar'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Eliminado!',
            'El producto ha sido eliminado con exito.',
            'success'
          )
            const item = carrito.find((prod) => prod.id === prodId);
            const indice = carrito.indexOf(item);
            carrito.splice(indice, 1);
            actualizarCarrito();
        }
      })
    
}

const actualizarCarrito = () => {
    contenedorCarrito.innerHTML = ""


    carrito.forEach((prod) => {
        const div = document.createElement('div');
        div.className = ('productoEnCarrito');
        div.innerHTML = `
        <div class="productoContenedor">
        <img src="${prod.imagen}" alt="${prod.nombre}">
        <p class="productoNombre">${prod.nombre}</p>
        <p class="productoPrecio">Precio: $${prod.precio}</p>
        <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
        <p>Talle: ${prod.talle}</p>
        <button onclick="eliminarDelCarrito(${prod.id})" class="botonEliminar"><i class="fas fa-trash-alt"></i></button>
        </div>
        `;
        contenedorCarrito.appendChild(div);

        localStorage.setItem('carrito', JSON.stringify(carrito));
    })
    contadorCarrito.innerText = carrito.length;
    precioFinal.innerText = carrito.reduce((acumulador, prod) => acumulador + prod.precio, 0);
}




