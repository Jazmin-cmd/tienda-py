export function validarEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function validarTelefono(telefono) {
  return /^[0-9]{7,15}$/.test(telefono);
}

export function mostrarError(inputId, mensajeId, mensaje) {
  const input = document.getElementById(inputId);
  const msg = document.getElementById(mensajeId);
  input.classList.add('contacto__input--error');
  msg.textContent = mensaje;
  msg.classList.add('contacto__error--visible');
}

export function limpiarError(inputId, mensajeId) {
  const input = document.getElementById(inputId);
  const msg = document.getElementById(mensajeId);
  input.classList.remove('contacto__input--error');
  msg.classList.remove('contacto__error--visible');
}