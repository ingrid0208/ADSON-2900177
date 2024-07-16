// arreglos

let bingo = []
let tablas = []

// variables

let iteracionT
let iteracionM
let contadorM = 0
let resultado

// creamos la matriz del bingo 


for (iteracionT = 0; iteracionT < 5; iteracionT++) {

  tablas = []
  
  for (iteracionM = 0; iteracionM < 5; iteracionM++) {
    contadorM ++
    resultado = contadorM * 3
    tablas.push(resultado)
    
  }
  bingo.push(tablas)
  
}
 let mostrarB = mostrarBingo()

   document.getElementById('tablero').innerHTML = mostrarB

  // indexamos la matriz para mostrar los datos

  function mostrarBingo() {
    let pantalla = ''
  
    pantalla += 
    `
      
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
            Accordion Item #1
          </button>
        </h2>
        <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#tablero">
          <div class="accordion-body">
            <table class="table table-success table-striped">
              <thead>
              <tr>
                <th scope="col">B</th>
                <th scope="col">I</th>
                <th scope="col">N</th>
                <th scope="col">G</th>
                <th scope="col">O</th>
              </tr>
              </thead>
              <tbody>
    `
  
    for (iteracionT = 0; iteracionT < bingo.length; iteracionT++) {
      pantalla += `<tr>`
  
      for (iteracionM = 0; iteracionM < 5; iteracionM++) {
        pantalla += `<td>${bingo[iteracionT][iteracionM]}</td>`
        
      }
      pantalla +=`</tr>`
      
    }
  
    pantalla +=
    `
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `
  
    return pantalla

    
  }
    let mostrarL = mostrarLetras()

     document.getElementById('tablero').innerHTML = mostrarL

     function mostrarLetras(bingo){
        let pantalla = "";

        // letra B

        pantalla += `
        <div class = "col-2">
        <table class="table table-success">
        <thead>
            <tr>
                <th scope="col">B</th>

            </tr>
        </thead>
        <tbody>
        `;

        for(let iteracionT = 0; iteracionT < 5; iteracionT++){
            pantalla += `<tr>`;

            for(let iteracionM = 0; iteracionM < 5; iteracionM++){
                if (iteracionM === 0){// si es la primera columna (B)
                pantalla += `<th class="columna-bingo">${bingo[iteracionT][iteracionM]}</th>`
                }else {
                    pantalla += `<th>${bingo[iteracionT][iteracionM]}</th>`;
                }
            }
            pantalla += `</tr>`;
        }
        pantalla +=
        `
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `
        
     }