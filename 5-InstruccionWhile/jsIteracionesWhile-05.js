/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/

//revisar para mejorar
function mostrar()
{
	let SexoIngresado;

	SexoIngresado = prompt("ingrese un sexo f o m "); 

	while( SexoIngresado != "f" && SexoIngresado != "m"){
		SexoIngresado = prompt("ingrese un sexo, valido : f o m")
	}
	document.getElementById("txtIdSexo").value = SexoIngresado;
}//FIN DE LA FUNCIÓN