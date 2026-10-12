// ======================================================
// Tema: Composición de señales de cancelación con AbortSignal.any()
// ECMAScript: ES2024 (ES15) / Node.js 20+ / Navegadores modernos
// Documentación: https://developer.mozilla.org/es/docs/Web/API/AbortSignal/any_static
// ======================================================

// 1. Simulación de dos orígenes de cancelación independientes
const usuarioController = new AbortController(); // Gatillado por clic en UI
const tiempoLimiteSignal = AbortSignal.timeout(3000); // Gatillado por reloj a los 3s

// ❌ Antes: Requería un controlador puente y vincular listeners manuales
/*
const puente = new AbortController();
const abortarPuente = (evt) => puente.abort(evt.target.reason);
usuarioController.signal.addEventListener('abort', abortarPuente);
tiempoLimiteSignal.addEventListener('abort', abortarPuente);
*/

// ✅ Ahora: AbortSignal.any() compone un iterable de señales (ES2024)
const senalCoordinada = AbortSignal.any([
  usuarioController.signal,
  tiempoLimiteSignal
]);

async function ejecutarDescargaResiliente(signal) {
  try {
    console.log('Iniciando descarga coordinada...');
    // Pasamos la señal combinada a fetch o cualquier API compatible con AbortSignal
    const res = await fetch('https://httpbin.org/delay/5', { signal });
    return await res.json();
  } catch (error) {
    console.log('--- AbortSignal.any() ---');
    console.log('Estado abortado:', signal.aborted);
    console.log('Motivo del corte:', signal.reason);
  }
}

// Ejecutar operación
ejecutarDescargaResiliente(senalCoordinada);

// Simular que el usuario decide cancelar la tarea a los 1.5s (antes del timeout de 3s)
setTimeout(() => {
  usuarioController.abort(new Error('Descarga cancelada manualmente por el usuario.'));
}, 1500);

/*
Salida esperada tras 1.5s:
--- AbortSignal.any() ---
Estado abortado: true
Motivo del corte: Error: Descarga cancelada manualmente por el usuario.
*/