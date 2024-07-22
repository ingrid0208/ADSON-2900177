/**
 * ejersicio de la tienda 
 * autor: ingrid 
 * fecha: 08 de mayo del 2024
 */
let tienda = []
let iteracion 

tienda=[
    {id:1,nombreProducto:'arroz',tipoProducto:'granos',tipoCantidad:'gramos',cantidad:1000,precio:2400},
    {id:2,nombreProducto:'lentejas',tipoProducto:'granos',tipoCantidad:'gramos',cantidad:500,precio:1300},
    {id:3,nombreProducto:'carne ',tipoProducto:'carnes',tipoCantidad:'gramos',cantidad:500,precio:13500},
    {id:4,nombreProducto:'pollo entero',tipoProducto:'carnes',tipoCantidad:'gramos',cantidad:1000,precio:12500},
    {id:5,nombreProducto:'cebolla junca',tipoProducto:'verduras',tipoCantidad:'gramos',cantidad:500,precio:1300},
    {id:6,nombreProducto:'mora',tipoProducto:'frutas',tipoCantidad:'gramos',cantidad:500,precio:1200}
];
console.log(tienda);

for(iteracion = 0; iteracion<6; iteracion++){
    if(tienda[iteracion].cantidad<=500 && tienda[iteracion].tipoProducto=='granos'){
        console.log("posicion "+iteracion+": ");
        console.log(tienda[iteracion]);
    }
    else {
        console.log("-");
    }
}