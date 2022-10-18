<?php
namespace Drupal\test_module_mario\Controller;
use Drupal\Core\Controller\ControllerBase;
 
class Test_module_marioController extends ControllerBase {
     
/* Método acción content devuelve directamente un contenido en html,
este método será usado en una ruta */
  public function content() {
    return array(
        '#type' => 'markup',
        '#markup' => $this->t('Hola, Módulo personalizado de Mario !!'),
    );
  }
   
}
 
