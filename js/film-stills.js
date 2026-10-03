function stillSVG(f, idx) {
  const r = rng(idx * 97 + 11), [top, bot, acc] = f.pal, W = 800, H = Math.round(800 / (f.r || 1.5)), id = U();
  let body = '';
  const horizon = H * (f.kind === 'room' ? .72 : .66);
  if (f.kind === 'city') {
    for (let i = 0, x = -10; x < W; i++) { const w = 30 + r() * 70, h = 60 + r() * H * .5; body += `<rect x="${x}" y="${horizon - h}" width="${w}" height="${h + 40}" fill="${bot}" opacity="${.55 + r() * .4}"/>`;
      for (let k = 0; k < 6; k++) body += `<rect x="${x + 6 + r() * (w - 14)}" y="${horizon - h + 8 + r() * (h - 16)}" width="3" height="4" fill="${acc}" opacity="${r() * .8}"/>`; x += w + 4 }
  } else if (f.kind === 'street') {
    for (let i = 0; i < 7; i++) { const x = i * (W / 6) - 40, h = 90 + r() * H * .45, w = 90 + r() * 70; body += `<rect x="${x}" y="${horizon - h}" width="${w}" height="${h}" fill="${bot}" opacity=".85"/><rect x="${x + 10}" y="${horizon - h + 14}" width="${w - 20}" height="${h * .22}" fill="${acc}" opacity=".25"/>` }
    body += `<path d="M${W * .35} ${horizon} L${W * .62} ${horizon} L${W} ${H} L0 ${H}Z" fill="#00000030"/>`;
  } else if (f.kind === 'room') {
    body += `<rect x="${W * .1}" y="${H * .1}" width="${W * .3}" height="${H * .5}" fill="${acc}" opacity=".85"/><rect x="${W * .1}" y="${H * .1}" width="${W * .3}" height="${H * .5}" fill="none" stroke="#000" stroke-width="8" opacity=".5"/>
    <rect x="${W * .58}" y="${H * .24}" width="${W * .3}" height="${H * .4}" fill="#000" opacity=".28"/><circle cx="${W * .72}" cy="${H * .58}" r="${H * .1}" fill="${acc}" opacity=".5"/>`;
  } else {
    body += `<rect y="${horizon}" width="${W}" height="${H - horizon}" fill="#000" opacity=".25"/><ellipse cx="${W * .5}" cy="${H * .82}" rx="${W * .22}" ry="${H * .035}" fill="#000" opacity=".5"/>
    <rect x="${W * .4}" y="${H * .76}" width="${W * .2}" height="${H * .035}" rx="9" fill="${acc}"/><circle cx="${W * .43}" cy="${H * .82}" r="${H * .03}" fill="#111"/><circle cx="${W * .57}" cy="${H * .82}" r="${H * .03}" fill="#111"/>
    ${Array.from({ length: 5 }, (_, i) => `<rect x="${i * W * .2}" y="${horizon - 40 - r() * 80}" width="${W * .16}" height="${80 + r() * 80}" fill="${bot}" opacity=".5"/>`).join('')}`;
  }
  return `<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><defs><linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${top}"/><stop offset="1" stop-color="${bot}"/></linearGradient></defs>
  <rect width="${W}" height="${H}" fill="url(#${id})"/>${body}</svg>`;
}
const titleLockup = f => `<span class="lk lk-${f.s}">${esc(f.t)}</span>`;
const filmItem = (f, i) => ({ title: f.t.replace('\n', ' '), desc: f.desc, ratio: f.r, html: () => `<div class="stage">${stillSVG(f, i)}</div><div class="still-vig"></div><div class="still-title">${titleLockup(f)}</div>` });
