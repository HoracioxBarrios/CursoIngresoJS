/******************************************************************************
Ejercicio 2:

Apellido:Barrios
Nombre: Horacio
Comisión: F
Tutor: Romina

2) De una cantidad indeterminada de ventas de una tienda electrónica, se ingresa y valida lo siguiente:

Nombre del cliente
Monto
Tipo de producto (“TELEFONO”, “TABLET”, “TV”)

 Informar:
 
A) Cantidad de ventas y monto total vendido.
B) Porcentaje de ventas de cada uno de los tipos de productos.
C) Producto que más y menos se vendió.

ACLARACIÓN: Para las ventas de TELEFONO, se aplicará un impuesto del 15%.

En los tres ejercicios, se deberá pedir los datos por prompt y mostrar la información por document.write().

*******************************************************************************/

function mostrar(){
    let nombre;
    let monto;
    let tipoProducto;
    let respuesta;
    let contadorVentas;
    let acumMonto;
    let contadorTelefonos;
    let contadorTablets;
    let contadorTv;
    let porcentajeTelefonos;
    let porcentajeTablets;
    let porcentajeTv;
    let productoMasVendido;
    let impuesto;
    


    respuesta = true;
    contadorVentas = 0;
    acumMonto = 0;
    contadorTelefonos = 0;
    contadorTablets = 0;
    contadorTv = 0;
    impuesto = 0.15;


    while(respuesta == true){

        nombre = prompt("Ingrese nombre");

        do{
            monto = prompt("Ingrese monto");
            monto = parseInt(monto);
        }while(monto < 0);

        do{
            tipoProducto = prompt("Ingrese tipo de producto");
        }while(tipoProducto != "TELEFONO" && tipoProducto != "TABLET" && tipoProducto != "TV");

       

        switch(tipoProducto){
            case "TELEFONO":
                impuesto = monto * impuesto;
                monto = monto + impuesto;
                contadorTelefonos ++;
                break;
            case "TABLET":
                impuesto = 0;
                contadorTablets ++;
                break;
            case "TV":
                impuesto = 0;
                contadorTv ++;
                break;
        }
        acumMonto = acumMonto + monto; //A

         respuesta = confirm("desea ingresar otro? ");
        contadorVentas ++; //A
    }//while


      //C) Producto que más y menos se vendió.
      if(contadorTelefonos > contadorTablets && contadorTelefonos > contadorTv){
        productoMasVendido = "TELEFONO";
    }else{
        if(contadorTablets > contadorTv){
            productoMasVendido = "TABLET";
        }else{
            productoMasVendido = "tv";
        }
    }

    //A) Cantidad de ventas y monto total vendido.
    document.write("Cantidad de ventas: " + contadorVentas + " Monto Total " + acumMonto + "</br>");
    
    //B) Porcentaje de ventas de cada uno de los tipos de productos.
    porcentajeTelefonos = (contadorTelefonos / contadorVentas) * 100;
    porcentajeTablets = (contadorTablets / contadorVentas) * 100;
    porcentajeTv = (contadorTv / contadorVentas) * 100;

    //B
    document.write("Porcentaje ventas: Telefono: " + porcentajeTelefonos + " Tablets " + porcentajeTablets
    + " Tv " + porcentajeTv);
    
    //C
    document.write("El producto mas vendido: " + productoMasVendido);

}//Fin Funcion
