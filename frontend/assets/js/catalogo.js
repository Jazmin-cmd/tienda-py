const API_URL = 'http://localhost:8080/api';

async function cargarProductos() {
  const grilla = document.getElementById('grilla');
  const cargando = document.getElementById('cargando');
  const error = document.getElementById('error');

  try {
    const response = await fetch(`${API_URL}/productos`);

    if (!response.ok) throw new Error('Error del servidor');

    const productos = await response.json();

    cargando.classList.add('d-none');

    if (productos.length === 0) {
      grilla.innerHTML = `
        <div class="col-12 text-center py-5">
          <i class="bi bi-box" style="font-size:3rem; color:var(--color-acento)"></i>
          <p class="mt-3" style="color:var(--color-secundario)">No hay productos disponibles aún.</p>
        </div>`;
      return;
    }

    grilla.innerHTML = productos.map(p => crearCardProducto(p)).join('');

  } catch (err) {
    cargando.classList.add('d-none');
    error.classList.remove('d-none');
    console.error('Error al cargar productos:', err);
  }
}

function crearCardProducto(producto) {
  const imagen = producto.rutaImagen
    ? producto.rutaImagen
    : 'assets/images/productos/default.webp';

  return `
    <div class="col-sm-6 col-lg-4">
      <article class="producto-card h-100">
        <img
          src="${imagen}"
          alt="${producto.nombre}"
          class="producto-card__imagen"
          loading="lazy"
        >
        <div class="producto-card__body">
          <p class="producto-card__marca">${producto.marca ?? 'Sin marca'}</p>
          <h2 class="producto-card__nombre">${producto.nombre}</h2>
          <p style="font-size:var(--texto-sm); color:rgba(245,240,235,0.6); margin: 8px 0">
            ${producto.descripcion ?? ''}
          </p>
          <p class="producto-card__precio">₲ ${Number(producto.precio).toLocaleString('es-PY')}</p>
          <button class="producto-card__btn">
            <i class="bi bi-bag-plus me-2"></i>Consultar
          </button>
        </div>
      </article>
    </div>`;
}

document.addEventListener('DOMContentLoaded', cargarProductos);