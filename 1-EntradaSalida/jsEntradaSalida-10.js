/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO "*/
function mostrarAumento()
{
	let importe;
	let descuento;
	let nuevoImporte;

	//tomamos el valor de la caja, que es string 
	importe = document.getElementById("txtIdImporte").value;
	// o parseamos (usamos parseFloat en este ej.)
	importe = parseFloat(importe);

	//el porcentaje que es el 25% del importe ingresado
	descuento = importe * 25/100;

	//el nuevo importe, es el importe menos el descuento
	nuevoImporte = importe - descuento;

	//mostramos el nuevo importe por ID.
	document.getElementById("txtIdResultado").value = nuevoImporte.toFixed();
}
