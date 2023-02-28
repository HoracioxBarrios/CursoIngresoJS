/*Enunciado:
Bienvenidos.
Realizar el algoritmo que permita el ingreso por prompt 
de las notas (validar entre 0 y 10) , el sexo (validar el sexo “f” o “m”) 
de 5 alumnos, informar por alert:
a) El promedio de las notas totales.
b) La nota más baja y el sexo de esa persona.
c) La cantidad de varones que su nota haya sido mayor o igual a 6.*/
function mostrar()
{   
    let notaIngresada;
    let noEsNumero;
    let sexoIngresado;
    let contador;
    let acumuladorNotas;
    let promedio;
    let notaMinima;
    let sexoMinima;
    let flag;
    let contadorVarones;
    


    contador = 0;
    acumuladorNotas = 0;
    contadorVarones = 0;
    flag = true;
    

    do{
        notaIngresada = prompt("Ingrese nota, entre 0 y 10");
        notaIngresada = parseInt(notaIngresada);
        noEsNumero = isNaN(notaIngresada);// le paso la notaIngresada y compruebo si me ingresa string ,isNaN devuelve true
        

        while(notaIngresada < 0 || notaIngresada > 10 || noEsNumero){// valido
            notaIngresada = prompt("Nota Invalida! - Ingrese nota, entre 0 y 10");
            notaIngresada = parseInt(notaIngresada);
            noEsNumero = isNaN(notaIngresada);// compruevo aca tambien que no sea NaN
        }

        sexoIngresado = prompt("Ingrese sexo, f o m ");
        sexoIngresado = sexoIngresado.toLowerCase();
        while(sexoIngresado != "f" && sexoIngresado != "m"){//valido
            sexoIngresado = prompt("Ingrese sexo, f o m ");
            sexoIngresado = sexoIngresado.toLowerCase();
        }

        acumuladorNotas = acumuladorNotas + notaIngresada;

        //b) La nota más baja y el sexo de esa persona.
        if(flag){
            notaMinima = notaIngresada;
            sexoMinima = sexoIngresado;
            flag = false; // no olvidar!
        }else{
            if(notaMinima > notaIngresada){
                notaMinima = notaIngresada;
                sexoMinima = sexoIngresado;
            }
        }
    
        //c) La cantidad de varones que su nota haya sido mayor o igual a 6.*/
        if(sexoIngresado == "m" && notaIngresada >= 6){
            contadorVarones ++;
        }

        contador ++;
    }while(contador < 5);

    //a) El promedio de las notas totales.
    promedio = acumuladorNotas / contador;

    alert("El promedio de las notas totales: " + promedio + "\n"
    + "La nota mas baja: " + notaMinima + "  El sexo: " + sexoMinima + "\n"
    + "Cantidad de varones con nota mayor o igual a 6:   " + contadorVarones);
}   
