// ======================================================
// Tema: Evaluación perezosa (Lazy) con Iterator Helpers
// ECMAScript: ES2025 / Node.js 22+ (V8 v12.2+)
// Documentación: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Iterator
// ======================================================

// 1. Generador de secuencia infinita de identificadores
function* generadorIdInfinito() {
  let id = 1;
  while (true) {
    yield id++;
  }
}

// ❌ Antes: Convertir a array desbordaba la memoria de inmediato
// const fallo = [...generadorIdInfinito()].slice(0, 5); // 💥 Bucle infinito bloqueante

// ✅ Ahora: Pipeline perezoso nativo sin alocación masiva de memoria
const secuencia = generadorIdInfinito()
  .filter((n) => n % 2 === 0) // Filtra solo pares bajo demanda
  .map((n) => `ID-TOKEN-${n}`) // Transforma a formato token
  .drop(2)                     // Salta los primeros 2 resultados válidos
  .take(3);                    // Toma únicamente 3 elementos y detiene la iteración

// Consumir el iterador resultante
const tokensExtraidos = [...secuencia];

// 2. Uso con colecciones nativas mediante Iterator.from()
const tags = new Set(['javascript', 'python', 'rust', 'typescript']);
const tagsMayusculas = Iterator.from(tags)
  .filter((tag) => tag.includes('script'))
  .map((tag) => tag.toUpperCase());

console.log('--- Iterator Helpers (ES2025) ---');
console.log('Tokens procesados con lazy evaluation:', tokensExtraidos);
console.log('Tags transformados bajo demanda:', [...tagsMayusculas]);

/*
Salida esperada:
--- Iterator Helpers (ES2025) ---
Tokens procesados con lazy evaluation: [ 'ID-TOKEN-6', 'ID-TOKEN-8', 'ID-TOKEN-10' ]
Tags transformados bajo demanda: [ 'JAVASCRIPT', 'TYPESCRIPT' ]
*/