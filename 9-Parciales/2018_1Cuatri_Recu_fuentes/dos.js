/*Enunciado:
Bienvenidos.
mostrar * en un solo alert * el mensaje "usted es xxxxx y vive 
en la localidad de xxxxxxxx".
*/
function mostrar() {
    let nombre;
    let localidad;

    nombre = prompt("Ingrese su nombre");
    localidad = prompt("Ingresesu localidad");

    alert("Su nombre es: " + nombre + " y vive en la localidad: " + localidad);
}
