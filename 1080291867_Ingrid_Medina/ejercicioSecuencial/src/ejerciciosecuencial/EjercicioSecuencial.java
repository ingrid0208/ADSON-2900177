/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package ejerciciosecuencial;

/**
 *
 * @author USER
 */
public class EjercicioSecuencial {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        
        //operacion con dos numeros
        int suma1=2;
         int suma2=3;
         
         int suma= suma1 + suma2;
         int resta= suma1 -suma2;
         int multiplicacion= suma1 * suma2;
         int division= suma1 / suma2;
         int modulo = suma1 % suma2;
         
         System.out.println("suma: "+ suma);
         System.out.println("resta: " +resta);
         System.out.println("multiplicacion: "+multiplicacion);
         System.out.println("division: "+division);
         System.out.println("modulo: "+modulo);
         
         
        //calculo de IMC
         float peso = 1.19f;
         float altura =99.5f;

         float imc = peso / (altura * altura);

           System.out.println("imc: "+imc);
        
        
         //Area y perimetro de un triangulo
        int base=20;
        int altura1=10;

        int area=(base * altura1)/ 2;
        int perimetro = 3 * base;

         System.out.println("perimetro: "+perimetro);
         System.out.println("area: "+area);
      
    
         //conversion de temperatura 
        float celsius=20f;
        float  Fahrenheit=(celsius * 9 / 5)+32;
        
        float kelvin=celsius + 273;
        
        System.out.println("fahrenheit: "+Fahrenheit);
        System.out.println("kelvin: "+kelvin);
      
        
        // intercambio de valor 
        int valor1 = 13;
        int valor2 = 20;
        
         valor1 = valor1 + valor2;
         valor2 = valor1 - valor2;
         valor1 = valor1 - valor2;
        
        System.out.println("valor1: "+valor1);
        System.out.println("valor2: "+valor2);
    }
    
}
