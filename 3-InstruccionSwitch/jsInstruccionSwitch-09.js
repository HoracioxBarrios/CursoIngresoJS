/*Enunciado:
una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada 
estadia como base, se pide el ingreso de una estacion del año y localidad para vacacionar 
para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene 
un descuento del 10% Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene 
un aumento del 10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene 
un aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento */

function mostrar()
{
	let temporada;
	let destinoTuristico;
	let estadia = 15000;
	let precioFinal;
	

	temporada = document.getElementById("txtIdEstacion").value;
	destinoTuristico = document.getElementById("txtIdDestino").value;

	
	switch(temporada){
		case "Invierno":
			if(destinoTuristico == "Bariloche"){// bariloche tiene un aumento del 20% cataratas
				precioFinal = estadia + (estadia * 0.2);
			}
			else if(destinoTuristico == "Cataratas" || destinoTuristico == "Cordoba"){//cataratas y Cordoba tiene un descuento del 10%
				precioFinal = estadia - (estadia * 0.1);
			}
			else {//Mar del plata tiene un descuento del 20%
				precioFinal = estadia - (estadia * 0.2);
			}
			break;
		case "Verano":
			if(destinoTuristico == "Bariloche"){//bariloche tiene un descuento del 20% 
				precioFinal = estadia - (estadia * 0.2);
			}
			else if(destinoTuristico == "Cordoba" || destinoTuristico == "Cataratas"){//cataratas y Cordoba tiene un aumento del 10% 
				precioFinal = estadia + (estadia * 0.1);
			}
			else{//Mar del plata tiene un aumento del 20%
				precioFinal = estadia + (estadia * 0.2);
			}
			break;
		case "Otoño":
		case "Primavera":
			if(destinoTuristico == "Cordoba"){//Cordoba tiene el precio sin descuento 
				precioFinal = estadia;
			}
			else {//Primavera: bariloche tiene un aumento del 10%, cataratas tiene un aumento del 10%, Mar del plata tiene un aumento del 10% 
				precioFinal = estadia + (estadia * 0.1);
			}
			break;
	}
	
	alert("Importe Final "+ precioFinal + "$");


}//FIN DE LA FUNCIÓN