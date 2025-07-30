function getSesion () {
  fetch('http://localhost/variables_sesion/backend/ver_sesion.php')
    .then(data => data.json())
    .then(data => {
      console.log('data', data.sesion)
      if (data.hasSesion) {
        showSesion(data.sesion, data.id)
      } else {
        showNoSesion()
      }
    })
}

window.onload = () => {
  getSesion()
}

function showSesion (sesion, id) {
  const res = document.querySelector('#res')
  res.innerHTML = `
  <div class="datos">
    <h2>Información guardada:</h2>
    <ul>
      <li><strong>Nombre:</strong> ${sesion.nombre}</li>
      <li><strong>Email:</strong> ${sesion.email}</li>
      <li><strong>Edad:</strong> ${sesion.edad} años</li>
      <li><strong>Fecha de registro:</strong> ${sesion.fecha_registro}</li>
    </ul>
    <p><strong>ID de sesión:</strong> ${id}</p>
  </div>

  <div class="codigo">
    <h3>Código PHP utilizado:</h3>
    <p>
      Es demasiado php para mostrar acá
    </p>
  </div>
  `
}

function showNoSesion () {
  const res = document.querySelector('#res') 
  res.innerHTML = `
    <p>No hay datos de sesión. <a href="formulario.html">Vuelve al formulario</a></p>
  `
}