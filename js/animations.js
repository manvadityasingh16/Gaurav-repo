/* animations section */
let act = 2;
function renderActs(animate) {
  const a = C.acts[act];
  const paint = () => {
    $('#storyAct').textContent = a.head; $('#storyNote').innerHTML = a.note;
    $('#storyBoard').innerHTML = `<svg viewBox="0 0 320 200" aria-hidden="true"><g fill="none" stroke="#fff" stroke-width="1.6" stroke-linecap="round"><rect x="6" y="6" width="308" height="188" stroke-dasharray="3 5" opacity=".5"/>
      <path d="M70 160 q-30-70 20-96 q50 26 20 96z"/><path d="M90 66 q-30-30 -44-8 M90 66 q30-34 48-6"/><path d="M200 168 q-14-70 14-100 q30 30 16 100z"/><rect x="176" y="40" width="90" height="140" rx="4"/><path d="M140 110 h26" stroke-dasharray="3 4"/><circle cx="213" cy="90" r="3" fill="#2cc7d9" stroke="none"/></g></svg>`;
    $('#actPlayers').innerHTML = a.scenes.map((s, i) => player(`${a.label} — Scene ${act + 1}.${i + 1}: ${sceneName[s % 3]}`, sceneFor(s), 4655, { t: 215 + i * 20 })).join('');
    wirePlayers($('#actPlayers'));
  };
  $$('#acts button').forEach((b, i) => b.setAttribute('aria-pressed', i === act));
  if (!animate || reduce) return paint();
  const box = $('#actPlayers'); box.classList.add('swap'); setTimeout(() => { paint(); requestAnimationFrame(() => box.classList.remove('swap')) }, 350);
}
$('#storyTitle').textContent = C.storyTitle;
$('#acts').innerHTML = C.acts.map((a, i) => `<button type="button" aria-pressed="false">${esc(a.label)}</button>`).join('');
$$('#acts button').forEach((b, i) => b.onclick = () => { if (act !== i) { act = i; renderActs(true) } });
renderActs(false); wirePlayers();
