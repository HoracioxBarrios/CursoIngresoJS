/******************************************************************************
Ejercicio 1:

Apellido: BARRIOS
Nombre: HORACIO
Comisión: F
Tutor: Romina

1) De los 100 participantes del torneo de PCA-MAN, se ingresan y validan los siguientes datos:

Nombre 
Edad 
Dificultad (“FACIL”, “MEDIO”, “DIFICIL”)
Score

Informar:

A) Promedio total de scores.
B) La cantidad de participantes de cada uno de los niveles de dificultad.
C) El nombre del participante más joven perteneciente al nivel de dificultad “FACIL”.

En los tres ejercicios, se deberá pedir los datos por prompt y mostrar la información por document.write().

*******************************************************************************/


function mostrar(){

let nombre;
let edad;
let dificultad;
let score;
let contador;
let acumScores;
let promedioScores;
let contadorFacil;
let contadorMedio;
let contadorDificil;
let edadMasJoven;
let nombreEdadMasJoven;

contador = 0; 
acumScores = 0;
contadorFacil = 0;
contadorMedio = 0;
contadorDificil = 0;





while(contador < 100){  //1) De los 100 participantes del torneo de PCA-MAN, se ingresan y validan los siguientes datos:

    nombre = prompt("ingrese nombre");
    do{
        edad = prompt("ingrese edad");
        edad = parseInt(edad);
    }while(edad <= 0);
   

    do{
        dificultad = prompt("Ingrese dificultad: FACIL, MEDIO , DIFICIL");
    }while(dificultad != "FACIL" && dificultad != "MEDIO" && dificultad != "DIFICIL");

  
    do{
        score = prompt("Ingrese score");
        score = parseInt(score);
    }while(score < 0);

    acumScores = acumScores + score;

    //La cantidad de participantes de cada uno de los niveles de dificultad.
    switch(dificultad){
        case "FACIL":
            contadorFacil ++;
            if(contadorFacil == 1){ // C) El nombre del participante más joven perteneciente al nivel de dificultad “FACIL”.
                edadMasJoven = edad;
                nombreEdadMasJoven = nombre;
            }else{
                if(edad < nombreEdadMasJoven){
                    edadMasJoven = edad;
                    nombreEdadMasJoven = nombre;
                }
            }
            break;
        case "MEDIO":
            contadorMedio ++;
            break;
        case "DIFICIL":
            contadorDificil ++;
            break;
    }

    contador ++;
    
}//while

//A) Promedio total de scores.
promedioScores = acumScores / contador;
//A
document.write("El promedio de score: " + promedioScores + "</br>");
//B
document.write("cantidad participantes dificultad FACIL: " + contadorFacil + " MEDIO " 
+ contadorMedio + " DIFICIL " + contadorDificil + "</br>");
//C
document.write("El nombre del participante más joven, dif FACIL: " + nombreEdadMasJoven);

}//Fin Funcion