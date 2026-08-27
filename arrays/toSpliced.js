// ======================================================
// Tema: Manipulación inmutable de arrays con toSpliced()
// ECMAScript: ES2023 (ES14) / Node.js 20+
// Documentación: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/toSpliced
// ======================================================

const carrito = ['Monitor', 'Teclado', 'Mouse', 'Cámara'];

// ❌ Antes: .splice() muta el array en memoria
const copiaAntigua = [...carrito];
copiaAntigua.splice(1, 2, 'Micrófono');

// ✅ Ahora: toSpliced() retorna el nuevo array sin mutar el original
// Parámetros: (índiceInicio, cantidadBorrar, ...elementosAInsertar)
const carritoActualizado = carrito.toSpliced(1, 2, 'Micrófono');

// Caso de solo eliminación: eliminar 1 elemento en el índice 0
const sinPrimerElemento = carrito.toSpliced(0, 1);

console.log('--- Array.prototype.toSpliced() ---');
console.log('Array original intacto:', carrito);
console.log('Carrito actualizado (reemplazo):', carritoActualizado);
console.log('Sin primer elemento:', sinPrimerElemento);

/*
Salida esperada:
Array original intacto: [ 'Monitor', 'Teclado', 'Mouse', 'Cámara' ]
Carrito actualizado (reemplazo): [ 'Monitor', 'Micrófono', 'Cámara' ]
Sin primer elemento: [ 'Teclado', 'Mouse', 'Cámara' ]
*/