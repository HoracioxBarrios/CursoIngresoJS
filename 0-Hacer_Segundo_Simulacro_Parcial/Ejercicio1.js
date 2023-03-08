/*
Ejercicio 1:

Apellido: Barrios
Nombre: Horacio
Comisión: F
Tutor:Romina

"Un grupo de jugadores del muy conocido juego League Of Legends apodados ""la banda de Gio"", registran de sus 
partidas distintos parametros.
Para eso vamos a necesitar un programa que pida a cada uno de los jugadores:
Nombre
Campeón/ personaje recurrente (Riven, Jinx, Jax, Darius)
Cantidad de partidas ganadas (No debe ser negativo)
Cantidad de partidas perdidas (No debe ser negativo)
Queremos informar:
A) Porcentaje de victorias del personaje Jinx, sobre el total de partidas ganadas.
B) El nombre del jugador con mas derrotas.
C) Cuantos jugadores ganaron mas de 5 partidas y perdieron menos de 3 (en un mismo ingreso) jugando con Darius o 
Riven
"*/

function mostrar() {
    let nombre;
    let campeon;
    let partidasGanadas;
    let partidasPerdidas;
    let respuesta;

    let acumPartidasGanadasJinx;
    let acumPartidasGeneralGanadas;
    let porcentajeGanadasJinx;
    let cantidadMaximaDeDerrotas;
    let nombreDelMaximoDerrotas;
    let flagMaximoDerrotas;
    let contadorJugadorNivelMedio;


    respuesta = true;
    acumPartidasGanadasJinx = 0;
    acumPartidasGeneralGanadas = 0;
    flagMaximoDerrotas = true;
    contadorJugadorNivelMedio =0;

    while (respuesta == true) {
        nombre = prompt("Ingrese nombre");

        do {
            campeon = prompt("Ingrese campeon");
        } while (
            campeon != "Riven" &&
            campeon != "Jinx" &&
            campeon != "Jax" &&
            campeon != "Darius"
        );

        do {
            partidasGanadas = prompt("Ingrese cantidad de partidas ganadas");
            partidasGanadas = parseInt(partidasGanadas); //parseo
        } while (partidasGanadas < 0);

        do {
            partidasPerdidas = prompt("Ingrese cantidad de partidas perdidas");
            partidasPerdidas = parseInt(partidasPerdidas);
        } while (partidasPerdidas < 0);

        switch (campeon) {
            case "Riven":
                break;
            case "Jinx":
                    acumPartidasGanadasJinx = acumPartidasGanadasJinx + partidasGanadas;
                break;
            case "Jax":
                break;
            case "Darius":
                break;
        }

        //B) El nombre del jugador con mas derrotas.
        if(flagMaximoDerrotas == true){
            cantidadMaximaDeDerrotas = partidasPerdidas;
            nombreDelMaximoDerrotas = nombre;
            flagMaximoDerrotas = false;
        }else{
            if(partidasPerdidas > cantidadMaximaDeDerrotas){
                cantidadMaximaDeDerrotas = partidasPerdidas;
                nombreDelMaximoDerrotas = nombre;
            }
        }   

        /*C) Cuantos jugadores ganaron mas de 5 partidas y perdieron menos de 3 
        (en un mismo ingreso) jugando con Darius o Riven "*/
        if(partidasGanadas > 5 && partidasPerdidas < 3 ){
            contadorJugadorNivelMedio ++;
        }
        
        acumPartidasGeneralGanadas += partidasGanadas;


        respuesta = confirm("desea ingresar otro?");
        
    } //while

    //A) Porcentaje de victorias del personaje Jinx, sobre el total de partidas ganadas.
    porcentajeGanadasJinx = (acumPartidasGanadasJinx / acumPartidasGeneralGanadas) * 100 // si no estan parseados Da otro resultado!

    

    //A
    document.write(
        "Porcentaje de partidas ganadas Jinx: " + porcentajeGanadasJinx + "% " + "</br>");

    //B
    document.write("El jugador con mas derrotas es: " + nombreDelMaximoDerrotas + "</br>");
    
    //C
    document.write("jugadores ganaron mas de 5 partidas y perdieron menos de 3 en un mismo ingreso : " + contadorJugadorNivelMedio);

} //fin













/*
//ariel bravo 
let respuesta = 'si';
let nombreJugador;
let personajeRecurrente;
let partidasGanadas = 0;
let partidasPerdidas = 0;
let porcentajeVictoriasJinx = 0;
let victoriasPersonajeJinx = 0;
let acumuladorPartidasGanadas = 0;
let cantidadPartidasPerdidas = 0;
let nombrePartidasPerdidas;
let acumuladorGanadasJinx;
let acumuladorPartidasPerdidas = 0;
let contadorJugaorMas5Menos3DoR = 0;


while (respuesta == 'si') {


    nombreJugador = prompt('Ingrese el nombre del jugador');

    do {
        personajeRecurrente = prompt('ingrese el personaje Recurrente');
    } while (personajeRecurrente != 'Riven' && personajeRecurrente != 'Jinx' && personajeRecurrente != 'Jax' && personajeRecurrente != 'Darius');

    do {
        partidasGanadas = prompt('Ingrese la cantidad de partidas ganadas, debe ser mayor a cero')
    } while (partidasGanadas < 0);

    do {
        partidasPerdidas = prompt('Ingrese la cantidad de partidas perdidas, debe ser mayor a cero')
    } while (partidasPerdidas < 0);




    acumuladorPartidasGanadas += partidasGanadas;

    switch (personajeRecurrente) {
        //A) Porcentaje de victorias del personaje Jinx, sobre el total de partidas ganadas.
        case 'Jinx':
            victoriasPersonajeJinx = victoriasPersonajeJinx + partidasGanadas;
            acumuladorGanadasJinx += victoriasPersonajeJinx;
            break;
        // C) Cuantos jugadores ganaron mas de 5 partidas y perdieron menos de 3 (en un mismo ingreso) jugando con Darius o Riven
        case 'Darius o Riven':
            if (partidasGanadas > 5 && partidasPerdidas < 3) {
                contadorJugaorMas5Menos3DoR++;
            }
        default:

            break;
    }

    //B) El nombre del jugador con mas derrotas.

    if (bandera == 0) {
        cantidadPartidasPerdidas = partidasPerdidas;
        nombrePartidasPerdidas = nombreJugador;
        bandera = 1;
    } else {
        if (partidasPerdidas > cantidadPartidasPerdidas) {
            cantidadPartidasPerdidas = partidasPerdidas;
            nombrePartidasPerdidas = nombreJugador;
        }


        respuesta = prompt('Desea seguir ingresando personajes? si/no');
    }
}

porcentajeVictoriasJinx = acumuladorGanadasJinx * 100 / partidasGanadas;

document.write('El porcentaje de partidas ganadas del personaje Jinx fueron :' + porcentajeVictoriasJinx + ' %' + '<br>');

document.write('El nombre del jugador con mas partidas perdidas es :  ' + nombrePartidasPerdidas + '<br>');

document.write('La cantidad de jugadores que acumulan mas de 5 victorias y menos de 3 derrotas utilizando el personaje Darius o Riven, fueron: ' + contadorJugaorMas5Menos3DoR);

*/
