// ======================================================
// Tema: Reconstrucción y filtrado de objetos con Object.fromEntries()
// ECMAScript: ES2019 (ES10) / Node.js 12+
// Documentación: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries
// ======================================================

const configuracionServicio = {
  host: 'localhost',
  puerto: 8080,
  tokenSecreto: 'bearer_xyz_987',
  debug: true
};

// ❌ Antes: Transformar objetos usando un acumulador con reduce()
const configSeguraAntigua = Object.entries(configuracionServicio).reduce((acumulador, [clave, valor]) => {
  if (clave !== 'tokenSecreto') {
    acumulador[clave] = valor;
  }
  return acumulador;
}, {});

// ✅ Ahora: Pipeline declarativo con filter() y Object.fromEntries()
const configSegura = Object.fromEntries(
  Object.entries(configuracionServicio).filter(([clave]) => clave !== 'tokenSecreto')
);

// Ejemplo extra: Convertir URLSearchParams o Maps directamente a objeto
const params = new URLSearchParams('busqueda=javascript&pagina=2&orden=asc');
const filtroURL = Object.fromEntries(params);

console.log('--- Object.fromEntries() ---');
console.log('Objeto filtrado:', configSegura);
console.log('Query params convertidos:', filtroURL);

/*
Salida esperada:
--- Object.fromEntries() ---
Objeto filtrado: { host: 'localhost', puerto: 8080, debug: true }
Query params convertidos: { busqueda: 'javascript', pagina: '2', orden: 'asc' }
*/