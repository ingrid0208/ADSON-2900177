function numer(){
    let numeroo = document.getElementById('txtNumero').value;

    let contador = 0;
    let resultado = "";

    for (contador = 1; numeroo >= contador; contador ++) {
        resultado += contador + "<br>";
    }

    document.getElementById('numer').innerHTML=`<strong>${resultado}</strong>`

    return false;

}