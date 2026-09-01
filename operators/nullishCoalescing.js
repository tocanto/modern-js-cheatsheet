// ======================================================
// Tema: Nullish Coalescing (??) vs Logical OR (||)
// ECMAScript: ES2020 (ES11) / Node.js 14+
// Documentación: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Nullish_coalescing_operator
// ======================================================

const configuracionUsuario = {
  limiteReintentos: 0,        // 0 es un valor falsy pero intencional y válido
  notificaciones: false,       // false es un booleano legítimo
  nombreTema: '',             // string vacío legítimo
  apiKey: null                // null representa ausencia real
};

// ❌ Operador OR (||): Falla con valores falsy (0, false, "")
const limiteConOR = configuracionUsuario.limiteReintentos || 5;       // Devuelve 5 (incorrecto)
const notifConOR = configuracionUsuario.notificaciones || true;       // Devuelve true (incorrecto)

// ✅ Operador Nullish Coalescing (??): Solo actúa ante null o undefined
const limiteConNullish = configuracionUsuario.limiteReintentos ?? 5;   // Devuelve 0 (correcto)
const notifConNullish = configuracionUsuario.notificaciones ?? true;   // Devuelve false (correcto)
const keyConNullish = configuracionUsuario.apiKey ?? 'DEFAULT_KEY';   // Devuelve 'DEFAULT_KEY' (correcto)

console.log('--- Comparativa || vs ?? ---');
console.log('Límite con || (erróneo):', limiteConOR);
console.log('Límite con ?? (esperado):', limiteConNullish);
console.log('Notificaciones con ?? (esperado):', notifConNullish);
console.log('API Key con ?? (aplica fallback):', keyConNullish);

/*
Salida esperada:
--- Comparativa || vs ?? ---
Límite con || (erróneo): 5
Límite con ?? (esperado): 0
Notificaciones con ?? (esperado): false
API Key con ?? (aplica fallback): DEFAULT_KEY
*/