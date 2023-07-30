import productos from "./productos.js"

//? creamos nuestro array
const carritoFrutas = []

//? creando la funcion agregarAlCarrito
let agregarAlCarrito = (frutaId) => {
    if (frutaId > 0){
        const encontrado = productos.find(producto => producto.id === parseInt(frutaId))
        if(typeof encontrado !== 'undefined') carritoFrutas.push(encontrado)
        console.table(carritoFrutas)
    }
}


export default agregarAlCarrito