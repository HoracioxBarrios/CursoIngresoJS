/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let importe;
	let aumento;
	let nuevoImporte;
	

	///tomamos el valor de la caja, que es string y lo parseamos (usamos parseFloat en este ej.)
	importe = parseFloat(document.getElementById("txtIdSueldo").value);

	// calculamos el aumento de 10%.
	aumento = importe * 10/100; 

	//aplicamos el aumento, y el resultado es un nuevo importe.
	nuevoImporte = importe + aumento;

	//mostramos el nuevo importe en el cuadro de texto (por ID).
	document.getElementById("txtIdResultado").value = nuevoImporte.toFixed();
	
}
