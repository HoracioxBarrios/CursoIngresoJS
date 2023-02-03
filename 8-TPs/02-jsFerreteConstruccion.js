/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largoDelTerreno;
    let anchoDelTerreno;
    let perimetroDelTerreno;
    let cantidadAlambre;

    largoDelTerreno = parseFloat(document.getElementById("txtIdLargo").value);
    anchoDelTerreno = parseFloat(document.getElementById("txtIdAncho").value);

    // calculamos el perimetro de un terreno rectangular
    perimetroDelTerreno = (largoDelTerreno *2) + (anchoDelTerreno *2);
    
    //calculamos la cant. de alambre sabiendo que son 3 vueltas
    cantidadAlambre = perimetroDelTerreno *3;

    //mostramos el resultado de la operacion.
    alert("la cantidad de alambre a comprar es: "+ cantidadAlambre.toFixed(2));
}
function Circulo () 
{
	let radioDelTerreno;
    let perimetroDelTerreno;
    let cantidadAlambre;


    radioDelTerreno = parseFloat(document.getElementById("txtIdRadio").value);

    //calculamos el perimetro
    /*La longitud de la circunferencia (o perímetro) 
    es igual a dos veces el radio (r) por π (3.14)*/
    perimetroDelTerreno = (radioDelTerreno *2)*3.14;

    //cant. de alambre sabiendo que son 3 vueltas
    cantidadAlambre = perimetroDelTerreno *3;

    alert("La cantidad de alambre a comprar es: "+cantidadAlambre);


}
function Materiales () 
{
	

    let largo;
    let ancho;
    let area;
    let cemento;
    let cal;

    largo = parseFloat(document.getElementById("txtIdLargo").value);
    ancho = parseFloat(document.getElementById("txtIdAncho").value);

    // el area de un cuadrado es lado por lado, o largo por ancho;
    area = largo * ancho;

    //el cemento es 2 por cada metro cuadrado
    //la cal es 3 por cada metro cuadrado
    cemento = area *2;
    cal = area*3;

    alert(" La cantidad de cemento necesaria es: " + cemento + "\n"
    + " La cantidad de cal necesaria es: "+ cal );

}