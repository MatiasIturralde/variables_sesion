function procesar(e) {
  e.preventDefault()
  const form = new FormData(e.target)
  console.log(form, form.get('nombre'))
  fetch('http://localhost/variables_sesion/backend/procesar.php', {
    method: 'POST',
    body: form
  })
    .then(res => res.json())
    .then((data) => {
      console.log('data', data)
      if (data.ok) {
        location.assign('http://localhost/variables_sesion/frontend/procesar.html')
      }
    })
}