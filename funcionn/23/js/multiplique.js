/**
 * funcion la tabla del 5 que multiplique hasta 5
 * autor: ingrid medina 
 * fecha: 3 de abril del 2024
*/
let multiplicar;
const tablaExp = function (pmultiplicar,){

    multiplicar = pmultiplicar;
    let contador = 0;
    let numero = 5;
    let resultado;
    let inf = "";

    for(contador=1; numero  >= contador; contador ++ ){
        resultado = multiplicar * contador;

        inf += `${multiplicar} x ${contador} = ${resultado}\n`;
    }
    return inf;
}
function  tabla(pmultiplicar,){

    multiplicar = pmultiplicar;
    let contador = 0;
    let numero = 5;
    let resultado;
    let inf = "";

    for(contador=1; numero  >= contador; contador ++ ){
        resultado = multiplicar * contador;

        inf += `${multiplicar} x ${contador} = ${resultado}\n`;
    }
    return inf;
}