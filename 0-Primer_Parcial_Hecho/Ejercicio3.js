
/*
Ejercicio 3:

Apellido: Barrios
Nombre: Horacio
Comisión: F
Tutor:

"La carnicería barrial ""Paul Mc Carne"" quiere crear su propia página web para poder realizar ventas a domicilio. Para esto nos piden hacer un programa para que los clientes realicen compras y la carnicería gestione los pedidos con eficiencia.

Lista de precios
- Asado: $2500 x Kg
- Vacio: $2700 x Kg
- Achuras: $ 950 x Kg
- Pollo: $615 x Kg

Se le pide al usuario agregar productos a su ""carrito"" hasta que el desee: 

· Productos (Asado, Vacío, Achuras, Pollo)
· Cantidad de kilos. (No puede ser negativo o mayor a 20 por stock)
· País del cual proviene (Argentina, Italia, Japón, Uruguay)

Aclaraciones:
- Si compro achuras, se agrega un 15%  porque están escaseando en el país.
- Si el producto no proviene de la producción interna del país se le cobra un 20% de interés sobre el precio
bruto de ese producto
- Si la cantidad de kilos total supera los 10 Kg se debe cobrar un interés del 25% Sobre el precio bruto.
- Si compró todos los items de la lista (Asado, vacio, achuras y pollo), el cliente recibira un 10% de descuento.

Se le informa: 
A) Producto más requerido (Sin importar su peso).
B) Porcentaje de cortes de carne (Asado, Vacío, Pollo) solicitado sobre el total de compras.
C) Promedio de achuras sobre el total de kilos de todos los productos.
D) Cuánto pagará el cliente incluyendo descuentos e intereses.
"

*/

