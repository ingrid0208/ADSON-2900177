/**
 * primer ejercicio con arreglo 
 * autor: ingrid 
 * fecha: 08 de mayo del 2024 
 */
let arreglo = [];
let numeroDatos = [];
let iteracion;
let datosArreglos ="";

arreglo = [2,3,4,5,6,7,8,9];

numeroDatos = arreglo.length;
console.log("valores iniciales: "+ arreglo)
console.log("numero de datos: "+ numeroDatos)

arreglo.push(10);
arreglo.push(11);
arreglo.push(12);

numeroDatos = arreglo.length;

console.log("valores iniciales "+ arreglo)
console.log("numero de datos "+ numeroDatos)

for(iteracion=0; iteracion<numeroDatos; iteracion++){
    console.log("Datos "+ iteracion +": "+ arreglo[iteracion]);
    datosArreglos+="Datos "+ iteracion +": "+ arreglo[iteracion]+"\n";
}
alert(datosArreglos);