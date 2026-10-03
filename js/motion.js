/* motion section */
(function () {
  $('#mstrip').innerHTML = C.motion.panes.map(p => `<button type="button" class="pane" aria-label="${esc(p.title)}">${SCENES[['m0', 'm1', 'm2'][p.scene]]()}<span class="cap">${esc(p.title)}</span></button>`).join('');
  const m = C.motion.main;
  const inner = m.video ? `<video src="${esc(m.video)}" autoplay muted loop playsinline></video>` : SCENES.www();
  $('#mainPlayer').innerHTML = player(m.title, inner, 95, { video: !!m.video });
})();
