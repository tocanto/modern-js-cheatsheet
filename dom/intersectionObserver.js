// ======================================================
// Tema: Detección eficiente de visibilidad con IntersectionObserver
// Compatibilidad: Estándar en navegadores modernos / Web APIs
// Documentación: https://developer.mozilla.org/es/docs/Web/API/IntersectionObserver
// ======================================================

const tarjeta = document.createElement('div');
tarjeta.id = 'tarjeta-producto';
tarjeta.textContent = 'Producto destacado';
document.body.appendChild(tarjeta);

// ❌ Antes: Listener de scroll manual y bloqueante
/*
window.addEventListener('scroll', () => {
  const rect = tarjeta.getBoundingClientRect();
  const esVisible = rect.top < window.innerHeight && rect.bottom >= 0;
  if (esVisible) {
    console.log('Tarjeta visible (cálculo sincrónico costoso)');
  }
});
*/

// ✅ Ahora: Observador asíncrono desacoplado del hilo principal
const opciones = {
  root: null, // Viewport del navegador
  rootMargin: '0px',
  threshold: 0.25 // Se dispara al tener 25% de visibilidad
};

const observador = new IntersectionObserver((entradas, self) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      console.log('--- IntersectionObserver ---');
      console.log('Elemento visible al 25% o más:', entrada.target.id);
      console.log('Ratio exacto de visibilidad:', entrada.intersectionRatio);

      // Dejar de observar una vez procesado (ideal para lazy loading)
      self.unobserve(entrada.target);
    }
  });
}, opciones);

observador.observe(tarjeta);