function operaciones(){
    let ladoUno = parseFloat(document.getElementById('txtladoUno').value);
    let ladoDos  = parseFloat(document.getElementById('txtladoDos').value);
    let ladoTres = parseFloat(document.getElementById('txtladoTres').value);
    let  pantalla = ""

    areaUno = ladoUno * ladoUno;
    areaDos = ladoDos * ladoDos;
    areaTres = ladoTres * ladoTres;

    if (areaUno == areaDos && areaUno == areaTres && areaDos == areaTres){
        pantalla = " los 3 cuadrados son guales "

    }else if(areaUno > areaDos && areaUno > areaTres){
    pantalla = `El area del 1 cuadrado es mayor.\nEl area del cuadrado 1 es ${ladoUno},\nEl area del cuadrado 2 es ${ladoDos},\nEl area del cuadrado 3 es ${ladoTres}`;

    }else if(areaDos > areaUno && areaDos > areaTres){
        pantalla = `El area del 2 cuadrado es mayor.\nEl area del cuadrado 1 es ${ladoUno},\nEl area del cuadrado 2 es ${ladoDos},\nEl area del cuadrado 3 es ${ladoTres}`;
    }else{
        pantalla = `El area del 3 cuadrado es mayor.\nEl area del cuadrado 1 es ${ladoUno},\nEl area del cuadrado 2 es ${ladoDos},\nEl area del cuadrado 3 es ${ladoTres}`;
    }
    document.getElementById('operaciones').innerHTML = pantalla;
    return false;

}
