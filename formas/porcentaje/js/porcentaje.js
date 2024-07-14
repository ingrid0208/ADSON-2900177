function porcentaje(){
    let numero = parseFloat(document.getElementById('txtNumero').value);

    let porciento

    porciento = numero / 100;
    
    document.getElementById('porciento').innerHTML=`<strong> El porcentaje de ${numero} es: ${porciento}% </strong>`

    return false;

}