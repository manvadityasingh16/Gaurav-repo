(function () {
  const frames = [...C.designsA, ...C.designsB.slice(0, 6)];
  const make = () => frames.map(d => `<div class="fr">${designArt(d)}</div>`).join('');
  $('#reelstrip').innerHTML = make() + make();
})();
