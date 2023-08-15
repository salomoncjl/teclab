import productos from "./productos.json"

//? creamos nuestro array

//? creando la funcion agregarAlCarrito
let agregarAlCarrito = (frutaId) => {
    if (frutaId > 0){
        const encontrado = productos.find(producto => producto.id === parseInt(frutaId))
        if(typeof encontrado !== 'undefined') carritoFrutas.push(encontrado)
        almacenarCarrito()
    }
}

const almacenarCarrito = () => {
    if( carritoFrutas.length > 0 ){
        let carritoConvertido = JSON.stringify(carritoFrutas)
        localStorage.setItem("carritoFrutas",carritoConvertido)
    }
}

const recuperarCarrito = () => {
    // || => el OR, va a enviar el dato que encuentre como TRUE: estos datos van a lña izquierda y derecha del operador. Ej: datos1 || datos2
    return JSON.parse(localStorage.getItem("carritoFrutas")) || []
}

const carritoFrutas = recuperarCarrito()

/*
 AND &&: si la primer comparacion da TRUE, se ejecuta el segundo bloque que le continua al AND 

valida si es true o false && codigo que se va a ejecuta.

const almacenarCarrito = () => carritoFrutas.length > 0 && localStorage.setItem("carritoFrutas",JSON.stringify(carritoFrutas))
*/

console.table(carritoFrutas);


export default agregarAlCarrito