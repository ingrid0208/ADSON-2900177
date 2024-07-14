
function numer() {
    let multiplicar = document.getElementById('txtNumero').value;

    let contador = 0 ;
    let resultado;
    let inf = "";

    while (contador < 5 ) {
        contador = contador + 1 ;
        resultado = multiplicar * contador;

        inf += `${multiplicar} x ${contador} = ${resultado}<br>`;
    }

    document.getElementById('numer').innerHTML=`<strong> ${inf} </strong>`;

    return false;

}