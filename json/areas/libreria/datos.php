<?php

    class Datos{
        private $valor;

        public function __construct($valor) {
            $this->valor = $valor;
        }

        public function setValor(){
            $this-> valor;
        }

        public function getValor(){
            return $this->valor;
        }
    }