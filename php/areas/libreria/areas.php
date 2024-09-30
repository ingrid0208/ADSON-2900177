
<?php
    class area {
        public $cuadrado; 
        public $rectangulo;
        public $triangulo; 
        public $lado;
        public $baseRectangulo; 
        public $alturaRectangulo;
        public $baseTriangulo; 
        public $alturaTriangulo;

        public function cuadrado($ladoP,){
            $this -> lado = $ladoP;
            $this -> cuadrado = $ladoP * $ladoP;
            return $this -> cuadrado;
        }
        public function rectangulo($baseRectan,$alturaRectan){
            $this -> baseRectangulo = $baseRectan;
            $this -> alturaRectangulo= $alturaRectan;
            $this -> rectangulo = $baseRectan * $alturaRectan;
            return $this -> rectangulo;
        }
        public function triangulo($baseTrian,$alturaTrian){
            $this -> baseTriangulo = $baseTrian;
            $this -> alturaTriangulo= $alturaTrian;
            $this -> triangulo = ($baseTrian * $alturaTrian)/2;
            return $this -> triangulo;
        }
    }

?>