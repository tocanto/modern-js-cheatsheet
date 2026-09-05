// ======================================================
// Tema: Manejo resiliente de promesas con Promise.allSettled()
// ECMAScript: ES2020 (ES11) / Node.js 12.9+
// Documentación: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled
// ======================================================

const cargarPerfil = Promise.resolve({ id: 101, nombre: 'Timmy' });
const cargarServicioInestable = Promise.reject(new Error('Servicio de métricas no disponible'));
const cargarPreferencias = Promise.resolve({ tema: 'oscuro', idioma: 'es' });

async function inicializarDashboard() {
  // ❌ Con Promise.all: si una promesa falla, el bloque catch captura el error
  // y se pierden los datos del perfil y preferencias.
  try {
    await Promise.all([cargarPerfil, cargarServicioInestable, cargarPreferencias]);
  } catch (error) {
    console.log('Promise.all falló por completo debido a un error.');
  }

  // ✅ Con Promise.allSettled: todas se resuelven y podemos procesar éxitos y fallos
  const resultados = await Promise.allSettled([
    cargarPerfil,
    cargarServicioInestable,
    cargarPreferencias
  ]);

  console.log('--- Promise.allSettled() ---');
  resultados.forEach((resultado, indice) => {
    if (resultado.status === 'fulfilled') {
      console.log(`Operación ${indice + 1} exitosa:`, resultado.value);
    } else {
      console.warn(`Operación ${indice + 1} falló con motivo:`, resultado.reason.message);
    }
  });
}

inicializarDashboard();

/*
Salida esperada:
Promise.all falló por completo debido a un error.
--- Promise.allSettled() ---
Operación 1 exitosa: { id: 101, nombre: 'Timmy' }
Operación 2 falló con motivo: Servicio de métricas no disponible
Operación 3 exitosa: { tema: 'oscuro', idioma: 'es' }
*/