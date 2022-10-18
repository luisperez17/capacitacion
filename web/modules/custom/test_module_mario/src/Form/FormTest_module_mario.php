<?php

	namespace Drupal\test_module_mario\Form;

	use Drupal\Core\Form\FormBase;
	use Drupal\Core\Form\FormStateInterface;

	/**
	 * An test_module_mario class form.
	 */
	class FormTest_module_mario extends FormBase {

	  /**
	   * {@inheritdoc}
	   */
	  public function getFormId() {
	    return 'test_module_mario_form';
	  }

	  /**
	   * {@inheritdoc}
	   */
	  public function buildForm(array $form, FormStateInterface $form_state) {
	    $form['#attached']['library'][] = 'test_module_mario/test_module_mario-libraries';
	    $form['name'] = [
	      '#type' => 'textfield', 
	      '#title' => t('Name'), 
	      '#size' => 60, 
	      '#maxlength' => 128, 
	      '#required' => TRUE,
	    ];

	    $form['lastname'] = [
	      '#type' => 'textfield', 
	      '#title' => t('Lastname'), 
	      '#size' => 60, 
	      '#maxlength' => 128, 
	      '#required' => TRUE,
	    ];

		$form['sex'] = [
            '#type' => 'select', 
            '#title' => t('Sexo'), 
			'#options' => array("","MASCULINO","FEMENINO"),
        ];

        $form['age'] = [
            '#type' => 'number', 
            '#title' => t('Age'), 
            '#size' => 60, 
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
	    $name = $form_state->getValue('name');
	    $lastname = $form_state->getValue('lastname');
	  }


	  /**
	   * {@inheritdoc}
	   */
	  public function submitForm(array &$form, FormStateInterface $form_state) {
	    $name = $form_state->getValue('name');
	    $lastname = $form_state->getValue('lastname');
	  }
	}