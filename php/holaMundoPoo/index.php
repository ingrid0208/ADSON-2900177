<?php
   /* include('libreria/holaMundo.php');
    $holaMundo = new holaMundo();

    echo $holaMundo -> saludar();*/

    include('libreria/holaMundo.php');

    $saludo = new saludo ();
    $saludo->setSaludar(saludar:'hola mundo poo');
    
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    echo $saludo->getSaludar();
    ?>
</body>
</html>