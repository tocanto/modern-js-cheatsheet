// ======================================================
// Tema: Búsqueda inversa en arrays con findLast() y findLastIndex()
// ECMAScript: ES2023 (ES14) / Node.js 18+
// Documentación: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/findLast
// ======================================================

const pedidos = [
  { id: 101, cliente: 'Ana', entregado: true },
  { id: 102, cliente: 'Carlos', entregado: false },
  { id: 103, cliente: 'Beatriz', entregado: true },
  { id: 104, cliente: 'David', entregado: false }
];

// ❌ Antes: Clonar, invertir y buscar (crea arrays intermedios en memoria)
const ultimoEntregadoAntiguo = [...pedidos].reverse().find(p => p.entregado);

// ✅ Ahora: Búsqueda declarativa de fin a inicio
const ultimoEntregado = pedidos.findLast(p => p.entregado);
const indiceUltimoEntregado = pedidos.findLastIndex(p => p.entregado);

console.log('--- findLast() & findLastIndex() ---');
console.log('Último pedido entregado:', ultimoEntregado);
console.log('Índice real en el array:', indiceUltimoEntregado);

/*
Salida esperada:
Último pedido entregado: { id: 103, cliente: 'Beatriz', entregado: true }
Índice real en el array: 2
*/