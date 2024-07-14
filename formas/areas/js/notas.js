function operaciones(){
    let lado = parseFloat(document.getElementById('txtlado').value);

    let baseRe = parseFloat(document.getElementById('txtbaseRe').value);
    let alturaRe = parseFloat(document.getElementById('txtalturaRe').value);

    let baseTri = parseFloat(document.getElementById('txtbaseTri').value);
    let alturaTri = parseFloat(document.getElementById('txtalturaTri').value);
    

    let cuadrado
    let rectangulo
    let triangulo

    cuadrado = lado * lado;
    rectangulo = baseRe * alturaRe;
    triangulo = (baseTri * alturaTri)/2;

    cuadrado = `CUADRADO: ${cuadrado} <br>`;
    rectangulo = `RECTANGULO: ${rectangulo} <br>`;
    triangulo = `TRIANGULO: ${triangulo} <br>`;
   

    document.getElementById('operaciones').innerHTML = cuadrado + rectangulo + triangulo;

    return false;
}
