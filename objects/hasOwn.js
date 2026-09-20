// ======================================================
// Tema: Comprobación segura de propiedades con Object.hasOwn()
// ECMAScript: ES2022 (ES13) / Node.js 16.9+
// Documentación: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn
// ======================================================

// 1. Objeto diccionario seguro sin cadena de prototipo
const mapaOpciones = Object.create(null);
mapaOpciones.tema = 'cyberpunk';
mapaOpciones.activo = true;

// ❌ Error clásico: mapaOpciones no hereda de Object.prototype
try {
  // mapaOpciones.hasOwnProperty('tema'); // Arroja TypeError
} catch (error) {
  console.error('Error con hasOwnProperty:', error.message);
}

// ❌ Solución previa a ES2022: Verbosa y compleja
const existeAntes = Object.prototype.hasOwnProperty.call(mapaOpciones, 'tema');

// ✅ Ahora: Object.hasOwn() nativo, conciso y seguro (ES2022)
const existeTema = Object.hasOwn(mapaOpciones, 'tema');
const existeToken = Object.hasOwn(mapaOpciones, 'token');

// 2. Comprobación frente a claves heredadas del prototipo
const usuario = { nombre: 'Timmy' };
const tieneNombrePropio = Object.hasOwn(usuario, 'nombre'); // true
const tieneToStringPropio = Object.hasOwn(usuario, 'toString'); // false (es heredado del prototipo)

console.log('--- Object.hasOwn() ---');
console.log('¿Existe "tema" en mapa sin prototipo?:', existeTema);
console.log('¿Existe "token"?:', existeToken);
console.log('¿"toString" es propiedad directa?:', tieneToStringPropio);

/*
Salida esperada:
--- Object.hasOwn() ---
¿Existe "tema" en mapa sin prototipo?: true
¿Existe "token"?: false
¿"toString" es propiedad directa?: false
*/