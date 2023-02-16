/*Enunciado:
Al seleccionar un destino informar si hace FRIO o CALOR en ese destino*/

function mostrar()
{
	let destinoTuristico;
	let temperatura

	destinoTuristico = document.getElementById("txtIdDestino").value;

	switch(destinoTuristico){
		case "Bariloche":
		case "Ushuaia":
			alert("hace frio");
			break;
		case "Cataratas":
		case "Mar del plata":
			alert("Hace calor");
			break;
	}
	alert

}//FIN DE LA FUNCIÓN