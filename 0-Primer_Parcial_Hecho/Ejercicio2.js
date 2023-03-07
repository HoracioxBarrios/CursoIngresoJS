b/*
Ejercicio 2:

Apellido: Barrios
Nombre: Horacio
Comisión: F
Tutor:

"Cines ""crupulos"" tiene control sobre cada uno de los tickes de los clientes que ingresan a las salas dia a dia.
Para ello se tiene en cuenta los siguientes parametros:
Edad (debe ser mayor a 12)
Género(M - F - NB)
Tipo pelicula (Terror - Heroes - Romance)
Horario (entre 8 y 23)
No sabemos cuántos clientes entran durante el día.
Se debe informar al usuario:
A) Horario promedio de concurrencia.
B) El porcentaje de clientes por género
C) Nombre y genero del cliente de menor edad que haya visto una pelicula de Heroes.
D) El tipo de pelicula mas concurrida"*/

function mostrar() {
    let nombre;
    let edad;
    let genero;
    let tipoPelicula;
    let horario;
    let respuesta;
    let acumHorarios;
    let contadorGeneralTickets;
    let promedioHorarios;
    let contadorMasculinos;
    let contadorFemeninos;
    let contadorNb;
    let porcentajeHombres;
    let porcentajeMujeres;
    let porcentajeNb;
    let contadorTerror;
    let contadorHeroes;
    let contadorRomance;
    let tipoPeliculaMasConcurrida;
    let nombreMinimo;
    let generoMinimo;
    let edadMinima;
    let flagEdadMinima;

    respuesta = true;
    acumHorarios = 0;
    contadorGeneralTickets = 0;
    contadorMasculinos = 0;
    contadorFemeninos = 0;
    contadorNb = 0;
    contadorTerror = 0;
    contadorHeroes = 0;
    contadorRomance = 0;
    flagEdadMinima = true;


    while (respuesta == true) {

        nombre = prompt("Ingrese nombre");

        do {
            edad = prompt("ingrese edad");
            edad = parseInt(edad);
        } while (edad < 13);// 12 no me deja, tiene que ser mayor a 12

        do {
            genero = prompt("ingrese genero");
        } while (genero != "F" && genero != "M" && genero != "NB");

        do {
            tipoPelicula = prompt("ingrese tipo de pelicula");
        } while (tipoPelicula != "Terror" && tipoPelicula != "Heroes" && tipoPelicula != "Romance");

        do {
            horario = prompt("ingrese horario");
            horario = parseInt(horario);
        } while (horario < 8 || horario > 23);

        //A) Horario promedio de concurrencia.
        acumHorarios += horario; // acum = acum + hora;


        //B) El porcentaje de clientes por género
        switch (genero) {
            case "F":
                contadorFemeninos++;
                break;
            case "M":
                contadorMasculinos++;
                break;
            case "NB":
                contadorNb++;
                break;
        }

        switch (tipoPelicula) {
            case "Terror":
                contadorTerror++;
                break;
            case "Heroes":
                if(flagEdadMinima == true){ // cuando elije Heroes ahi , el minimo que haya visto pelis de Heroes!
                    edadMinima = edad;
                    nombreMinimo = nombre;
                    generoMinimo = genero;
                }else{
                    if(edad < edadMinima){
                        edadMinima = edad;
                        nombreMinimo = nombre;
                        generoMinimo = genero;
                    }
                }
                contadorHeroes++;
                break;
            case "Romance":
                contadorRomance++;
                break;
        }

        
        contadorGeneralTickets++;
        respuesta = confirm("desea seguir ?");
    }//while

    promedioHorarios = acumHorarios / contadorGeneralTickets;

    porcentajeMujeres = (contadorFemeninos / contadorGeneralTickets) * 100;
    porcentajeHombres = (contadorMasculinos / contadorGeneralTickets) * 100;
    porcentajeNb = (contadorNb / contadorGeneralTickets) * 100;

    //D) El tipo de pelicula mas concurrida"
    if (contadorTerror > contadorHeroes && contadorTerror > contadorRomance) {
        tipoPeliculaMasConcurrida = "Terror";
    } else {
        if (contadorHeroes > contadorRomance) {
            tipoPeliculaMasConcurrida = "Heroes";
        } else {
            tipoPeliculaMasConcurrida = "Romance";
        }
    }

    //A
    document.write("Promedio de horarios: " + promedioHorarios + "</br>" );

    //B
    document.write("Porcentaje por Generos: Mujeres " + porcentajeMujeres.toFixed(2) + " Hombres " + porcentajeHombres.toFixed(2) + " Nb " + porcentajeNb.toFixed(2) + "</br>");

    //C
    document.write("Nombre del cliente de menor edad que haya visto una pelicula de Heroes." + nombreMinimo + " genero " + generoMinimo + "</br>");

    //D
    document.write("El tipo de pelicula mas concurrida: " + tipoPeliculaMasConcurrida + "</br>");

}//fin