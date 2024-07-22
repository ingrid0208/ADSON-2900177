/**
 * funcion realizar la tabla del 9 que multiplique hasta el 5 
 * autor: ingrid medina 
 * fecha: 3 de abril del 2024
*/

let tablasMultiplicar;
const tablaExp = function (ptablasMultiplicar){
    tablasMultiplicar = ptablasMultiplicar;

    let numero;
    let contador;
    let resultados="";
    let resultado;

    numero = 5;
    contador = 0;
    resultados = "";
    while (contador < numero) {
        contador = contador +1
        resultado = tablasMultiplicar * contador;

        resultados += `${tablasMultiplicar} x ${contador} = ${resultado} `
        if(resultado %2==0){
        resultados += "par\n";
        }else{
            resultados += "impar\n"
        }
    }
    return resultados;
}
function tablaExp (ptablasMultiplicar){
    tablasMultiplicar = ptablasMultiplicar;

    let numero;
    let contador;
    let resultados="";
    let resultado;

    numero = 5;
    contador = 0;
    resultados = "";
    while (contador < numero) {
        contador = contador +1
        resultado = tablasMultiplicar * contador;

        resultados += `${tablasMultiplicar} x ${contador} = ${resultado} `
        if(resultado %2==0){
        resultados += "par\n";
        }else{
            resultados += "impar\n"
        }
    }
    return resultados;
}