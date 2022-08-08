<?php

namespace Drupal\example\Plugin\Block;

use Drupal\Core\Block\BlockBase;


  /**
   * {@inheritdoc}
   */

  class BlockJuan extends BlockBase{
    public function build() {
      exit; 
      $form = \Drupal::formBuilder()->getForm('Drupal\example\Form\FormJuan');
      var_dump($form);
      
      return $form;
    }



}
