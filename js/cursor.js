if (matchMedia('(pointer:fine)').matches && !reduce) {
  const cur = $('.cursor'), label = $('span', cur); let tx = 0, ty = 0, x = 0, y = 0;
  addEventListener('pointermove', e => { tx = e.clientX; ty = e.clientY; cur.classList.add('show') }, { passive: true });
  document.addEventListener('pointerleave', () => cur.classList.remove('show'));
  document.addEventListener('pointerover', e => { const t = e.target.closest('[data-cursor]'); if (t) { label.textContent = t.dataset.cursor; cur.classList.add('big') } else cur.classList.remove('big') });
  (function loop() { x += (tx - x) * .2; y += (ty - y) * .2; cur.style.transform = `translate(${x}px,${y}px)`; requestAnimationFrame(loop) })();
}
