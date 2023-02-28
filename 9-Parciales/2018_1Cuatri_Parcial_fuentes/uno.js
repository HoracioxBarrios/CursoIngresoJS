/*Realizar el algoritmo que  pida el ancho y el largo de un 
rectángulo  por prompt y que muestre el perímetro por alert. */
function mostrar()
{
    let ancho;
    let largo;
    let perimetro;

    ancho = prompt("ingrese el ancho");
    ancho = parseFloat(ancho); // float para permitir decimales.

    largo = prompt("ingrese largo");
    largo = parseFloat(largo);

    perimetro = (ancho * 2) + (largo * 2);

    alert("Perimetro: " + perimetro);


}
