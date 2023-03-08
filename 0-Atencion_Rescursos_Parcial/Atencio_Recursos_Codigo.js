//*********** DO WHILE con respuesta de seguir */

let respuesta;

respuesta = true;
do{
  respuesta = confirm("Desea ingresar otro? ")
}while(respuesta == true);


//************************** */

//********** WHILE  con respuesta de seguir */

/*
let respuesta;

respuesta = true;

while(respuesta == true){

}

*/
//************************** */















//******************************************************** */
/*¿Cómo se obtiene el promedio?
Promedio Esta es la media aritmética y se calcula agregando 
un grupo de números y dividiendo por el recuento de esos números.
Por ejemplo, el promedio de 2, 3, 3, 5, 7 y 10 es 30 dividido por 6, que es 5. */

// promedio
let contador;
let acumulador;
let promedio;

contador = 0;
acumulador = 0;

promedio = acumulador / contador;

//el promedio es la suma acumulada dividida el contador.

//******************************************************* */

// PORCENTAJE                   CON CONTADOR
//formula 
//porcentaje = (valor / total) * 100

/**si en una zapateria entran 5 hombres, y en ese dia entraron 5 clientes
  el porcentaje de ventas seria 100% */              
let porcentaje;
let contadorZapatos;
let contadorGeneral;

contadorZapatos = 0;
contadorGeneral = 0

//a manopla
contadorZapatos = 5;
contadorGeneral = 10;
//               5 zapatos         //  10 contador clientes que ingresaron en total
porcentaje = (contadorZapatos / contadorGeneral)* 100;

// PORCENTAJE - tambien puede ser acumuladores para contar otras cosas. Ejemplo:  COM ACUMULADOR 
let personaje = "Jinx";
let partidasGanadas = 10;
let acumPartidasGanadasJinx;
let acumPartidasGeneralGanadas;
let porcentajeGanadasJinx;

switch(Personaje){
  case "Jinx":  //10
    acumPartidasGanadasJinx = acumPartidasGanadasJinx + partidasGanadas;
  break;
}
//        = 10 
acumPartidasGanadasJinx = acumPartidasGeneralGanadas + partidasGanadas;
//A) Porcentaje de victorias del personaje Jinx, sobre el total de partidas ganadas.
//                                 10                         10                * 100 = 100%      
porcentajeGanadasJinx = (acumPartidasGanadasJinx / acumPartidasGeneralGanadas) * 100 

// PORCENTAJE = NUMERO ACUMULADO dividido NUMERO "ACUMULADO GENERAL" ese resultado , *por 100

//porcentaje de ventas = 50%

//******************************************************* */

//PORCENTAJE DIVIDIDO EN VARIAS PARTES

 //porcentaje de positivos
 porcentajePositivos = (contadorPositivos / contadorNunGenerales) * 100;
 //porcentaje de Negativos
 porcentajeNegativos = (contadorNegativos / contadorNunGenerales) * 100;




