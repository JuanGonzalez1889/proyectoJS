//loading
// Espera a que el DOM se cargue antes de intentar seleccionar elementos
document.addEventListener('DOMContentLoaded', () => {
  // Selecciona el botón y el elemento de loading
  const button = document.getElementById('my-button');
  const loadingEffect = document.querySelector('.loading-effect');

  // Verifica si el botón existe antes de agregar el event listener
  if (button) {
    button.addEventListener('click', () => {
      // Oculta el botón y muestra el elemento de loading
      button.style.display = 'none';
      loadingEffect.style.display = 'block';

      // Simula un tiempo de carga
      setTimeout(() => {
        // Oculta el elemento de loading y muestra el botón nuevamente
        loadingEffect.style.display = 'none';
        button.style.display = 'block';
      }, 3000);
    });
  }
});