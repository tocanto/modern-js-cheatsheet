// ======================================================
// Tema: Clonación profunda nativa con structuredClone()
// ECMAScript: HTML Living Standard / Node.js 17+
// Documentación: https://developer.mozilla.org/es/docs/Web/API/structuredClone
// ======================================================

const perfilOriginal = {
  nombre: 'Timmy',
  habilidades: ['JavaScript', 'React'],
  detalles: {
    activo: true,
    creadoEl: new Date('2026-01-15T10:00:00Z')
  }
};

// ❌ Antes: Hack con JSON (convierte Date a String y no clona tipos especiales)
const copiaAntigua = JSON.parse(JSON.stringify(perfilOriginal));

// ✅ Ahora: Clonación profunda nativa y fiel a los tipos de datos
const copiaModerna = structuredClone(perfilOriginal);

// Demostración de mutación independiente:
copiaModerna.habilidades.push('TypeScript');
copiaModerna.detalles.creadoEl.setFullYear(2030);

console.log('--- structuredClone() vs JSON hack ---');
console.log('Original intacto:', perfilOriginal.habilidades);
console.log('Copia modificada:', copiaModerna.habilidades);
console.log('Tipo de fecha en copia antigua:', typeof copiaAntigua.detalles.creadoEl); // string
console.log('Instancia de Date en copia moderna:', copiaModerna.detalles.creadoEl instanceof Date); // true
/*
Salida esperada:
Original intacto: [ 'JavaScript', 'React' ]
Copia modificada: [ 'JavaScript', 'React', 'TypeScript' ]
Tipo de fecha en copia antigua: string
Instancia de Date en copia moderna: true
*/