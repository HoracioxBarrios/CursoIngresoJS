/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750 "*/ 
function sumar()
{	
	let numeroUno;
	let numeroDos;
	let resultado;

	numeroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	numeroDos = parseInt(document.getElementById("txtIdNumeroDos").value);
	resultado = numeroUno + numeroDos;
	alert(resultado);
}

function restar()
{
	let numeroUno;
	let numeroDos;
	let resultado;
	
	numeroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	numeroDos = parseInt(document.getElementById("txtIdNumeroDos").value);
	resultado = numeroUno - numeroDos;
	alert(resultado);
}

function multiplicar()
{ 
	let numeroUno;
	let numeroDos;
	let resultado;
	
	numeroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	numeroDos = parseInt(document.getElementById("txtIdNumeroDos").value);
	resultado = numeroUno * numeroDos;
	alert(resultado);
}

function dividir()
{
	let numeroUno;
	let numeroDos;
	let resultado;
	
	numeroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	numeroDos = parseInt(document.getElementById("txtIdNumeroDos").value);
	resultado = numeroUno / numeroDos;
	alert(resultado);
}

