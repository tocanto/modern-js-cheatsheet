// ======================================================
// Tema: Comprobar visibilidad de elementos con checkVisibility()
// Estándar: DOM / CSSOM View Module / Soporte universal moderno
// Documentación: https://developer.mozilla.org/es/docs/Web/API/Element/checkVisibility
// ======================================================

// Simulación de un elemento del DOM
const modal = document.querySelector('#modal-alerta');

// ❌ Antes: Combinar lecturas de CSS que fuerzan reflow/recalculo de layout
const esVisibleTradicional = (elemento) => {
  if (!elemento) return false;
  const estilo = window.getComputedStyle(elemento);
  return estilo.display !== 'none' && estilo.visibility !== 'hidden' && elemento.offsetWidth > 0;
};

// ✅ Ahora: Método nativo y optimizado
const esVisible = modal.checkVisibility();

// Uso avanzado con opciones configurables:
const esRealmenteVisible = modal.checkVisibility({
  checkOpacity: true,        // Considera invisible si opacity === 0
  checkVisibilityCSS: true,  // Considera visibility: hidden / collapse
  contentVisibilityAuto: true // Considera content-visibility: auto
});

console.log('--- Element.checkVisibility() ---');
console.log('¿El modal es visible?:', esVisible);
console.log('¿Es visible considerando opacidad y CSS?:', esRealmenteVisible);