<?php

namespace Drupal\example\Plugin\Block;

use Drupal\Core\Block\BlockBase;

class BlockCustomJuan extends BlockBase{
    public function build() {

        return array (
          '#prefix' => '
', '#suffix' => '
', '#markup' => $this->t('Hello World!'), '#cache' => ['max-age' => 0], ); 

} 

}


