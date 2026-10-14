// ======================================================
// Tema: Transiciones de estado fluidas con View Transitions API
// Compatibilidad: Navegadores modernos (Chrome 111+, Edge 111+, Safari 18+)
// Documentación: https://developer.mozilla.org/es/docs/Web/API/Document/startViewTransition
// ======================================================

const contenedor = document.createElement('div');
contenedor.id = 'vista-principal';
contenedor.textContent = 'Estado Inicial: Vista de Cuadrícula';
document.body.appendChild(contenedor);

// ❌ Antes: Cambio directo (corte brusco) o cálculos complejos con getBoundingClientRect()
function cambiarEstadoSinAnimacion(texto) {
  contenedor.textContent = texto;
}

// ✅ Ahora: Transición nativa interpolada por el navegador con fallback seguro
async function actualizarVistaConTransicion(nuevoTexto) {
  // Mejora progresiva: si el navegador no soporta la API, muta el DOM directamente
  if (!document.startViewTransition) {
    contenedor.textContent = nuevoTexto;
    return;
  }

  // Inicia la transición de vista
  const transicion = document.startViewTransition(() => {
    // Mutación síncrona o asíncrona del DOM
    contenedor.textContent = nuevoTexto;
  });

  try {
    // Esperar a que los pseudo-elementos de transición estén creados y listos para animar
    await transicion.ready;
    console.log('--- View Transitions API ---');
    console.log('Animación en curso...');

    // Esperar a que la animación culmine por completo
    await transicion.finished;
    console.log('Transición finalizada. Nuevo estado:', contenedor.textContent);
  } catch (error) {
    console.error('La transición fue omitida o cancelada:', error);
  }
}

// Ejecutar actualización
actualizarVistaConTransicion('Estado Actualizado: Vista de Detalle');

/*
Salida esperada:
--- View Transitions API ---
Animación en curso...
Transición finalizada. Nuevo estado: Estado Actualizado: Vista de Detalle
*/