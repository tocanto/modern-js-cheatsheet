// ======================================================
// Tema: Transferencia de memoria con structuredClone() ({ transfer })
// ECMAScript / Web APIs: Node.js 17+ / Navegadores modernos
// Documentación: https://developer.mozilla.org/es/docs/Web/API/structuredClone
// ======================================================

// 1. Simulación de un buffer binario de 8MB (ej. textura o audio procesado)
const memoriaOriginal = new ArrayBuffer(1024 * 1024 * 8);
const vistaOriginal = new Uint8Array(memoriaOriginal);
vistaOriginal[0] = 42; // Asignar un valor inicial

console.log('--- Antes de la transferencia ---');
console.log('Tamaño original:', memoriaOriginal.byteLength, 'bytes');

// 2. Clonación con transferencia de propiedad (Zero-Copy)
// En lugar de copiar 8MB, reasigna el puntero de memoria de forma instantánea
const payload = {
  id: 'asset-textura-01',
  timestamp: Date.now(),
  datos: memoriaOriginal
};

const payloadTransferido = structuredClone(payload, {
  transfer: [memoriaOriginal]
});

console.log('\n--- structuredClone con { transfer } ---');
// El buffer original queda "desvinculado" (detached) para evitar carreras
console.log('¿El buffer original fue vaciado?:', memoriaOriginal.detached ?? (memoriaOriginal.byteLength === 0));
console.log('Tamaño original tras transferir:', memoriaOriginal.byteLength, 'bytes (0)');

// El nuevo objeto contiene la memoria intacta
console.log('Tamaño en el clon:', payloadTransferido.datos.byteLength, 'bytes');
const vistaClon = new Uint8Array(payloadTransferido.datos);
console.log('Primer valor preservado en el clon:', vistaClon[0]);

/*
Salida esperada:
--- Antes de la transferencia ---
Tamaño original: 8388608 bytes

--- structuredClone con { transfer } ---
¿El buffer original fue vaciado?: true
Tamaño original tras transferir: 0 bytes (0)
Tamaño en el clon: 8388608 bytes
Primer valor preservado en el clon: 42
*/