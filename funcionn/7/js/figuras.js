/**
 * funcion imprimir las areas geometricas cuadrado, resctangulo, triangulo
 * autor: ingrid medina 
 * fecha: 3 de abril del 2024
*/
let lado;
let baseUno;
let alturaUno;
let baseDos;
let alturalDos;

const cuadradoExp = function(pnlado, pnnlado){
    let cuadrados;
    lado = pnlado;
    lado = pnnlado;
    cuadrados = pnlado * pnnlado;
    return cuadrados;
}
const rectanguloExp = function(pnbaseUno, pnalturaUno){
    let rectangulos;
    alturaUno = pnalturaUno;
    baseUno = pnbaseUno;
    rectangulos = pnbaseUno * pnalturaUno;
    return rectangulos;
}
const trianguloExp = function(pnbaseDos, pnalturaDos){
    let triangulos;
    alturalDos = pnalturaDos;
    baseDos = pnbaseDos;
    triangulos = (pnbaseDos * pnalturaDos)/2;
    return triangulos;
}
function cuadrado(pnlado, pnnlado){
    let cuadrados;
    lado = pnlado;
    lado = pnnlado;
    cuadrados = pnlado * pnnlado;
    return cuadrados;
}
function rectangulo(pnbaseUno, pnalturaUno){
    let rectangulos;
    alturaUno = pnalturaUno;
    baseUno = pnbaseUno;
    rectangulos = pnbaseUno * pnalturaUno;
    return rectangulos;
}
function triangulo(pnbaseDos, pnalturaDos){
    let triangulos;
    alturalDos = pnalturaDos;
    baseDos = pnbaseDos;
    triangulos = (pnbaseDos * pnalturaDos)/2;
    return triangulos;
}