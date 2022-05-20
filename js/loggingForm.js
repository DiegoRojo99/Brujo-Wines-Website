const btn = document.getElementById('boton-mostrar-formulario');

btn.addEventListener('click', () => {
  const form = document.getElementById('form-to-use');

  if (form.style.display === 'none') {
    // 👇️ this SHOWS the form
    form.style.display = 'block';
  } else {
    // 👇️ this HIDES the form
    form.style.display = 'none';
  }
});

const iconX = document.getElementById('x-icon');

iconX.addEventListener('click', () => {
  const form = document.getElementById('form-to-use');

  if (form.style.display === 'none') {
    // 👇️ this SHOWS the form
    form.style.display = 'block';
  } else {
    // 👇️ this HIDES the form
    form.style.display = 'none';
  }
});