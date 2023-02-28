/*Enunciado:
Bienvenidos.
Realizar el algoritmo que permita iterar el ingreso de dos datos, 
una letra y un número entre -100 y 100 (validar) hasta que el usuario quiera 
e informar al terminar el ingreso por document.write:
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
Curso de ingreso UTN FRA */

function mostrar()
{
    let letra;
    let numero;
    let respuesta;
    let noEsNumero;
    let contadorNumPar;
    let contadorNumImpar;
    let contadorCeros;
    let acumuladorPositivos;
    let acumuladorNegativos;
    let promedioPositivos;
    let contadorPositivos;
    let flag;
    let maximo;
    let minimo;
    let letraDelMinimo;
    let letraDelMaximo;

    contadorPositivos = 0;
    contadorNumPar = 0;
    contadorNumImpar = 0;
    contadorCeros = 0;
    acumuladorPositivos = 0;
    acumuladorNegativos = 0;
    flag = true;

    do {
        letra = prompt("Ingrese  una letra d, z, g, a, b, k ");
        letra = letra.toLowerCase();

        /*while(letra != "d" && letra != "z" && letra != "g" && letra != "a"
        && letra != "b" && letra != "k"){
            letra = prompt("Incorrecto: * Ingrese  una letra d, z, g, a, b, k ");
            letra = letra.toLowerCase();
        }*/
        
        //otra validacion , abarca el abc
        while(letra < "a" || letra > "z" ){
            letra = prompt("Incorrecto! - Ingrese  una letra d, z, g, a, b, k ");
            letra = letra.toLowerCase();
        }

        numero = prompt("ingrese un numero entre -100 y 100");
        numero = parseInt(numero);// parseo
        noEsNumero = isNaN(numero); // valido que no sea NaN, porque si me ingresa el imput vacio NaN rompe y me deja continuar preguntando en el confirm()

        while(numero < -100 || numero > 100 || noEsNumero ){
            numero = prompt("Incorrecto! *ingrese un numero entre -100 y 100");
            numero = parseInt(numero);
            noEsNumero = isNaN(numero);
        }
        // si el resto de la division es 0 es numero par, entonces lo cuento.
        
        if(numero % 2 == 0){// cambio
            contadorNumPar ++;
        }else{//sino es impar y lo cuento.
            contadorNumImpar ++;
        }

        if(numero > 0){// todos los positivos
            acumuladorPositivos = acumuladorPositivos + numero;
            contadorPositivos ++;
        }else{
            if(numero < 0){
            acumuladorNegativos = acumuladorNegativos + numero;
            }else {
                contadorCeros ++;
            }
        }
        //f) El número y la letra del máximo y el mínimo.
        if(flag){
            maximo = numero;
            minimo = numero;
            letraDelMaximo = letra;
            letraDelMinimo = letra;
            flag = false;
        }else{
            if(numero > maximo){
                maximo = numero;
                letraDelMaximo = letra;
            }
            if(numero < minimo){
                minimo = numero;
                letraDelMinimo = letra;
            }
        }
        
        respuesta = confirm("desea continuar?");
        
    }while(respuesta == true);

    promedioPositivos = acumuladorPositivos / contadorPositivos;

    document.write("Cantidad de Numeros pares: " + contadorNumPar + "</br>"
    + " Cantidad de Numeros impares: " + contadorNumImpar + "</br>" 
    + " Cantidad de Ceros " + contadorCeros + "</br>"
    + " El promedo de los positivos es: "+ promedioPositivos + "</br>"
    + " La suma de los negativos es: " + acumuladorNegativos + "</br>"
    + " El Maximo: " + maximo + " La letra del Maximo:  " + letraDelMaximo + "</br>"
    + " El minimo: " + minimo + " La letra del minimo:  " + letraDelMinimo ); 

}   
