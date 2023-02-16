/*
Enunciado:
al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días. */

function mostrar()
{
	
	let mes;

	mes = document.getElementById("txtIdMes").value;

	switch(mes){
		case "Febrero":
				alert("tiene 28 días");
				break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			alert("tiene 30 días.");
			break;
		default:
			alert("tiene 31 días");
	}
	



}//FIN DE LA FUNCIÓN
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