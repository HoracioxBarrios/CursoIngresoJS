/*Ejercicio 10 (bis) (While)

Al presionar el botón pedir  números hasta que el usuario quiera, mostrar:
Suma de los negativos.
Suma de los positivos.
Cantidad de positivos.
Cantidad de negativos.
Cantidad de ceros.
Cantidad de números pares.
Promedio de positivos.
Promedio de negativos.
Diferencia entre positivos y negativos, (positivos-negativos).
// 3 puntos mas:
Porcentaje de números positivos y negativos.
De los positivos el más grande.
De los negativos el más chico.
 */

function mostrar() {
  //declarar contadores y variables
  let numeroIngresado;
  let pregunta;
  
  let acumNegativos; //acum negativos
  let acumPositivos; //acum positivos
  let flagNegativos;
  let flagPositivos;
  let contadorNegativos; // contadores
  let contadorPositivos;
  let contadorCeros;
  let contadorNumeroPar;
  let promedioNegativos;
  let promedioPositivos;
  let diferencia;
  let porcentajePositivos;
  let porcentajeNegativos;

  flagNegativos = true;
  flagPositivos = true;
  contadorNegativos = 0; // inicializando los contadores en 0
  contadorPositivos = 0;
  contadorCeros = 0;
  contadorNumeroPar = 0;
  acumNegativos = 0; // inicializando los acumuladores en 0
  acumPositivos = 0;

  do {
    numeroIngresado = prompt("ingrese un numero");
    numeroIngresado = parseInt(numeroIngresado);

    if (numeroIngresado < 0) {
      // es numero negativo:
      if (flagNegativos) {
        acumNegativos = numeroIngresado;
        flagNegativos = false;
      } else {
        acumNegativos = acumNegativos + numeroIngresado; //1-Suma de los negativos.
      }
      contadorNegativos++; //4-Cantidad de negativos.
    } else if (numeroIngresado > 0) {
      // entonces es positivo
      if (flagPositivos) {
        acumPositivos = numeroIngresado;
        flagPositivos = false;
      } else {
        acumPositivos = acumPositivos + numeroIngresado; //2-Suma de los positivos.
      }
      contadorPositivos++; //3-Cantidad de positivos.
    } else {
      // si es 0
      contadorCeros++; //5-Cantidad de ceros.
    }

    if (numeroIngresado % 2) {
      contadorNumeroPar++; //6-Cantidad de números pares
    }

    pregunta = confirm("desea ingresar otro numero?");
  } while (pregunta == true);

  if (contadorPositivos == 0) {
    //si es 0 significa que no ingresó numero positivo
    promedioPositivos = 0;
  } else {
    promedioPositivos = acumPositivos / contadorPositivos; //7-Promedio de positivos.
  }

  if (contadorNegativos == 0) {
    ////si es 0 significa que no ingresó numero negativo
    promedioNegativos = 0;
  } else {
    promedioNegativos = acumNegativos / contadorNegativos; //8-Promedios de negativos.
  }

  //9-Diferencia entre positivos y negativos, (positvos-negativos).
  diferencia = acumPositivos - acumNegativos;

  //mostramos por document.write()
  document.write(
    "Suma de negativos: " +
      acumNegativos +
      " Contador de negativos: " +
      contadorNegativos +
      "</br>" +
      "Suma de positivos: " +
      acumPositivos +
      " Contador de positivos: " +
      contadorPositivos +
      "</br>" +
      "Cantidad de Ceros: " +
      contadorCeros +
      "</br>" +
      "Cantidad de Numeros pares: " +
      contadorNumeroPar +
      "</br>" +
      "Promedio de Negativos: " +
      promedioNegativos +
      " Promedio de positivos: " +
      promedioPositivos +
      "</br>" +
      "Diferencia entre Positivos y Negativos(Positivos - Negativos): " +
      diferencia
  );


} //FIN DE LA FUNCIÓN


/*NOTA: para porcentajes positivos:
 contadorTotal 14_______________ 100 
 contaPositivos 5 _______________ ?
 contadorPositivos = 5
 contadorTotal = 14
 Porcentaje Positivos = (5 * 100 )/ 14  que es igual a : 35,714 %
 
 */

















/* ##########         Ejercicio 10 Original 
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
/*
function mostrar()
{
	//declarar contadores y variables 
	let numeroIngresado;
	let pregunta;
	let acumNegativos; //acum negativos
	let acumPositivos;	//acum positivos
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
	acumNegativos = 0;// inicializando los acumuladores en 0
	acumPositivos = 0;
	

	do{
		numeroIngresado = prompt("ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);
		
		if(numeroIngresado < 0){// es numero negativo:
			if(flagNegativos){
				acumNegativos = numeroIngresado;
				flagNegativos = false;
			}else{
				acumNegativos = acumNegativos + numeroIngresado; //1-Suma de los negativos.
			}
			contadorNegativos ++; //4-Cantidad de negativos.

		}else if(numeroIngresado > 0){// entonces es positivo
			if(flagPositivos){
				acumPositivos = numeroIngresado;
				flagPositivos = false;
			}else{
				acumPositivos = acumPositivos + numeroIngresado;//2-Suma de los positivos.
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
		promedioPositivos = acumPositivos / contadorPositivos;//7-Promedio de positivos.
	}

	if(contadorNegativos == 0){////si es 0 significa que no ingresó numero negativo
		promedioNegativos = 0;
	}else{
		promedioNegativos = acumNegativos / contadorNegativos;//8-Promedios de negativos.
	}

	//9-Diferencia entre positivos y negativos, (positvos-negativos).
	diferencia = acumPositivos - acumNegativos;

	//mostramos por document.write()
	document.write("Suma de negativos: " + acumNegativos + " Contador de negativos: " + contadorNegativos + "</br>"
	+ "Suma de positivos: " + acumPositivos + " Contador de positivos: " + contadorPositivos + "</br>"
	+ "Cantidad de Ceros: " + contadorCeros + "</br>"
	+ "Cantidad de Numeros pares: " + contadorNumeroPar + "</br>"
	+ "Promedio de Negativos: " + promedioNegativos + " Promedio de positivos: " + promedioPositivos + "</br>"
	+ "Diferencia entre Positivos y Negativos(Positivos - Negativos): " + diferencia);

	
}//FIN DE LA FUNCIÓN
*/
