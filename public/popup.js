let popup = document.querySelector(".popup");
let form = document.querySelector(".form");
let okButton = document.querySelector("#okButton");


function openPopup() {
  popup.style.display = "flex";
}

//function closePopup() {
//  popup.style.display = "none";
//  form.reset();
//  let contenedor = document.getElementById("contenedor_carga");
//  contenedor.style.visibility = "visible";
//  contenedor.style.opacity = "1";
//}
function closePopup() {
  let contenedorCarga = document.getElementById("contenedor_carga");
  popup.style.display = "none";
  contenedorCarga.style.visibility = "visible";
  contenedorCarga.style.opacity = "1";
  form.reset();
  setTimeout(function () {
    contenedorCarga.style.visibility = "hidden";
    contenedorCarga.style.opacity = "0";
  }, 1000); // 3000 es el tiempo en milisegundos (3 segundos)
}
form.addEventListener("submit", function (event) {
  event.preventDefault(); // evitar que el formulario se envíe automáticamente
  if (validarFormulario()) {
    // el formulario es válido, enviar y mostrar el popup
    // Aquí puedes agregar el código para enviar el formulario mediante AJAX
    openPopup();
  }
});

okButton.addEventListener("click", closePopup)
window.onload = function () {
  let contenedor = document.getElementById("contenedor_carga");
  contenedor.style.visibility = "hidden";
  contenedor.style.opacity = "0";
};

