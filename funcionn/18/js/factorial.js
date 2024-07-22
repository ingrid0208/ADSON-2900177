/**
 * funcion imprima factorial de 5
 * autor: ingrid medina 
 * fecha: 3 de abril del 2024
*/

let numero;
let contador;
let factorial;
const factorrExp = function (pnumero,pcontador,pfactorial){
    numero = pnumero;
    contador = pcontador;
    factorial = pfactorial;

    contador = 0;
    factorial = 1;

    while(contador < numero){
        contador = contador + 1;
        factorial = factorial * contador;
    } 
    return factorial;
}
 function factor (pnumero,pcontador,pfactorial){
    numero = pnumero;
    contador = pcontador;
    factorial = pfactorial;

    contador = 0;
    factorial = 1;
    while(contador < numero){
        contador = contador + 1;
        factorial = factorial * contador;
    } 
    return factorial;
}