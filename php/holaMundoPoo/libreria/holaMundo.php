<?php
    /*class holamundo{
        public $saludo;
        public function saludar() {
            $this->saludo="Hola Mundo";
            return $this->saludo;
        }
    }
        */
        class saludo{
            private $saludar;
    
            public function setSaludar($saludar){
                $this->saludar = $saludar;
            }
            
            public function getSaludar(){
            return $this->saludar;
            }
        }
?>