//capturando el array productos
import {agregarAlCarrito} from "./carrito.js"

//crear una constante que es un array vacio

export const productos = []
//crear constante URL
const URL = 'http://127.0.0.1:81/js/productos.json'


//crear funcion obtenerProductos

const obtenerProductos = (productos) =>{
    fetch(URL)
    .then((response)=>response.json())
    .then((data)=>productos.push(...data))
    .then(()=>{cargarProductos(productos); activarClickEnBotones()})

}

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

obtenerProductos(productos)