function mostrar(){
    let producto;
    let cantKilos;
    let paisProveedor;
    let precioAsado;
    let precioVacio;
    let precioAchuras;
    let precioPollo;
    let respuesta;
    let precioDeCompra;
    let porcentajeImportacion;
    let precioImportacion;
    let porcentajePorEscasez;
    let precioConAumentoPorEzcacez;
    let porcentajeAumentoDiezKilos;
    let precioAumentoMayorDizKilos;
    let productoMasRequerido;
    let procentajeCorteAsado;
    let procentajeCorteVacio;
    let procentajeCorteAchuras;
    let procentajeCortePollo;
    let contadorAsado;
    let contadorVacio;
    let contadorAchuras;
    let contadorPollo;
    let contadorComprasGenerales;
    let acumKilosAchura;
    let acumuladorKilosGenerales;
    let promedioKilosAchura;
    let descuento;
    let precioFinal;

    precioAsado = 2500;
    precioVacio = 2700;
    precioAchuras = 950;
    precioPollo = 615;
    respuesta = true;
    contadorComprasGenerales = 0;
    contadorAsado = 0;
    contadorVacio = 0;
    contadorAchuras = 0;
    contadorPollo = 0;
    acumKilosAchura = 0;
    acumuladorKilosGenerales = 0;


    while(respuesta == true){

        //· Productos (Asado, Vacío, Achuras, Pollo)
        do{
            producto = prompt("ingrese tipo de producto");
        }while(producto != "Asado" && producto != "Vacio" && producto != "Achuras" && producto != "Pollo");

        //· Cantidad de kilos. (No puede ser negativo o mayor a 20 por stock)
        do{
            cantKilos = prompt("Ingrese cantidad de kilos");
            cantKilos = parseInt(cantKilos);
        }while(cantKilos <= 0 || cantKilos > 20);

        //· País del cual proviene (Argentina, Italia, Japón, Uruguay)
        do{
            paisProveedor = prompt("Ingrese pais proveedor");
        }while(paisProveedor != "Argentina" && paisProveedor != "Italia"
        && paisProveedor!= "Japón" && paisProveedor!= "Uruguay");

        //*********************** Procesos ***************************/
        if(paisProveedor == "Argentina"){
            porcentajeImportacion = 0;
        }else{
            porcentajeImportacion = 0.20;
        }

        if(cantKilos < 10){
            porcentajeAumentoDiezKilos = 0;
        }else {
            porcentajeAumentoDiezKilos = 0.25;
        }

        if(producto == "Achuras"){
            porcentajePorEscasez = 0.15;
        }else {
            porcentajePorEscasez = 0;
        }

        switch(producto){
            case "Asado":
                precioDeCompra = precioAsado * cantKilos; //2500 si es 1 kilo
                
                precioConAumentoPorEzcacez = precioDeCompra * porcentajePorEscasez;// no se calcula en este enunciado con el asado sino con las achuras
                precioImportacion = precioDeCompra * porcentajeImportacion; 
                precioAumentoMayorDizKilos = precioDeCompra * porcentajeAumentoDiezKilos;
                contadorAsado ++;
                break;
            case "Vacio":
                precioDeCompra = precioVacio * cantKilos;
                
                precioConAumentoPorEzcacez = precioDeCompra * porcentajePorEscasez; // no se calcula en este enunciado con el asado sino con las achuras
                precioImportacion = precioDeCompra * porcentajeImportacion; 
                precioAumentoMayorDizKilos = precioDeCompra * porcentajeAumentoDiezKilos; 
                contadorVacio ++;
                break;
            case "Achuras":
                precioDeCompra = precioAchuras * cantKilos;
                precioConAumentoPorEzcacez = precioDeCompra * porcentajePorEscasez; //950 * 0.15 = 100
                precioImportacion = precioDeCompra * porcentajeImportacion; //950 * 0.20 = 150  si es importado
                precioAumentoMayorDizKilos = precioDeCompra * porcentajeAumentoDiezKilos; // 950 * 0.25 = 237.5 si supera los 10 kilos
                contadorAchuras ++;
                acumKilosAchura = acumKilosAchura + cantKilos;
                break;
            case "Pollo":
                precioDeCompra = precioPollo * cantKilos;
                
                precioConAumentoPorEzcacez = precioDeCompra * porcentajePorEscasez; // no se calcula en este enunciado con el asado sino con las achuras
                precioImportacion = precioDeCompra * porcentajeImportacion; 
                precioAumentoMayorDizKilos = precioDeCompra * porcentajeAumentoDiezKilos; 
                contadorPollo ++;
                break;
        }

        switch(paisProveedor) {
            case "Argentina":
                break;
            case "Italia":
                break;
            case "Japón":
                break;
            case "Uruguay":
                break;
        }


        respuesta = confirm("Desea añadir otro producto?");

        acumuladorKilosGenerales = acumuladorKilosGenerales + cantKilos;
        contadorComprasGenerales ++;

    }//while

    //A) Producto más requerido (Sin importar su peso). // depende del contador de cada producto
    if(contadorAsado > contadorVacio && contadorAsado > contadorAchuras && contadorAsado > contadorPollo){
        productoMasRequerido = "Asado";
    }else{
        if(contadorVacio > contadorAchuras && contadorVacio > contadorPollo){
            productoMasRequerido = "Vacio";
        }else{
            if(contadorAchuras > contadorPollo){
                productoMasRequerido = "Achuras";
            }else{
                productoMasRequerido = "Pollo";
            }
        }
    }
    //B) Porcentaje de cortes de carne (Asado, Vacío, Pollo) solicitado sobre el total de compras.
    // porcentaje  
    procentajeCorteAsado = (contadorAsado * 100) / contadorComprasGenerales;// supongamos contador = 4 * 100 = 400 /4 = 100% el procentaje de compra de asado
    procentajeCorteVacio = (contadorVacio * 100) / contadorComprasGenerales;
    procentajeCorteAchuras = (contadorAchuras * 100) / contadorComprasGenerales;
    procentajeCortePollo = (contadorPollo * 100) / contadorComprasGenerales;

    //C) Promedio de achuras sobre el total de kilos de todos los productos.
    //promedio
    if(contadorAchuras > 0){
        promedioKilosAchura = acumuladorKilosGenerales / acumKilosAchura; // supongamos: 20kilos genrales / 5 kilos achura =  el promedio es 4
    }else {
        promedioKilosAchura = 0;
    }
    

    //si compro todo descuento del 10& 
    if(contadorAsado > 0 && contadorVacio > 0 && contadorAchuras > 0 && contadorPollo > 0){
        descuento = 0.10;
    }else{
        descuento = 0;
    } 
    precioFinal = precioDeCompra + precioConAumentoPorEzcacez + precioImportacion + precioAumentoMayorDizKilos;  
    //D) Cuánto pagará el cliente incluyendo descuentos e intereses.
    precioFinal = precioFinal - descuento;

    // muestro la salida:
    //A) Producto más requerido (Sin importar su peso).
    document.write("El producto mas requerido: " + productoMasRequerido + "</br>");
    //B) Porcentaje de cortes de carne (Asado, Vacío, Pollo) solicitado sobre el total de compras.
    document.write("Porcentaje de cortes: Asado" + procentajeCorteAsado + " Vacio" + procentajeCorteVacio 
    + " achuras " + procentajeCorteAchuras + " Pollo" + procentajeCortePollo + "</br>");
    //C) Promedio de achuras sobre el total de kilos de todos los productos.
    document.write("Promedio de achuras " + promedioKilosAchura);
    //D) Cuánto pagará el cliente incluyendo descuentos e intereses.
    document.write("El precio final incluyendo aunmentos y descuento: " + precioFinal);

}//fin funcion

















