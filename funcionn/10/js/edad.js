/**
 * funcion imprimir la edad y si es mayor de edad 
 * autor: ingrid medina 
 * fecha: 3 de abril del 2024
*/
let edad 
let fechaNacimiento;
let fechaAltual;
const edadesExp =  function (pfechaNacimiento,pfechaAltual){

    fechaNacimiento = pfechaNacimiento;
    fechaAltual = pfechaAltual
    edad = fechaAltual - fechaNacimiento;
    if(edad < 18 ){
        return "es menor de edad" + edad;
    }
    else {
            return"es mayor de edad" + edad;
        }
    }
    function edades(pfechaNacimiento,pfechaAltual){

        fechaNacimiento = pfechaNacimiento;
        fechaAltual = pfechaAltual
        edad = fechaAltual - fechaNacimiento;
        if(edad < 18 ){
            return "es menor de edad" + edad;
        }
        else {
                return"es mayor de edad" + edad;
            }
        }
    
    


