<?php 

namespace Drupal\module_jorge\Controller;

class module_jorgeController {
  
  public function myPage() {
    $element = array(
        '#type' => 'markup',
        '#markup' => 'Hola Compañeros los saluda Jorge!!'
    );
    
    return $element;
  }
  
}

?>