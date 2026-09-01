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
| **Arrays** | `Array.prototype.with()` | Actualización inmutable de elementos por índice (soporta índices negativos) | [`with.js`](./arrays/with.js) |
| **Arrays** | `Array.prototype.findLast()` | Búsqueda inversa eficiente de elementos e índices desde el final | [`findLast.js`](./arrays/findLast.js) |
| **Arrays** | `Array.prototype.toSpliced()` | Eliminación e inserción inmutable de elementos por índice | [`toSpliced.js`](./arrays/toSpliced.js) |
| **Async** | `Promise.withResolvers()` | Extracción nativa de `{ promise, resolve, reject }` sin variables externas | [`withResolvers.js`](./async/withResolvers.js) |
| **DOM** | `Element.checkVisibility()` | Comprobación nativa de visibilidad en UI sin forzar reflows costosos | [`checkVisibility.js`](./dom/checkVisibility.js) |
| **Strings** | `String.prototype.replaceAll()` | Reemplazo global de subcadenas sin usar expresiones regulares complejas | [`replaceAll.js`](./strings/replaceAll.js) |
| **Operators** | `Nullish Coalescing (??)` | Asignación segura de valores por defecto diferenciando *nullish* de *falsy* | [`nullishCoalescing.js`](./operators/nullishCoalescing.js) |

---

## 🚀 Cómo ejecutar los ejemplos

Puedes clonar el repositorio y ejecutar cualquier archivo directamente con **Node.js** (versión 18+ recomendada):

```bash
# Clonar el repositorio
git clone https://github.com/tocanto/modern-js-cheatsheet.git

# Entrar a la carpeta
cd modern-js-cheatsheet

# Ejecutar un snippet
node arrays/toSorted.js
```
## 👨‍💻 Autor

Creado por **Timmy Ocanto**  
🐦 Sígueme en X: [**@tocantodev**](https://x.com/tocantodev)  
💼 Conectemos en LinkedIn: [**in/tocanto**](https://www.linkedin.com/in/tocanto/)