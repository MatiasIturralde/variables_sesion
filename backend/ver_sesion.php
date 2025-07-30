<?php
// Iniciar la sesión
session_start();

if (!empty($_SESSION)) {
  // hay sesion
  echo json_encode([
    "hasSesion" => true,
    'sesion' => $_SESSION,
    'id' => session_id(),
    'count' => count($_SESSION)
  ]);
} else {
  echo json_encode([
    "hasSesion" => false
  ]);
}
?>
