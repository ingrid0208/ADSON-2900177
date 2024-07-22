/**
 * funcion imprimir el pago total de una persona 
 * autor: ingrid medina 
 * fecha: 3 de abril del 2024
*/
let diasTrabajados;
let valorDias;

function sueldos(pdiasTrabajados,pvalorDias){

    diasTrabajados = pdiasTrabajados;
    valorDias = pvalorDias;

    let pago;
    let salud;
    let pension;
    let arl;
    let descuento;
    let sueldoTotal;

    pago = diasTrabajados * valorDias;

    salud = pago * 0.12;
    pension = pago * 0.16;
    arl = pago * 0.052;
    descuento = salud + pension + arl;
    sueldoTotal = pago - descuento;

    return "Su pago: " + pago+".\n"+
           "salud: "+salud+" %.\n"+
           "pension: "+pension+" %. \n"+
           "arl: "+arl+" %.\n"+
           "descuento: "+descuento+".\n"+
           "sueldo Total: "+sueldoTotal;
}
const  sueldos = function (pdiasTrabajados,pvalorDias){

    diasTrabajados = pdiasTrabajados;
    valorDias = pvalorDias;

    let pago;
    let salud;
    let pension;
    let arl;
    let descuento;
    let sueldoTotal;

    pago = diasTrabajados * valorDias;

    salud = pago * 0.12;
    pension = pago * 0.16;
    arl = pago * 0.052;
    descuento = salud + pension + arl;
    sueldoTotal = pago - descuento;

    return "Su pago: " + pago+".\n"+
           "salud: "+salud+" %.\n"+
           "pension: "+pension+" %. \n"+
           "arl: "+arl+" %.\n"+
           "descuento: "+descuento+".\n"+
           "sueldo Total: "+sueldoTotal;
}