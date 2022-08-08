<?php

namespace Drupal\example\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides a 'BlockCustomJuan3' block.
 *
 * @Block(
 *  id = "block_custom_juan3",
 *  admin_label = @Translation("Block custom juan3"),
 * )
 */
class BlockCustomJuan3 extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function build() {
    $form = \Drupal::formBuilder()->getForm('Drupal\example\Form\FormJuan');
    
    return $form;
  }

}
