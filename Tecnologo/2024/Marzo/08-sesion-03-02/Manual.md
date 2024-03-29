
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

![Screenshot of a comment on a GitHub issue showing an image, added in the Markdown, of an Octocat smiling and raising a tentacle.](https://myoctocat.com/assets/images/base-octocat.svg)

## LINEAS
para agregar una línea divisoria haremos uso del guión `(-)`, escribiendo tres consecutivos.

---

## GENERACION DE TABLAS 
Markdown también permite generar tablas de una manera rápida y sencilla 

| Tables   |      Are      |  Cool |
|----------|:-------------:|------:|
| col 1 is |  left-aligned | $1600 |
| col 2 is |    centered   |   $12 |


las barras verticales delimitan la celda. justo debajo de los encabezados haremos uso del guión para indicar que comenzamos con los valores de la tabla. A este guión podemos añadirle los dos puntos `(:)`a ambos lados para indicar que el texto estará centrado,o al final para indicar alineación a la derecha.

|Tables|Are|Cool|
|-|:-:|-:|
|col 1 is|left-aligned|$1600|
|col 2 is|centered|$12|

## USAR EMOJI
Puedes agregar emoji a la escritura escribiendo :EMOJICODE:, dos puntos seguidos del nombre del emoji.

@octocat :+1: This PR looks great - it's ready to merge! :shipit:

Captura de pantalla de GitHub Markdown que muestra cómo los códigos emoji para +1 y shipit se muestran visualmente como emoji.

Escriba : mostrará una lista de emojis sugeridos. La lista se filtrará a medida que escriba, por lo que una vez que encuentre el emoji que está buscando, pulse Tab o Entrar para completar el resultado resaltado.

Para obtener una lista completa de los códigos y emoji disponibles, consulta la hoja de referencia rápida de los emoji.

## NOTAS AL PIE
Puedes agregar notas al pie para tu contenido si utilizas esta sintaxis de corchetes:

Here is a simple footnote[^1].

A footnote can also have multiple lines[^2].

``[^1]: My reference.``

``[^2]: To add line breaks within a footnote, prefix new lines with 2 spaces.``
  This is a second line.
  
 ## ALERTAS
Las alertas son una extensión Markdown basada en la sintaxis blockquote que puede utilizar para resaltar la información crítica. En GitHub, se muestran con colores e iconos distintivos para indicar la importancia del contenido.

Deben usarse las alertas solo cuando sean cruciales para el éxito del usuario y limitarlas a una o dos por artículo para evitar sobrecargar al lector. Además, debe evitarse colocar alertas consecutivamente. Las alertas no se pueden anidar dentro de otros elementos.

Para agregar una alerta, debe usarse una línea blockquote especial que especifique el tipo de alerta, seguida de la información de alerta en un blockquote estándar. Existen cinco tipos de alertas.

> [!NOTE]
> Useful information that users should know, even when skimming content.

> [!TIP]
> Helpful advice for doing things better or more easily.

> [!IMPORTANT]
> Key information users need to know to achieve their goal.

> [!WARNING]
> Urgent info that needs immediate user attention to avoid problems.

> [!CAUTION]
> Advises about risks or negative outcomes of certain actions.

## OCULTAR EL CONTENIDO CON COMENTARIOS 

Puedes decirle a GitHub que oculte el contenido del lenguaje de marcado interpretado colocando el contenido en un comentario de HTML.

``<!-- This content will not appear in the``

## IGNORAR FORMATO DE MARKDOWN 

Puede pedirle a GitHub que ignore (u omita) el formato de Markdown escribiendo \ antes del carácter de Markdown.

`Let's rename \*our-new-project\* to \*our-old-project\*.`





