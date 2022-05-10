const btn = document.getElementById('boton-mostrar-formulario');

btn.addEventListener('click', () => {
  const form = document.getElementById('form-to-use');
  console.log(form.style.display);

  if (form.style.display === 'none') {
    // 👇️ this SHOWS the form
    form.style.display = 'block';
    console.log('2');
  } else {
    // 👇️ this HIDES the form
    form.style.display = 'none';
    console.log('3');
  }
});

const iconX = document.getElementById('x-icon');

iconX.addEventListener('click', () => {
  const form = document.getElementById('form-to-use');
  console.log(form.style.display);

  if (form.style.display === 'none') {
    // 👇️ this SHOWS the form
    form.style.display = 'block';
    console.log('2');
  } else {
    // 👇️ this HIDES the form
    form.style.display = 'none';
    console.log('3');
  }
});