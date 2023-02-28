/*
Enunciado:
Bienvenidos.
Realizar el algoritmo que permita ingresar la marca del producto, el peso el 
cual debe ser entre 1 y 100 (validar),
la temperatura de almacenamiento(entre -30 y 30) hasta que el usuario 
quiera e informar al terminar el ingreso por document.write:
a) La cantidad de temperaturas pares.
b) La marca del producto más pesado
c) La cantidad de productos que se conservan a menos de 0 grados.
d) El promedio del peso de todos los productos.
f) El peso máximo y el mínimo.

Testeo con los siguientes valores
(m=pepito;p = 50; t =-300(mal) ,-30(bien) )
(m=teem;p = 10; t =0 )
(m=llut;p = 150(mal), 15(bien); t =-13 )
(m=fpy;p = 45; t =-12 )
Curso de ingreso UTN FRA*/
function mostrar(){

    let marca;
    let peso;
    let temperatura;
    let contadorTempPar;
    let pesoMax;
    let pesoMin;
    let MarcaProdMasPesado;
    let flag;
    let contadorProdMenosCeroGrados;
    let acumuladorPesoProd;
    let contadorProd;
    let promedioPeso;
    let respuesta;

    contadorTempPar = 0;
    contadorProdMenosCeroGrados = 0;
    acumuladorPesoProd = 0;
    contadorProd = 0;
    flag = true;

    do {

        // ingreso marca del producto
        marca = prompt("Ingrese marca");

        // ingreso peso del prod.
        peso = prompt("Ingrese peso del producto, entre 1 y 100 ");
        peso = parseFloat(peso);
        while(peso <= 0 || peso > 100){ //validacion 
            peso = prompt("Incorrecto! - Ingrese peso del producto, entre 1 y 100");
            peso = parseFloat(peso);
        }
        // ingreso temp.
        temperatura = prompt("Ingrese temperatura entre -30 y 30");
        temperatura = parseFloat(temperatura);
        while(temperatura < -30 || temperatura > 30){ //validacion
            temperatura = prompt("Incorrecto! - Ingrese temperatura, entre -30 y 30");
            temperatura = parseFloat(temperatura);
        }
        //suma de los pesos
        acumuladorPesoProd = acumuladorPesoProd + peso;

        //a) La cantidad de temperaturas pares.
        if (temperatura % 2 == 0) {
            contadorTempPar++;
        }

        if (flag) { //flag en primer momento true ,luego cambio a false asi no entra mas a este if
            pesoMax = peso; //f) El peso máximo y el mínimo.
            pesoMin = peso;
            MarcaProdMasPesado = marca; //marca del mas pesado
            flag = false;
        } else {
            if (peso > pesoMax) { // maximo
                pesoMax = peso;
                MarcaProdMasPesado = marca;//b) La marca del producto más pesado
            }
            if (peso < pesoMin) { // minimo
                pesoMin = peso;
            }
        }

        if (temperatura < 0) {//c) La cantidad de productos que se conservan a menos de 0 grados.
            contadorProdMenosCeroGrados ++;
        }

        respuesta = confirm("Desea ingresar otro producto?");

        contadorProd++;

    } while (respuesta);

    //calculo promedio
    promedioPeso = acumuladorPesoProd / contadorProd; //d) El promedio del peso de todos los productos.

    //muestro  los resultados
    alert(" La cantidad de temperaturas pares: " + contadorTempPar + "\n"
    + " La marca del producto más pesado: " + MarcaProdMasPesado + "\n"
    + " La cantidad de productos que se conservan a menos de 0 grados: " + contadorProdMenosCeroGrados + "\n"
    + " El promedio del peso de todos los productos: " + promedioPeso.toFixed(2) + " Kgs " + "\n"
    + " El peso máximo:  " + pesoMax + "   El peso minimo: " + pesoMin);
}
