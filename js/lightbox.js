const lb = $('#lb'); let group = [], gi = 0;
function openLB(items, i) { group = items; gi = i; renderLB(); if (!lb.open) lb.showModal(); }
function renderLB() {
  const it = group[gi], st = $('#lbStage');
  st.style.cssText = `--r:${it.ratio}`; st.innerHTML = it.html();
  $('#lbT').textContent = it.title; $('#lbD').textContent = it.desc;
}
const step = d => { gi = (gi + d + group.length) % group.length; renderLB() };
$('#lbX').onclick = () => lb.close(); $('#lbP').onclick = () => step(-1); $('#lbN').onclick = () => step(1);
lb.addEventListener('click', e => { if (e.target === lb || e.target.classList.contains('lbw')) lb.close() });
lb.addEventListener('keydown', e => { if (e.key === 'ArrowLeft') step(-1); if (e.key === 'ArrowRight') step(1) });

function mountTiles(container, items, extraClass = '') {
  container.innerHTML = '';
  items.forEach((it, i) => {
    const b = document.createElement('button'); b.type = 'button'; b.className = `tile fp ${extraClass}`; b.dataset.cursor = 'View';
    b.setAttribute('aria-label', `Open ${it.title}`);
    if (it.ratio) b.style.setProperty('--r', it.ratio);
    b.innerHTML = `<div class="stage">${it.stage ? it.stage() : it.html()}</div>${it.extra || ''}<span class="cap">${esc(it.title)}</span>`;
    b.onclick = () => openLB(items, i); container.appendChild(b);
  });
}
const gA = C.designsA.map(d => ({ ...designItem(d), ratio: 1 }));
const gB = C.designsB.map(d => designItem(d));
mountTiles($('#gridA'), gA); mountTiles($('#gridB'), gB);
const fItems = C.films.map(filmItem);
(function () {
  const c = $('#stills'); c.innerHTML = '';
  fItems.forEach((it, i) => {
    const b = document.createElement('button'); b.type = 'button'; b.className = 'tile fp'; b.dataset.cursor = 'View'; b.style.setProperty('--r', C.films[i].r);
    b.setAttribute('aria-label', `Open ${it.title}`);
    b.innerHTML = it.html() + `<span class="cap">${esc(it.title)}</span>`; b.onclick = () => openLB(fItems, i); c.appendChild(b);
  });
  $('#titles').innerHTML = C.films.slice(0, 8).map(f => `<span class="lk lk-${f.s}">${esc(f.t)}</span>`).join('');
  const g = C.gradeScene; const html = `${stillSVG({ ...g, r: 2.2 }, 5)}<div class="still-vig"></div>`;
  $('#gradeRaw').innerHTML = html; $('#gradeTop').innerHTML = html;
})();
$('#gradeRange').addEventListener('input', e => $('#grade').style.setProperty('--x', e.target.value + '%'));
