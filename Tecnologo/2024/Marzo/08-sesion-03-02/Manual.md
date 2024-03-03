
## QUE ES MARkDOWN
como un lenguaje cuya finalidad es permitirnos a escribir(y formatear) texto plano de manera rápida y sencilla
## PRIMEROS PASOS 
# Encabezado 
 se define con el carácter almohadilla (#), seguido a un espacio en blanco el número de almohadillas indicara el tipo de encabezado es decir,```una almohadilla equivaldría en HTML a <h1> dos almohadilla equivaldría a un <h2>,``` y así sucesivamente

```
## encabezado h1
## encabezado h2 
### encabezado h3
```
## CITAS 
podemos indicar que un fragmento de texto corresponde a una cita simplemente anteponiendo el carácter "mayor que"(>).
> Este texto será una cita.
> 
## CURSIVA Y NEGRITA 
si rodeamos una palabra o frase con un símbolo asterisco (*),sin existir espacios entre ambos,estableceremos el texto en cursiva 
 *`cursiva`*
 
para indicar que el texto esta en negrita lo haremos con dos asteriscos 
 **`negrita`** 
 
si queremos aplicar tanto negrita como cursiva tendremos que escribir tres asterisco consecutivo.
***`negrita cursiva`***

# FRAGMENTO DE CODIGO 
podemos definir un trozo de código utilizando el acento grave ``(`)``que rodeará al fragmento de código entre sí.
`línea de codigo`

pero si lo queremos es definir un párrafo completo como código escribiremos tres acentos graves consecutivos y, además, podemos definir el lenguaje que estamos usando.

```php
<?php
   echo "fragmento largo de código
 ?>
```
## LISTA
nos permite definir definir lista ordenadas, no ordenadas y anidar una listas dentro de otras. para las listas no ordenadas bastará con escribir un asterisco `(*)`y luego separar el contenido de las lista con un espacio en blanco.

``* primer elemento de la lista``

``* segundo elemento de la lista``

en el caso de las lista ordenadas escribiremos el número seguido de un punto 

``1. primer elemento``

``2. segundo elemento ``
## ENLACES
podemos generar hipervinculos indicando el titulo del enlace entre corchetes y el link entre paréntesis (sin aplicar ningún espacio en blanco entre ambos).

[Visita mi web](https://github.com)

## IMAGENES 
la sintaxis pata incrustar imágenes es muy parecida a la anterior, simplemente antepondremos el cierre de exclamación `(!)` al formato anterior 
en este caso, entre corchetes se indica el texto alternativo de la imagen y entre paréntesis la URL de la misma.



