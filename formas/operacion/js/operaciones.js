function operaciones(){
    let numeroUno = parseInt(document.getElementById('txtNumeroUno').value);
    let numeroDos = parseInt(document.getElementById('txtNumeroDos').value);
    let sumar;
    let restar;
    let multiplicar;
    let dividir;
    let rsuma;
    let rrestar;
    let rmultiplicacion;
    let rdivision;

    sumar=numeroUno + numeroDos;
    restar=numeroUno - numeroDos;
    multiplicar=numeroUno * numeroDos;
    dividir=numeroUno / numeroDos;

    rsuma = `Suma: ${sumar} <br>`;
    rrestar = `Restar: ${restar} <br>`;
    rmultiplicacion = `Multiplicacion: ${multiplicar} <br>`;
    rdivision= `Division: ${dividir} <br>`;

    document.getElementById('operaciones').innerHTML = rsuma + rrestar + rmultiplicacion + rdivision;

    return false;
}
