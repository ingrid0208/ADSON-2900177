
function numer() {
    let multiplicar = document.getElementById('txtNumero').value;

    let contador = 0 ;
    let resultado;
    let numero = 5;
    let inf = "";

    for (contador = 1; numero >= contador; contador ++ ) {
        resultado = multiplicar * contador;

        inf += `${multiplicar} x ${contador} = ${resultado}<br>`;
    }
    document.getElementById('numer').innerHTML=`<strong> ${inf} </strong>`;

    return false;
}