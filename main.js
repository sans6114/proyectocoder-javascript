//algoritmo para mi tienda de libros de la editorial edicionesvs//
const productos = [
    { id : 1,   titulo : "¿Qué tienes en tu mano? (Mariana Maillet)", precio : 1500 },
    { id : 2,  titulo: "Antídotos contra la religión (Juan Pablo Sosa)", precio : 1500 },
    { id : 3,  titulo: "Mujer Maravilla (Natalia Spetale)", precio : 1500 },
    { id : 4,  titulo: "Hijos de la Promesa (Ezequiel Rossini)", precio : 1500 },
    { id : 5, titulo: "La vida de Grace (Natalia Spetale)", precio : 1500 },
    { id : 6, titulo: "Diseñados para una vida Saludable (María José Amiunes)", precio : 1500 }
];

let carritoDeCompras = [];

let seleccionado;

do {
    seleccionado = prompt("Hola! Bienvenido al carrito de compras de ediciones VS.\nEstás interesado en algún producto? (ingresar si o no)");
    if (seleccionado !== "si" && seleccionado !== "no") {
        alert("Ups, ingresaste un dato equivocado, por favor ingresa 'si' o 'no'");
    }
} while (seleccionado !== "si" && seleccionado !== "no");

if (seleccionado === "si") {
    alert("Aquí está la lista de nuestros productos:");

    for (let i = 0; i < productos.length; i++) {
        alert(productos[i].id + ": " + productos[i].titulo + " - $" + productos[i].precio);
    }

    let agregarProducto;

    do {
        let idProducto = prompt("Por favor ingresa el ID del producto que deseas agregar al carrito:");
        let productoSeleccionado = productos.find(producto => producto.id === parseInt(idProducto));

        if (productoSeleccionado) {
            carritoDeCompras.push(productoSeleccionado);
            alert("¡Felicitaciones! Agregaste correctamente el producto al carrito");
        } else {
            alert("Ups, ingresaste un ID incorrecto");
        }

        agregarProducto = prompt("¿Deseas agregar otro producto al carrito? (si/no)");
    } while (agregarProducto === "si");

    let totalCompra = carritoDeCompras.reduce((total, producto) => total + producto.precio, 0);
    alert("El total de la compra es $" + totalCompra);
} else {
    alert("¡Esperamos verte pronto, hasta luego!");
}

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

//practica de objetos con método de pago//


