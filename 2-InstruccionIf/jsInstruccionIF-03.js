/*Al ingresar una edad debemos informar si la persona es mayor de edad, 
sino informar que es un menor de edad. */

function mostrar()
{
	let edadIngresada;
	//tomo la edad  
	edadIngresada = document.getElementById("txtIdEdad").value;
	//parseo a de string a num
	edadIngresada = parseInt(edadIngresada);

	//evaluo la condicion
	if(edadIngresada >= 18){
		alert("es mayor de edad");
	}else{
		alert("es menor de edad");
	}
	

}//FIN DE LA FUNCIÓN