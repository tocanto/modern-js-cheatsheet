// ======================================================
// Tema: Intersección nativa con Set.prototype.intersection()
// ECMAScript: ES2024
// Documentación: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Set/intersection
// ======================================================

const frontend = new Set(['JS', 'React', 'HTML']);
const backend = new Set(['JS', 'Node', 'SQL']);

// ❌ Antes: Convertir a Array + .filter() + .has()
const comunAntiguo = new Set(
  [...frontend].filter(item => backend.has(item))
);

// ✅ Ahora: Método nativo de Set
const comunModerno = frontend.intersection(backend);

console.log('--- Set.prototype.intersection() ---');
console.log([...comunModerno]);
/*
Salida esperada:
[ 'JS' ]
*/