/*Al ingresar una edad que sea igual a 15, mostrar el mensaje "niña bonita". */
//if(){} - if(){} else{} es estructura de control compuesta


function mostrar()
{	
	let edadIngresada;
	//tomo la edad  
	edadIngresada = parseInt(document.getElementById("txtIdEdad").value);

	//evaluo
	if(edadIngresada == 15){
		alert("Niña bonita!");
	}

}//FIN DE LA FUNCIÓN