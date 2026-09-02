// ======================================================
// Tema: Cancelación de peticiones y eventos con AbortController
// Estándar: Web API / DOM / Soportado en Node.js 15+ y navegadores modernos
// Documentación: https://developer.mozilla.org/es/docs/Web/API/AbortController
// ======================================================

const controller = new AbortController();
const { signal } = controller;

// 1. Cancelación de peticiones fetch
async function cargarDatos() {
  try {
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/todos/1', { signal });
    const datos = await respuesta.json();
    console.log('Datos cargados:', datos);
  } catch (error) {
    if (error.name === 'AbortError') {
      console.log('--- AbortController ---');
      console.log('Petición cancelada exitosamente.');
    } else {
      console.error('Error de red:', error);
    }
  }
}

cargarDatos();

// Simular cancelación inmediata (ej. desmontado de componente o cambio de ruta)
controller.abort();

// 2. Limpieza de Event Listeners con signal (en entorno DOM)
// const boton = document.querySelector('#mi-boton');
// boton.addEventListener('click', () => console.log('Click!'), { signal });
// controller.abort(); // Remueve el listener automáticamente sin removeEventListener