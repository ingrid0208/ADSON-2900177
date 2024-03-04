# Primer ejercicio 
  ma = 0,0
  fe = 0,0
  er = 0,0
  ma1 = 0,0
  fe1 = 0,0
  er1 = 0,0
  totalinvercion = 0,0

  ma = float(input("digite la inversion de Maria"))
  fe = float(input("digite la inversion de Felipe"))
  er = float(input("digite la inversion de Erika"))

  totalinversion = ma + fe+ er
  ma1 = (ma * 100)/totalinversion
  fe1 = (fe * 100)/totalinversion
  er1 = (er * 100)/totalinversion

  print("el valor total de la inversion es: ", srt(totalinversion))
  print("el porcenteje de inversion de Maria es: ",ma1," % ")
  print("el porcenteje de inversion de Felipe es: ",fe1," % ")
  print("el porcenteje de inversion de Erika es: ",er1," % ")

# segundo ejercicio
      a1 = 0.0;
      b1 = 0.0;
      c1 = 0.0;
      d1 = 0.0;
      e = 0.0;
      f = 0.0;
      g2 = 0.0;
      h2 = 0.0;
      i2 = 0.0;
      j = 0.0;
      k = 0.0;
      m = 0.0;
      n = 0.0;
      ñ = 0.0;
      o = 0.0;
      p = 0.0;

      a1 = float(input("digite la nota de la evaluacion"))
      b1 = float(input("digite la nota de la primera tarea"))
      c1 = float(input("digite la nota de la segunda tarea"))
      d1 = float(input("digite la nota de la tercera tarea"))

       e = (b1 + c1 + d1)/3
      f = (a1 * 0,9) + (e * 0,1)

      print("el promedio de matematicas es",f)
      print("la calificacion de fisica se obtiene de la siguiente manera:Examen 30% y el promedio de 2 tareas el 20%",)

      g2 = float(input("digite la nota de la evaluacion"))
      h2 = float(input("digite la nota de la primera tarea"))
      i2 = float(input("digite la nota de la segunda tarea"))

      i2 = (g2 + h2)/2;
      k = (f * 0,8) + (i2 * 0,2);

      print("el promedio de fisica es",k)
      print("la calificacion de quimica se obtiene de la siguiente manera:Examen 85% y el promedio de 3 tareas el 15%",)

            
      
# Tercer ejercicio
    num = " "
    num = float(input("digite un numero:"))
    if(num < 0):
    print("El numero",num,"es negativo",
    else:
    print("El numero",num,"es positivo",

# Cuarto ejercicio
     num = float(input("digiite un numero:"))
    if(num > 200):
    print("el numero digitado es mayor que 200")
    else:
    print("el numero digitado es menor que 200")

# Quinto ejercicio 
    num = float(input("digite un numero:"))
    if(50 < num < 100):
    print("el numero digitado esta en el rango de 50 y 100")
    else:
    print("el numero digitado no esta en el rango de 50 y 100")
