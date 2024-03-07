## solucion 
1.
try:
        msgError = "Error, su inversión no es válida."
        msgOk = "Su Inversión fue registrada con éxito."
        msgInput = "Digite la inversión de la persona "
        msgOutput = "El porcentaje de inversión de la persona  "

        p1 = float(input(msgInput + "1: "))


        
        if p1 > 0:
            print(msgOk)
            p2 = float(input(msgInput + "2: "))
            
            if p2 > 0:
                    print(msgOk)
                    p3 = float(input(msgInput + "3: "))
                    if p3 > 0:
                            print(msgOk)
                            it = p1 + p2 + p3
                            pp1 = (p1/it)*100
                            pp2 = (p2/it)*100
                            pp3 = (p3/it)*100
                            
                            print(msgOutput + "1 es: " + str(pp1)+"%")
                            print(msgOutput + "2 es: " + str(pp2)+"%")
                            print(msgOutput + "3 es: " + str(pp3)+"%")
                            
                    else: 
                        print(msgError)
            else: 
                print(msgError)

        else: 
                print(msgError)
         
except:
        print(msgError)

2.
try:
        msgError = "Error, dato no válida."
        msgOk = "dato correcto, ok."
        msgInput = "Favor, indique la nota de la Evaluacion "
        msgInputT = "Favor, indique la nota de la Tarea "
        msgOutput = "El promedio de "

        pm1 = float(input(msgInput + "Matemáticas: "))

        
        if pm1 > 1.0 and pm1 <=5.0:
            print(msgOk)
            tm1 = float(input(msgInputT + "1: "))
            if tm1 >= 1.0 and tm1<=5.0:
                  print(msgOk)
                  
                  tm2 = float(input(msgInputT + "2: "))
                  if tm2 >= 1.0 and tm2 <=5.0:
                             print(msgOk)
                             tm3 = float(input(msgInputT + "3: "))
                            
                             if tm3 >= 1.0 and tm3 <=5.0:
                                    print(msgOk) 
                                    it = (tm1+tm2+tm3)/3;
                                    prom = (pm1*0.9)+(it*0.1)
                                    print(msgOutput + "Matemáticas es: " + str(prom))
                                    pf2 = float(input(msgInput + "Física: "))
                                    if pf2 >= 1.0 and pf2 <= 5.0:
                                                print(msgOk)
                                                tf1 = float(input(msgInputT + "1: "))
                                                if tf1 >= 1.0 and tf1 <= 5.0:
                                                        print(msgOk)
                                                        tf2 = float(input(msgInputT + "2: "))
                                                        if tf2 >= 1.0 and tf2 <= 5.0:
                                                                print(msgOk) 
                                                                it = (tf1+tf2)/2;
                                                                prom = (pf2 * 0.8)+(it *0.2)
                                                                print(msgOutput + "Física es: " + str(prom))
                                                                pq3 = float(input(msgInput + "Química: "))
                                                                if pq3 >= 1.0 and pq3 <=5.0:
                                                                        print(msgOk)
                                                                        tq1 = float(input(msgInputT + "1: "))
                                                                        if tq1 >= 1.0 and tq1 <= 5.0:
                                                                                print(msgOk)
                                                                                tq2 = float(input(msgInputT + "2: "))
                                    
                                                                                if tq2 >= 1.0 and tq2 <= 5.0:
                                                                                        print(msgOk)
                                                                                        tq3 = float(input(msgInputT + "3: "))
                                                                                        if tq3 >= 1.0 and tq3 <= 5.0:
                                                                                                print(msgOk)
                                                                                                it = (tq1+tq2+tq3)/3;
                                                                                                prom = (pq3*0.85)+(it*0.15)
                                                                                                print(msgOutput + "Química es: " + str(prom))
                                                                                                
                                                                                        else: 
                                                                                                print(msgError)  
                                                                                else:
                                                                                        print(msgError)                    
                                                                                        
                                                                        else: 
                                                                                print(msgError)
                                                                else: 
                                                                        print(msgError) 
                                                                        
                                                                
                                                        else : 
                                                                print(msgError)
                                                                
                                                        
                                                else:
                                                        print(msgError)
                                    
                                    else:
                                        print(msgError)  
                             else : 
                                   print(msgError)
               
                  else:
                       print(msgError)
            else:
                print(msgError) 
                                
        else:
                print(msgError)
except:
        print(msgError)

3.
try:
        msgError = "Error, su número no es válido."
        msgOk = "Su número fue registrada con éxito."
        msgInput = "Digite un número "
        msgOutput = "El número que usted registro es: "

        num = float(input(msgInput))
        if num < 0:
                print(msgOk)
                print(msgOutput + "el numero digitado es negativo")
        else:
            print(msgOutput + "el numero digitado es positivo")


        
except:
        print(msgError)

4.
try:
        msgError = "Error, su número no es válido."
        msgOk = "Su número fue registrada con éxito."
        msgInput = "Digite un número "
        msgOutput = "El número que usted registro es: "

        num = float(input(msgInput))
        if num > 200:
                print(msgOk)
                print(msgOutput + " mayor que 200")
        else:
            print(msgOutput + " menor que 200")


        
except:
        print(msgError)

5.
try:
        msgError = "Error, su número no es válido."
        msgOk = "Su número fue registrada con éxito."
        msgInput = "Digite un número "
        msgOutput = "El número que usted registro: "

        num = float(input(msgInput))
        if num > 50 and  num <100:
                print(msgOk)
                print(msgOutput + "Esta en el rango de 50 y 100")
        else:
            print(msgOutput + "No esta en el rango de 50 y 100")


        
except:
        print(msgError)
        
