<?php
    include('libreria/areas.php');
    $operaciones = new area();

    $numeroUno = 4;
    $numeroDos = 6;

    
    echo 'Cuadrado: '.$operaciones -> cuadrado($numeroUno,) .'<br>';
    echo 'Rectangulo : '.$operaciones -> rectangulo($numeroUno,$numeroDos ) .'<br>';
    echo 'Triangulo: '.$operaciones -> triangulo($numeroUno,$numeroDos ) .'<br>';

?>