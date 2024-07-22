/**
 * funcion imprimir la edad de tres persona
 * autor: ingrid medina 
 * fecha: 3 de abril del 2024
*/

const edadessExp = function(pfechaNacUno,pfechaNacDos,pfechaNacTres){
    let fechaNacUno = new Date(pfechaNacUno);
    let fechaNacDos = new Date(pfechaNacDos);
    let fechaNacTres = new Date(pfechaNacTres);
    let fechaAc = new Date();
    let edadUno;
    let edadDos;
    let edadTres;

    let Uno = fechaAc - fechaNacUno;
    edadUno = Math.floor(Uno / (1000 * 60 * 60 * 24 * 365.25));
    let Dos = fechaAc - fechaNacDos;
    edadDos = Math.floor(Dos / (1000 * 60 * 60 * 24 * 365.25));
    let Tres = fechaAc - fechaNacTres;
    edadTres = Math.floor(Tres / (1000 * 60 * 60 * 24 * 365.25));

    let resultado = '';
    if(edadUno >= 18){
        resultado += "La edad es: "+edadUno+" años, Es mayor de edad.\n";
    }else{
        resultado += "La edad es: "+edadUno+" años, Es menor de edad.\n";
    }
    if(edadDos >= 18){
        resultado += "La edad es: "+edadDos+" años, Es mayor de edad.\n";
    }else{
        resultado += "La edad es: "+edadDos+" años, Es menor de edad.\n";
    }

    if(edadTres >= 18){
        resultado += "La edad es: "+edadTres+" años, Es mayor de edad.\n";
    }else{
        resultado += "La edad es: "+edadTres+" años, Es menor de edad. ";
    }
    return resultado;
}
function edades(pfechaNacUno,pfechaNacDos,pfechaNacTres){
    let fechaNacUno = new Date(pfechaNacUno);
    let fechaNacDos = new Date(pfechaNacDos);
    let fechaNacTres = new Date(pfechaNacTres);
    let fechaAc = new Date();
    let edadUno;
    let edadDos;
    let edadTres;

    let Uno = fechaAc - fechaNacUno;
    edadUno = Math.floor(Uno / (1000 * 60 * 60 * 24 * 365.25));
    let Dos = fechaAc - fechaNacDos;
    edadDos = Math.floor(Dos / (1000 * 60 * 60 * 24 * 365.25));
    let Tres = fechaAc - fechaNacTres;
    edadTres = Math.floor(Tres / (1000 * 60 * 60 * 24 * 365.25));

    let resultado = '';
    if(edadUno >= 18){
        resultado += "La edad es: "+edadUno+" años, Es mayor de edad.\n";
    }else{
        resultado += "La edad es: "+edadUno+" años, Es menor de edad.\n";
    }
    if(edadDos >= 18){
        resultado += "La edad es: "+edadDos+" años, Es mayor de edad.\n";
    }else{
        resultado += "La edad es: "+edadDos+" años, Es menor de edad.\n";
    }

    if(edadTres >= 18){
        resultado += "La edad es: "+edadTres+" años, Es mayor de edad.\n";
    }else{
        resultado += "La edad es: "+edadTres+" años, Es menor de edad. ";
    }
    return resultado;
}