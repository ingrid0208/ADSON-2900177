/**
 * funcion realizar la tabla de multiplicar de 1 hasta el 5 y multiplique el 5 
 * autor: ingrid medina 
 * fecha: 3 de abril del 2024
*/
let numero;
const  tablaExp =function(pnumeros){

    numero = pnumeros;
    let tabla;
    let contador;
    let par = 0;
    let impar = 0;
    let resultado;
    let mensaje = "";
  
    for(tabla = 1; numero >= tabla; tabla++){
  
        for(contador=1; numero >= contador; contador ++ ){
  
            resultado = tabla * contador;
             mensaje += `\n ${tabla} x ${contador} = ${resultado}`;
  
           if(resultado % 2==0){
             par = par + 1;
              mensaje += " Buzz\n"
           }else{
            impar = impar + 1; 
             mensaje +=  " Bass\n"
           }
        }
        mensaje +="\n";
    }
    return mensaje + "total de pares: "+par+"\n"+
                "total de impares "+impar;
  }
  function tabla(pnumeros){

    numero = pnumeros;
    let tabla;
    let contador;
    let par = 0;
    let impar = 0;
    let resultado;
    let mensaje = "";
  
    for(tabla = 1; numero >= tabla; tabla++){
  
        for(contador=1; numero >= contador; contador ++ ){
  
            resultado = tabla * contador;
             mensaje += `\n ${tabla} x ${contador} = ${resultado}`;
  
           if(resultado % 2==0){
             par = par + 1;
              mensaje += " Buzz\n"
           }else{
            impar = impar + 1; 
             mensaje +=  " Bass\n"
           }
        }
        mensaje +="\n";
    }
    return mensaje + "total de pares: "+par+"\n"+
                "total de impares "+impar;
  }