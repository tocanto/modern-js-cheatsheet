// ======================================================
// Tema: Operaciones con conjuntos - Set.prototype.difference()
// ECMAScript: ES2024 (ES15) / Node.js 22+
// Documentación: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Set/difference
// ======================================================

const permisosRequeridos = new Set(['leer', 'escribir', 'eliminar', 'exportar']);
const permisosAsignados = new Set(['leer', 'escribir']);

// ❌ Antes: Convertir a array, filtrar y volver a crear Set
const permisosFaltantesAntiguo = new Set(
  [...permisosRequeridos].filter((permiso) => !permisosAsignados.has(permiso))
);

// ✅ Ahora: Operación directa de diferencia (ES2024)
const permisosFaltantes = permisosRequeridos.difference(permisosAsignados);

console.log('--- Set.prototype.difference() ---');
console.log('Permisos requeridos:', [...permisosRequeridos]);
console.log('Permisos asignados:', [...permisosAsignados]);
console.log('Permisos faltantes por conceder:', [...permisosFaltantes]);

/*
Salida esperada:
--- Set.prototype.difference() ---
Permisos requeridos: [ 'leer', 'escribir', 'eliminar', 'exportar' ]
Permisos asignados: [ 'leer', 'escribir' ]
Permisos faltantes por conceder: [ 'eliminar', 'exportar' ]
*/