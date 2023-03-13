//algoritmo para mi tienda de libros de la editorial edicionesvs//



//Mensaje de bienvenida para el usuario//

alert("Hola! Bienvenido al carrito de compras de ediciones VS.\nIngresa a continuación el número del producto en el que estés interesado, si deseas salir ingresa 0 en tu teclado.")

//selección de productos de parte del usuario junto al mensaje//
let seleccionarProductos = Number(prompt("1-¿Qué tienes en tu mano? (Mariana Maillet) valor: $1500\n2-Antídotos contra la religión (Juan Pablo Sosa) valor: $1500\n3-Mujer Maravilla (Natalia Spetale) valor: $1500\n4-Hijos de la Promesa (Ezequiel Rossini) valor: $1500\n5-La vida de Grace (Natalia Spetale) valor: $1500\n6-Diseñados para una vida Saludable (María José Amiunes) valor: $1500"))


let seleccionarCantidad;
let total = 0;
const productos = [
    "¿Qué tienes en tu mano? (Mariana Maillet)",
    "Antídotos contra la religión (Juan Pablo Sosa)",
    "Mujer Maravilla (Natalia Spetale)",
    "Hijos de la Promesa (Ezequiel Rossini)",
    "La vida de Grace (Natalia Spetale)",
    "Diseñados para una vida Saludable (María José Amiunes)"
];


const cantidad = (cant, precio) => {
    return cant * precio
}



while (seleccionarProductos != 0) {
    switch (seleccionarProductos) {
        case 1:
            seleccionarCantidad = Number(prompt("el producto seleccionado es ¿Qué tienes en tu mano? (Mariana Maillet), indique la cantidad"))
            total = total + cantidad(seleccionarCantidad, 1500)
            tituloLibro = "¿Qué tienes en tu mano? (Mariana Maillet)"
            alert("¡Has agregado " + seleccionarCantidad + " copia(s) de " + tituloLibro + " al carrito!")
            break;
        case 2:
            seleccionarCantidad = Number(prompt("el producto seleccionado es Antidotos contra la religión (Juan Pablo Sosa), indique la cantidad"))
            total = total += cantidad(seleccionarCantidad, 1500)
            tituloLibro = "Antidotos contra la religión (Juan Pablo Sosa)"
            alert("¡Has agregado " + seleccionarCantidad + " copia(s) de " + tituloLibro + " al carrito!")
            break;
        case 3:
            seleccionarCantidad = Number(prompt("el producto seleccionado es Mujer Maravilla (Natalia Spetale), indique la cantidad"))
            total = total += cantidad(seleccionarCantidad, 1500)
            tituloLibro = "Mujer Maravilla (Natalia Spetale)"
            alert("¡Has agregado " + seleccionarCantidad + " copia(s) de " + tituloLibro + " al carrito!")
            break;
        case 4:
            seleccionarCantidad = Number(prompt("el producto seleccionado es Hijos de la Promesa (Ezequiel Rossini), indique la cantidad"))
            total = total += cantidad(seleccionarCantidad, 1500)
            tituloLibro = "Hijos de la Promesa (Ezequiel Rossini)"
            alert("¡Has agregado " + seleccionarCantidad + " copia(s) de " + tituloLibro + " al carrito!")
            break;
        case 5:
            seleccionarCantidad = Number(prompt("el producto seleccionado es La vida de Grace (Natalia Spetale), indique la cantidad"))
            total = total += cantidad(seleccionarCantidad, 1500)
            tituloLibro = "La vida de Grace (Natalia Spetale)"
            alert("¡Has agregado " + seleccionarCantidad + " copia(s) de " + tituloLibro + " al carrito!")
            break;
        case 6:
            seleccionarCantidad = Number(prompt("el producto seleccionado es Diseñados para una vida Saludable (María José Amiunes), indique la cantidad"))
            total = total += cantidad(seleccionarCantidad, 1500)
            tituloLibro = "Diseñados para una vida Saludable (María José Amiunes)"
            alert("¡Has agregado " + seleccionarCantidad + " copia(s) de " + tituloLibro + " al carrito!")
            break;

        default:
            alert("ups, ingresaste un número incorrecto, te invito a ver los titulos nuevamente para que puedas ingresarlo nuevamente " + productos)
            break;

    }
    seleccionarProductos = Number(prompt("1-¿Qué tienes en tu mano? (Mariana Maillet) valor: $1500\n2-Antidotos contra la religión (Juan Pablo Sosa) valor: 1500$\n3-Mujer Maravilla (Natalia Spetale) valor: $1500\n4-Hijos de la Promesa (Ezequiel Rossini) valor: $1500\n5-La vida de Grace (Natalia Spetale) valor: $1500\n6-Diseñados para una vida Saludable (María José Amiunes) valor: $1500"))
}

alert(`¡Gracias por tu compra! Has adquirido productos en Ediciones VS.\nPrecio de cada libro: $1500\nEl total de tu compra es: $${total}. ¡Esperamos que disfrutes de tu compra!`);

//algoritmo para envío//

const realizarEnvio = () => {
    if (total >= 3000) {

        alert("Buenas noticias, por haber comprado mas de 1 producto tienes el envío gratis, a continuación ingrese los datos pedidos para poder hacer el envío posible.");

        const nombre = prompt("Nombre completo:")
        const direcciónCompleta = prompt("Dirección completa, incluyendo calle, número de casa o apartamento, ciudad, estado o provincia:");
        const codigoPostal = prompt("Codigo Postal:");
        const teléfono = prompt("Número telefónico:");

        alert(`Los datos ingresados fueron:\nNombre: ${nombre}\nDirección: ${direcciónCompleta}\nCodigo postal: ${codigoPostal}\nNúmero de teléfono: ${teléfono}\nEn unos instantes te llamaremos para concretar el envío, gracias por tu compra.`);
    }
    else if (total >= 1500) {

        alert(`¿Sabes que si compras uno o más articulos ademas del que ya tienes puedes acceder al envio gratis? si solo estas interesado en uno de nuestros libros no pasa nada, tu total de compra con envío agregado es de $${total + 1000}\na continuación ingrese los datos pedidos para poder hacer el envío posible.`);
        const nombre = prompt("Nombre completo:")
        const direcciónCompleta = prompt("Dirección completa, incluyendo calle, número de casa o apartamento, ciudad, estado o provincia:");
        const codigoPostal = prompt("Codigo Postal:");
        const teléfono = prompt("Número telefónico:");

        alert(`Los datos ingresados fueron:\nNombre: ${nombre}\nDirección: ${direcciónCompleta}\nCodigo postal: ${codigoPostal}\nNúmero de teléfono: ${teléfono}\nEn unos instantes te llamaremos para concretar el envío, gracias por tu compra.`);

    }

}


realizarEnvio();