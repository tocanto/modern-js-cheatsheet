// ======================================================
// Tema: Actualización inmutable con Array.prototype.with()
// ECMAScript: ES2023 (ES14) / Node.js 20+
// Documentación: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/with
// ======================================================

const lenguajes = ['JavaScript', 'Python', 'C++'];

// ❌ Antes: Mutación directa o clonación con spread
const copiaTradicional = [...lenguajes];
copiaTradicional[1] = 'TypeScript';

// ✅ Ahora: Actualización inmutable nativa
const lenguajesActualizados = lenguajes.with(1, 'TypeScript');

// Soporte de índices negativos (actualizar el último elemento)
const reemplazoUltimo = lenguajes.with(-1, 'Rust');

console.log('--- Array.prototype.with() ---');
console.log('Array original intacto:', lenguajes);
console.log('Array actualizado (índice 1):', lenguajesActualizados);
console.log('Array actualizado (último índice -1):', reemplazoUltimo);

/*
Salida esperada:
Array original intacto: [ 'JavaScript', 'Python', 'C++' ]
Array actualizado (índice 1): [ 'JavaScript', 'TypeScript', 'C++' ]
Array actualizado (último índice -1): [ 'JavaScript', 'Python', 'Rust' ]
*/