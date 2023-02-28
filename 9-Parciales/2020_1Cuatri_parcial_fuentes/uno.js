/*Enunciado:
Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total
*/


function mostrar()
{
	let tipoProducto;
	let precioProducto;
	let cantidadUnid;
	let marca;
	let fabricante;
	let contador;
	let flagPrecioMin;
	let precioMin;
	let cantidadUnidDelMinimo;
	let fabricanteDelMinimo;
	let cantUnidMaxima;
	let flagCantUnidMaxima;
	let acumPrecio;
	let contadorPrecio;
	let promedioPrecio;
	let contadorUnidJavones;

	contador = 0;
	flagPrecioMin = true;
	flagCantUnidMaxima = true;
	acumPrecio = 0;
	contadorPrecio = 0;
	contadorUnidJavones = 0;


	do{
		//tipo de producto
		tipoProducto = prompt("Ingrese tipo de producto. barbijo , jabon, o alcohol");
		tipoProducto = tipoProducto.toLowerCase();
		
		while(tipoProducto != "barbijo" && tipoProducto != "jabon" && tipoProducto != "alcohol"){
		tipoProducto = prompt("Incorrecto! Ingrese tipo de producto. barbijo , jabon, o alcohol");
		tipoProducto = tipoProducto.toLowerCase();
		}
		//precio del producto
		precioProducto = prompt("Ingrese precio del producto entre 100 y 300");
		precioProducto = parseFloat(precioProducto);
		while(precioProducto < 100 || precioProducto > 300){
			precioProducto = prompt("Incorrecto! - Ingrese precio entre 100 y 300");
			precioProducto = parseFloat(precioProducto);
		}
		//cant unidades
		cantidadUnid = prompt("Ingrese cantidad Unid minimo 1 - maximo 1000");
		cantidadUnid = parseInt(cantidadUnid);
		while(cantidadUnid <= 0 || cantidadUnid > 1000){
			cantidadUnid = prompt("Incorrecto! - Ingrese cantidad Unid minimo 1 - maximo 1000");
			cantidadUnid = parseInt(cantidadUnid);
		}
		// marca
		marca = prompt("Ingrese la marca");
		//fabricante
		fabricante = prompt("Ingrese fabricante;");

		if(tipoProducto == "alcohol"){//a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
			if(flagPrecioMin = true){
				precioMin = precioProducto;
				cantidadUnidDelMinimo = cantidadUnid;
				fabricanteDelMinimo = fabricante;
				flagPrecioMin = false;
			}else{
				if(precioProducto < precioMin){
					precioMin = precioProducto;
					cantidadUnidDelMinimo = cantidadUnid;
					fabricanteDelMinimo = fabricante;
				}
			}
		}
		//b) Del tipo con mas unidades, el promedio por compra
		if(flagCantUnidMaxima == true){
			cantUnidMaxima = cantidadUnid;
			acumPrecio = acumPrecio + precioProducto;
			contadorPrecio ++;
			flagCantUnidMaxima == false;
		}else {
			if(cantidadUnid > cantUnidMaxima){
				cantUnidMaxima = cantidadUnid;
				acumPrecio = acumPrecio + precioProducto;
				contadorPrecio ++;
			}
		}

		if(tipoProducto == "jabon"){
			contadorUnidJavones ++;
		}
		contador ++;
	}while(contador < 5);

	promedioPrecio = acumPrecio / contadorPrecio; 

	//corroborar y mostrar

}
	
