<?php

    include('datos.php');
    include('areas.php');


    $lado = new Datos(5);
    $base = new Datos(9);
    $altura = new Datos(7);

    $area = new AreaFiguras($lado, $base, $altura);

    $response = [];
    $response['cuadrado'] = $area->areaCuadrado();
    $response['rectangulo'] = $area->areaRectangulo();
    $response['triangulo'] = $area->areaTriangulo();

    // Enviar la respuesta en formato JSON
    header('Content-Type: application/json');
    echo json_encode($response);

