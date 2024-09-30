<?php
include('libreria/operaciones1.php');

$operaciones = new operaciones();
$controlOperaciones = new controlOperaciones();

if (!empty($_POST['numeroUno']) && !empty($_POST['numeroDos'])){
        $numeroUno = $_POST['numeroUno'];
        $numeroDos = $_POST['numeroDos'];

        
    $operaciones->setnumeroUno($numeroUno);
    $operaciones->setnumeroDos($numeroDos);
    
    }else{
        $numeroUno = 0;
        $numeroDos = 0;
    
    }

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <link rel="stylesheet" href="../public/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="../public/css/style.css">
    <link rel="stylesheet" href="css/estilos.css">

</head>
<body>
<div class="container mt-5 mb-5">
        <div class="col-10 row forma">
            <div class="formulario col-6 colorear2">

            <form class="row g-3 needs-validation justify-content-center" action="" method="post">
                <div class="col-md-8 user-box">
                    <label for="numeroUno" class="form-label">Digite un numero: </label>
                    <input type="number" step="any" class="form-control" id="numeroUno" name="numeroUno" >
                    <div class="valid-feedback">
                        
                    </div>
                </div>
                <div class="col-md-8 user-box">
                    <label for="numeroDos" class="form-label">Digite un numero: </label>
                    <input type="number" step="any" class="form-control" id="numeroDos" name="numeroDos" >
                    <div class="valid-feedback">
                    
                    </div>
                </div>

                <div class="col-12 text-center">
                <button class="btn btn-primary colorear1" type="submit"><i class="fa-solid fa-dragon"></i> Enviar</button>
                </div>
            
            </form>
        </div>

        <div class="col-4 respuesta colorear2">
            <div id="pantalla">

                    <p>Suma:  <?= $controlOperaciones->suma($operaciones->getnumeroUno(), $operaciones->getnumeroDos()) ?></p>
                    <p>Resta: <?= $controlOperaciones->resta($operaciones->getnumeroUno(), $operaciones->getnumeroDos()) ?></p>
                    <p>Multiplicacion: <?= $controlOperaciones->multiplicacion($operaciones->getnumeroUno(), $operaciones->getnumeroDos()) ?></p>
                    <p>Division: <?= $controlOperaciones->division($operaciones->getnumeroUno(), $operaciones->getnumeroDos()) ?></p>
            </div>
        </div>
    </div>
</div>
</body>
</html>


