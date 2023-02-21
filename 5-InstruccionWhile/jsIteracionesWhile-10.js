/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos. N
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos. N
5-Cantidad de ceros.

6-Cantidad de números pares. -------------------- continuar aca!
7-Promedio de positivos.
8-Promedios de negativos. N 
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	let numeroIngresado;
	let pregunta;
	let numeroNegativo; //acum negativos
	let numeroPositivo;	//acum positivos
	let flagNegativos;
	let flagPositivos;
	let contadorNegativos;
	let contadorPositivos;
	let contadorCeros;


	contadorNegativos = 0;
	contadorPositivos = 0;
	contadorCeros = 0;
	flagNegativos = true;
	flagPositivos = true;

	do{
		numeroIngresado = prompt("ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);
		
		if(numeroIngresado < 0){// es numero negativo:
			if(flagNegativos){
				numeroNegativo = numeroIngresado;
				flagNegativos = false;
				
			}else{
				numeroNegativo = numeroNegativo + numeroIngresado; //1-Suma de los negativos.
			}
			contadorNegativos ++; //4-Cantidad de negativos.

		}else if(numeroIngresado > 0){// entonces es positivo
			if(flagPositivos){
				numeroPositivo = numeroIngresado;
				flagPositivos = false;
			}else{
				numeroPositivo = numeroPositivo + numeroIngresado;//2-Suma de los positivos.
			}
				contadorPositivos ++;//3-Cantidad de positivos.
		}else {// si es 0
			contadorCeros ++;//5-Cantidad de ceros.
		}

		pregunta = confirm("desea ingresar otro numero?");
		
		
	}while(pregunta == true);
	console.log("numero negativo "+ numeroNegativo + "   contador negativos  " + contadorNegativos);
	console.log("numero positivo "+ numeroPositivo + "   contador positivos  " + contadorPositivos);
}//FIN DE LA FUNCIÓN