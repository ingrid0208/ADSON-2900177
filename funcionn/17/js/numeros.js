/**
 * funcion cuente e imprima los numeros del 1 al 5
 * autor: ingrid medina 
 * fecha: 3 de abril del 2024
*/
let numero;
let contador;
const contarExp = function (pnumero,pcontador) {
    numero = pnumero;
    contador = pcontador;
    contador = 0;
    let resultado = "";

    while (contador < numero) {
        contador = contador + 1;
        resultado += contador + "\n"; 
    }
    return resultado; 
}
function contar (pnumero,pcontador) {
    numero = pnumero;
    contador = pcontador;
    contador = 0;
    let resultado = "";

    while (contador < numero) {
        contador = contador + 1;
        resultado += contador + "\n"; 
    }
    return resultado; 
}