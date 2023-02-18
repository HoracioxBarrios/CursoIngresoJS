/*Enunciado:
Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.
 */

//revisar para mejorar
function mostrar()
{
	let numeroIngresado;
	let acumulador;
	let contador;// variable de control
	let promedio;

	contador = 0
	acumulador = 0;

	//son 5 numeros
	while(contador < 5 ){
		numeroIngresado = parseInt(prompt("ingrese un numero"));
		//voy a acumular la suma dentro del bucle
		acumulador = acumulador + numeroIngresado;

		//sumo 1 numero al contador
		contador ++;
	}

	/* el acumulador me sirve para acumular la suma y el contador al estar en 
	la condicion va a dar 5 iteraciones, que son los 5 numero requeridos.*/

	promedio = acumulador / contador;

	document.getElementById("txtIdPromedio").value = promedio;
	document.getElementById("txtIdSuma").value = acumulador;

}//FIN DE LA FUNCIÓN

/*promedio : Resultado que se obtiene al dividir la suma 
de varias cantidades por el número de sumandos.*/