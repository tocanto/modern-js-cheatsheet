# ⚡ JavaScript Moderno Snippets

> Deconstruyendo JavaScript moderno un snippet a la vez. Colección de ejemplos prácticos, comparativas de código (*Antes vs. Ahora*) y nuevas características nativas de ECMAScript.

---

## 📌 Índice de Snippets

| Categoría | Característica / API | Descripción breve | Archivo |
| :--- | :--- | :--- | :--- |
| **Arrays** | `Object.groupBy()` | Agrupación nativa y declarativa sin usar `.reduce()` | [`groupBy.js`](./arrays/groupBy.js) |
| **Sets** | `Set.prototype.intersection()` | Intersección nativa entre conjuntos | [`intersection.js`](./sets/intersection.js) |
| **Arrays** | `Array.prototype.toSorted()` | Ordenamiento inmutable de arrays sin mutar el original | [`toSorted.js`](./arrays/toSorted.js) |
| **Objects** | `structuredClone()` | Clonación profunda nativa (*deep clone*) sin hacks de JSON | [`structuredClone.js`](./objects/structuredClone.js) |

---

## 🚀 Cómo ejecutar los ejemplos

Puedes clonar el repositorio y ejecutar cualquier archivo directamente con **Node.js** (versión 22+ recomendada):

```bash
# Clonar el repositorio
git clone [https://github.com/tocanto/modern-js-cheatsheet](https://github.com/tocanto/modern-js-cheatsheet)

# Entrar a la carpeta
cd modern-js-cheatsheet

# Ejecutar un snippet
node arrays/toSorted.js

👨‍💻 Autor
Creado por [@tocantodev](https://x.com/tocantodev). Sígueme en X para cápsulas diarias sobre JavaScript, TypeScript y React.