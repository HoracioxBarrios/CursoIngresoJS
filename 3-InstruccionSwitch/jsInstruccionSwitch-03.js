/*Enunciado:
al seleccionar un mes informar.
si es Febrero: " Este mes no tiene más de 29 días."
si NO es Febrero: "Este mes tiene 30 o más días" */

function mostrar()
{
	
	let mes;

	mes = document.getElementById("txtIdMes").value;

	switch(mes){
		case "Febrero":
			alert("Este mes no tiene más de 29 días");
			break;
		default:
			alert("Este mes tiene 30 o más días");

	}
}//FIN DE LA FUNCIÓ

/*
Número	Mes	Duración
1	Enero	31 días
2	Febrero	28 días o 29 en año bisiesto
3	Marzo	31 días
4	Abril	30 días
5	Mayo	31 días
6	Junio	30 días
7	Julio	31 días
8	Agosto	31 días
9	Septiembre	30 días
10	Octubre	31 días
11	Noviembre	30 días
12	Diciembre	31 días
*/