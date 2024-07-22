/**
 * ejercicos realizar una nomina 
 * autor: ingrid medina 
 * fecha: 15 de mayo 
 */
 let nomina= [];
 let pagoNomina =[];
 let iteracion;
 let pago;
 let salarioM = 1300000;
 let subTransporte;
 let bonoN;
 let retencion;
 let reten;
 let pension;
 let arl;
 let salud;
 let salario;

 nomina=[
    {codigo:1, cedula: 1080291867, nombres: 'ingrid yulissa', apellidos: 'medina esquivel', edad: 17, estrato: 3, valorDia: 120000, diasTrabajados: 80},
    {codigo:2, cedula: 1077723426, nombres: 'brayan santiago', apellidos: 'guerrero mendez', edad: 17, estrato: 2, valorDia: 350000, diasTrabajados: 60},
    {codigo:3, cedula: 1077724121, nombres: 'camilo andres', apellidos: 'losada ramirez', edad: 17, estrato: 1, valorDia: 710000, diasTrabajados: 20},
    {codigo:4, cedula: 1075225114, nombres: 'yerson stiven', apellidos: 'rubiano', edad: 18, estrato: 1, valorDia: 43000, diasTrabajados: 30},
    {codigo:5, cedula: 1075793094, nombres: 'karol natalia', apellidos: 'osorio poveda', edad: 17, estrato: 1, valorDia: 410000, diasTrabajados: 70},
    {codigo:6, cedula: 1077029186, nombres: 'marcos', apellidos: 'rojas alvarez', edad: 17, estrato: 5, valorDia: 320000, diasTrabajados: 50},
    {codigo:7, cedula: 1080967325, nombres: 'juan felipe', apellidos: 'gomez ruiz', edad: 19, estrato: 2, valorDia: 1200000, diasTrabajados: 20},
    {codigo:8, cedula: 1012798043, nombres: 'jesus david', apellidos: 'fierro rivera', edad: 19, estrato: 4, valorDia: 1240000, diasTrabajados: 70},
    {codigo:9, cedula: 1003810172, nombres: 'jhoan camilo', apellidos: 'charry perez', edad: 21, estrato: 2, valorDia: 120000, diasTrabajados: 40},
    {codigo:10, cedula: 1647892847, nombres: 'juan manuel ', apellidos: 'gutierrez fierro', edad: 17, estrato: 3, valorDia: 120000, diasTrabajados: 10},
 ]
 function subTra(pago) {
   if (pago < 2 * salarioM) {
     subTransporte = 114000;
   } else {
     subTransporte = 0;
   }
   return subTransporte;
 }
 
 function bono(pago, estrato) {
   if ((pago < salarioM && estrato == 1) || pago < salarioM && estrato == 2) {
     bonoN = 100000;
   } else {
     bonoN = 0;
   }
   return bonoN;
 }
 
 function saludN(pago) {
   salud = pago * 0.12;
   return salud;
 }
 
 function pensionN(pago) {
   pension = pago * 0.16;
   return pension;
 }
 
 function arlN(pago) {
   arl = pago * 0.052;
   return arl;
 }
 
 function retencionN(pago, estrato) {
   
   if (pago > 8 * salarioM && nomina[iteracion].estrato == 6 ) {
     retencion = 0.05;
   } else if (pago > salarioM * 6) {
     retencion = 0.04;
   } else if (pago > salarioM * 4) {
     retencion = 0.03;
   } else {
     retencion = 0;
   }
   return retencion;
 }
 
 for (iteracion = 0; iteracion < nomina.length; iteracion++) {
   pago = nomina[iteracion].diasTrabajados * nomina[iteracion].valorDia;
 
   subTra(pago);
   bono(pago, nomina[iteracion].estrato);
   saludN(pago);
   pensionN(pago);
   arlN(pago);
   retencionN(pago, nomina[iteracion].estrato);
 
   reten  = pago * retencion
   salario = ( pago + subTransporte + bonoN) -  (salud + pension + arl + reten)
   pagoNomina.push({
     cedula: nomina[iteracion].cedula,
     nombres: nomina[iteracion].nombres,
     apellidos: nomina[iteracion].apellidos,
     edad: nomina[iteracion].edad,
     estrato: nomina[iteracion].estrato,
     valorDia: nomina[iteracion].valorDia,
     diasTrabajados: nomina[iteracion].diasTrabajados,
     SalarioBruto: pago,
     subTransporte: subTransporte,
     bonoN: bonoN,
     retencion: retencion,
     salud: salud,
     pension: pension,
     arl: arl,
   });
   
   }
   console.table(pagoNomina)