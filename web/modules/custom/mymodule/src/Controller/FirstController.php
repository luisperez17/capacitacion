<?php

/**
 * @file
 * Generates markup to be displayed. FUnctionality in this Controller is
 * wired to Drupal in mymodule.routing.yml.
 */

namespace Drupal\mymodule\Controller;

use Drupal\Core\Controller\ControllerBase;

class FirstController extends ControllerBase {

  /**
   *
   */
  public function simpleContent() {
    return [
      '#markup' => $this->t('Hello Drupal World'),
    ];
  }
}
