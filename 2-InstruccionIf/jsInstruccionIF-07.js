/*Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero",
 mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.' */

function mostrar()
{	
	let edadIngresada;
	let estadoCivil;
	//tomo la edad 
	edadIngresada = document.getElementById("txtIdEdad").value;
	edadIngresada = parseInt(edadIngresada);
	//tomo el estado civil
	estadoCivil = document.getElementById("estadoCivil").value;

	//condicion
	if(edadIngresada < 18 && estadoCivil != "Soltero"){
		alert("es muy pequeño para no ser soltero");
	}
	


}//FIN DE LA FUNCIÓN