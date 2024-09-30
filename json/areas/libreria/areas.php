<?php

    class AreaFiguras{


        private $lado;
        private $base;
        private $altura;

        public function __construct(Datos $lado, Datos $base, Datos $altura) {
            $this->lado = $lado;
            $this->base = $base;
            $this->altura = $altura;
        }

        public function areaCuadrado() {
            return  pow($this->lado->getValor(), 2);
        }

        public function  areaRectangulo(){
            return $this->base->getValor() * $this->altura->getValor();
        }

        public function  areaTriangulo(){
            return ($this->base->getValor() * $this->altura->getValor()) / 2;
        }
    }