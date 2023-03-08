/*
Ejercicio 2:

Apellido: Barrios
Nombre: Horacio
Comisión: F
Tutor:

"Es la gala de eliminación en Gran Hermano y la producción nos pide un programa para contar 
los votos de los televidentes y 
saber cuál será el participante que deberá abandonar la casa más famosa del mundo.
Los participantes en la placa son: La Tora, Romina, Julieta y Camila. 
Nacho no fue nominado y Marcos no está en la placa 
esta semana por haber ganado la inmunidad.

El televidente debe ingresar:
Nombre del votante
Edad del votante (debe ser mayor a 13)
Género del votante (masculino, femenino, otro)
El nombre del participante a quien le dará el voto negativo (Debe estar en placa)
No se sabe cuántos votos entrarán durante la gala.
Se debe informar al usuario:

A) El promedio de edad de las votantes de género femenino
B) Cantidad de personas de género masculino entre 25 y 40 años que votaron a Nacho o Julieta.
C) Nombre del votante más joven qué voto a La Tora.
D) Nombre de cada participante y porcentaje de los votos qué recibió.
E) El nombre del participante que debe dejar la casa (El que tiene más votos)
¡No decepciones a Santiago Del Moro!
"
*/
function mostrar(){

    let nombreVotante;
    let edadVotante;
    let generoVotante;
    let nombreParticipanteDeLaCasa;
    let respuesta;
    let contadorVotosGeneral;
    let contadorEspecialNachoJulieta;
    let acumEdadFemeninos;
    let contadorEdadFemenino;
    let promedioEdadFeme;
    let votanteMasJovenQueVotoLaTora;
    let edadVotanteMasJoven;
    let contadorLaTora;
    let contadorRomina;
    let contadorCamila;
    let contadorJulieta;
    let porcentajeVotosLaTora;
    let porcentajeVotosRomina;
    let porcentajeVotosCamila;
    let porcentajeVotosJulieta;
    let masVotadoParaIrse;



    respuesta = true;
    contadorVotosGeneral = 0;
    acumEdadFemeninos = 0;
    contadorEdadFemenino = 0;
    contadorEspecialNachoJulieta = 0;
    contadorLaTora = 0;
    contadorRomina = 0;
    contadorCamila = 0;
    contadorJulieta = 0;


    while(respuesta == true){

        nombreVotante = prompt("Ingrese su nombre");
        
        do{
            edadVotante = prompt("Ingrese su edad");
            edadVotante = parseInt(edadVotante);
        }while(edadVotante < 14); // ahi me permite 14 esta ok!

        do{
            generoVotante = prompt("Ingrese su genero");
        }while(generoVotante != "masculino" && generoVotante != "femenino" && generoVotante != "otro");

        do{
            nombreParticipanteDeLaCasa = prompt("Ingrese nombre del que debe Salir de la casa");
        }while(nombreParticipanteDeLaCasa != "La Tora" && nombreParticipanteDeLaCasa != "Romina" 
        && nombreParticipanteDeLaCasa != "Julieta" && nombreParticipanteDeLaCasa != "Camila");

        
        if(generoVotante == "femenino"){ //A) El promedio de edad de las votantes de género femenino
            acumEdadFemeninos += edadVotante;
            contadorEdadFemenino ++;
        }else{ //B) Cantidad de personas de género masculino entre 25 y 40 años que votaron a Nacho o Julieta.
            if(generoVotante == "masculino" && (edadVotante > 25 && edadVotante < 40) && (nombreParticipanteDeLaCasa == "Julieta" || nombreParticipanteDeLaCasa == "Nacho")){
                contadorEspecialNachoJulieta ++;
            }
        }

        switch(nombreParticipanteDeLaCasa){
            case "Romina":
                contadorRomina ++;
                break;
            case "La Tora":
                contadorLaTora ++;

                if(contadorLaTora == 1){
                    edadVotanteMasJoven = edadVotante;
                    votanteMasJovenQueVotoLaTora = nombreVotante;
                }else{
                    if( edadVotante < edadVotanteMasJoven){
                        edadVotanteMasJoven = edadVotante;
                        votanteMasJovenQueVotoLaTora = nombreVotante;//C) Nombre del votante más joven qué voto a La Tora.
                    }
                }
                break;
            case "Camila":
                contadorCamila ++;
                break;
            case "Julieta":
                contadorJulieta ++;
                break;
        }
        

        contadorVotosGeneral ++;

        respuesta = confirm("Desea ingresaro otro voto?");
    }//while

    
    promedioEdadFeme = acumEdadFemeninos / contadorEdadFemenino;

    ////D) Nombre de cada participante y porcentaje de los votos qué recibió.
    porcentajeVotosLaTora = (contadorLaTora / contadorVotosGeneral) * 100;
    porcentajeVotosCamila = (contadorCamila / contadorVotosGeneral) * 100;
    porcentajeVotosJulieta = (contadorJulieta / contadorVotosGeneral) * 100;
    porcentajeVotosRomina = (contadorRomina / contadorVotosGeneral) * 100;

     //E) El nombre del participante que debe dejar la casa (El que tiene más votos)
    if(contadorLaTora > contadorCamila && contadorLaTora > contadorJulieta 
        && contadorLaTora > contadorRomina){
            masVotadoParaIrse = "La Tora";
        }else{
            if(contadorCamila > contadorJulieta && contadorCamila > contadorRomina){
                masVotadoParaIrse = "Camila";
            }else {
                if(contadorJulieta > contadorRomina){
                    masVotadoParaIrse = "Julieta";
                }else {
                    masVotadoParaIrse = "Julieta";
                }
            }
        }


    //A
    if(contadorEdadFemenino > 0){
        document.write("Promedio femeninos: " + promedioEdadFeme + "</br>");
    }else {
        document.write("No hay nadie para Promedio femeninos: " + "</br>");
    }
    
    
    //B
    document.write("Contador nacho o julieta " + contadorEspecialNachoJulieta);

    //C
    document.write("Nombre del votante más joven qué voto a La Tora. " + votanteMasJovenQueVotoLaTora);
    
    //D
    document.write("porcentaje de votos La Tora " + porcentajeVotosLaTora.toFixed(2) );
    document.write("porcentaje de votos Camila " + porcentajeVotosCamila.toFixed(2) );
    document.write("porcentaje de votos Julieta " + porcentajeVotosJulieta.toFixed(2) );
    document.write("porcentaje de votos Romina " + porcentajeVotosRomina.toFixed(2) );
    
    
     //E
    document.write("El mas votado para irse es: " + masVotadoParaIrse);


}

