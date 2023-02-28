/*Enunciado:
Bienvenidos.
Realizar el algoritmo que permita iterar el ingreso de dos datos, 
una letra y un número entre -100 y 100 (validar) hasta que el usuario 
quiera e informar al terminar el ingreso por document.write:
a) La cantidad de números pares.
b) La cantidad de números impares.
c) La cantidad de ceros.
d) El promedio de todos los números positivos ingresados.
e) La suma de todos los números negativos.
f) El número y la letra del máximo y el mínimo.

Testeo con los siguientes datos
( d , -150(mal) , -50(bien))
( z , 0)
( g , 20)
( a , 150(mal) , 0(bien))
( b , 3)
( k , 7)
*/
function mostrar()
{
    let letra;
    let numero;
    let respuesta;
    let contadorPar;
    let contadorImpar;
    let contadorCeros;
    let acumuladorPositivos;
    let acumuladorNegativos;
    let contadorPositivos;
    let promedio;
    let numeroMax;
    let letraMax;
    let numeroMin;
    let letraMin;
    let flag;

    contadorPar = 0;
    contadorImpar = 0;
    contadorCeros = 0;
    acumuladorPositivos = 0;
    acumuladorNegativos = 0;
    contadorPositivos = 0;
    flag = true;
    

    do{
        letra = prompt("Ingrese una letra");
        letra = letra.toLowerCase();
        
        numero = prompt("Ingrese un numero entre -100 y 100");
        numero = parseInt(numero);
        while(numero < -100 || numero > 100){
            numero = prompt("Incorrecto! - Ingrese un numero entre -100 y 100");
            numero = parseInt(numero);   
        }

        //a) La cantidad de números pares.
        if(numero % 2 == 0){
            contadorPar ++;
        }else {//b) La cantidad de números impares.
            contadorImpar ++;
        }

        
        if(numero > 0){ // si es positivo
            acumuladorPositivos = acumuladorPositivos + numero;
            contadorPositivos ++;
        }else if(numero < 0){ //si es negativo
            acumuladorNegativos = acumuladorNegativos + numero;
        }else{// si es 0
            contadorCeros ++;
        }

        //f) El número y la letra del máximo y el mínimo.
        if(flag){
            numeroMax = numero;
            numeroMin = numero;
            letraMax = letra;
            letraMin = letra;
            flag = false;
        }else{
            if(numero > numeroMax){
                numeroMax = numero;
                letraMax = letra;
            }
            if(numero < numeroMin){
                numeroMin = numero;
                letraMin = letra;
            }
        }

        respuesta = confirm("Desea continuar?");
    }while(respuesta == true);

    //promed positivos
    promedio = acumuladorPositivos / contadorPositivos;
    // informo por document.write
    document.write("La cantidad de Numeros Pares: " + contadorPar + "</br>"
    + "La cantidad de numeros Impares: " + contadorImpar + "</br>"
    + "La cantidad de Ceros: " + contadorCeros + "</br>"
    + "El promedio de todos los positivos: " + promedio + "</br>"
    + "La suma de todos los negativos: " + acumuladorNegativos + "</br>"
    + "El Numero maximo: " + numeroMax + " La letra del maximo: " + letraMax + "</br>"
    + "El numero Minimo: " + numeroMin + " La letra del minimo: " + letraMin);

}
