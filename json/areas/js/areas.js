
function areas() {
    fetch('libreria/calcular.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            alert(data.error)
        } else {
            document.getElementById('pantalla').innerHTML= 
            `
                <p>area del cuadrado ${data.cuadrado}</p>
                <p>area del Rectangulo ${data.rectangulo}</p>
                <p>area del Triangulo ${data.triangulo}</p>
            
            `;
        }
    })

    .catch(error => console.error('Error:', error));
}

document.addEventListener('DOMContentLoaded', function () {
    areas();
})