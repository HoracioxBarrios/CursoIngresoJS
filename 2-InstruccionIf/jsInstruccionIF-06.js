/*Al ingresar una edad debemos informar si la persona es mayor de edad 
(mas de 18 años) o adolescente (entre 13 y 17 años) 
o niño (menor a 13 años). */

function mostrar() {
	let edadIngresada;
	//tomo la edad
	edadIngresada = document.getElementById("txtIdEdad").value;
	edadIngresada = parseInt(edadIngresada);
	

	if (edadIngresada >= 18) { // se evaluda si es mayor y si no entra al ELSE
		alert("Es mayor de edad");
	} else {
		if (edadIngresada < 13) { //se evalua si es niño y sino es adolecente
			alert("Es niño");
		} else {
			alert("Es adolecente"); 
		}
	}
	

	// otra forma:
	/*
	if(edadIngresada < 13){
		alert("Es niño");
	}
	else {
		if(edadIngresada >= 18){
			alert("Es Mayor de edad");
		}
		else{
			alert("es Adolecente");
		}
	}
	*/



	// es para mas adelante. No es valido para este caso.
	/*
	  if(edadIngresada >= 18){ // si es mayor o igual a 18 
		  alert("es mayor de edad");
	  }else if(edadIngresada >= 13){ // evaluo otra condicion: si es mayor o igual a 13 
		  alert("es adolecente");		//hasta 18 porque ya lo evaluamos
	  }else {
		  alert("es niño"); // por descarte
	  }
  
	  // gracias!!!
	   */
} //FIN DE LA FUNCIÓN
