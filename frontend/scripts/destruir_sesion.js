window.onload = () => {
  destruirSesion()
}

function destruirSesion () {
  fetch('http://localhost/variables_sesion/backend/destruir_sesion.php', {
    method: 'DELETE'
  })
  .then(data => data.json())
  .then(data => {

    if (data.ok) {
      localStorage.removeItem('sesion')
    }
  })
}
