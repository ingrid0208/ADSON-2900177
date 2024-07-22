/**
 * Area de tres figutas 
 * Autor: ingrid medina
 * Fecha: 03 de abril del 2024
 */

let ladoUno;
let ladoDos;
let ladoTres;
let lado;

const areasExp = function (pladoUno){
    ladoUno = pladoUno;

    let areaUno;
   
    areaUno = ladoUno * ladoUno;
    return areaUno;

}
let areasU;
let areasD;
let areasT;
function area(pareaU,pareaD,pareaT){
    
    areasU = pareaU;
    areasD = pareaD;
    areasT = pareaT;

    if (areasU == areasD && areasU == areasT && areasD && areasT ){

        return `El area del primer cuadrado es mayor.\nEl area cuadrado uno  es ${areasU},\nEl area cuadrado dos es ${areasD},\nEl area cuadrado tres es ${areasT}`
    }else if(areasU > areasD && areasU > areasT){
        return `El area del segundo cuadrado es mayor.\nEl area cuadrado uno  es ${areasU},\nEl area cuadrado dos es ${areasD},\nEl area cuadrado tres es ${areasT}`
    }else if(areasD > areasU && areasD > areasT){
        return `El area del segundo cuadrado es mayor.\nEl area cuadrado uno  es ${areasU},\nEl area cuadrado dos es ${areasD},\nEl area cuadrado tres es ${areasT}`
    }else{
        return `El area del tercer cuadrado es mayor.\nEl area cuadrado uno  es ${areasU},\nEl area cuadrado dos es ${areasD},\nEl area cuadrado tres es ${areasT}`
    }
}

