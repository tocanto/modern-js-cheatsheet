// ======================================================
// Tema: Control asíncrono con Promise.withResolvers()
// ECMAScript: ES2024 (ES15) / Node.js 22+
// Documentación: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise/withResolvers
// ======================================================

// ❌ Antes: Declarar variables mutables externas
let resolverAntiguo, rechazarAntiguo;
const promesaAntigua = new Promise((resolve, reject) => {
  resolverAntiguo = resolve;
  rechazarAntiguo = reject;
});

// ✅ Ahora: Extracción limpia en una sola línea
const { promise, resolve, reject } = Promise.withResolvers();

// Ejemplo práctico: resolver la promesa desde un callback/evento externo
setTimeout(() => {
  resolve('Datos cargados exitosamente 🚀');
}, 100);

promise.then((mensaje) => {
  console.log('--- Promise.withResolvers() ---');
  console.log('Resultado:', mensaje);
});

/*
Salida esperada tras 100ms:
--- Promise.withResolvers() ---
Resultado: Datos cargados exitosamente 🚀
*/