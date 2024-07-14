function operaciones(){
    let numeroUno = parseFloat(document.getElementById('txtNumeroUno').value);
    let numeroDos = parseFloat(document.getElementById('txtNumeroDos').value);
    let numeroTres = parseFloat(document.getElementById('txtNumeroTres').value);

    let promedio 

    promedio= (numeroUno + numeroDos + numeroTres)/3;
   
    document.getElementById('operaciones').innerHTML=`<strong>El promedio de las notas son: ${promedio}</strong>`

    return false;

}
