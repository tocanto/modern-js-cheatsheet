// ======================================================
// Tema: Reemplazo global de cadenas con String.prototype.replaceAll()
// ECMAScript: ES2021 (ES12) / Node.js 15+
// Documentación: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll
// ======================================================

const consultaSql = 'SELECT * FROM usuarios WHERE rol = "usuario" AND status = "usuario_activo"';

// ❌ Antes: Necesidad de expresiones regulares globales (/g)
const consultaAntigua = consultaSql.replace(/usuario/g, 'cliente');

// ✅ Ahora: Reemplazo global nativo y seguro con string plano
const consultaModerna = consultaSql.replaceAll('usuario', 'cliente');

// Ejemplo con caracteres especiales (donde una regex sin escapar fallaría):
const rutaArchivo = 'src/components/button/button.jsx';
const rutaActualizada = rutaArchivo.replaceAll('/', '\\');

console.log('--- String.prototype.replaceAll() ---');
console.log('Original:', consultaSql);
console.log('Resultado replaceAll():', consultaModerna);
console.log('Ruta modificada:', rutaActualizada);

/*
Salida esperada:
Original: SELECT * FROM usuarios WHERE rol = "usuario" AND status = "usuario_activo"
Resultado replaceAll(): SELECT * FROM clientes WHERE rol = "cliente" AND status = "cliente_activo"
Ruta modificada: src\components\button\button.jsx
*/