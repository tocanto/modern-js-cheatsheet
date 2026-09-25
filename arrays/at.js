// ======================================================
// Tema: Acceso relativo con Array.prototype.at()
// ECMAScript: ES2022 (ES13) / Node.js 16.6+
// Documentación: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/at
// ======================================================

const versiones = ['v1.0.0', 'v1.1.0', 'v2.0.0', 'v2.1.0'];

// ❌ Antes: Repetir el identificador o crear arrays intermedios con slice
const ultimaVersionAntigua = versiones[versiones.length - 1];
const penultimaAntigua = versiones[versiones.length - 2];

// Con pipelines encadenados requería crear un array temporal con slice
const ultimoFiltroAntiguo = versiones
  .filter((v) => v.startsWith('v1'))
  .slice(-1)[0];

// ✅ Ahora: Indexación relativa limpia con .at() (ES2022)
const ultimaVersion = versiones.at(-1);    // 'v2.1.0'
const penultimaVersion = versiones.at(-2); // 'v2.0.0'

// Encadenamiento directo sin arrays temporales intermedios
const ultimoFiltro = versiones
  .filter((v) => v.startsWith('v1'))
  .at(-1); // 'v1.1.0'

// También disponible nativamente en Strings
const ruta = '/usr/local/bin/node';
const comando = ruta.split('/').at(-1);

console.log('--- Array.prototype.at() ---');
console.log('Última versión:', ultimaVersion);
console.log('Penúltima versión:', penultimaVersion);
console.log('Último filtrado v1:', ultimoFiltro);
console.log('Comando extraído:', comando);

/*
Salida esperada:
--- Array.prototype.at() ---
Última versión: v2.1.0
Penúltima versión: v2.0.0
Último filtrado v1: v1.1.0
Comando extraído: node
*/