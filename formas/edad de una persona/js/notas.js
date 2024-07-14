function operaciones(){
    let persona1 = parseInt(document.getElementById('txtNumeroUno').value);
    
    let añoActual = 2024;

    let edad1 = añoActual - persona1;
    
    document.getElementById('operaciones').innerHTML = `<strong> Edad: ${edad1}</strong>`;

    return false;
}