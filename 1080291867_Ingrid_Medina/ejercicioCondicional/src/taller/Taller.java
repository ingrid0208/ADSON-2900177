/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package taller;
import java.util.Scanner;
/**
 *
 * @author USER
 */
public class Taller {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
     
          // Número positivo, negativo o cero
        System.out.print("Ingrese un número: ");
        int num = scanner.nextInt();
        if (num > 0) {
            System.out.println("El número es positivo.");
        } else if (num < 0) {
            System.out.println("El número es negativo.");
        } else {
            System.out.println("El número es cero.");
        }
        
        
        // Mayor de tres números
        System.out.print("Ingrese tres números: ");
        int a = scanner.nextInt(), b = scanner.nextInt(), c = scanner.nextInt();
        int mayor;
        if (a > b) {
            if (a > c) {
                mayor = a;
            } else {
                mayor = c;
            }
        } else {
            if (b > c) {
                mayor = b;
            } else {
                mayor = c;
            }
        }
        System.out.println("El número mayor es: " + mayor);
        

        // Año bisiesto
        System.out.print("Ingrese un año: ");
        int anio = scanner.nextInt();
            if (anio % 4 == 0) {
         if (anio % 100 == 0) {
             if (anio % 400 == 0) {
                  System.out.println("El año es bisiesto.");
             } else {
                 System.out.println("El año no es bisiesto.");
             }
         } else {
            System.out.println("El año es bisiesto.");
         }
     } else {
         System.out.println("El año no es bisiesto.");
     }
        

        // Calculadora simple
       System.out.print("Ingrese dos números: ");
        double num1 = scanner.nextDouble();
        double num2 = scanner.nextDouble();

        System.out.print("Ingrese operación (+, -, *, /): ");
        char operacion = scanner.next().charAt(0); 

        if (operacion == '+'){
            System.out.println("Resultado: " + (num1 + num2));
        } else if (operacion == '-') {
            System.out.println("Resultado: " + (num1 - num2));
        } else if (operacion == '*') {
            System.out.println("Resultado: " + (num1 * num2));
        } else if (operacion == '/') {
            if (num2 != 0) {
                System.out.println("Resultado: " + (num1 / num2));
            } else {
                System.out.println("Error: División por cero");
            }
        } else {
            System.out.println("Operación no válida.");
        }


        // Clasificación de triángulos
        System.out.print("Ingrese los lados del triángulo: ");
        int x = scanner.nextInt(), y = scanner.nextInt(), z = scanner.nextInt();
        if (x == y && y == z) {
            System.out.println("El triángulo es equilátero.");
        } else if (x == y || x == z || y == z) {
            System.out.println("El triángulo es isósceles.");
        } else {
            System.out.println("El triángulo es escaleno.");
        }

        // Tabla de multiplicar
        System.out.print("Ingrese un número para la tabla de multiplicar: ");
        int tabla = scanner.nextInt();
        for (int m = 1; m <= 10; m++) {
            System.out.println(tabla + " x " + m + " = " + (tabla * m));
        }

        // Suma de N números
        System.out.print("Ingrese un número N: ");
        int n = scanner.nextInt(), suma = 0;
        for (int i = 1; i <= n; i++) {
            suma += i;
        }
        System.out.println("La suma de los primeros " + n + " números es: " + suma);

        // Contador de dígitos
        System.out.print("Ingrese un número entero: ");
        int numEntero = scanner.nextInt();
        System.out.println("El número tiene " + String.valueOf(Math.abs(numEntero)).length() + " dígitos.");

        // Serie Fibonacci
        System.out.print("Ingrese la cantidad de términos de Fibonacci: ");
        int fib = scanner.nextInt(), a1 = 0, a2 = 1, siguiente;
        System.out.print("Serie: " + a1 + " " + a2);
        for (int i = 2; i < fib; i++) {
            siguiente = a1 + a2;
            System.out.print(" " + siguiente);
            a1 = a2;
            a2 = siguiente;
        }
        System.out.println();

        // Números primos en un rango
        System.out.print("Ingrese el límite para buscar primos: ");
        int limite = scanner.nextInt();
        System.out.println("Números primos hasta " + limite + ":");
        for (int i = 2; i <= limite; i++) {
            boolean esPrimo = true;
            for (int j = 2; j * j <= i; j++) {
                if (i % j == 0) {
                    esPrimo = false;
                    break;
                }
            }
            if (esPrimo) {
                System.out.print(i + " ");
            }
        }
        System.out.println();

        scanner.close();
    }
}
    
    

