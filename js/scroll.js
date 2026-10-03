document.querySelectorAll('[data-stagger]').forEach(g => [...g.children].forEach((c, i) => c.style.setProperty('--d', Math.min(i * 70, 700) + 'ms')));
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } }), { threshold: .12, rootMargin: '0px 0px -6% 0px' });
$$('.fp').forEach(el => io.observe(el));
const jobIO = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { setTimeout(() => e.target.classList.add('in'), +e.target.dataset.i * 140); jobIO.unobserve(e.target) } }), { threshold: .6 });
$$('.job').forEach((j, i) => { j.dataset.i = 0; jobIO.observe(j) });

const nav = $('#nav'), gate = $('#gate'), tl = $('#tl'), worksH = $('#worksH'), tc = $('#tc'), strip = $('.works-intro');
const links = $$('.nav a.l'), secs = links.map(a => $(a.getAttribute('href')));
let ticking = false;
function onScroll() {
  const y = scrollY, vh = innerHeight, max = document.documentElement.scrollHeight - vh;
  /* header stays fixed and visible at all times */
  if (y < vh * 1.2 && !reduce) gate.style.transform = `translateY(${y * .14}px) scale(${1 - Math.min(y / vh, 1) * .06})`;
  if (tl) { const r = tl.getBoundingClientRect(); tl.style.setProperty('--p', Math.max(0, Math.min(1, (vh * .8 - r.top) / r.height)).toFixed(3)) }
  const sr = strip.getBoundingClientRect(); if (sr.top < vh && sr.bottom > 0 && !reduce) worksH.style.transform = `translateX(${(sr.top / vh - .3) * -80}px)`;
  const total = Math.floor((max > 0 ? y / max : 0) * 24 * 60 * 5), fr = total % 24, s = Math.floor(total / 24) % 60, m = Math.floor(total / 1440);
  tc.textContent = `00:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}:${String(fr).padStart(2, '0')}`;
  let cur = -1; secs.forEach((s, i) => { if (s && s.getBoundingClientRect().top < vh * .45) cur = i }); links.forEach((a, i) => a.classList.toggle('on', i === cur));
  ticking = false;
}
addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll) } }, { passive: true });
onScroll();
