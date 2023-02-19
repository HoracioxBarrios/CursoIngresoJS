/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
/*
//con do while
function mostrar(){
	let numero;

	do {
		numero = parseInt(prompt("ingrese un numero entre 0 y 9"));

	}
	while(numero < 0 || numero > 9)
	document.getElementById("txtIdNumero").value = numero;
}
*/



// otra manera con while y avisando si es incorrecta para pedir contraseña correcta
function mostrar()
{	
	let numero;

	numero = parseInt(prompt(" ingrese numero entre 0 y 9"));

	while(numero < 0 || numero > 9){
		numero = parseInt(prompt("incorrecto, ingrese un numero entre 0 y 9"));
	}
	
	document.getElementById("txtIdNumero").value = numero;
	
}//FIN DE LA FUNCIÓN










