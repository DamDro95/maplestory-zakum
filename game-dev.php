<?php
/**
 * Plugin Name: DDSoftware Game Dev
 * Plugin URI: https://ddsoftware.tech/
 * Description: Games Created by Damian Drozd
 * Version: 0.0.1
 * Author: Damian Drozd
 * Text Domain: ddsoftware
 */

function my_custom_block_register() {
  register_block_type(__DIR__, [
    'render_callback' => 'my_custom_block_render'
  ]);
}

add_action('init', 'my_custom_block_register');

function my_custom_block_render($attributes, $content) {
  ob_start();
  include __DIR__ . '/render.php';
  return ob_get_clean();
}
