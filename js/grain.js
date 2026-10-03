(function () {
  const c = $('#grain'), x = c.getContext('2d'), img = x.createImageData(c.width, c.height); let last = 0;
  function draw() { const d = img.data; for (let i = 0; i < d.length; i += 4) { const v = Math.random() * 255; d[i] = d[i + 1] = d[i + 2] = v; d[i + 3] = 255 } x.putImageData(img, 0, 0) }
  draw(); if (reduce) return;
  (function loop(t) { if (t - last > 90) { draw(); last = t } requestAnimationFrame(loop) })(0);
})();
