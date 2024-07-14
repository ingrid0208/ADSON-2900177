function operaciones(){
    let numeroUno = parseFloat(document.getElementById('txtNumeroUno').value);
    let numeroDos = parseFloat(document.getElementById('txtNumeroDos').value);
    let  pantalla = ""

    if (numeroUno == numeroDos){
        pantalla= " los numeros son iguales "
    }else if (numeroUno > numeroDos){
        pantalla = "El numero 1 es mayor : " +  numeroUno
    }else{
        pantalla = "El numero 2 es mayor : " +  numeroDos
    }
    document.getElementById('operaciones').innerHTML = pantalla;

    return false;
}
