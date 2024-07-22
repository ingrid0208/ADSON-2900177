/**
 * funcion calcular el pago total 
 * autor: ingrid medina 
 * fecha: 3 de abril del 2024
*/
let diaTrabajados;
let valorDias;
const SueldoExp = function  (pdiasT, pvalorD){
    diaTrabajados = pdiasT;
    valorDias = pvalorD;

    let salario;
    let salud;
    let pension;
    let arl;
    let transporte;
    let retencion;
    let salarioM = 1300000;
    let totalS;

    salario = diaTrabajados * valorDias;
    salud = salario * 0.12;
    pension = salario * 0.16;
    arl = salario * 0.052;
    if(salario<2*salarioM){
        transporte = 114000;
    }else{
        transporte=0;
    }
    if(salario > 4*salarioM){
        retencion = 0.04;
    }else{
        retencion = 0;
    }
    totalS = (salario+transporte)-(salud+arl+pension)
    
    return "El pago inicial de la persona es de: " + salario+".\n"+
           "la salud es del "+salud+"%.\n"+
           "la pensión es del "+pension+"%. \n"+
           "El ARL es del "+arl+"%.\n"+
           "El subsidio de trasnporte es de: "+transporte+".\n"+
           "El porcentaje de retencion es de "+retencion+ "%. \n"+
           "El Sueldo Total a Pagar es de: "+ totalS
}
function Sueldo (pdiasT, pvalorD){
    diaTrabajados = pdiasT;
    valorDias = pvalorD;

    let salario;
    let salud;
    let pension;
    let arl;
    let transporte;
    let retencion;
    let salarioM = 1300000;
    let totalS;

    salario = diaTrabajados * valorDias;
    salud = salario * 0.12;
    pension = salario * 0.16;
    arl = salario * 0.052;
    if(salario<2*salarioM){
        transporte = 114000;
    }else{
        transporte=0;
    }
    if(salario > 4*salarioM){
        retencion = 0.04;
    }else{
        retencion = 0;
    }
    totalS = (salario+transporte)-(salud+arl+pension)
    
    return "El pago inicial de la persona es de: " + salario+".\n"+
           "la salud es del "+salud+"%.\n"+
           "la pensión es del "+pension+"%. \n"+
           "El ARL es del "+arl+"%.\n"+
           "El subsidio de trasnporte es de: "+transporte+".\n"+
           "El porcentaje de retencion es de "+retencion+ "%. \n"+
           "El Sueldo Total a Pagar es de: "+ totalS
}