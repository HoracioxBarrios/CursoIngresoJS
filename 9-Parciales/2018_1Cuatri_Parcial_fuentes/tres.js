/*Bienvenidos.
Pedir por prompt el precio y el porcentaje de descuento, 
mostrar el precio final con descuento por id. */


function mostrar()
{
    let precio;
    let descuento;
    let precioFinalConDescuento;

    precio = prompt("ingrese precio");
    precio = parseFloat(precio);

    descuento = prompt("Ingrese descuento");
    descuento = parseFloat(descuento);

    descuento = (precio * descuento) / 100;

    precioFinalConDescuento = precio - descuento;

    //muestro por id.
    document.getElementById("elPrecioFinal").value = precioFinalConDescuento;


}
