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

    for(contador=1; numero >= contador; contador ++ ){
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
function tabla(ptablasMultiplicar){
    tablasMultiplicar = ptablasMultiplicar;
    let numero;
    let contador;
    let resultados="";
    let resultado;

    numero = 5;
    contador = 0;
    resultados = "";

    for(contador=1; numero >= contador; contador ++ ){
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