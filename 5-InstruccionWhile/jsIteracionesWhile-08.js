/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/

function mostrar(){
	let numeroIngresado;
	let positivos;
	let negativos;
	let pregunta;

	/*Nota: conviene inicializar en 0 estas dos variables?, ya que si no lo hiciera 
	al poner solo numeros positivos en en el input de producto indicará "undefined"*/
	positivos = 0;
	negativos = 0;
	

	do{
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);
		if(numeroIngresado > -1 ){
			positivos = positivos + numeroIngresado;
		}else { 
			if(negativos == 0){// aca no uso una flag, sino comparo si tiene el valor 0 inicializado
				negativos = numeroIngresado;
			}else{
				negativos = negativos * numeroIngresado;
			}

		}
		pregunta = confirm("Desea ingresar otro numero?");

	}while(pregunta == true);

	document.getElementById("txtIdSuma").value = positivos;

	document.getElementById("txtIdProducto").value = negativos;
}





/*
// para mejorar
function mostrar(){
	let numeroIngresado;
	let positivos;
	let negativos;
	let respuesta;
	let flag;

	respuesta = true;
	positivos = 0;
	negativos = 0;
	flag = true;

	do{
		numeroIngresado = parseInt(prompt("ingrese un numero"));
		if(numeroIngresado > -1){
			positivos += numeroIngresado;
			}
		else{
			if(flag){
				negativos = numeroIngresado;
				flag = false;
			}
			else{
				negativos = negativos * numeroIngresado;
			}
			
			
		}
		respuesta = confirm("desea ingresar otro numero???");
	}while(respuesta == true);

	document.getElementById("txtIdSuma").value = positivos;
	document.getElementById("txtIdProducto").value = negativos;





}*/
