/*Al ingresar una edad solo debemos informar si la persona NO es adolescente. */

function mostrar()
{
	let edadIngresada;
	//tomo la edad  
	edadIngresada = document.getElementById("txtIdEdad").value;
	edadIngresada = parseInt(edadIngresada);

	//Con rango numerico separado usamos OR
	if(edadIngresada < 13 || edadIngresada > 17){
		alert("No es adolecente! ");
	}
	

	/*
	//negando la condicion (todo lo que no pertenece al conjunto)

	if(!(edadIngresada >=13 && edadIngresada <= 17)){
		alert("no es adolecente!");
	}
	*/


	/*nota:negar condicion,"!condicion" osea  es distinto a " != " distinto , son distintos operadores*/


	// cond1 cond2 OR
	//   V     V    V
	//   V     F    V
	//   F     V    V
	//   F     F    F
	// cond Negacion !
	//   V  F
	//   F  V
	
}//FIN DE LA FUNCIÓN
