<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

// Iniciar la sesión - SIEMPRE debe ir al principio
session_start();

require_once __DIR__ . '/controlador/sesiones.php';

// echo "hola";
// Verificar si se enviaron datos por POST
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    actualizarDatos($_POST);
    echo json_encode([
        "ok" => true
    ]);
}
?>
