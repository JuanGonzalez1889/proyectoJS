let popup = document.querySelector(".popup");
let form = document.querySelector(".form");
let okButton = document.querySelector("#okButton");

function openPopup() {
  popup.style.display = "flex";
}

function closePopup() {
  popup.style.display = "none";
  form.reset();
}

form.addEventListener("submit", function (event) {
  event.preventDefault(); // evitar que el formulario se envíe automáticamente
  if (validarFormulario()) {
    // el formulario es válido, enviar y mostrar el popup
    // Aquí puedes agregar el código para enviar el formulario mediante AJAX
    openPopup();
  }
});

okButton.addEventListener("click", closePopup);
