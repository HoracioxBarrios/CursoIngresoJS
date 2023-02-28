/*Mostrar información
Enunciado:
Bienvenidos.
(SWITCH)pedir el ingreso de un día de la semana,
si es fin de semana mostrar " buen finde",
si es día hábil “ a trabajar”,
si no es un día valido, también informarlo,
usar una sola ventana alert. */
function mostrar()
{
    let dia;

    dia = prompt("Ingrese dia");
    dia = dia.toLowerCase();

    switch(dia){
        case "sabado":
        case "domingo":
            alert("Buen finde!");
            break;
        case "lunes":
        case "martes":
        case "miercoles":
        case "jueves":
        case "viernes":
            alert("A trabajar!");
            break;
        default:
            alert("No es un dia valido");

    }
}
