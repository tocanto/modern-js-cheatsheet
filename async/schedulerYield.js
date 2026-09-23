// ======================================================
// Tema: Concurrencia cooperativa y desbloqueo de UI con scheduler.yield()
// Compatibilidad: Chrome 129+ / Edge 129+ / Polyfillable en Web APIs
// Documentación: https://developer.mozilla.org/es/docs/Web/API/Scheduler/yield
// ======================================================

// Simulación de cálculo pesado
function simularTrabajoCostoso(id) {
  const inicio = performance.now();
  while (performance.now() - inicio < 25) {
    // Bloquea intencionalmente por 25ms
  }
}

// ❌ Antes: Bucle monolítico que bloquea el hilo principal durante segundos
async function procesarLoteBloqueante(items) {
  for (const item of items) {
    simularTrabajoCostoso(item);
  }
}

// ✅ Ahora: Troceado de tareas no bloqueante con scheduler.yield()
async function procesarLoteCooperativo(items) {
  const tiempoInicio = performance.now();

  for (let i = 0; i < items.length; i++) {
    simularTrabajoCostoso(items[i]);

    // Ceder el hilo al navegador cada cierto intervalo o en cada paso crítico
    // para permitir que atienda clics, animaciones y repintado de pantalla
    if (globalThis.scheduler?.yield) {
      await scheduler.yield();
    } else {
      // Fallback para entornos que aún no soportan la API nativa
      await new Promise((resolve) => setTimeout(resolve, 0));
    }
  }

  const duracionTotal = Math.round(performance.now() - tiempoInicio);
  console.log(`Lote completado sin bloquear la respuesta de la UI (~${duracionTotal}ms)`);
}

console.log('--- scheduler.yield() ---');
procesarLoteCooperativo([1, 2, 3, 4]);

/*
Salida esperada:
--- scheduler.yield() ---
Lote completado sin bloquear la respuesta de la UI (~100ms)
*/