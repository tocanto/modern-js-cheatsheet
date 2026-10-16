// ======================================================
// Tema: Gestión explícita de recursos con 'using' y Symbol.dispose
// ECMAScript: ES2025 / TypeScript 5.2+ / Node.js 22+ (V8)
// Documentación: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/using
// ======================================================

// Fábrica que retorna un recurso descartable (Disposable)
function adquirirBloqueoRecurso(idRecurso) {
  console.log(`🔒 Bloqueo adquirido para: ${idRecurso}`);

  return {
    id: idRecurso,
    operar() {
      console.log(`⚙️ Ejecutando tarea crítica en ${idRecurso}...`);
    },
    // Método estándar invocado automáticamente por la declaración 'using'
    [Symbol.dispose]() {
      console.log(`🔓 Bloqueo liberado automáticamente para: ${idRecurso}`);
    }
  };
}

// ❌ Antes: Gestión manual propensa a olvidos con try / finally
function tareaTradicional() {
  const recurso = adquirirBloqueoRecurso('DB-Conn-Antigua');
  try {
    recurso.operar();
  } finally {
    recurso[Symbol.dispose](); // Requería invocación explícita manual
  }
}

// ✅ Ahora: Declaración 'using' con liberación determinista al salir del bloque
function ejecutarTransaccionSegura() {
  console.log('--- Inicio del bloque con using ---');

  {
    using conexion = adquirirBloqueoRecurso('Worker-Pool-01');
    conexion.operar();
    // No hace falta llamar a ningún método de cierre manual
  } // <- Al cruzar esta llave, [Symbol.dispose]() se dispara solo

  console.log('--- Fin de la función (recurso ya limpio) ---');
}

ejecutarTransaccionSegura();

/*
Salida esperada:
--- Inicio del bloque con using ---
🔒 Bloqueo adquirido para: Worker-Pool-01
⚙️ Ejecutando tarea crítica en Worker-Pool-01...
🔓 Bloqueo liberado automáticamente para: Worker-Pool-01
--- Fin de la función (recurso ya limpio) ---
*/