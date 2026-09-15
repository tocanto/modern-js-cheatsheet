// ======================================================
// Tema: Detección de cambios de tamaño con ResizeObserver
// Compatibilidad: Estándar en navegadores modernos / Web APIs
// Documentación: https://developer.mozilla.org/es/docs/Web/API/ResizeObserver
// ======================================================

const contenedorWidget = document.createElement('div');
contenedorWidget.id = 'panel-widget';
document.body.appendChild(contenedorWidget);

// ❌ Antes: window.resize (Inútil si cambia el layout interno sin mover la ventana)
/*
window.addEventListener('resize', () => {
  console.log('Solo detecta el redimensionamiento del viewport total.');
});
*/

// ✅ Ahora: Observación reactiva a nivel de nodo en el DOM
const observadorDimensiones = new ResizeObserver((entradas, self) => {
  for (const entrada of entradas) {
    // Lectura recomendada usando contentBoxSize (soporte moderno)
    const cajaContenido = entrada.contentBoxSize?.[0];
    const ancho = cajaContenido ? cajaContenido.inlineSize : entrada.contentRect.width;
    const alto = cajaContenido ? cajaContenido.blockSize : entrada.contentRect.height;

    console.log('--- ResizeObserver ---');
    console.log(`Elemento "${entrada.target.id}" redimensionado:`);
    console.log(`Ancho: ${ancho}px | Alto: ${alto}px`);

    // Lógica condicional según el tamaño del contenedor (Container Queries por JS)
    if (ancho < 400) {
      entrada.target.classList.add('modo-compacto');
    } else {
      entrada.target.classList.remove('modo-compacto');
    }
  }
});

// Iniciar la observación del nodo
observadorDimensiones.observe(contenedorWidget);

// Para liberar recursos cuando el componente se destruye:
// observadorDimensiones.unobserve(contenedorWidget);
// observadorDimensiones.disconnect();