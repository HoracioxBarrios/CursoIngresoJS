/*Enunciado:
Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive */
function mostrar()
{
	let numeroRandom;
	// genero un numero random de 0 a 1 excluyente 
	numeroRandom = Math.random()*10; // corremos la coma 
	//redondeo al numero menor  mas cercano?
	numeroRandom = Math.floor(numeroRandom)+ 1; // sino aca te muestra del 0 al 9 por eso el +1

	//console.log(numeroRandom);
	alert(numeroRandom);

	
	
}//FIN DE LA FUNCIÓN 