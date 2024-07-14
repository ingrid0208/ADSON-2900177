function operaciones(){
    let numeroUno = parseInt(document.getElementById('txtNumeroUno').value);
    let numeroDos = parseInt(document.getElementById('txtNumeroDos').value);
    let sumar;
   
    let rsuma;
    
    sumar=numeroUno + numeroDos;
   
    rsuma = `Suma: ${sumar} <br>`;
    
    document.getElementById('operaciones').innerHTML = rsuma;

    return false;
}
