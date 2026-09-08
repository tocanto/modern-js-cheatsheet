// ======================================================
// Tema: Iteración y grupos de captura con String.prototype.matchAll()
// ECMAScript: ES2020 (ES11) / Node.js 12+
// Documentación: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll
// ======================================================

const registroVentas = 'Item: Laptop - $1200 USD | Item: Monitor - $300 EUR';
const regexVenta = /\$(\d+)\s([A-Z]{3})/g;

// ❌ Antes: Bucle imperativo con regex.exec()
const ventasAntiguas = [];
let coincidencia;
while ((coincidencia = regexVenta.exec(registroVentas)) !== null) {
  ventasAntiguas.push({ precio: coincidencia[1], moneda: coincidencia[2] });
}

// ✅ Ahora: Iterador declarativo con matchAll()
const iteradorVentas = registroVentas.matchAll(regexVenta);

// Podemos convertirlo a array o iterarlo directamente
const ventasModernas = Array.from(iteradorVentas, ([, precio, moneda]) => ({
  precio: Number(precio),
  moneda
}));

console.log('--- String.prototype.matchAll() ---');
console.log('Resultados procesados:', ventasModernas);

/*
Salida esperada:
--- String.prototype.matchAll() ---
Resultados procesados: [
  { precio: 1200, moneda: 'USD' },
  { precio: 300, moneda: 'EUR' }
]
*/