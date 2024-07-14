function operaciones(){
    let numeroUno = parseFloat(document.getElementById('txtNumeroUno').value);
    let numeroDos = parseFloat(document.getElementById('txtNumeroDos').value);
    let numeroTres = parseFloat(document.getElementById('txtNumeroTres').value);
    let  pantalla = ""

    if (numeroUno == numeroDos && numeroUno == numeroTres && numeroDos == numeroTres){
        pantalla = "Los tres numeros son iguales : ";

    }else if(numeroUno > numeroDos && numeroUno > numeroTres){
        pantalla = `El numero 1 es mayor que numero 2 y que numero 3: El numero 1 es ${numeroUno},El numero 2 es ${numeroDos},El numero 3 es ${numeroTres}`;

    }else if(numeroDos > numeroUno && numeroDos > numeroTres){
        pantalla = `El numero 2 es mayor que numero 1 y que numero 3: El numero 1 es ${numeroUno},El numero 2 es ${numeroDos},El numero 3 es ${numeroTres}`;
    }else{
        pantalla = `El numero 3 es mayor que numero 1 y que numero 2: El numero 1 es ${numeroUno},El numero 2 es ${numeroDos},El numero 3 es ${numeroTres}`;
    }
    document.getElementById('operaciones').innerHTML = pantalla;
    return false;
}
