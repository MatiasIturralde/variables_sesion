<?php
require_once __DIR__ . '/../modelo/sesion.php';

$sesionModel = new Sesion();

function actualizarDatos ($post) {
  global $sesionModel;
  $sesionModel->actualizar($post);
}
?>
