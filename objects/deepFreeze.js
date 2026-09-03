// ======================================================
// Tema: Object.freeze() y la necesidad de Deep Freeze
// ECMAScript: ES5+ (estándar en todos los entornos modernos)
// Documentación: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze
// ======================================================

'use strict';

const appConfig = {
  endpoint: 'https://api.empresa.com',
  seguridad: {
    maxIntentos: 3,
    bloqueado: false
  }
};

// ❌ Congelación superficial (Shallow Freeze)
const shallowFrozen = Object.freeze({ ...appConfig, seguridad: { ...appConfig.seguridad } });

// Intentar cambiar el primer nivel lanza TypeError en strict mode:
// shallowFrozen.endpoint = 'https://otro.com'; // Error

// Las propiedades anidadas siguen siendo mutables si no se congelan individualmente:
shallowFrozen.seguridad.maxIntentos = 10; // Muta sin error si no hay deep freeze

// ✅ Congelación profunda recursiva (Deep Freeze)
function deepFreeze(objeto) {
  Object.keys(objeto).forEach((propiedad) => {
    const valor = objeto[propiedad];
    if (valor !== null && (typeof valor === 'object' || typeof valor === 'function')) {
      deepFreeze(valor);
    }
  });
  return Object.freeze(objeto);
}

const configInmutable = deepFreeze({
  endpoint: 'https://api.empresa.com',
  seguridad: {
    maxIntentos: 3,
    bloqueado: false
  }
});

console.log('--- Inmutabilidad de Objetos ---');
console.log('¿Está congelado el objeto base?:', Object.isFrozen(configInmutable));
console.log('¿Está congelado el sub-objeto?:', Object.isFrozen(configInmutable.seguridad));

/*
Salida esperada:
--- Inmutabilidad de Objetos ---
¿Está congelado el objeto base?: true
¿Está congelado el sub-objeto?: true
*/