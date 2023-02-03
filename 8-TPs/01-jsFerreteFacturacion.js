/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	let precioProductoUno;
    let precioProductoDos;
    let precioProductoTres;
    let resultadoSuma;
    
    //toma de datos por ID
    precioProductoUno = parseFloat(document.getElementById("txtIdPrecioUno").value);
    precioProductoDos = parseFloat(document.getElementById("txtIdPrecioDos").value);
    precioProductoTres = parseFloat(document.getElementById("txtIdPrecioTres").value);

    //operacion Suma
    resultadoSuma = precioProductoUno + precioProductoDos + precioProductoTres;

    //lo muestro con un texto "El resultado de la suma es: "
    alert("El resultado de la suma es: " + resultadoSuma.toFixed(2));

    // o simplemente muestro el resultado.
    //alert(resultadoSuma);
}

function Promedio () 
{
	let precioProductoUno;
    let precioProductoDos;
    let precioProductoTres;
    let precioPromedio;

    precioProductoUno = parseFloat(document.getElementById("txtIdPrecioUno").value);
    precioProductoDos = parseFloat(document.getElementById("txtIdPrecioDos").value);
    precioProductoTres = parseFloat(document.getElementById("txtIdPrecioTres").value);

    //operacion promedio
    precioPromedio = (precioProductoUno + precioProductoDos + precioProductoTres)/3

    alert("El promedio es: " + precioPromedio.toFixed(2)); 

    // o simpelmento muestro el resultado del promedio
    //alert(precioPromedio);

}

function PrecioFinal () 
{
	let precioProductoUno;
    let precioProductoDos;
    let precioProductoTres;
    let resultadoSuma;
    let impuestoIva;
    let precioConImpuesto;

    precioProductoUno = parseFloat(document.getElementById("txtIdPrecioUno").value);
    precioProductoDos = parseFloat(document.getElementById("txtIdPrecioDos").value);
    precioProductoTres = parseFloat(document.getElementById("txtIdPrecioTres").value);

    resultadoSuma = precioProductoUno + precioProductoDos + precioProductoTres;
    //es el 21% del resultado de las sumas.
    impuestoIva = (resultadoSuma * 21)/100;

    precioConImpuesto = resultadoSuma + impuestoIva;

    //muestro el precio final. Uso toFixed(), y le paso el 2 como argumento con esto le indico qme me muestre dos decimales. para mas presicion con los precios
    alert("El precio final con impuesto es: " + precioConImpuesto.toFixed(2));





}