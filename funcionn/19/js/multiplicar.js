/**
 * funcion realizar la tabla de multiplicar 
 * autor: ingrid medina 
 * fecha: 3 de abril del 2024
*/
let multiplicar;
let contador;
let numero;
const tablaExp = function (pmultiplicar,){

    multiplicar = pmultiplicar;
    let contador = 0;
    let numero = 5;
    let resultado;
    let inf = "";
    while (contador < numero) {

        contador = contador +1;
        resultado = multiplicar * contador; 

        inf += `${multiplicar} x ${contador} = ${resultado}\n` 
    }
    return inf;
}
 function tabla(pmultiplicar,){
    multiplicar = pmultiplicar;
    let contador = 0;
    let numero = 5;
    let resultado;
    let inf = "";
    while (contador < numero) {
        contador = contador +1;
        resultado = multiplicar * contador; 

        inf += `${multiplicar} x ${contador} = ${resultado}\n` 
    }
    return inf;
}