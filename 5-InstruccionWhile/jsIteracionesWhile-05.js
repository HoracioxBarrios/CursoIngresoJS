/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/


/*
//con do while
function mostrar(){
	let sexo;

	do{
		sexo = prompt("ingrese sexo, f o m");
	}while(sexo != "f" && sexo != "m");

	document.getElementById("txtIdSexo").value = sexo;
}

*/


// con while validando y mostrando en caso de ser incorrecto, se avisa al usuario y pide nuevamente
function mostrar()
{
	let SexoIngresado;

	SexoIngresado = prompt("ingrese un sexo f o m "); //usuario ingresa "f""

	//     "f" es distinto de "f" &&    "f" es distinto de "m"
	//              false         &&           true           Valor de Verdad = false
	//el valor de verdad es false por lo tanto no ingresa al bucle.

	while( SexoIngresado != "f" && SexoIngresado != "m"){
		SexoIngresado = prompt("ingrese un sexo, valido : f o m")
	}
	document.getElementById("txtIdSexo").value = SexoIngresado;
}//FIN DE LA FUNCIÓN





/*
// Ejermplo de lo que estaria mal
//seria incorrecto usar || 
// con while validando y mostrando en caso de incorrecto, se avisa y pide nuevamente
function mostrar()
{
	let SexoIngresado;

	//supongamos que el usuario ingresa una letra equivocada, ejemplo "f"
	SexoIngresado = prompt("ingrese un sexo f o m "); 


	//      "f" es distinto de "f" ||   "f" es distinto de "m"
	//               false			or		  true   =  Valor de Verdad true

	//ingresa al bucle
	//por lo tanto si ingresamos una LETRA CORRECTA aun nos sigue pidiendo que ingresemos letra correcta. y aun ingresando una letra incorrecta nos sigue pidiendo contraseña, se convierte en BUCLE INFINITO.
	while( SexoIngresado != "f" || SexoIngresado != "m"){
		SexoIngresado = prompt("ingrese un sexo, valido : f o m")
	}
	document.getElementById("txtIdSexo").value = SexoIngresado;
}//FIN DE LA FUNCIÓN

*/