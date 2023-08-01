import {recuperarCarrito} from "./carrito.js"

const retornarTablaHTML = (producto) =>{
    return `<tr>
                <td>${producto.imagen}</td>
                <td>${producto.nombre}</td>
                <td>${producto.precio}</td>
                <td><button title="Quitar">X</button></td>
            </tr>`
}

const productos = recuperarCarrito()
const tabla = document.querySelector('tbody')

if (productos.length > 0) {
    tabla.innerHTML = ''
    productos.forEach( producto => {
        let fila = retornarTablaHTML(producto)
        tabla.innerHTML += fila
    })
}

const botonComprar = document.querySelector('button#btnComprar')

botonComprar.addEventListener('click',()=>{
    //alert('Gracias por su compra')
    //sweet alert:
    Swal.fire({
        icon:'success',
        title:'Muchas gracias por su compra',
        timer: 2000,
        position:'center'
    })
    localStorage.clear()
    tabla.innerHTML = ''
})