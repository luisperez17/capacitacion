<?php 

namespace Drupal\module_luis\Controller;

class module_luisontroller {
  
  public function myPage() {
    $element = array(
        '#type' => 'markup',
        '#markup' => 'Hola Compañeros los saluda Jorge!!'
    );
    
    return $element;
  }
  
}

?>