function designArt(d) {
  if (d.src) return `<img src="${esc(d.src)}" alt="${esc(d.title)}" style="width:100%;height:100%;object-fit:cover">`;
  const st = `--c1:${d.pal[0]};--c2:${d.pal[1]};--c3:${d.pal[2]}`, w = words(d.word), cap = `<small>${esc(d.cap)}</small>`;
  switch (d.style) {
    case 'bigtype': return `<div class="art bigtype" style="${st}"><i class="blob"></i>${cap}<b class="w">${w}</b></div>`;
    case 'duotone': return `<div class="art duotone" style="${st}"><i class="fig"></i>${cap}<b class="w">${w}</b></div>`;
    case 'collage': return `<div class="art collage" style="${st}"><i class="s1"></i><i class="s2"></i><i class="s3"></i><b class="w">${w}</b></div>`;
    case 'product': return `<div class="art product" style="${st}">${cap.replace('<small>', '<small style="top:auto;bottom:4cqw">')}<b class="w">${w}</b><i class="bottle"></i></div>`;
    case 'menu': return `<div class="art menu" style="${st}"><div class="hd"><b class="w">${w}</b></div><i class="plate"></i><i class="lines"></i></div>`;
    case 'racket': return `<div class="art racket" style="${st}">${cap}<i class="ring"></i><i class="ball"></i><b class="w">${w}</b></div>`;
  }
  return '';
}
const designItem = d => ({ title: d.title, desc: d.cap, ratio: d.ratio || 0.75, html: () => designArt(d) });
