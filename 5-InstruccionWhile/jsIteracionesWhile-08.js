/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
//revisar para mejorar
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





}
