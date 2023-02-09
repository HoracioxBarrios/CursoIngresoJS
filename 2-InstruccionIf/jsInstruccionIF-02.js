/*Al ingresar una edad debemos informar solo si la persona es mayor de edad */

function mostrar()
{ 
	let edadIngresada;
	//tomo la edad  
	edadIngresada = document.getElementById("txtIdEdad").value;
	edadIngresada = parseInt(edadIngresada);

	//evaluo
	if(edadIngresada >= 18){
		alert("es Mayor de edad");
	}	

}//FIN DE LA FUNCIÓN