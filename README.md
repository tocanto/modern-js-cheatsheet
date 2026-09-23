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
| `Promise.allSettled()` | Ejecución paralela resiliente sin abortar ante promesas rechazadas | [`allSettled.js`](./async/allSettled.js) |
| `Promise.any()` | Retorna la primera promesa cumplida ignorando rechazos previos | [`promiseAny.js`](./async/promiseAny.js) |
| `AbortSignal.timeout()` | Señal nativa autolimpiable para fijar tiempo límite a tareas y peticiones | [`signalTimeout.js`](./async/signalTimeout.js) |
| Iterator Helpers | Métodos `.map()`, `.filter()`, `.take()` con evaluación perezosa en iteradores (ES2025) | [`iteratorHelpers.js`](./async/iteratorHelpers.js) |
| `scheduler.yield()` | Concurrencia cooperativa para trocear tareas pesadas sin congelar la UI | [`schedulerYield.js`](./async/schedulerYield.js) |

---

## 🌐 DOM & Browser APIs

| Característica / API | Descripción breve | Archivo |
| :--- | :--- | :--- |
| `Element.checkVisibility()` | Comprobación nativa de visibilidad en UI sin forzar reflows costosos | [`checkVisibility.js`](./dom/checkVisibility.js) |
| `AbortController` | Cancelación nativa de peticiones `fetch` y limpieza masiva de `eventListeners` | [`abortController.js`](./dom/abortController.js) |
| `IntersectionObserver` | Detección asíncrona de visibilidad y viewport sin sobrecargar el scroll | [`intersectionObserver.js`](./dom/intersectionObserver.js) |
| `ResizeObserver` | Observación reactiva de dimensiones por elemento sin depender de window.resize | [`resizeObserver.js`](./dom/resizeObserver.js) |

---

## <a id="objects"></a>🗂️ Objects

| Característica / API | Descripción breve | Archivo |
| :--- | :--- | :--- |
| `structuredClone()` | Clonación profunda nativa (*deep clone*) sin hacks de JSON | [`structuredClone.js`](./objects/structuredClone.js) |
| `Object.freeze()` & Deep Freeze | Prevención de mutaciones accidentales y técnica de congelación profunda | [`deepFreeze.js`](./objects/deepFreeze.js) |
| `Object.fromEntries()` | Reconstrucción y filtrado de objetos desde pares clave-valor | [`fromEntries.js`](./objects/fromEntries.js) |
| `Intl.Segmenter` | Segmentación consciente de idioma para grafemas, emojis y palabras | [`intlSegmenter.js`](./objects/intlSegmenter.js) |
| `Object.hasOwn()` | Verificación directa y segura de propiedades propias sin fallos de prototipo | [`hasOwn.js`](./objects/hasOwn.js) |
| Transferable Objects (`structuredClone`) | Transferencia de memoria en tiempo O(1) para ArrayBuffers sin duplicar RAM | [`transferableClone.js`](./objects/transferableClone.js) |

---

## <a id="operators--logic"></a>⚙️ Operators & Logic

| Característica / API | Descripción breve | Archivo |
| :--- | :--- | :--- |
| `Nullish Coalescing (??)` | Asignación segura de valores por defecto diferenciando *nullish* de *falsy* | [`nullishCoalescing.js`](./operators/nullishCoalescing.js) |
| Logical Assignment (`??=`, `\|=`, `&&=`) | Asignaciones lógicas con evaluación en cortocircuito | [`logicalAssignment.js`](./operators/logicalAssignment.js) |
| Optional Chaining (`?.`) | Acceso seguro a propiedades anidadas, índices de arrays e invocación de callbacks | [`optionalChaining.js`](./operators/optionalChaining.js) |

---

## 🧩 Sets

| Característica / API | Descripción breve | Archivo |
| :--- | :--- | :--- |
| `Set.prototype.intersection()` | Intersección nativa entre conjuntos | [`intersection.js`](./sets/intersection.js) |
| `Set.prototype.difference()` | Diferencia relativa entre conjuntos sin conversiones a arrays | [`difference.js`](./sets/difference.js) |
| `Set.prototype.union()` | Combinación de dos conjuntos únicos sin arrays temporales (ES2024) | [`union.js`](./sets/union.js) |
| `Set.prototype.symmetricDifference()` | Elementos presentes en un conjunto o en otro, pero no en ambos (ES2024) | [`symmetricDifference.js`](./sets/symmetricDifference.js) |

---

## 🔤 Strings

| Característica / API | Descripción breve | Archivo |
| :--- | :--- | :--- |
| `String.prototype.replaceAll()` | Reemplazo global de subcadenas sin usar expresiones regulares complejas | [`replaceAll.js`](./strings/replaceAll.js) |
| `String.prototype.matchAll()` | Extracción iterativa de coincidencias completas y grupos de captura | [`matchAll.js`](./strings/matchAll.js) |
| `padStart()` / `padEnd()` | Relleno y alineación declarativa de cadenas a una longitud fija | [`padding.js`](./strings/padding.js) |
| RegExp Flag `v` | Operaciones de conjuntos (sustracción `--`, intersección `&&`) y emojis avanzados (ES2024) | [`regexFlagV.js`](./strings/regexFlagV.js) |

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
