/******************************************************************************
Ejercicio 3:

Apellido: barrios   
Nombre: horacio
Comisión: f
Tutor: romina

3) De una cantidad indeterminada de exámenes de ingreso, se registran y validan los 
siguientes datos:

Nombre del estudiante
Nombre de la asignatura (“LECTURA”, “MATEMÁTICA”, “PROGRAMACIÓN”)
Tipo de examen (“EXAMEN”, “RECUPERATORIO”)
Calificación

Informar:

A) El nombre de la asignatura con mayor porcentaje de aprobados, cuyo tipo de examen fue EXAMEN.
B) El promedio de estudiantes que aprobaron PROGRAMACIÓN independientemente del tipo de examen.
C) El porcentaje de aprobación por cada asignatura, cuyo tipo de examen es RECUPERATORIO. 

ACLARACIÓN: Aprobado sería una calificación mayor o igual a 6.

En los tres ejercicios, se deberá pedir los datos por prompt y mostrar la 
información por document.write().

*******************************************************************************/

function mostrar(){

let nombre;
let asignatura;
let tipoExamen;
let calificacion;
let respuesta;
let contadorProgramacion;
let contadorMatematicas;
let contadorLectura;
let contadorGeneral;
let porcentajeAproProgramacion;
let porcentajeAproMatematicas;
let porcentajeAproLectura;
let materiaPorcentajeMasAltoApro;
let acumProgramador;
let contadorProg;
let promedioEstudianteProgAprobados;

respuesta = true;
contadorProgramacion = 0;
contadorMatematicas = 0;
contadorLectura = 0;
contadorGeneral = 0;
acumProgramador = 0;
contadorProg = 0;

while(respuesta == true){

    nombre = prompt("ingrese nombre");

   
    do{
        asignatura = prompt("Ingrese asignatura");
    }while(asignatura != "LECTURA" && asignatura != "MATEMATICAS" && asignatura != "PROGRAMACION");

    do{
        tipoExamen = prompt("Ingrese tipo de examen");
    }while(tipoExamen != "EXAMEN" && tipoExamen != "RECUPERATORIO");

    do{
        calificacion = prompt("Ingrese calificacion");
        calificacion = parseInt(calificacion);
    }while(calificacion < 0 || calificacion > 10);

    switch(asignatura){
        case "PROGRAMACION":
            if(calificacion > 5 && tipoExamen == "EXAMEN"){
                contadorProgramacion ++;
            }
            if(calificacion > 5){
                acumProgramador = acumProgramador + calificacion;
                contadorProg ++;
            }
            break;
        case "MATEMATICAS":
            if(calificacion > 5 && tipoExamen == "EXAMEN"){
                contadorMatematicas ++;
            }
            
            break;
        case "LECTURA":
            if(calificacion > 5 && tipoExamen == "EXAMEN"){
                contadorLectura ++;
            }
            break;
    }


    respuesta = confirm("Desea continuar? ");
    contadorGeneral ++;

}//while
//A) El nombre de la asignatura con mayor porcentaje de aprobados, cuyo tipo de examen fue EXAMEN.

porcentajeAproProgramacion = (contadorProgramacion / contadorGeneral)*100;
porcentajeAproMatematicas = (contadorMatematicas / contadorGeneral)*100;
porcentajeAproLectura = (contadorLectura / contadorGeneral)*100;

if(porcentajeAproProgramacion > porcentajeAproMatematicas && porcentajeAproProgramacion > porcentajeAproLectura){
    materiaPorcentajeMasAltoApro = "PROGRAMACION";
}else{
    if(porcentajeAproMatematicas > porcentajeAproLectura){
        materiaPorcentajeMasAltoApro = "MATEMATICAS";
    }else{
        materiaPorcentajeMasAltoApro = "LECTURA";
    }
}

document.write("El nombre de la asignatura con % mas alto aprobados: " + materiaPorcentajeMasAltoApro + "</br>");
//B) El promedio de estudiantes que aprobaron PROGRAMACIÓN independientemente del tipo de examen.
promedioEstudianteProgAprobados = acumProgramador / contadorProg;

document.write("Promedio de estudiantres aprobados programacion " + promedioEstudianteProgAprobados);




}//fin
