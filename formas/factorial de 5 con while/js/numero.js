function numer(){
    let numeroo = document.getElementById('txtNumero').value

    let contador = 0;
    let resultado = 1;

    while (contador < numeroo) {
        contador = contador + 1;
        resultado = resultado * contador;
    }

    document.getElementById('numer').innerHTML=`<strong>${resultado}</strong>`

    return false;

}