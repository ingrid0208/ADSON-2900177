/**
 * funcion realizar la tabla de multiplicar de 1 hasta el 5 y multiplique el 5 
 * autor: ingrid medina 
 * fecha: 3 de abril del 2024
*/

 let numero;
const tablasExp = function (pnumero){
    numero = pnumero;
    let tabla;
    let contador;
    let par;
    let impar;
    let resultado;
    let mensaje= "";

    tabla = 0;
    par = 0;
    impar = 0;
    
    while (tabla < numero) {

        contador = 0;
        tabla = tabla + 1;

        while (contador < numero) {
            contador = contador + 1;    
            resultado = tabla * contador;
            mensaje += `\n ${tabla} x ${contador} = ${resultado}`;

            if (resultado % 2 == 0) {
                par = par + 1;
                mensaje += " Buzz\n";
            } else {
                impar = impar + 1
                mensaje +=" Bass \n";
            }
        }
        mensaje += "\n"
    }
    return mensaje +"total de pares: "+par+"\n"+
                "total de impares "+impar;
}
function tablas(pnumero){
    numero = pnumero;
    let tabla;
    let contador;
    let par;
    let impar;
    let resultado;
    let mensaje= "";

    tabla = 0;
    par = 0;
    impar = 0;
    
    while (tabla < numero) {

        contador = 0;
        tabla = tabla + 1;

        while (contador < numero) {
            contador = contador + 1;    
            resultado = tabla * contador;
            mensaje += `\n ${tabla} x ${contador} = ${resultado}`;

            if (resultado % 2 == 0) {
                par = par + 1;
                mensaje += " Buzz\n";
            } else {
                impar = impar + 1
                mensaje +=" Bass \n";
            }
        }
        mensaje += "\n"
    }
    return mensaje +"total de pares: "+par+"\n"+
                "total de impares "+impar;
}