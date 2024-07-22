/**
 * ejercico del bingo
 * autor: ingrid 
 * fecha: 08 de mayo del 2024
 */
let bingo = []
let iteracion1;
let iteracion2;
let contador = 0;
let tabla;
let letraB = []
let letraI = []
let letraN = []
let letraG = []
let letraO = []
let cantidadImpares = 0;
let cantidadPares = 0;

for(iteracion1 = 0; iteracion1<5; iteracion1++){
    let interno = []
    for(iteracion2 = 0; iteracion2<5; iteracion2++){
        contador = contador + 1;
        tabla = contador *3;
        interno.push(tabla);
}
bingo.push(interno);
}
// letra B
for(iteracion1= 0; iteracion1<5; iteracion1++){
    letraB.push(bingo[iteracion1][0])
}
console.log("letra B: "+letraB);
// letra i
for(iteracion1= 0; iteracion1<5; iteracion1++){
    letraI.push(bingo[iteracion1][1])
}
console.log("letra I: "+letraI);
// letra N
for(iteracion1= 0; iteracion1<5; iteracion1++){
    letraN.push(bingo[iteracion1][2])
}
console.log("letra N: "+letraN);
// letra G 
for(iteracion1= 0; iteracion1<5; iteracion1++){
    letraG.push(bingo[iteracion1][3])
}
console.log("letra G: "+letraG);
// letra o
for(iteracion1= 0; iteracion1<5; iteracion1++){
    letraO.push(bingo[iteracion1][4])
}
console.log("letra O: "+letraO);

console.log(bingo);

console.log("X,Grande");
console.log(bingo[0][0],bingo[1][1],bingo[2][2],bingo[3][3],bingo[4][4],bingo[0][4],bingo[1][3],bingo[2][2],bingo[3][1],bingo[4][0]);


console.log("X1");
console.log(bingo[0][1],bingo[1][2],bingo[2][3],bingo[0][3],bingo[1][2],bingo[2][1]);

console.log("X2");
console.log(bingo[2][0],bingo[3][1],bingo[4][2],bingo[2][2],bingo[3][1],bingo[4][0]);

console.log("X3");
console.log(bingo[2][2],bingo[3][3],bingo[4][4],bingo[2][4],bingo[3][3],bingo[4][2]);

for(iteracion1 = 0; iteracion1<5; iteracion1++){
    for(iteracion2 = 0; iteracion2<5; iteracion2++){
        if(bingo[iteracion1][iteracion2]%2==0){
            cantidadPares = cantidadPares+1
        }
        else {
            cantidadImpares = cantidadImpares+1
        }
    }
}

console.log("cantidad de numeros Impares: "+ cantidadImpares);
console.log("cantidad de numeros Pares: "+ cantidadPares);