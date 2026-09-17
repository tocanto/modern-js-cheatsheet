// ======================================================
// Tema: Operaciones de conjuntos en RegEx con flag 'v' (Unicode Sets)
// ECMAScript: ES2024 (ES15) / Node.js 20+
// Documentación: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets
// ======================================================

// 1. Sustracción de conjuntos (--): Letras ASCII excepto vocales
const consonantesAscii = /^[\p{ASCII}&&[\p{Letter}]--[aeiouAEIOU]]+$/v;

console.log('--- Flag v: Sustracción e Intersección ---');
console.log('¿"bcdfg" son consonantes?', consonantesAscii.test('bcdfg')); // true
console.log('¿"hola" pasa el filtro?', consonantesAscii.test('hola'));     // false (contiene 'o', 'a')

// 2. Exclusión de mayúsculas en alfabetos específicos
const soloGriegasMinusculas = /^[\p{Script=Greek}--[\p{Uppercase}]]+$/v;
console.log('¿"αβγ" son griegas minúsculas?', soloGriegasMinusculas.test('αβγ')); // true
console.log('¿"αΩ" contiene mayúscula?', soloGriegasMinusculas.test('αΩ'));       // false (contiene Ω)

// 3. Validación de secuencias de emojis compuestas (RGI: Recommended for General Interchange)
const soloBanderasValidas = /^[\p{RGI_Emoji_Flag_Sequence}]+$/v;
console.log('¿Secuencia de bandera válida?:', soloBanderasValidas.test('🇻🇪')); // true

/*
Salida esperada:
--- Flag v: Sustracción e Intersección ---
¿"bcdfg" son consonantes? true
¿"hola" pasa el filtro? false
¿"αβγ" son griegas minúsculas? true
¿"αΩ" contiene mayúscula? false
¿Secuencia de bandera válida?: true
*/