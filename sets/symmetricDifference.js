// ======================================================
// Tema: Diferencia simétrica entre conjuntos con Set.prototype.symmetricDifference()
// ECMAScript: ES2024 (ES15) / Node.js 22+
// Documentación: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Set/symmetricDifference
// ======================================================

const estadoServidor = new Set(['user-1', 'user-2', 'user-3']);
const estadoLocal = new Set(['user-2', 'user-3', 'user-4']);

// ❌ Antes: Filtrados cruzados convirtiendo a arrays
const discrepanciasAntiguas = new Set([
  ...[...estadoServidor].filter((id) => !estadoLocal.has(id)),
  ...[...estadoLocal].filter((id) => !estadoServidor.has(id))
]);

// ✅ Ahora: Diferencia simétrica nativa en una sola llamada (ES2024)
// Retorna IDs que están en un conjunto o en el otro, pero no en ambos
const discrepanciasSincronizacion = estadoServidor.symmetricDifference(estadoLocal);

console.log('--- Set.prototype.symmetricDifference() ---');
console.log('IDs a conciliar / sincronizar:', discrepanciasSincronizacion);

/*
Salida esperada:
--- Set.prototype.symmetricDifference() ---
IDs a conciliar / sincronizar: Set(2) { 'user-1', 'user-4' }
*/