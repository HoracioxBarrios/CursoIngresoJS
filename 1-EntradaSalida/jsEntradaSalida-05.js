/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	//aca declaramos las variables
	let nombre;
	let edad;

	//aca le asignamos los valores a esas variables

	// nombre = document.getElementById("txtIdNombre").value;
	// edad = document.getElementById("txtIdEdad").value;
	 nombre = txtIdNombre.value;
	 edad = txtIdEdad.value;

	//aca lo mostramos por alert
	alert("usted se llama: "+ nombre + " y tiene " + edad + " años");

  // gracias!

}

