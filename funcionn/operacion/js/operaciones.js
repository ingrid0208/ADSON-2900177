/**
 * funcion de operaciones aritmetrica 
 * autor: ingrid medina 
 * fecha: 1 de abril del 2024
 */

let numUno;
let numDos;

const suma = function(pnumeroUno, pnumeroDos){
    let sumar;
    numUno = pnumeroUno;
    numDos = pnumeroDos;
    sumar = numUno + numDos;
    return sumar;
}
const resta = function(pnumeroUno, pnumeroDos){
    let restar;
    numUno = pnumeroUno;
    numDos = pnumeroDos;
    restar = numUno - numDos;
    return restar;
}
const multiplicacion = function(pnumeroUno, pnumeroDos){
    let multiplicar;
    numUno = pnumeroUno;
    numDos = pnumeroDos;
    multiplicar = numUno * numDos;
    return multiplicar;
}
const division = function(pnumeroUno, pnumeroDos){
    let dividir;
    numUno = pnumeroUno;
    numDos = pnumeroDos;
    dividir = numUno / numDos;
    return dividir;
}
const operaciones = function (poperador, pnumeroUno, pnumeroDos) {
    let operador = poperador;
    numUno = pnumeroUno;
    numDos = pnumeroDos;
    if(operador=="suma"){
        return suma(numUno,numDos);
    }
    else if(operador=="resta"){
        return resta(numUno,numDos);
    }
    else if(operador=="multiplicacion"){
        return multiplicacion(numUno,numDos);
    }
    else if(operador=="division"){
        return division(numUno,numDos);
    }
    else{
        return "Error!!! no reconoce operador";
    }
}