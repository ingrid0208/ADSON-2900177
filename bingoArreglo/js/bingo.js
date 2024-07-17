document.addEventListener('DOMContentLoaded', function () {


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
      contadorM++
      resultado = contadorM * 3
      tablas.push(resultado)

    }
    bingo.push(tablas)

  }


  let mostrarB = mostrarBingo()
  let mostrarL = mostrarLetra()
  let mostrarX = mostrarXgrande()
  let mostarle = mostarletras()
  let mostrarN = mostrarne()
  let mostrarG = mostrare()
  let mostraro = mostraroo()
  let mostrarpe = XPeques()

  document.getElementById('tablero').innerHTML = mostrarB
  document.getElementById('letras').innerHTML = mostrarL
  document.getElementById('letrass').innerHTML = mostarle
  document.getElementById('letraN').innerHTML = mostrarN
  document.getElementById('letraG').innerHTML = mostrarG
  document.getElementById('letraO').innerHTML = mostraro
  document.getElementById('xGrande').innerHTML = mostrarX
  document.getElementById('xPeque').innerHTML = mostrarpe


  // indexamos la matriz para mostrar los datos

  function mostrarBingo() {
    let pantalla = ''

    pantalla +=
      `   
      <div class="accordion accordion-flush" id="bingo" >
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
            BINGO 
          </button>
        </h2>
        <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#bingo">
          <div class="accordion-body">
            <table class="table table-success table-striped colorear2">
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
      pantalla += `</tr>`

    }

    pantalla +=
      `
              </tbody>
            </table>
          </div>
        </div>
      </div>
      </div>
    `

    return pantalla


  }

  function mostrarLetra() {
    let pantalla = "";

    // letra B

    pantalla += `
    <div class="accordion accordion-flush" id="letraB">
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseB" aria-expanded="false" aria-controls="flush-collapseB">
          LETRA B
        </button>
      </h2>
      <div id="flush-collapseB" class="accordion-collapse collapse" data-bs-parent="#letraB">
        <div class="accordion-body">
        <table class="table table-success table-striped colorear2">
              <thead>
              <tr>
              <th scope="col">B</th>
              <th scope="col">I</th>
              <th scope="col">N</th>
              <th scope="col">G</th>
              <th scope="col">O</th>
        </thead>
        <tbody>
        `;

    for (iteracionT = 0; iteracionT < 5; iteracionT++) {
      pantalla += `<tr>`;

      for (iteracionM = 0; iteracionM < 5; iteracionM++) {
        if (iteracionM === 0) {// si es la primera columna (B)
          pantalla += `<th class="columna-bingo">${bingo[iteracionT][iteracionM]}</th>`;
        } else {
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
      </div>
    `
    return pantalla
  }

  function mostarletras() {
    let pantalla = "";

    // letra I

    pantalla += `

    <div class="accordion accordion-flush" id="letraI">
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseI" aria-expanded="false" aria-controls="flush-collapseI">
          LETRA I 
        </button>
      </h2>
      <div id="flush-collapseI" class="accordion-collapse collapse" data-bs-parent="#letraI">
        <div class="accordion-body">
        <table class="table table-success table-striped colorear2">
              <thead>
              <tr>
              <th scope="col">B</th>
                <th scope="col">I</th>
                <th scope="col">N</th>
                <th scope="col">G</th>
                <th scope="col">O</th>
        </thead>
        <tbody>
        `;

    for (iteracionT = 0; iteracionT < 5; iteracionT++) {
      pantalla += `<tr>`;

      for (iteracionM = 0; iteracionM < 5; iteracionM++) {
        if (iteracionM === 1) {// si es la primera columna (i)
          pantalla += `<th class="columna-bingo">${bingo[iteracionT][iteracionM]}</th>`;
        } else {
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
      </div>
    `
    return pantalla
  }

  function mostrarne() {
    let pantalla = "";

    // letra N

    pantalla += `

    <div class="accordion accordion-flush" id="letraN">
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseN" aria-expanded="false" aria-controls="flush-collapseN">
          LETRA N
        </button>
      </h2>
      <div id="flush-collapseN" class="accordion-collapse collapse" data-bs-parent="#letraN">
        <div class="accordion-body ">
        <table class="table table-success table-striped colorear2">
              <thead>
              <tr>
              <th scope="col">B</th>
                <th scope="col">I</th>
                <th scope="col">N</th>
                <th scope="col">G</th>
                <th scope="col">O</th>
        </thead>
        <tbody>
        `;

    for (iteracionT = 0; iteracionT < 5; iteracionT++) {
      pantalla += `<tr>`;

      for (iteracionM = 0; iteracionM < 5; iteracionM++) {
        if (iteracionM === 2) {// si es la primera columna (N)
          pantalla += `<th class="columna-bingo">${bingo[iteracionT][iteracionM]}</th>`;
        } else {
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
      </div>
    `
    return pantalla
  }
  function mostrare() {
    let pantalla = "";

    // letra G

    pantalla += `

    <div class="accordion accordion-flush" id="letraG">
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseG" aria-expanded="false" aria-controls="flush-collapseG">
          LETRA G
        </button>
      </h2>
      <div id="flush-collapseG" class="accordion-collapse collapse" data-bs-parent="#letraG">
        <div class="accordion-body">
        <table class="table table-success table-striped colorear2">
              <thead>
              <tr>
              <th scope="col">B</th>
                <th scope="col">I</th>
                <th scope="col">N</th>
                <th scope="col">G</th>
                <th scope="col">O</th>
        </thead>
        <tbody>
        `;

    for (iteracionT = 0; iteracionT < 5; iteracionT++) {
      pantalla += `<tr>`;

      for (iteracionM = 0; iteracionM < 5; iteracionM++) {
        if (iteracionM === 3) {// si es la primera columna (N)
          pantalla += `<th class="columna-bingo">${bingo[iteracionT][iteracionM]}</th>`;
        } else {
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
      </div>
    `
    return pantalla
  }
  function mostraroo() {
    let pantalla = "";

    // letra o

    pantalla += `
    <div class="accordion accordion-flush" id="letraO">
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseO" aria-expanded="false" aria-controls="flush-collapseO">
          LETRA O 
        </button>
      </h2>
      <div id="flush-collapseO" class="accordion-collapse collapse" data-bs-parent="#letraO">
        <div class="accordion-body">
          <table class="table table-success table-striped colorear2">
          <thead>
              <tr>
              <th scope="col">B</th>
                <th scope="col">I</th>
                <th scope="col">N</th>
                <th scope="col">G</th>
                <th scope="col">O</th>
        </thead>
        <tbody>
        `;

    for (iteracionT = 0; iteracionT < 5; iteracionT++) {
      pantalla += `<tr>`;

      for (iteracionM = 0; iteracionM < 5; iteracionM++) {
        if (iteracionM === 4) {// si es la primera columna (N)
          pantalla += `<th class="columna-bingo">${bingo[iteracionT][iteracionM]}</th>`;
        } else {
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
      </div>
    `
    return pantalla
  }

  function mostrarXgrande() {
    let pantalla = ''

    pantalla +=
      `
      <div class="accordion accordion-flush" id="xGrande">
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseX" aria-expanded="false" aria-controls="flush-collapseX">
            X GRANDE 
          </button>
        </h2>
        <div id="flush-collapseX" class="accordion-collapse collapse" data-bs-parent="#xGrande">
          <div class="accordion-body">
       <table class="table table-success table-striped colorear2">
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

        if (iteracionM == iteracionT || bingo.length - 1 == iteracionM + iteracionT) {

          pantalla += `<td class='columna-bingo'>${bingo[iteracionT][iteracionM]}</td>`
        } else {

          pantalla += `<td>${bingo[iteracionT][iteracionM]}</td>`
        }

      }
      pantalla += `</tr>`

    }

    pantalla +=
      `
              </tbody>
            </table>
          </div>
        </div>
      </div>
      </div>
    `

    return pantalla
  }

  function XPeques() {
    
    let pantalla = ''

      let x2 = [];
      let x3 = [];
      let x4 = [];



      for (let iteracionM = 0; iteracionM < 3; iteracionM++) {
        //Sacar x media
        x2.push(bingo[iteracionM][1 + iteracionM]);
        x2.push(bingo[iteracionM][3 - iteracionM]);

        // Sacar x Mediana

        x3.push(bingo[iteracionM + 2][iteracionM]);
        x3.push(bingo[iteracionM + 2][2 - iteracionM]);

        //Sacar x chiquita

        x4.push(bingo[2 + iteracionM][2 + iteracionM]);
        x4.push(bingo[2 + iteracionM][4 - iteracionM]);
      }

      pantalla += `

      <div class="accordion accordion-flush" id="xPequeñas">
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsexP" aria-expanded="false" aria-controls="flush-collapseX">
            X X X PEQUES
          </button>
        </h2>
        <div id="flush-collapsexP" class="accordion-collapse collapse" data-bs-parent="#xPequeñas">
          <div class="accordion-body">
    <table class="table colorear2">
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
    `;

      for (let iteracionT = 0; iteracionT < bingo.length; iteracionT++) {
        pantalla += `<tr>`;
        for (let iteracionM = 0; iteracionM < 5; iteracionM++) {
          let clase = "";
          if (x2.includes(bingo[iteracionT][iteracionM])) {
            clase = "x2"; // Clase para x2
          } else if (x3.includes(bingo[iteracionT][iteracionM])) {
            clase = "x3"; // Clase para x3
          } else if (x4.includes(bingo[iteracionT][iteracionM])) {
            clase = "x4"; // Clase para x4
          }

          if (clase !== "") {
            pantalla += `<td class="${clase}">${bingo[iteracionT][iteracionM]}</td>`;
          } else {
            pantalla += `<td>${bingo[iteracionT][iteracionM]}</td>`;
          }
        }
        pantalla += `</tr>`;
      }

      pantalla += `
      </tbody>
      </table>
    </div>
  </div>
</div>
</div>
    `;

    return pantalla
  }
})
