/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	let numeroDividendo;
	let numeroDivisor;
	let resto;

	numeroDividendo = parseInt(document.getElementById("txtIdNumeroDividendo").value);
	numeroDivisor = parseInt(document.getElementById("txtIdNumeroDivisor").value);

	//operacion
	resto = numeroDividendo % numeroDivisor;

	alert("El resto es: "+ resto);

}
