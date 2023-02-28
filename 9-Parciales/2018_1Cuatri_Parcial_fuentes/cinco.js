/*Enunciado:
Bienvenidos (SWITCH).
pedir el ingreso de un planeta del sistema solar
Si es la tierra mostrar "acá vivimos".
Si está más cerca del sol, "acá hace más calor".
Si está más lejos del sol, "acá hace más frio".
Si no es un planeta valido informarlo.
Aclaración: los planetas se ingresan en minúscula (Mercurio y Venus están antes que la tierra).
*/function mostrar()
{
    let planeta;
    let mensaje;

    planeta = prompt("ingrese un planeta");
    planeta = planeta.toLowerCase();

    switch(planeta){
        case "mercurio":
        case "venus":
            mensaje = "Acá  hace mas calor";
            break;
        case "tierra":
            mensaje = "Acá vivimos";
            break;
        case "marte":
        case "jupiter":
        case "saturno":
        case "urano":
        case "neptuno":
        case "pluton":
            mensaje = "Acá hace mas frio";
            break;
        default:
            mensaje = "No existe";
        }

        alert(mensaje);

}
/*dependiendo del caso asignamos el valor correspondiente a mensaje 
y mostramos al final.*/