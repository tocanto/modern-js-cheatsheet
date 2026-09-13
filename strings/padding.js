// ======================================================
// Tema: Relleno y alineación de texto con padStart() y padEnd()
// ECMAScript: ES2017 (ES8) / Node.js 8+
// Documentación: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
// ======================================================

const hora = 9;
const minuto = 4;
const tarjetaDigitos = '8842';

// ❌ Antes: Trucos de concatenación con cadenas prefijadas y slice
const horaFormateadaAntigua = ('0' + hora).slice(-2);
const minutoFormateadoAntiguo = ('0' + minuto).slice(-2);
const relojAntiguo = `${horaFormateadaAntigua}:${minutoFormateadoAntiguo}`;

// ✅ Ahora: padStart() y padEnd() nativos y declarativos (ES2017)

// 1. Relleno de dígitos para relojes y fechas
const relojModerno = `${String(hora).padStart(2, '0')}:${String(minuto).padStart(2, '0')}`;

// 2. Enmascaramiento de datos sensibles (tarjetas, tokens)
const tarjetaSegura = tarjetaDigitos.padStart(16, '*');

// 3. Tabulación y alineación estética con padEnd()
const encabezado = 'PROCESO'.padEnd(15, '.') + 'ESTADO';
const linea1 = 'Base de datos'.padEnd(15, '.') + 'OK';
const linea2 = 'Servidor API'.padEnd(15, '.') + 'OK';

console.log('--- String.prototype.padStart() & padEnd() ---');
console.log('Reloj formateado:', relojModerno);
console.log('Tarjeta enmascarada:', tarjetaSegura);
console.log('\nTabla de logs:');
console.log(encabezado);
console.log(linea1);
console.log(linea2);

/*
Salida esperada:
--- String.prototype.padStart() & padEnd() ---
Reloj formateado: 09:04
Tarjeta enmascarada: ************8842

Tabla de logs:
PROCESO........ESTADO
Base de datos..OK
Servidor API...OK
*/