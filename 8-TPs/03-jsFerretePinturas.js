/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	/*¿Cómo se calcula de grados centígrados a Fahrenheit?
    Para convertir de ºF a ºC use la fórmula: ºC = (ºF-32) ÷ 1.8. */

    let temperaturaIngresada;
    let tempCentigrados;

    temperaturaIngresada = parseFloat(document.getElementById("txtIdTemperatura").value);

    //convertimos Fahrenheit a Centigrados
    tempCentigrados = (temperaturaIngresada - 32 )/1.8;

    alert(temperaturaIngresada + " Fahrenheit son: " + tempCentigrados + " Centigrados");

}

function CentigradosFahrenheit () 
{
    //Para convertir de ºC a ºF use la fórmula: ºF = ºC x 1.8 + 32.	

    let temperaturaIngresada;
    let tempFahrenheit;

    temperaturaIngresada = parseFloat(document.getElementById("txtIdTemperatura").value);
    
    //convertimos de Centigrados a Fahrenheit
    tempFahrenheit = (temperaturaIngresada * 1.8)+32;

    alert(temperaturaIngresada + " Centigrados son: " + tempFahrenheit + " Fahrenheit");

}   
