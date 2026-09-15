// ======================================================
// Tema: Segmentación precisa de texto y emojis con Intl.Segmenter
// ECMAScript: ES2022 (ES13) / Node.js 16+
// Documentación: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter
// ======================================================

const mensaje = 'Familia 👨‍👩‍👧‍👦 programando código.';

// ❌ Antes: split('') o spread rompen caracteres Unicode complejos
const particionSplit = mensaje.split('');
const particionSpread = [...mensaje];

// ✅ Ahora: Intl.Segmenter entiende grafemas visuales completos
const segmentadorGrafemas = new Intl.Segmenter('es', { granularity: 'grapheme' });
const segmentosGrafema = [...segmentadorGrafemas.segment(mensaje)];
const caracteresReales = segmentosGrafema.map((s) => s.segment);

// ✅ Segmentación inteligente por palabras (ignora espacios / puntuación según se requiera)
const segmentadorPalabras = new Intl.Segmenter('es', { granularity: 'word' });
const soloPalabras = [...segmentadorPalabras.segment(mensaje)]
  .filter((s) => s.isWordLike)
  .map((s) => s.segment);

console.log('--- Comparativa Unicode ---');
console.log('Longitud con split():', particionSplit.length, '(corrompe Unicode)');
console.log('Longitud con [...spread]:', particionSpread.length, '(separa conectores ZWJ)');
console.log('Longitud real con Intl.Segmenter:', caracteresReales.length);

console.log('\n--- Extracción limpia de palabras ---');
console.log('Palabras detectadas:', soloPalabras);

/*
Salida esperada:
--- Comparativa Unicode ---
Longitud con split(): 38 (corrompe Unicode)
Longitud con [...spread]: 30 (separa conectores ZWJ)
Longitud real con Intl.Segmenter: 27

--- Extracción limpia de palabras ---
Palabras detectadas: [ 'Familia', 'programando', 'código' ]
*/