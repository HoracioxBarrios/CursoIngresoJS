/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/

//revisar para mejorar
function mostrar(){
	let numeroIngresado;
	let acumulador;
	let contador;
	let respuesta;

	acumulador = 0;
	contador = 0;
	respuesta = true;//flag



	do{
		//pedimos el numero por prompt
		numeroIngresado = prompt("ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);

		acumulador = acumulador + numeroIngresado;
		
		contador = contador + 1;
		respuesta = confirm("ingresa otro numero?");
		
	}while(respuesta == true );
	promedio = acumulador / contador;

	//mostramos por Id la suma
	document.getElementById("txtIdSuma").value = acumulador;
	//mostramos por id el promedio
	document.getElementById("txtIdPromedio").value = promedio;


}
























/*
function mostrar()
{	
	let numeroIngresado;
	let acumulador;
	let contador;
	let respuesta; //variable flag
	let promedio;
	

	acumulador = 0;
	contador = 0;
	respuesta = "si"
	
	while(respuesta == "si"){
		numeroIngresado = parseInt(prompt("Ingrese un numero"));

		acumulador = acumulador + numeroIngresado;

		contador ++;
		respuesta = prompt("Quiere ingresar otro numero? si o no ")
		

	}
	promedio = acumulador / contador;

	//mostramos promedio
	document.getElementById("txtIdPromedio").value = promedio;
	//mostramos la suma de los numeros ingresados que guardamos en la variable acumulador
	document.getElementById("txtIdSuma").value = acumulador;
	

}//FIN DE LA FUNCIÓN*/