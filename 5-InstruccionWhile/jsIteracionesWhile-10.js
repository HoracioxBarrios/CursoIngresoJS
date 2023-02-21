/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos. N
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos. N
5-Cantidad de ceros.

6-Cantidad de números pares. 
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
	let contadorNegativos;// contadores
	let contadorPositivos;
	let contadorCeros;
	let contadorNumeroPar;
	let promedioNegativos;
	let promedioPositivos;
	let diferencia;
	

	flagNegativos = true;
	flagPositivos = true;
	contadorNegativos = 0;// inicializando los contadores en 0
	contadorPositivos = 0;
	contadorCeros = 0;
	contadorNumeroPar = 0;
	numeroNegativo = 0;// inicializando los acumuladores en 0
	numeroPositivo = 0;
	

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

		if(numeroIngresado % 2 ){
			contadorNumeroPar ++;//6-Cantidad de números pares
		}

		pregunta = confirm("desea ingresar otro numero?");

	}while(pregunta == true);


	if(contadorPositivos == 0){ //si es 0 significa que no ingresó numero positivo
		promedioPositivos = 0;
	}else{
		promedioPositivos = numeroPositivo / contadorPositivos;//7-Promedio de positivos.
	}

	if(contadorNegativos == 0){////si es 0 significa que no ingresó numero negativo
		promedioNegativos = 0;
	}else{
		promedioNegativos = numeroNegativo / contadorNegativos;//8-Promedios de negativos.
	}

	//9-Diferencia entre positivos y negativos, (positvos-negativos).
	diferencia = numeroPositivo - numeroNegativo;

	//mostramos por document.write()
	document.write("Suma de negativos: " + numeroNegativo + " Contador de negativos: " + contadorNegativos + "\n"
	+ "Suma de positivos: " + numeroPositivo + " Contador de positivos: " + contadorPositivos + "\n"
	+ "Cantidad de Ceros: " + contadorCeros + "\n"
	+ "Cantidad de Numeros pares: " + contadorNumeroPar + "\n"
	+ "Promedio de Negativos: " + promedioNegativos + " Promedio de positivos: " + promedioPositivos + "\n"
	+ "Diferencia entre Positivos y Negativos(Positivos - Negativos): " + diferencia);

	
}//FIN DE LA FUNCIÓN
