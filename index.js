/* function agregarAlCarrito() {
    carrito.push(paquete);
    alert("Agregado al carrito");
}

let cardTitle = document.getElementById("card_title");
let button = document.getElementById("agregarAlCarrito"); 
button.addEventListener("click", agregarAlCarrito);
let carrito = [];
localStorage.setItem("prodcuto", carrito);
let body = document.getElementById("body");
let buttonChangeTheme = document.getElementById("buttonchange-theme");
let darkTheme = document.getElementsByClassName(".changeThemeToDark");
 buttonChangeTheme.addEventListener("click", changeThemeDark); 
buttonChangeTheme.onclick = function changeThemeDark() {
    buttonChangeTheme.innerHTML("Dark Theme"); 
    body.className = ".changeThemeToDark";
    console.log("monooo");

} 
*/
const contenedorProductos = document.getElementById("contenedorProductos");

const contenedorCarrito = document.getElementById("contenedorCarrito");



let carrito = [];

productos.forEach((producto) => {
    const div = document.createElement('div');
    div.classList.add('producto')
    div.innerHTML = `
    <img src="${producto.imagen}" alt"">
    <h3>${producto.nombre}</h3>
    <p>${producto.descripcion} </p>
    <p>Talle: ${producto.talle}</p>
    <p class="precioProducto">Precio: $${producto.precio}</p>
    <button id="agregar${producto.id}" class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>
    `
    contenedorProductos.appendChild(div);

    const botonAgregarAlCarrito = document.getElementById('agregar${producto.id}')
   
    /* botonAgregarAlCarrito.addEventListener("click", () => {
        agregarAlCarrito(producto.id) 
    }) */
})



const agregarAlCarrito = (prodId) => {
    const item = productos.find((prod) => prod.id === prodId);
    carrito.push(item);
    actualizarCarrito();
}

const actualizarCarrito = () => {
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