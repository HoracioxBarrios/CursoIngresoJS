/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio (){
 	let valorLamparas = 35;
    let cantidadLamp;
    let marcaLamp;
    let sumaPrecioLamparas;
    let cincuentaDescuento;
    let cuarentaDescuento;
    let treintaDescuento;
    let veintiCincoDescuento;
    let VeinteDescuento;
    let quinceDescuento;
    let diezDescuento;
    let cincoDescuento;
    let importeConDescuento;
    let impuestoIibb;
    let importeConAumento;
    

    //toma por Id - cantidad de lamparas
    cantidadLamp = document.getElementById("txtIdCantidad").value;
    cantidadLamp = parseInt(cantidadLamp);

    // toma por Id de marca lamparas
    marcaLamp = document.getElementById("Marca").value;

    //suma de precios  c/u lamparas  35 $ 
    sumaPrecioLamparas = cantidadLamp * valorLamparas;

    //tipos de descuento 
    cincuentaDescuento = (sumaPrecioLamparas *50)/100;
    cuarentaDescuento = (sumaPrecioLamparas * 40)/100;
    treintaDescuento = (sumaPrecioLamparas * 30)/100;
    veintiCincoDescuento = (sumaPrecioLamparas *25)/100;
    VeinteDescuento = (sumaPrecioLamparas * 20)/100;
    quinceDescuento = (sumaPrecioLamparas *15)/100;
    diezDescuento = (sumaPrecioLamparas*10)/100;
    cincoDescuento = (sumaPrecioLamparas * 5 )/100;
    
    if(cantidadLamp >= 6){                                                          // Punto A -Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
        //aplico 50% de descuento
        importeConDescuento = sumaPrecioLamparas - cincuentaDescuento;
        //alert("cant comprada "+ cantidadLamp + " Importe c/dec del 50% " );
        

    }else if(cantidadLamp == 5){                                                    //Punto B -Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
        if(marcaLamp == "ArgentinaLuz"){
            // aplico 40% de descuento
            importeConDescuento = sumaPrecioLamparas - cuarentaDescuento;
            //alert("cant comprada "+ cantidadLamp + " Importe c/dec del 40% " );
            

        }else {
            // aplico 30% de descuento
            importeConDescuento = sumaPrecioLamparas - treintaDescuento;
            //alert("cant comprada "+ cantidadLamp + " Importe c/dec del 30% " );
           
        }
    }else if(cantidadLamp == 4){                                                      // Punto C -Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
        if(marcaLamp == "ArgentinaLuz" || marcaLamp == "FelipeLamparas"){
            //aplico 25% de descuento
            importeConDescuento = sumaPrecioLamparas - veintiCincoDescuento;
           // alert("cant comprada "+ cantidadLamp + " Importe c/dec del 25% " );
            

        }else {
            //aplico 20% de descuento
            importeConDescuento = sumaPrecioLamparas - VeinteDescuento;
           // alert("cant comprada "+ cantidadLamp + " Importe final c/dec del 20% ");
            
        }
    }else if(cantidadLamp == 3){                                                        //Punto D - Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
        if(marcaLamp == "ArgentinaLuz" ){
            //aplico 15% de descuento
            importeConDescuento = sumaPrecioLamparas - quinceDescuento;
            //alert("cant comprada "+ cantidadLamp + " Importe final c/dec del 15% ");
           

        }else if(marcaLamp == "FelipeLamparas"){
            //aplico 10% de descuento
            importeConDescuento = sumaPrecioLamparas - diezDescuento;
            //alert("cant comprada "+ cantidadLamp + " Importe final c/dec del 10% ");
           

        }else {
            //aplico 5% de descuento
            importeConDescuento = sumaPrecioLamparas - cincoDescuento;
            //alert("cant comprada "+ cantidadLamp + " Importe final c/dec del 5% " );
           
        }
    }
    
    //importeFinal = importeConDescuento;
    if(importeConDescuento > 120){                                                 //Punto E- Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje: ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
        //calculo el IIBB 10%
        impuestoIibb = (importeConDescuento *10)/100;
        //aplico IIBB de aumento por ser mayor a 120 el monto a pagar
        importeConAumento = importeConDescuento + impuestoIibb;
        //importeFinal = importeConAumento;
        document.getElementById("txtIdprecioDescuento").value = importeConAumento;
        alert("”Usted pago " + impuestoIibb + " $ " +  "como Impuesto IIBB ");
    }else {
        document.getElementById("txtIdprecioDescuento").value = importeConDescuento;
    }
    
   
    
}   
