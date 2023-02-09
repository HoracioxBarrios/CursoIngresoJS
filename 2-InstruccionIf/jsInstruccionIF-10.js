/*Enunciado:
Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4 */

function mostrar()
{	
	let notaRandom;

	//Genero el número RANDOM entre 1 y 10 
	notaRandom = Math.random()* 10;
	notaRandom = Math.floor(notaRandom)+ 1;
	console.log(notaRandom);


	if(notaRandom >= 9){		//si es mayor o igual a 9
		alert( "Su Nota es: "+ notaRandom + "  Excelente!");
	}else if( notaRandom >= 4 ){ 	// evalua nota mayor a 4 hasta 8 
		alert(" Su Nota es: " + notaRandom + "  Aprobó!");
	}else { 					//sino es menor a 4
		alert("Su nota es: "+ notaRandom + "  Vamos la proxima se puede!")
	}

	//asi dice el enunciado
}//FIN DE LA FUNCIÓN