/* // hecho en clase especial .sabado 4/03/2023 compañero Tomi Arno y profesor david
Ejercicio 3:

Apellido:
Nombre: Tomi Arno
Comisión:
Tutor:

"La carnicería barrial ""Paul Mc Carne"" quiere crear su propia página web para poder realizar ventas a domicilio. Para esto nos piden hacer un programa para que los clientes realicen compras y la carnicería gestione los pedidos con eficiencia.

Lista de precios
- Asado: $2500 x Kg
- Vacio: $2700 x Kg
- Achuras: $ 950 x Kg
- Pollo: $615 x Kg

Se le pide al usuario agregar productos a su ""carrito"" hasta que el desee: 

· Productos (Asado, Vacío, Achuras, Pollo)
· Cantidad de kilos. (No puede ser negativo o mayor a 20 por stock)
· País del cual proviene (Argentina, Italia, Japón, Uruguay)

Aclaraciones:
- Si compro achuras, se agrega un 15%  porque están escaseando en el país. x
- Si el producto no proviene de la producción interna del país se le cobra un 20% de interés sobre el precio
bruto de ese producto x
- Si la cantidad de kilos total supera los 10 Kg se debe cobrar un interés del 25% Sobre el precio bruto. x
- Si compró todos los items de la lista (Asado, vacio, achuras y pollo), el cliente recibira un 10% de descuento.

Se le informa: 




"
*/
/*
function mostrar() {
    const PRECIO_ASADO = 2500;
    const PRECIO_VACIO = 2700;
    const PRECIO_ACHURAS = 950;
    const PRECIO_POLLO = 615;

    let banderaDelComienzo = true;
    let tipoProducto;
    let cantidadKilos;
    let paisOrigen;

    let contadorComprasAsado = 0;
    let contadorComprasVacio = 0;
    let contadorComprasAchuras = 0;
    let contadorComprasPollo = 0;

    let porcentajeAumentoAchuras = 0.15;
    let porcentajeAumentoImportacion = 0.2;
    let precioCompra;

    let acumuladorKilos = 0;
    let acumuladorKilosAchuras = 0;

    let aumentoImportacion;

    let aumentoDiezKilos;
    let porcentajeAumentoDiezKilos = 0.25;

    let productoMasRequerido;

    let promedioKilosAchura;

    let contadorComprasTotales = 0;

    let descuentoComproTodo = 0.9;

    while (banderaDelComienzo == true) {
        //

        do {
            tipoProducto = prompt("Ingrese un tipo de producto");
        } while (
            tipoProducto != "asado" &&
            tipoProducto != "vacio" &&
            tipoProducto != "achuras" &&
            tipoProducto != "pollo"
        );
        //
        do {
            cantidadKilos = prompt("Ingrese la cantidad de kilos");
        } while (cantidadKilos < 0 || cantidadKilos > 20);
        //
        do {
            paisOrigen = prompt("Ingrese un pais de origen");
        } while (
            paisOrigen != "argentina" &&
            paisOrigen != "italia" &&
            paisOrigen != "japon" &&
            paisOrigen != "uruguay"
        );

        /////////Procesos////////////
        if (paisOrigen == "argentina") {
            porcentajeAumentoImportacion = 0;
        }

        if (cantidadKilos < 10) {
            porcentajeAumentoDiezKilos = 0;
        }

        switch (tipoProducto) {
            case "asado":
                precioCompra = PRECIO_ASADO * cantidadKilos;
                aumentoImportacion = precioCompra * porcentajeAumentoImportacion;
                aumentoDiezKilos = precioCompra * porcentajeAumentoDiezKilos;
                contadorComprasAsado++;
                break;
            case "vacio":
                precioCompra = PRECIO_VACIO * cantidadKilos;
                aumentoImportacion = precioCompra * porcentajeAumentoImportacion;
                aumentoDiezKilos = precioCompra * porcentajeAumentoDiezKilos;
                contadorComprasVacio++;
                break;
            case "achuras":
                precioCompra = PRECIO_ACHURAS * cantidadKilos;

                aumentoImportacion = precioCompra * porcentajeAumentoImportacion;
                aumentoDiezKilos = precioCompra * porcentajeAumentoDiezKilos;

                precioCompra = precioCompra * porcentajeAumentoAchuras;
                contadorComprasAchuras++;
                acumuladorKilosAchuras = acumuladorKilosAchuras + cantidadKilos;
                break;
            case "pollo":
                precioCompra = PRECIO_POLLO * cantidadKilos;
                aumentoImportacion = precioCompra * porcentajeAumentoImportacion;
                aumentoDiezKilos = precioCompra * porcentajeAumentoDiezKilos;
                contadorComprasPollo++;
                break;
        }

        acumuladorKilos += cantidadKilos;

        precioCompra += aumentoImportacion + aumentoDiezKilos; 

        precioComprasTotales += precioCompra;

        contadorComprasTotales++;

        banderaDelComienzo = confirm("Continuar");
    }

    // A) Producto más requerido (Sin importar su peso).
    if (
        contadorComprasAchuras > contadorComprasAsado &&
        contadorComprasAchuras > contadorComprasVacio &&
        contadorComprasAchuras > contadorComprasPollo
    ) {
        productoMasRequerido = "Achuras";
    } else if (
        contadorComprasVacio > contadorComprasAsado &&
        contadorComprasVacio > contadorComprasPollo
    ) {
        productoMasRequerido = "Vacio";
    } else if (contadorComprasAsado > contadorComprasPollo) {
        productoMasRequerido = "Asado";
    } else {
        productoMasRequerido = "Pollo";
    }
    //   C) Promedio de achuras sobre el total de kilos de todos los productos.
    promedioKilosAchura = acumuladorKilos / acumuladorKilosAchuras;
    //   B) Porcentaje de cortes de carne (Asado, Vacío, Pollo) solicitado sobre el total de compras.
    porcentajeKilosAsado = contadorComprasAsado * 100 / contadorComprasTotales;
    porcentajeKilosVacio = contadorComprasVacio * 100 / contadorComprasTotales;
    porcentajeKilosPollo = contadorComprasPollo * 100 / contadorComprasTotales;
    porcentajeKilosAchuras = contadorComprasAchuras * 100 / contadorComprasTotales;

    //   D) Cuánto pagará el cliente incluyendo descuentos e intereses.
    if (
        contadorComprasAchuras > 0 &&
        contadorComprasAsado > 0 &&
        contadorComprasVacio > 0 &&
        contadorComprasPollo > 0
    ) {
        precioComprasTotales = precioComprasTotales * descuentoComproTodo;
    }
} //FIN DE LA FUNCIÓN
*/