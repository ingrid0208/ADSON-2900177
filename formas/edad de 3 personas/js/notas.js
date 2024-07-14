function operaciones(){
    let edadUno = parseInt(document.getElementById('txtNumeroUno').value);
    let edadDos = parseFloat(document.getElementById('txtNumeroDos').value);
    let edadTres = parseFloat(document.getElementById('txtNumeroTres').value);
    let  pantalla = "" 
    
    let añoActual = 2024;

    let edad1 = añoActual - edadUno;
    let edad2 = añoActual - edadDos;
    let edad3 = añoActual - edadTres;
    
    pantalla += ` Edad uno ${validar(edad1)}`
    pantalla += ` Edad dos ${validar(edad2)}`
    pantalla += ` Edad tres ${validar(edad3)}`

    document.getElementById('operaciones').innerHTML = `<strong> ${pantalla}</strong>`;

    return false;
}
function validar(edad) {
    if (edad >= 18) {
      return `${edad} Es mayor de edad <br>`;
    } else {
      return `${edad} años. Es menor de edad <br>`;
    }
  }