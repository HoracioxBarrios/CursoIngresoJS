/*Bienvenidos.
mostrar por alert el mensaje "usted es xxxxx y vive en la localidad de xxxxxxxx". */

function mostrar() {
    let nombre;
    let localidad;

    //tomamos los datos por id en este caso
    nombre = document.getElementById("elNombre").value;
    localidad = document.getElementById("laLocalidad").value;
    

    alert("Usted es: " + nombre + " y vive en la localidad : " + localidad);

}
