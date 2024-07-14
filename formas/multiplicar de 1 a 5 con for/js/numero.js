
function numer() {
    let tabla = document.getElementById('txtNumero').value

    let contador;
    let par = 0;
    let impar = 0;
    let resultado = "";
    let numero = 4;
    let inf = "";
    
    for (tabla = 1; numero >= tabla; tabla ++ ) {
        for (contador = 1; numero >= contador; contador ++){
            resultado = tabla * contador;

            inf += `${tabla} x ${contador} = ${resultado}`;

            
            if(resultado %2==0){
                par = par + 1;
                 inf += " Buzz <br>";
             }else{
                impar = impar + 1;
                inf += " Bass  <br> ";
        }
    }
        inf +="<br>";
        
    }
    document.getElementById('numer').innerHTML=`
        <h5> tablas de multiplicar: </h5>
        <p>
        ${inf}
        <br>
            numero de pares: ${par}</br>
            numero de impares: ${impar}
        </p>
    `;

    return false;

}