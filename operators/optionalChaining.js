// ======================================================
// Tema: Acceso e invocación segura con Optional Chaining (?.)
// ECMAScript: ES2020 (ES11) / Node.js 14+
// Documentación: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Optional_chaining
// ======================================================

const respuestaServidor = {
  usuario: {
    nombre: 'Timmy',
    roles: ['admin', 'editor'],
    obtenerDetalles() {
      return 'Usuario verificado';
    }
  },
  onNotificar: null // Callback opcional no definido
};

// ❌ Antes: Validaciones defensivas complejas
let rolAntiguo;
if (respuestaServidor.usuario && respuestaServidor.usuario.roles) {
  rolAntiguo = respuestaServidor.usuario.roles[0];
}

if (typeof respuestaServidor.onNotificar === 'function') {
  respuestaServidor.onNotificar();
}

// ✅ Ahora: Optional Chaining en propiedades, arrays y funciones (ES2020)

// 1. Acceso a propiedades anidadas que podrían no existir
const temaOscuro = respuestaServidor.usuario?.preferencias?.tema; // undefined sin lanzar error

// 2. Acceso indexado dinámico seguro (?.[])
const primerRol = respuestaServidor.usuario?.roles?.[0];

// 3. Invocación segura de funciones y callbacks (?.())
// Si es null o undefined, simplemente no se ejecuta
respuestaServidor.onNotificar?.(); 

// 4. Ejecución segura de métodos existentes
const estado = respuestaServidor.usuario?.obtenerDetalles?.();

console.log('--- Optional Chaining (?.) ---');
console.log('Tema (inexistente):', temaOscuro);
console.log('Primer rol:', primerRol);
console.log('Resultado de método existente:', estado);

/*
Salida esperada:
--- Optional Chaining (?.) ---
Tema (inexistente): undefined
Primer rol: admin
Resultado de método existente: Usuario verificado
*/