/*
Ejercicio 1:

Apellido: Barrios
Nombre: Horacio
Comisión: F
Tutor:

"UTN Software Factory está en la búsqueda de programadores para incorporar a su equipo de trabajo.
En las próximas semanas se realizará un exhaustivo proceso de selección. Para ello se ingresarán los siguientes 
datos de los postulantes para luego establecer distintas métricas necesarias para tomar decisiones a la hora de 
la selección:
Nombre
Edad (mayor de edad)
Género (F-M-NB)
Tecnología (PYTHON - JS - ASP.NET)
Puesto (Jr - Ssr - Sr)

No se sabe cuántos son los postulantes.
Informar por pantalla:
A) Cantidad de personas de genero no binario (NB) que programan en ASP.NET o JS cuya edad este entre 25 y 40, que 
se hayan postulado para un puesto Ssr.
B) Nombre de la persona Jr con menor edad.
C) Promedio de edades de las personas de genero masculino.
"
*/
function mostrar(){
    let nombre;
    let edad;
    let genero;
    let tecnologia;
    let puesto;
    let respuesta;
    let contadorNoBinario;
    let edadMinima;
    let nombreEdadMinima;
    let flagEdadMinima;
    let acumEdadMasculino;
    let contadorMasculino;
    let promedioEdadMasculinos;

    respuesta = true;
    flagEdadMinima = true;
    acumEdadMasculino = 0;
    contadorMasculino = 0;
    contadorNoBinario = 0;

    while(respuesta == true){

        nombre = prompt("ingrese nombre");
        
        do{
            edad = prompt("ingrese edad");
            edad =parseInt(edad);
        }while(edad < 18);

        do{
            genero = prompt("ingrese genero");
        }while(genero != "F" && genero != "M" && genero != "NB");

        do{
            tecnologia = prompt("ingrese tecnologia");
        }while(tecnologia != "PYTHON" && tecnologia != "JS" && tecnologia != "ASP.NET");

        do{
            puesto = prompt("Ingrese puesto");
        }while(puesto != "Jr" && puesto != "Ssr" && puesto != "Sr");

        //************* Procesos *****************/
        /*A) Cantidad de personas de genero no binario (NB) que programan en ASP.NET o JS cuya edad este entre 25 y 40, que 
        se hayan postulado para un puesto Ssr. */

        
        
        switch(genero){
            case "NB":
                if((tecnologia == "ASP.NET" || tecnologia == "JS") && (edad >= 25 && edad <= 40) && puesto == "Ssr"){
                    contadorNoBinario ++;
                }
                break;
            case "M":
                acumEdadMasculino = acumEdadMasculino + edad; // punto c
                contadorMasculino ++;
                break;
        }

        //B) Nombre de la persona Jr con menor edad.
        if(puesto == "Jr"){
            if(flagEdadMinima){
                edadMinima = edad;
                nombreEdadMinima = nombre;
                flagEdadMinima = false;
            }else{
                if(edad < edadMinima){
                    edadMinima = edad;
                    nombreEdadMinima = nombre;
                }
            }
        }
        
        
        

        respuesta = confirm("desea ingresar otro?");

    }

    //C) Promedio de edades de las personas de genero masculino.
    promedioEdadMasculinos = acumEdadMasculino / contadorMasculino;
    //a
    document.write("Cant Personas Genero NB que programan ASP.NET o JS, entre 25 y 40 Años:  " + contadorNoBinario + "</br>");
    //b
    document.write("Nombre de la persona Jr con menor edad: " + nombreEdadMinima + "</br>");
    //c
    // si no entra ningun masculino promedio da undefined;
    if(contadorMasculino > 0){
        document.write("Promedio de edades de las personas de genero masculino  " + promedioEdadMasculinos);
    }else{
        document.write("No hay Masculinos para el promedio");
    }
    

}// fin funcion