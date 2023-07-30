//capturando el array productos
import productos from "./productos.js";
import agregarAlCarrito from "./carrito.js"

// COMILLA INVERTIDA: ALT+96

function retornarCardHTML(producto) {
    return `<div class="card">
    <div class="card-image">${producto.imagen}</div>
    <div class="card-name">${producto.nombre}</div>
    <div class="card-price">${producto.precio}</div>
    <div class="card-button">
        <button class="button button-outline button-add" id="${producto.id}" title="Clic para agregar al carrito">+</button>
    </div>
    </div>`
}

function cargarProductos(array){
    const contenedor = document.querySelector('div.container')
    array.forEach( producto => {
        const card = retornarCardHTML(producto)
        contenedor.innerHTML += card
    });
}

let activarClickEnBotones = () => {
     const botonesAgregar = document.querySelectorAll('.button.button-outline.button-add')
        for (const boton of botonesAgregar){
            boton.addEventListener('click',(event)=>{
                agregarAlCarrito(event.target.id)
        })
     }
}

cargarProductos(productos)
activarClickEnBotones()
