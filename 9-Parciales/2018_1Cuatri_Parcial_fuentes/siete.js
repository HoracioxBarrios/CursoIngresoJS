/*
Enunciado:
Bienvenidos.
Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10)
, el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert:
a) El promedio de las notas totales.
b) La nota más baja y el sexo de esa persona.
c) La cantidad de varones que su nota haya sido mayor o igual a 6.
*/
function mostrar() {
let nota;
let sexo;
let contador;
let acumNotas;
let promedio;
let flag;
let notaMasBaja;
let sexoMasBaja;
let contadorVarones;

contador = 0;
acumNotas = 0;
contadorVarones = 0;
flag = true;

do{

    sexo = prompt("Ingrese Sexo f o m");
    while(sexo != "f" && sexo != "m"){
        sexo = prompt("Incorrecto! - Ingrese Sexo f o m");   
    }

    nota = prompt("Ingrese nota entre 0 y 10");
    nota = parseInt(nota);
    while(nota < 0 || nota > 10){
        nota = prompt("Incorrecto - Ingrese nota entre 0 y 10");
        nota = parseInt(nota);
    }
    acumNotas = acumNotas + nota; //acumulador de notas para el promedio

    if(flag){//flag para asignar la nota minima
        notaMasBaja = nota;
        sexoMasBaja = sexo;// la primera vez ya asignamos el sexo mas bajo tambien. sino nos dice undefined si ya no podemos cumplir con la condicion de abajo.
        flag = false;
    }else {//b) La nota más baja y el sexo de esa persona.
        if(notaMasBaja > nota){
            notaMasBaja = nota;
            sexoMasBaja = sexo;
        }
    }
    //c) La cantidad de varones que su nota haya sido mayor o igual a 6.
    if(nota > 6 && sexo == "m"){// la nota mayor a 6 y que sean varones
        contadorVarones ++;
    }

    contador ++;
}while(contador < 5);

promedio = acumNotas / contador;//a) El promedio de las notas totales.

alert("El promedio: "+ promedio + "\n"
+ "La nota mas baja: " + notaMasBaja + " el sexo es: " + sexoMasBaja + "\n"
+ "Varones con nota mayor a 6:  " + contadorVarones);


//otra forma es mostrarlo por consola:
/*
console.log("El promedio: " + promedio);
console.log("La nota mas baja: " + notaMasBaja + " El sexo es: "+ sexoMasBaja);
console.log("Varones con nota mayor a 6:  " + contadorVarones);
*/

}

