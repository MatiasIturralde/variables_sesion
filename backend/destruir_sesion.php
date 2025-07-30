<?php
// Iniciar la sesión
session_start();

// Destruir todas las variables de sesión
session_destroy();

echo json_encode([
  "ok" => true
]);
?>
