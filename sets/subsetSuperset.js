// ======================================================
// Tema: Validación de inclusión con isSubsetOf() e isSupersetOf()
// ECMAScript: ES2024 (ES15) / Node.js 22+
// Documentación: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Set/isSubsetOf
// ======================================================

const permisosActuales = new Set(['articulos:leer', 'articulos:comentar', 'perfil:editar']);
const requeridosParaPublicar = new Set(['articulos:leer', 'articulos:comentar']);
const requeridosPanelAdmin = new Set(['articulos:leer', 'usuarios:eliminar']);

// ❌ Antes: Desestructuración a array y every()
const puedePublicarAntiguo = [...requeridosParaPublicar].every((p) =>
  permisosActuales.has(p)
);

// ✅ Ahora: isSubsetOf() nativo con parada temprana (ES2024)
// ¿Están los permisos requeridos incluidos dentro de los actuales?
const puedePublicar = requeridosParaPublicar.isSubsetOf(permisosActuales); // true
const puedeAccederAdmin = requeridosPanelAdmin.isSubsetOf(permisosActuales); // false

// ✅ Verificación inversa con isSupersetOf()
// ¿El rol actual engloba todos los requerimientos de publicación?
const rolCubrePublicacion = permisosActuales.isSupersetOf(requeridosParaPublicar); // true

console.log('--- Set.prototype.isSubsetOf() & isSupersetOf() ---');
console.log('¿Cumple permisos para publicar?:', puedePublicar);
console.log('¿Cumple permisos de panel admin?:', puedeAccederAdmin);
console.log('¿Rol es superconjunto de publicación?:', rolCubrePublicacion);

/*
Salida esperada:
--- Set.prototype.isSubsetOf() & isSupersetOf() ---
¿Cumple permisos para publicar?: true
¿Cumple permisos de panel admin?: false
¿Rol es superconjunto de publicación?: true
*/