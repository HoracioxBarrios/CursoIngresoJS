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

function mostrar() {
	let temporada;
	let destinoTuristico;
	let estadia = 15000;
	let aumento = 0;
	let descuento = 0;
	let precioFinal;

	temporada = document.getElementById("txtIdEstacion").value;
	destinoTuristico = document.getElementById("txtIdDestino").value;

	switch (temporada) {
		case "Invierno":
			if (destinoTuristico == "Bariloche") {
				// bariloche tiene un aumento del 20% cataratas
				aumento = 20;
			} else if (
				destinoTuristico == "Cataratas" || destinoTuristico == "Cordoba") {
				//cataratas y Cordoba tiene un descuento del 10%
				descuento = 10;
			} else {
				//Mar del plata tiene un descuento del 20%
				descuento = 20;
			}
			break;
		case "Verano":
			if (destinoTuristico == "Bariloche") {
				//bariloche tiene un descuento del 20%
				descuento = 20;
			} else if (
				destinoTuristico == "Cordoba" || destinoTuristico == "Cataratas") {
				//cataratas y Cordoba tiene un aumento del 10%
			} else {
				//Mar del plata tiene un aumento del 20%
				aumento = 20;
			}
			break;
		case "Otoño":
		case "Primavera":
			if (destinoTuristico != "Cordoba") {
				// bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento
				aumento = 10; // si no es cordoba, aumento del 10%
			}
			break;
	}
	if (aumento != 0) {
		precioFinal = estadia + (estadia * aumento) / 100;
	} else if(descuento != 0) {
		precioFinal = estadia - (estadia * descuento) / 100;
	}
	else {
		precioFinal = estadia;
	}

	alert("Importe Final " + precioFinal + "$");
} //FIN DE LA FUNCIÓN
