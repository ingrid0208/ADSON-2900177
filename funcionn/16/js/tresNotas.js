/**
 * funcion calcular tres notas e imprimir 
 * autor: ingrid medina 
 * fecha: 3 de abril del 2024
*/
let notaUno;
let notaDos;
let notaTres;
const notasExpe =  function (pnotaUno,pnotaDos,pnotaTres){
    
    notaUno = pnotaUno;
    notaDos = pnotaDos;
    notaTres = pnotaTres;

    let promedioUno;
    let promedioDos;
    let promedioTres;
    let suma;
    let notass ="";

    promedioUno = (notaUno * 20)/100
    promedioDos = (notaDos*35)/100
    promedioTres = (notaTres*45)/100
    suma = (promedioUno + promedioDos + promedioTres);

    if(suma > 4.5){
        notass = "La calificación es Superior "+suma;
    }else if(suma <= 4.5 && suma > 3.5){
        notass = "La calificaciom es Buena "+suma;
    }else if(suma >= 3.0 && suma <= 3.5){
        notass =  "La calificacion es Media "+suma;
    }else {
        notass =  "la calificacion es Mala"+suma;
    }
    
    return `La nota uno es ${notaUno},equivale al ${promedioUno}\n`+
            `La nota dos es ${notaDos},equivale al ${promedioDos}\n`+
            `La nota tres es ${notaTres},equivale al ${promedioTres}% del examen.`+'\n'+notass
 }

 function notas(pnotaUno,pnotaDos,pnotaTres){
    
    notaUno = pnotaUno;
    notaDos = pnotaDos;
    notaTres = pnotaTres;
    let promedioUno;
    let promedioDos;
    let promedioTres;
    let suma;
    let notass ="";

    promedioUno = (notaUno * 20)/100
    promedioDos = (notaDos*35)/100
    promedioTres = (notaTres*45)/100
    suma = (promedioUno + promedioDos + promedioTres);

    if(suma > 4.5){
        notass = "La calificación es Superior "+suma;
    }else if(suma <= 4.5 && suma > 3.5){
        notass = "La calificaciom es Buena "+suma;
    }else if(suma >= 3.0 && suma <= 3.5){
        notass =  "La calificacion es Media "+suma;
    }else {
        notass =  "la calificacion es Mala"+suma;
    }
    return `La nota uno es ${notaUno},equivale al ${promedioUno}\n`+
            `La nota dos es ${notaDos},equivale al ${promedioDos}\n`+
            `La nota tres es ${notaTres},equivale al ${promedioTres}% del examen.`+'\n'+notass
 }
 