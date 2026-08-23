// ======================================================
// Tema: Agrupación de datos con Object.groupBy()
// ECMAScript: ES2024
// Documentación: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/groupBy
// ======================================================

const usuarios = [
  { nombre: 'Ana', rol: 'admin' },
  { nombre: 'Carlos', rol: 'user' },
  { nombre: 'Laura', rol: 'admin' }
];

// ❌ Antes: Agrupación manual con .reduce()
const porRolAntiguo = usuarios.reduce((acc, user) => {
  const clave = user.rol;
  if (!acc[clave]) {
    acc[clave] = [];
  }
  acc[clave].push(user);
  return acc;
}, {});

// ✅ Ahora: Agrupación nativa y declarativa
const porRolModerno = Object.groupBy(usuarios, user => user.rol);

console.log('--- Object.groupBy() ---');
console.log(porRolModerno);
/*
Salida esperada:
{
  admin: [
    { nombre: 'Ana', rol: 'admin' },
    { nombre: 'Laura', rol: 'admin' }
  ],
  user: [
    { nombre: 'Carlos', rol: 'user' }
  ]
}
*/