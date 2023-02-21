/*Enunciado:
Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.
 */

function mostrar(){
	let numeroIngresado;
	let contador;
	let acumulador; // lo uso para acumular la suma
	let promedio;

	contador = 0;
	acumulador = 0;

	// va a iterar de 0 a 4 = 5 veces
	while(contador < 5){
		numeroIngresado = prompt("ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);
		
		acumulador = acumulador + numeroIngresado;
		contador ++;
	}
	promedio = acumulador / contador;

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;

}//Fin Funcion
