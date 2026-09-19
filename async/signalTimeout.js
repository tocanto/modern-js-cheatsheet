// ======================================================
// Tema: Límites de tiempo automáticos con AbortSignal.timeout()
// Compatibilidad: Node.js 17.3+ / Navegadores modernos / Web APIs
// Documentación: https://developer.mozilla.org/es/docs/Web/API/AbortSignal/timeout_static
// ======================================================

// ❌ Antes: AbortController manual con timer y limpieza
async function peticionLentaAntigua() {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 2000);

  try {
    const res = await fetch('https://httpbin.org/delay/3', { signal: controller.signal });
    return await res.json();
  } finally {
    clearTimeout(timer); // Indispensable para evitar fugas
  }
}

// ✅ Ahora: AbortSignal.timeout() declarativo y autogestionado
async function consultarConTiempoLimite(url, limiteMs = 2000) {
  try {
    const respuesta = await fetch(url, {
      signal: AbortSignal.timeout(limiteMs)
    });
    return await respuesta.json();
  } catch (error) {
    console.log('--- AbortSignal.timeout() ---');
    if (error.name === 'TimeoutError') {
      console.warn(`⏳ La petición superó el límite permitido de ${limiteMs}ms.`);
    } else if (error.name === 'AbortError') {
      console.warn('🛑 La petición fue cancelada manualmente por el usuario.');
    } else {
      console.error('❌ Error inesperado de red:', error.message);
    }
  }
}

consultarConTiempoLimite('https://httpbin.org/delay/3', 1500);

/*
Salida esperada tras 1.5s:
--- AbortSignal.timeout() ---
⏳ La petición superó el límite permitido de 1500ms.
*/