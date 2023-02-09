/*Al ingresar una edad debemos informar si la persona es adolescente,
 edad entre 13 y 17 años (inclusive) . */

function mostrar()
{
	let edadIngresada;
	//tomo la edad  
	edadIngresada = document.getElementById("txtIdEdad").value;
	edadIngresada = parseInt(edadIngresada);

	//doble ampersand && AND operador logico de intercepcion - 
	//con rango numerico consecutivo usamos &&

	if(edadIngresada >= 13 && edadIngresada <= 17){
		alert("es adolecente");
	}
	
	// cond1 cond2 AND &&
	//   V     V    V
	//   V     F    F
	//   F     V    F
	//   F     F    F

}//FIN DE LA FUNCIÓN