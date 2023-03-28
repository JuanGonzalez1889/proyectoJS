function validarNombre() {
  let nombre = document.getElementById("nombre");
  let nombreError = document.getElementById("nombre-error");
  if (nombre.value.length === 0) {
    nombreError.textContent = "Por favor ingrese su nombre.";
    nombreError.style.display = "block";
    return false;
  } else {
    nombreError.style.display = "none";
    return true;
  }
}

function validarEmail() {
  let email = document.getElementById("email");
  let emailError = document.getElementById("email-error");
  let re = /\S+@\S+\.\S+/;
  if (!re.test(email.value)) {
    emailError.textContent = "Por favor ingrese un email válido.";
    emailError.style.display = "block";
    return false;
  } else {
    emailError.style.display = "none";
    return true;
  }
}

function validarConsulta() {
  let consulta = document.getElementById("consulta");
  let consultaError = document.getElementById("consulta-error");
  if (consulta.value.length === 0) {
    consultaError.textContent = "Por favor ingrese su consulta.";
    consultaError.style.display = "block";
    return false;
  } else {
    consultaError.style.display = "none";
    return true;
  }
}

function validarFormulario() {
  if (validarNombre() && validarEmail() && validarConsulta()) {
    return true;
  } else {
    return false;
  }
}
