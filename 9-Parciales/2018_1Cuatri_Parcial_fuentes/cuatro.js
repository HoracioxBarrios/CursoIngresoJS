/*Enunciado:
Bienvenidos (IF).
Pedir dos números y mostrar el resultado:
Si son iguales los muestro concatenados.
Si el primero es mayor, los resto,
de lo contrario los sumo.
Si la suma es mayor a 10 ,además de mostrar el resultado, muestro el mensaje
"la suma es xxx y supero el 10". */
function mostrar()
{
    let primerNumero;
    let segundoNumero;
    let resultado;
    let suma;


    primerNumero = prompt("Ingrese un Numero");

    segundoNumero = prompt("Ingrese otro Numero");

    if(primerNumero == segundoNumero){
        resultado = primerNumero + segundoNumero //concatenado
    }else {
        primerNumero = parseInt(primerNumero); //parseo
        segundoNumero = parseInt(segundoNumero);

        if(primerNumero > segundoNumero){
            resultado = primerNumero - segundoNumero;// resta
        }else{
            suma = primerNumero + segundoNumero;//suma
            resultado = suma;
        }
    }

    
    if(suma > 10 ){
        alert("La suma es: " + resultado + "  y superó el 10");
    }else{
        alert(resultado);
    }
    
}

