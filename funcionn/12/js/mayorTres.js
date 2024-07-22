/**
 * funcion imprimir el numero mayor de 3 numeros
 * autor: ingrid medina 
 * fecha: 3 de abril del 2024
*/

function mayor (pnumero){
    let numeroP = pnumero;
    let mayorr;
    mayorr =numeroP * numeroP;
    return mayorr
}
    let numUno;
    let numDos;
    let numTres;
  function validar (numeUno,numeDos,numeTres) {
    numUno = numeUno;
    numDos = numeDos;
    numTres = numeTres;
    
    if(numUno == numDos && numUno == numTres &&  numDos == numTres) {
        return "Los tres numeros son iguales";
    }else if (numUno > numDos && numUno > numTres) {
        return `El número uno es mayor que número dos y que número tres: El número uno es ${numUno}, El número dos es ${numDos}, El número tres es ${numTres}`;
    } else if(numDos > numUno && numDos > numTres){
        return `El número dos es mayor que número uno y que número tres: El número uno es ${numUno}, El número dos es ${numDos}, El número tres es ${numTres}`;
    }else{

        return `El número tres es mayor que número uno y que número tres: El número uno es ${numUno}, El número dos es ${numDos}, El número tres es ${numTres}`;
    }
}
const  mayorExp = function (pnumero){
    let numeroP = pnumero;
    let mayorr;
    mayorr =numeroP * numeroP;
    return mayorr
}
    let nuUno;
    let nuDos;
    let nuTres;
const validarExp = function (numeUno,numeDos,numeTres) {
    nuUno = numeUno;
    nuDos = numeDos;
    nuTres = numeTres;
    
    if(numUno == numDos && numUno == numTres &&  numDos == numTres) {
        return "Los tres numeros son iguales";
    }else if (numUno > numDos && numUno > numTres) {
        return `El número uno es mayor que número dos y que número tres: El número uno es ${numUno}, El número dos es ${numDos}, El número tres es ${numTres}`;
    } else if(numDos > numUno && numDos > numTres){
        return `El número dos es mayor que número uno y que número tres: El número uno es ${numUno}, El número dos es ${numDos}, El número tres es ${numTres}`;
    }else{

        return `El número tres es mayor que número uno y que número tres: El número uno es ${numUno}, El número dos es ${numDos}, El número tres es ${numTres}`;
    }
}