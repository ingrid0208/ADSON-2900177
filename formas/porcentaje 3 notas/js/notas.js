function operaciones(){
    let numeroUno = parseFloat(document.getElementById('txtNumeroUno').value);
    let numeroDos = parseFloat(document.getElementById('txtNumeroDos').value);
    let numeroTres = parseFloat(document.getElementById('txtNumeroTres').value);

    let uno;
    let dos;
    let tres;
    let suma 

    uno= (numeroUno* 30)/100;
    dos = (numeroDos * 30)/100;
    tres = (numeroTres * 40)/100;
   
    suma = uno + dos + tres;

    document.getElementById('operaciones').innerHTML =  suma;
    document.getElementById('operaciones').innerHTML=`<strong>El porcentaje de las tres notas son: ${suma}</strong>`

    return false;

}
