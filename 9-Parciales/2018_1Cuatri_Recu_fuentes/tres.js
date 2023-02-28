/*Enunciado:
Bienvenidos.
Pedir por prompt el precio y el porcentaje de descuento, 
mostrar el precio final con descuento por id. */
function mostrar()
{
    let precio;
    let descuento;
    let precioFinalConDescuento;

    precio = prompt("Ingrese precio");
    precio = parseFloat(precio);

    descuento = prompt("Ingrese descuento");
    descuento = parseInt(descuento);

    //calculamos el descuento
    descuento = (precio * descuento) /100;
    precioFinalConDescuento = precio - descuento;

    document.getElementById("elPrecioFinal").value = precioFinalConDescuento;
}
