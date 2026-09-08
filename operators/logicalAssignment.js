// ======================================================
// Tema: Operadores de asignación lógica (??=, ||=, &&=)
// ECMAScript: ES2021 (ES12) / Node.js 15+
// Documentación: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Logical_nullish_assignment
// ======================================================

const configuracionServidor = {
  puerto: 0,
  modoSeguro: null,
  credenciales: { token: 'xyz-secret' }
};

// ❌ Antes: Bloques condicionales o reasignaciones ciegas
if (configuracionServidor.modoSeguro === null || configuracionServidor.modoSeguro === undefined) {
  configuracionServidor.modoSeguro = true;
}

// 1. Asignación nula lógica (??=)
// Asigna solo si es null o undefined (preserva el 0 del puerto)
configuracionServidor.puerto ??= 8080; 

// 2. Asignación OR lógica (||=)
// Asigna si el valor evaluado es falsy
let nivelLog = '';
nivelLog ||= 'info'; // Como era '', toma 'info'

// 3. Asignación AND lógica (&&=)
// Asigna únicamente si el valor ya es truthy
let usuarioSesion = { activo: true };
usuarioSesion &&= 'Sesión validada';

console.log('--- Logical Assignment Operators ---');
console.log('Puerto (respeta el 0):', configuracionServidor.puerto);
console.log('Modo seguro (asignado porque era null):', configuracionServidor.modoSeguro);
console.log('Nivel de log:', nivelLog);
console.log('Estado de sesión:', usuarioSesion);

/*
Salida esperada:
--- Logical Assignment Operators ---
Puerto (respeta el 0): 0
Modo seguro (asignado porque era null): true
Nivel de log: info
Estado de sesión: Sesión validada
*/