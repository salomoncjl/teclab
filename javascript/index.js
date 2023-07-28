import productos from "./productos.js";

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



cargarProductos(productos)