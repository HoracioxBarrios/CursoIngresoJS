/*Enunciado:
Bienvenidos.
(IF)Pedir dos números y mostrar el resultado:
Si son iguales los muestro concatenados.
Si el primero es mayor, los divido,
de lo contrario los sumo.
Si la suma es menor a 50 ,además de mostrar el resultado, muestro el mensaje
"la suma es xxx y es menor a 50".
*/

function mostrar() {
    let numeroUno;
    let numeroDos;
    let resultado;
    let suma;

    numeroUno = prompt("Ingrese el primer numero");
    numeroDos = prompt("Ingrese el segundo numero");

    if(numeroUno == numeroDos){
        resultado = numeroUno + numeroDos;
    }else {
        numeroUno = parseInt(numeroUno);// parseo 
        numeroDos = parseInt(numeroDos);

        if(numeroUno > numeroDos){
            resultado = numeroUno / numeroDos;
        }else {
            suma = numeroUno + numeroDos; // variable suma para evaluar la condicion al final
            resultado = suma;
        }
    }

    if(suma < 50){
        alert("la suma es: " + resultado + "  y es menor a 50");
    }else {
        alert("El resultado es: " + resultado);
    }
}
