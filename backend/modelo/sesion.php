<?php
class Sesion {
  public function actualizar ($post) {
    // Guardar los datos del formulario en variables de sesión
    $_SESSION['nombre'] = $post['nombre'];
    $_SESSION['email'] = $post['email'];
    $_SESSION['edad'] = $post['edad'];
    $_SESSION['fecha_registro'] = date('Y-m-d H:i:s');
  }
}
?>