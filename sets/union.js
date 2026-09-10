// ======================================================
// Tema: Unión de conjuntos con Set.prototype.union()
// ECMAScript: ES2024 (ES15) / Node.js 22+
// Documentación: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Set/union
// ======================================================

const permisosBase = new Set(['leer_articulos', 'comentar']);
const permisosEditor = new Set(['editar_articulos', 'comentar', 'publicar']);

// ❌ Antes: Convertir ambos sets a arrays intermedios para unirlos
const permisosTotalesAntiguos = new Set([...permisosBase, ...permisosEditor]);

// ✅ Ahora: Unión algebraica nativa (ES2024)
const permisosTotales = permisosBase.union(permisosEditor);

// También acepta estructuras Set-like directamente (como las keys de un Map)
const tagsPrincipales = new Set(['javascript', 'webdev']);
const mapaTagsSecundarios = new Map([
  ['frontend', 1],
  ['react', 2]
]);

const todosLosTags = tagsPrincipales.union(mapaTagsSecundarios);

console.log('--- Set.prototype.union() ---');
console.log('Permisos combinados:', permisosTotales);
console.log('Tags combinados con Set-like:', todosLosTags);

/*
Salida esperada:
--- Set.prototype.union() ---
Permisos combinados: Set(4) { 'leer_articulos', 'comentar', 'editar_articulos', 'publicar' }
Tags combinados con Set-like: Set(4) { 'javascript', 'webdev', 'frontend', 'react' }
*/