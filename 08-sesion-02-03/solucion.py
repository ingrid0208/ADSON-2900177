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
