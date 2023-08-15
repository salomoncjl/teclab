//capturando el array productos
const url =  "./javascript/productos.json";

const productos = []
// COMILLA INVERTIDA: ALT+96

const container = document.querySelector('.container')

function retornarCardHTML(producto){
    return `
        <div class="card">
            <div class="card-image">${producto.imagen}</div>
            <div class="card-name">${producto.nombre}</div>
            <div class="card-price">$ ${producto.precio}</div>
            <div class="card-button">
                <button class="button button-outline button-add" id="${producto.id}" title="Clic para agregar al carrito">+</button>
            </div>
        </div>
    `
}


function cargarProductos(array){
    container.innerHTML = "";
    if (array.length > 0){
        array.forEach(element => {
            container.innerHTML += retornarCardHTML(element)
        });
        activarClickEnBotones()
    }
}
const activarClickEnBotones = () =>{
    const botonesAgregar = document.querySelectorAll(".button.button-outline.button-add");
    if (botonesAgregar !== null){
        for (let botonAgregar of botonesAgregar){
            botonAgregar.addEventListener("click", (e)=>{
                agregarAlCarrito(e.target.id)
            })
        }
    }
}

const obtenerProductos = ()=>{
    fetch(url)
        .then(response => response.json())
        .then(data => productos.push(...data))
        .then(()=> cargarProductos(productos))
    }
obtenerProductos()

