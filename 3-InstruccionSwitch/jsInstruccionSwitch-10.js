/*Enunciado:
una agencia de viajes nos piden informar si hacemos viajes a lugares según la estación del año estemos, informar si "Se viaja" o "No se viaja" a ese lugar

en Invierno: Solo Bariloche informa "se viaja" los demas destinos "No se viaja"

en Verano: Se viaja a Mar del plata y Cataratas solamente

en Otoño: Se viaja a todos los destinos.

primavera: solo no se viaja a Bariloche */

function mostrar()
{
	let temporada;
	let destinoTuristico;

	temporada = document.getElementById("txtIdEstacion").value;
	destinoTuristico = document.getElementById("txtIdDestino").value;

	switch(temporada){
		case "Invierno"://Solo Bariloche informa "se viaja" los demas destinos "No se viaja"
			if(destinoTuristico == "Bariloche"){
				alert("se viaja");
			}
			else {
				alert("No se vieja");
			}
			break;
		case "Verano"://Se viaja a Mar del plata y Cataratas solamente
			if(destinoTuristico == "Mar del plata" || destinoTuristico == "Cataratas"){
				alert("se viaja");
			}
			else{
				alert("No se viaja");
			}
			break;
		case "Otoño"://Se viaja a todos los destinos.
			alert("se viaja");
			break;
		case "Primavera"://solo no se viaja a Bariloche
			if(destinoTuristico == "Bariloche"){
				alert("No se viaja");
			}
			else{
				alert("se viaja");
			}
			break;
	}

}//FIN DE LA FUNCIÓN