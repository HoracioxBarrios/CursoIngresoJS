/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
 

 */
/*
function CalcularPrecio() {
  let precioLamparitas = 35;
  let cantidadLamp;
  let marcaLamp;
  let importeBruto;
  let descuento;
  let importeConDescuento;
  let impuestoIibb;
  let importeConAumento;
  debugger
  // toma por Id - cantidad de lamparas
  cantidadLamp = document.getElementById("txtIdCantidad").value;
  cantidadLamp = parseInt(cantidadLamp);

  // toma por Id de marca lamparas
  marcaLamp = document.getElementById("Marca").value;

  // suma de precios  c/u lamparas  35 $
  importeBruto = precioLamparitas * cantidadLamp;

  if (cantidadLamp > 5) {
    // Punto A -Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%.
    // aplico 50% de descuento
    descuento = (importeBruto * 50) / 100;
  } else if (cantidadLamp == 5) {
    // Punto B -Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
    if (marcaLamp == "ArgentinaLuz") {
      // aplico 40% de descuento
      descuento = (importeBruto * 40) / 100;
    } else {
      // aplico 30% de descuento
      descuento = (importeBruto * 30) / 100;
    }
  } else if (cantidadLamp == 4) {
    // Punto C -Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
    if (marcaLamp == "ArgentinaLuz" || marcaLamp == "FelipeLamparas") {
      // aplico 25% de descuento
      descuento = (importeBruto * 25) / 100;
    } else {
      // aplico 20% de descuento
      descuento = (importeBruto * 20) / 100;
    }
  } else if (cantidadLamp == 3) {
    // Punto D - Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
    if (marcaLamp == "ArgentinaLuz") {
      // aplico 15% de descuento
      descuento = (importeBruto * 15) / 100;
    } else if (marcaLamp == "FelipeLamparas") {
      // aplico 10% de descuento
      descuento = (importeBruto * 10) / 100;
    } else if ( cantidadLamp < 3){
      // aplico 5% de descuento
      descuento = (importeBruto * 5) / 100;
    }
  }else if (cantidadLamp < 3){
    descuento = 0;
  }
  importeConDescuento = importeBruto - descuento;

  // evaluo si el importe con descuento supera 120$
  if (importeConDescuento > 120) {
    // Punto E- Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje: ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó.
    // calculo el IIBB 10%
    impuestoIibb = (importeConDescuento * 10) / 100;
    // aplico IIBB de aumento por ser mayor a 120 el monto a pagar
    importeConAumento = importeConDescuento + impuestoIibb;
    // importeFinal = importeConAumento + impuesto IIBB
    document.getElementById("txtIdprecioDescuento").value =
      importeConAumento.toFixed(2);
    alert("”Usted pago " + impuestoIibb + " $ " + "como Impuesto IIBB ");
  } else {
    // si no supera los 120 $
    document.getElementById("txtIdprecioDescuento").value =
      importeConDescuento.toFixed(2);
  }
}
*/


//Usando Switch
function CalcularPrecio() {
  let precioLamparitas = 35;
  let cantidadLamparas;
  let marcaDeLamparas;
  let importeBruto;
  let descuento;
  let importeConDescuento;
  let impuestoIibb;
  let importeConAumento;

  // tomamos los datos por Id
  cantidadLamparas = document.getElementById("txtIdCantidad").value;
  cantidadLamparas = parseInt(cantidadLamparas);

  marcaDeLamparas = document.getElementById("Marca").value;

  importeBruto = precioLamparitas * cantidadLamparas;

  switch (cantidadLamparas) {
    case 1:
    case 2:
      descuento = 0;
      break;
    case 3:
      if (marcaDeLamparas == "ArgentinaLuz") {
        descuento = (importeBruto * 15) / 100;
      }
      else if (marcaDeLamparas == "FelipeLamparas") {
        descuento = (importeBruto * 10) / 100;
      }
      else {
        descuento = (importeBruto * 5) / 100;
      }
      break;
    case 4:
      if (marcaDeLamparas == "ArgentinaLuz" || marcaDeLamparas == "FelipeLamparas") {
        descuento = (importeBruto * 25) / 100;
      }
      else {
        descuento = (importeBruto * 20) / 100;
      }
      break
    case 5:
      if (marcaDeLamparas == "ArgentinaLuz") {
        descuento = (importeBruto * 40) / 100;
      }
      else {
        descuento = (importeBruto * 30) / 100;
      }
      break;
    default:
      descuento = (importeBruto * 50) / 100;

  }
  importeConDescuento = importeBruto - descuento;
  if (importeConDescuento > 120) {
    impuestoIibb = (importeConDescuento * 10) / 100;
    importeConAumento = importeConDescuento + impuestoIibb;
    document.getElementById("txtIdprecioDescuento").value = importeConAumento;
    alert("Usted pago: " + impuestoIibb + "$  de IIBB");
  }
  else {
    document.getElementById("txtIdprecioDescuento").value = importeConDescuento;
  }


}



