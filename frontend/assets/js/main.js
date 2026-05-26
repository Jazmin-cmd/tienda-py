const API_URL = 'http://localhost:8080/api';

// Cookie banner
document.addEventListener('DOMContentLoaded', () => {
  const banner = document.getElementById('cookieBanner');
  const aceptar = document.getElementById('cookieAceptar');
  const rechazar = document.getElementById('cookieRechazar');

  if (!localStorage.getItem('cookieDecision')) {
    banner.classList.remove('cookie-banner--oculto');
  }

  aceptar.addEventListener('click', () => {
    localStorage.setItem('cookieDecision', 'aceptado');
    banner.classList.add('cookie-banner--oculto');
  });

  rechazar.addEventListener('click', () => {
    localStorage.setItem('cookieDecision', 'rechazado');
    banner.classList.add('cookie-banner--oculto');
  });
});