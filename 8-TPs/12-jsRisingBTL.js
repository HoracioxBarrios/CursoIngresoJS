/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso() 
{
 	//definicion de variables
 	let edad;
	let sexo;
	let estadoCivil;
	let sueldoBruto;
	let numeroDeLegajo;
	let nacionalidad;
	let noEsNumero; // uso la funcion isNaN para corroborar si no es numero, (para validar)


	//A.Edad, entre 18 y 90 años inclusive.
	edad = parseInt(prompt("ingrese Edad entre 18 y 90 inclusive"));
	noEsNumero = isNaN(edad);
	

	while(edad < 18 || edad > 90 || noEsNumero){
		edad = parseInt(prompt("incorrecto! - ingrese Edad entre 18 y 90 inclusive"));
		noEsNumero = isNaN(edad);
	}
	
	
	//B.Sexo, “M” para masculino y “F” para femenino
	sexo = prompt("Ingrese sexo M 'masculino'- F 'Femenino ");
	sexo = sexo.toLocaleUpperCase();

	while(sexo != "M" && sexo != "F"){
		sexo = prompt("incorrecto!   Ingrese sexo M 'masculino'- F 'Femenino ");
		sexo = sexo.toLocaleUpperCase();
	}
	
	//C.Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
	estadoCivil = prompt("ingrese estado civil 1-soltero 2-casado 3-divorciado 4-viudo");
	estadoCivil = parseInt(estadoCivil);
	noEsNumero = isNaN(estadoCivil);

	while( estadoCivil <= 0 || estadoCivil > 4 || noEsNumero){
		estadoCivil = prompt("Incorrecto! - ingrese estado civil 1-soltero 2-casado 3-divorciado 4-viudo");
		estadoCivil = parseInt(estadoCivil);
		noEsNumero = isNaN(estadoCivil);
		
	}
	switch(estadoCivil){
		case 1:
			estadoCivil = "Soltero";
			break;
		case 2:
			estadoCivil = "Casado";
			break;
		case 3:
			estadoCivil = "divorciado";
			break;
		case 4:
			estadoCivil = "Viudo";
			break;
	}
	console.log(estadoCivil);
	

	//D.	Sueldo bruto, no menor a 8000.
	sueldoBruto = parseInt(prompt("ingrese Sueldo. minimo: 8000 $"));
	noEsNumero = isNaN(sueldoBruto);

	while(sueldoBruto < 8000 || noEsNumero){
		sueldoBruto = parseInt(prompt("Incorrecto! - ingrese Sueldo. minimo: 8000 $"));
		noEsNumero = isNaN(sueldoBruto);
	}
	
	//E.Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
	numeroDeLegajo = parseInt(prompt("ingrese Numero de Legajo"));
	noEsNumero = isNaN(numeroDeLegajo);

	while(numeroDeLegajo < 1000 || numeroDeLegajo > 9999 || noEsNumero){
		numeroDeLegajo = parseInt(prompt("Incorrecto! ingrese Numero de Legajo"));
		noEsNumero = isNaN(numeroDeLegajo);
	}

	//F.Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
	nacionalidad = prompt("ingrese nacionalidad: “A” para argentinos, “E” para extranjeros, “N” para nacionalizados");
	nacionalidad = nacionalidad.toLocaleUpperCase();

	while(nacionalidad != "A" && nacionalidad != "E" && nacionalidad != "N"){
		nacionalidad = prompt("Incorrecto! -ingrese nacionalidad: “A” para argentinos, “E” para extranjeros, “N” para nacionalizados");
		nacionalidad = nacionalidad.toLocaleUpperCase();
	}

	document.getElementById("txtIdEdad").value = edad;
	document.getElementById("txtIdSexo").value = sexo;
	document.getElementById("txtIdEstadoCivil").value = estadoCivil;
	document.getElementById("txtIdSueldo").value = sueldoBruto;
	document.getElementById("txtIdLegajo").value = numeroDeLegajo;
	document.getElementById("txtIdNacionalidad").value = nacionalidad;

	}


	
		
		
	




