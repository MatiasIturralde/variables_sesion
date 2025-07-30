window.onload = () => {
  getSesion()
}

function getSesion () {
  fetch('http://localhost/variables_sesion/backend/ver_sesion.php')
    .then(res => res.json())
    .then(data => {
      // console.log('data', data)
      if (data.hasSesion) {
        showSession(data.sesion, data.id, data.count)
      } else {
        showNoSession()
      }
    })
}

function showSession (sesion, id, count) {
  // alert('session')
  console.log('sesion:', sesion)
  const res = document.querySelector('#res')
  const entries = [...Object.entries(sesion)]
  console.log(entries)
  let list = ''

  entries.map(([key, value]) => {
    list += `
      <li>
        <strong>${key}:</strong>
        ${value}
      </li>
    `
  })
  
  res.innerHTML = `
    <div class="sesion-info">
      <h2>Variables encontradas:</h2>
      <ul>${list}</ul>
      
      <p><strong>Total de variables:</strong> ${count}</p>
      <p><strong>ID de sesión:</strong> ${id}</p>
  </div>
  `
}

function showNoSession () {
  // alert('no session')
  const res = document.querySelector('#res')
  res.innerHTML = `
    <div class="no-sesion">
      <h2>No hay variables de sesión</h2>
      <p>Aún no se han creado variables de sesión. Puedes crear algunas llenando el formulario.</p>
    </div>
  `
}