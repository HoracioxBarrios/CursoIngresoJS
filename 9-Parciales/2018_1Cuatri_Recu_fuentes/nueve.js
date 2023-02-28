/*Enunciado:
Bienvenidos.
Realizar el algoritmo que permita ingresar el nombre de un 
animal del zoológico, el peso el cual debe ser entre 1 y 1000 y
la temperatura del hábitat (entre -30 y 30) hasta que el usuario 
quiera e informar al terminar el ingreso por document.write:
a) La cantidad de temperaturas pares.
b) El nombre y temperatura del animal más pesado
c) La cantidad de animales que viven a menos de 0 grados.
d) El promedio del peso de todos los animales.
f) El peso máximo y el mínimo de todos los animales cuyas temperaturas sean bajo cero.

Testeo con los siguientes valores
(m=pepito;p = 50; t =-300(mal) ,-30(bien) )
(m=teem;p = 10; t =0 )
(m=llut;p = 150(mal), 15(bien); t =-13 )
(m=fpy;p = 45; t =-12 )
*/
function mostrar(){
    let nombreDelAnimal;
    let pesoIngresado;;
    let temperaturaHabitad;
    let respuesta;
    let ContadorTemperaturasPar;
    let pesoMaximo;
    let pesoMinimo;
    let flag;
    let nombreDelMasPesado;
    let temperaturaDelMasPesado;
    let contadorAnimCeroGrados;
    let acumPeso;
    let contador;
    let promedioPeso;
    let pesoMaxCero;
    let pesoMinCero;

    ContadorTemperaturasPar = 0;
    contadorAnimCeroGrados = 0;
    acumPeso = 0;
    contador = 0;
    flag = true;


    do{
        nombreDelAnimal = prompt("Ingrese nombre del animal");
        nombreDelAnimal = nombreDelAnimal.toLowerCase();
    
        pesoIngresado = prompt("Ingrese el peso del animal entre 0 y 1000");
        pesoIngresado = parseFloat(pesoIngresado);
        while(pesoIngresado < 0 || pesoIngresado > 1000){
            pesoIngresado = prompt("INCORRECTO! *Ingrese el peso del animal entre 0 y 1000");
            pesoIngresado = parseFloat(pesoIngresado);
            }
        
        temperaturaHabitad = prompt("Ingrese temperatura del habitad, entre -30 y 30")
        temperaturaHabitad = parseInt(temperaturaHabitad);
        while(temperaturaHabitad < -30 || temperaturaHabitad > 30){
            temperaturaHabitad = prompt("INCORRECTO! Ingrese temperatura del habitad, entre -30 y 30")
            temperaturaHabitad = parseInt(temperaturaHabitad);
        }

        if(temperaturaHabitad % 2 == 0){ //a) La cantidad de temperaturas pares.
            ContadorTemperaturasPar ++;
        }

        if(flag == true){// maximos y minimos
            pesoMaximo = pesoIngresado;
            pesoMinimo = pesoIngresado;
            nombreDelMasPesado = nombreDelAnimal;//b) El nombre y temperatura del animal más pesado
            temperaturaDelMasPesado = temperaturaHabitad;
            flag = false;
        }else {
            if(pesoIngresado > pesoMaximo){
                pesoMaximo = pesoIngresado;
                nombreDelMasPesado = nombreDelAnimal;
                temperaturaDelMasPesado = temperaturaHabitad;
            }
            if(pesoIngresado < pesoMinimo){
                pesoMinimo = pesoIngresado;
            }
        }

        
        if(temperaturaHabitad < 0){
            contadorAnimCeroGrados ++;//c) La cantidad de animales que viven a menos de 0 grados.
            pesoMaxCero = pesoMaximo;//f) El peso máximo y el mínimo de todos los animales cuyas temperaturas sean bajo cero.
            pesoMinCero = pesoMinimo;
        }

        //d) El promedio del peso de todos los animales.
        acumPeso = acumPeso + pesoIngresado;

        respuesta = confirm("Desea continuar ingresando?");

        contador ++;
        
    }while(respuesta == true);

    promedioPeso = acumPeso / contador;

    document.write("La cantidad de temperaturas pares" + ContadorTemperaturasPar + "</br>" 
    + "El nombre del mas pesado: " + nombreDelMasPesado + " Temperatura del habitad del mas pesado: " + temperaturaDelMasPesado + "</br>"
    + "La cantidad de animales que viven a menos de 0 grados: " + contadorAnimCeroGrados + "</br>"
    + "El promedio del peso de todos los animales: " + promedioPeso + "</br>"
    + "El peso maximo: " + pesoMaxCero + " Peso minimo: " + pesoMinCero + " De los que viven bajo cero grados");
}
