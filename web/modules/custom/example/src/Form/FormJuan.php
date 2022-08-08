<?php

namespace Drupal\example\Form;

use Drupal\Core\Form\FormBase;
use Drupal\Core\Form\FormStateInterface;

/**
 * Class FormJuan.
 */
class FormJuan extends FormBase {

  /**
   * {@inheritdoc}
   */
  public function getFormId() {
    return 'form_juan';
  }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state) {

    $form['nombre'] = [
      '#type' => 'textfield', 
      '#title' => t('Nombre'), 
      '#size' => 60, 
      '#maxlength' => 128, 
      '#required' => TRUE,
    ];

    $form['mail'] = [
      '#type' => 'email', 
      '#title' => t('Email'), 
      '#required' => TRUE,
    ];

    $form['image'] = [
      '#type' => 'file', 
      '#title' => t('Foto'), 
    ];

    $form['descripcion'] = [
      '#type' => 'textarea', 
      '#title' => t('Description'),
      '#required' => TRUE,
    ];

    $form['mensaje'] = [
      '#type' => 'textarea', 
      '#title' => t('Additional message'),
      '#required' => TRUE,
    ];

    $form['submit'] = [
      '#type' => 'submit',
      '#value' => $this->t('Submit'),
    ];

    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function validateForm(array &$form, FormStateInterface $form_state) {
    foreach ($form_state->getValues() as $key => $value) {
      // @TODO: Validate fields.
    }
    parent::validateForm($form, $form_state);
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    // Display result.

    //obtenemos los valores
    $nombre = $form_state->getValue('nombre');
    $email = $form_state->getValue('mail');
    $image = $form_state->getValue('image') ?? null;
    $descripcion = $form_state->getValue('descripcion');
    $mensaje = $form_state->getValue('mensaje');


    return $this->messenger()->addStatus($this->t('Your info @nombre and @correo has been updated',
      ['@nombre'=>$nombre,'@correo' =>$email]));
   
  
  }

}
