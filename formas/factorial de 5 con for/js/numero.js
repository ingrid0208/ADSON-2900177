function numer(){
    let numeroo = document.getElementById('txtNumero').value

    let contador = 0;
    let resultado = 1;

   for (contador = 1; numeroo >= contador; contador ++) {
        resultado = resultado * contador;
    }

    document.getElementById('numer').innerHTML=`<strong>${resultado}</strong>`

    return false;

}