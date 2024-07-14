function numer(){
    let numeroo = document.getElementById('txtNumero').value;

    let contador = 0;
    let resultado = "";

    while (contador < numeroo) {
        contador = contador + 1;
        resultado += contador + "<br>";
    }

    document.getElementById('numer').innerHTML=`<strong>${resultado}</strong>`

    return false;

}