// ======================================================
// Tema: Inmutabilidad con Array.prototype.toSorted()
// ECMAScript: ES2023
// Documentación: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted
// ======================================================

const numeros = [5, 2, 8, 1];

// ❌ Antes: .sort() muta el array original en memoria (requería clonar)
const ordenadosAntiguo = [...numeros].sort((a, b) => a - b);

// ✅ Ahora: Ordenamiento inmutable nativo
const ordenadosModerno = numeros.toSorted((a, b) => a - b);

console.log('--- Array.prototype.toSorted() ---');
console.log({ original: numeros, ordenados: ordenadosModerno });
/*
Salida esperada:
{
  original: [ 5, 2, 8, 1 ],
  ordenados: [ 1, 2, 5, 8 ]
}
*/