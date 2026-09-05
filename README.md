# ⚡ JavaScript Moderno Snippets

> Deconstruyendo JavaScript moderno un snippet a la vez. Colección de ejemplos prácticos, comparativas de código (*Antes vs. Ahora*) y nuevas características nativas de ECMAScript.

---

## 📌 Categorías Rápidas

- [📦 Arrays](#-arrays)
- [⏳ Async](#-async)
- [🌐 DOM & Browser APIs](#-dom--browser-apis)
- [🗂️ Objects](#objects)
- [⚙️ Operators & Logic](#operators--logic)
- [🧩 Sets](#-sets)
- [🔤 Strings](#-strings)

---

## 📦 Arrays

| Característica / API | Descripción breve | Archivo |
| :--- | :--- | :--- |
| `Object.groupBy()` | Agrupación nativa y declarativa sin usar `.reduce()` | [`groupBy.js`](./arrays/groupBy.js) |
| `Array.prototype.toSorted()` | Ordenamiento inmutable de arrays sin mutar el original | [`toSorted.js`](./arrays/toSorted.js) |
| `Array.prototype.toSpliced()` | Eliminación e inserción inmutable de elementos por índice | [`toSpliced.js`](./arrays/toSpliced.js) |
| `Array.prototype.with()` | Actualización inmutable por índice (soporta índices negativos) | [`with.js`](./arrays/with.js) |
| `Array.prototype.findLast()` | Búsqueda inversa eficiente de elementos e índices desde el final | [`findLast.js`](./arrays/findLast.js) |

---

## ⏳ Async

| Característica / API | Descripción breve | Archivo |
| :--- | :--- | :--- |
| `Promise.withResolvers()` | Extracción nativa de `{ promise, resolve, reject }` sin variables externas | [`withResolvers.js`](./async/withResolvers.js) |

---

## 🌐 DOM & Browser APIs

| Característica / API | Descripción breve | Archivo |
| :--- | :--- | :--- |
| `Element.checkVisibility()` | Comprobación nativa de visibilidad en UI sin forzar reflows costosos | [`checkVisibility.js`](./dom/checkVisibility.js) |
| `AbortController` | Cancelación nativa de peticiones `fetch` y limpieza masiva de `eventListeners` | [`abortController.js`](./dom/abortController.js) |

---

## <a id="objects"></a>🗂️ Objects

| Característica / API | Descripción breve | Archivo |
| :--- | :--- | :--- |
| `structuredClone()` | Clonación profunda nativa (*deep clone*) sin hacks de JSON | [`structuredClone.js`](./objects/structuredClone.js) |
| `Object.freeze()` & Deep Freeze | Prevención de mutaciones accidentales y técnica de congelación profunda | [`deepFreeze.js`](./objects/deepFreeze.js) |

---

## <a id="operators--logic"></a>⚙️ Operators & Logic

| Característica / API | Descripción breve | Archivo |
| :--- | :--- | :--- |
| `Nullish Coalescing (??)` | Asignación segura de valores por defecto diferenciando *nullish* de *falsy* | [`nullishCoalescing.js`](./operators/nullishCoalescing.js) |

---

## 🧩 Sets

| Característica / API | Descripción breve | Archivo |
| :--- | :--- | :--- |
| `Set.prototype.intersection()` | Intersección nativa entre conjuntos | [`intersection.js`](./sets/intersection.js) |
| `Set.prototype.difference()` | Diferencia relativa entre conjuntos sin conversiones a arrays | [`difference.js`](./sets/difference.js) |

---

## 🔤 Strings

| Característica / API | Descripción breve | Archivo |
| :--- | :--- | :--- |
| `String.prototype.replaceAll()` | Reemplazo global de subcadenas sin usar expresiones regulares complejas | [`replaceAll.js`](./strings/replaceAll.js) |

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
