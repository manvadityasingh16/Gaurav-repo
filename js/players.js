const ICON = '<svg class="i-pause" viewBox="0 0 16 16"><rect x="3" y="2" width="3.5" height="12" rx="1"/><rect x="9.5" y="2" width="3.5" height="12" rx="1"/></svg><svg class="i-play" viewBox="0 0 16 16"><path d="M4 2l10 6-10 6z"/></svg>';
const fmt = s => { s = Math.floor(s); const h = Math.floor(s / 3600), m = Math.floor(s % 3600 / 60), ss = s % 60; return (h ? h + ':' + String(m).padStart(2, '0') : m) + ':' + String(ss).padStart(2, '0') };
function player(label, inner, dur, opts = {}) {
  return `<div class="player" data-dur="${dur}" data-t="${opts.t || 0}">
  <div class="chrome"><i></i><i></i><i></i><span class="bar">${esc(label)}</span></div>
  <div class="screen" data-cursor="Pause">${inner}</div>
  <div class="ctl"><button class="pp" type="button" aria-label="Pause or play">${ICON}</button>
  <div class="prog" role="progressbar" aria-label="Playback progress" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"><span></span></div>
  <time>0:00 / ${fmt(dur)}</time>${opts.video ? '<button class="mute" type="button">Unmute</button>' : ''}</div></div>`;
}
function wirePlayers(root = document) {
  $$('.player', root).forEach(p => {
    if (p._w) return; p._w = 1; p._t = +p.dataset.t || 0;
    const toggle = () => { p.classList.toggle('paused'); const v = $('video', p); if (v) p.classList.contains('paused') ? v.pause() : v.play() };
    $('.pp', p).onclick = toggle; $('.screen', p).onclick = toggle;
    const mute = $('.mute', p); if (mute) mute.onclick = () => { const v = $('video', p); v.muted = !v.muted; mute.textContent = v.muted ? 'Unmute' : 'Mute' };
  });
}
setInterval(() => {
  $$('.player').forEach(p => {
    if (p.classList.contains('paused') || !p._w) return;
    const d = +p.dataset.dur; p._t = (p._t + .25) % d;
    $('.prog span', p).style.width = (p._t / d * 100) + '%'; $('.prog', p).setAttribute('aria-valuenow', Math.round(p._t / d * 100));
    $('time', p).textContent = `${fmt(p._t)} / ${fmt(d)}`;
  });
}, 250);
