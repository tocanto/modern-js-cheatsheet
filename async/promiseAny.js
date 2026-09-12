// ======================================================
// Tema: Resolución al primer éxito con Promise.any()
// ECMAScript: ES2021 (ES12) / Node.js 15+
// Documentación: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise/any
// ======================================================

const cdnPrimario = new Promise((_, reject) => 
  setTimeout(() => reject(new Error('CDN Primario fuera de línea')), 100)
);

const cdnSecundario = new Promise((resolve) => 
  setTimeout(() => resolve({ fuente: 'CDN Secundario', latencia: '250ms' }), 250)
);

const cdnRespaldo = new Promise((resolve) => 
  setTimeout(() => resolve({ fuente: 'CDN Respaldo', latencia: '400ms' }), 400)
);

async function obtenerRecursoMasRapido() {
  // ❌ Con Promise.race: cdnPrimario rechaza a los 100ms y rompe la ejecución completa
  try {
    await Promise.race([cdnPrimario, cdnSecundario, cdnRespaldo]);
  } catch (error) {
    console.log('Promise.race falló porque el primero en terminar fue un error.');
  }

  // ✅ Con Promise.any: ignora el error de los 100ms y resuelve con cdnSecundario (250ms)
  try {
    const primerExito = await Promise.any([cdnPrimario, cdnSecundario, cdnRespaldo]);
    console.log('--- Promise.any() ---');
    console.log('Primer recurso exitoso obtenido:', primerExito);
  } catch (error) {
    // Si todos fallan, error es una instancia de AggregateError
    if (error instanceof AggregateError) {
      console.error('Todas las fuentes fallaron:', error.errors);
    }
  }
}

obtenerRecursoMasRapido();

/*
Salida esperada:
Promise.race falló porque el primero en terminar fue un error.
--- Promise.any() ---
Primer recurso exitoso obtenido: { fuente: 'CDN Secundario', latencia: '250ms' }
*/