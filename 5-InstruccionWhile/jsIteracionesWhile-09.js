/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
let numeroIngresado;
let pregunta;
let numeroMaximo;
let numeroMinimo;
let flag;

flag = true;

do{
	numeroIngresado = prompt("ingrese un numero");
	numeroIngresado = parseInt(numeroIngresado);

	if(flag){// flag es true, hasta que cambie a false
		numeroMaximo = numeroIngresado;
		numeroMinimo = numeroIngresado;
		flag = false;
	}else {
		if(numeroIngresado > numeroMaximo){
			numeroMaximo = numeroIngresado;
		}
		if(numeroIngresado < numeroMinimo){
			numeroMinimo = numeroIngresado;
		}
	}

	pregunta = confirm("Desea ingresar otro numero?");

}while(pregunta == true);

document.getElementById("txtIdMaximo").value = numeroMaximo;

document.getElementById("txtIdMinimo").value = numeroMinimo;


}//FIN DE LA FUNCIÓN