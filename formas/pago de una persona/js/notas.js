function operaciones(){

    let diaT = parseInt(document.getElementById('txtdiaT').value)
    let valorD = parseInt(document.getElementById('txtvalorD').value)
    let resultado = document.getElementById('resultado').value

    if (diaT && valorD){
        resultado.innerHTML=
        `<h5> calcula el sueldo de una persona: </h5>
        <br>
        <p>
        su salario es: $${sueldo(diaT,valorD)} </br>
        sus debucibles son:  </br>
        salud: ${salud(sueldo(diaT,valorD))} </br>
        pension: ${pension(sueldo(diaT,valorD))} </br>
        Arl: ${arl(sueldo(diaT,valorD))} </br>
        el pago es:  $${pagoT(sueldo(diaT,valorD))} 

        </p>
        `
    }else {
        resultado.innerHTML = `<strong> la infomacionn debe ser completa </strong>`
    }
   
    return false;

    
}
function sueldo(diaT,valorD) {
    let pago = diaT * valorD;
    return pago;
}
function salud(pago) {
    let saludd = pago * 0.12;
    return saludd;
}
function pension(pago) {
    let pensionn = pago * 0.16;
    return pensionn;
}
function arl(pago) {
    let arll = pago * 0.052;
    return arll;
}
function pagoT(pago) {
    let saludd = salud(pago);
    let pensionn = pension(pago);
    let arll = arl(pago);
    let total = pago - (saludd + pensionn + arll);
    return total;
}
