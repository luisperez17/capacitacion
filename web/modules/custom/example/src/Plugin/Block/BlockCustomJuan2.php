<?php

namespace Drupal\example\Plugin\Block;

use Drupal\Core\Block\BlockBase;


  /**
   * {@inheritdoc}
   */

  class BlockCustomJuan2 extends BlockBase{
  public function build() {
    /*return [
      \Drupal::formBuilder()->getForm('\Drupal\example\Form\FormJuan'),
      '#cache' => [
        'max-age' => 0,
      ],

    ];*/

    $form = \Drupal::formBuilder()->getForm('Drupal\example\Form\FormJuan');

    return $form;
  }
}

