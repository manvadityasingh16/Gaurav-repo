document.title = `${C.name} — Portfolio`;
$('#logo').textContent = C.name;
$('#edge').textContent = 'FILM 400 ▸ 27 ▸ 27A ▸ 28 ▸ 28A';
$('#heroRoles').innerHTML = `${C.roles[0].toLowerCase()} &nbsp; ${C.roles[1].toLowerCase()}`;
$('#heroYr').textContent = `${C.year}\n${C.name.toUpperCase()}`;

function heroScene() {
  return `<svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Illustrated gallery interior">
  <rect width="1600" height="900" fill="#d8c8a4"/><rect width="1600" height="560" fill="#c9b389"/>
  <rect x="120" y="70" width="820" height="380" fill="#5a3a20"/>
  <g stroke="#e0b878" stroke-width="3" fill="none" opacity=".7"><path d="M170 380 q40-120 80-20 t80-10 t80-40 t80 20"/><path d="M520 140 q60 40 40 100 t60 80"/><circle cx="360" cy="200" r="38"/><circle cx="700" cy="250" r="46"/><path d="M780 130 l60 40 l-20 70"/></g>
  <rect x="120" y="70" width="820" height="380" fill="none" stroke="#2a1a0c" stroke-width="10"/>
  <g><rect x="1020" y="0" width="230" height="760" fill="#9b7a4a"/><rect x="1260" y="0" width="340" height="760" fill="#a8864f"/>
  ${Array.from({ length: 16 }, (_, i) => `<rect x="${1020 + i * 14}" y="0" width="5" height="760" fill="#5d4527" opacity=".35"/>`).join('')}
  ${Array.from({ length: 22 }, (_, i) => `<rect x="${1260 + i * 15}" y="0" width="5" height="760" fill="#5d4527" opacity=".35"/>`).join('')}
  <rect x="1230" y="0" width="40" height="640" fill="#fff6dc"/></g>
  <rect y="600" width="1600" height="300" fill="#1c1410"/><rect y="600" width="1600" height="8" fill="#0006"/>
  <ellipse cx="760" cy="760" rx="740" ry="90" fill="#6a4a3055"/>
  <g fill="#c99a2a"><rect x="190" y="610" width="12" height="160"/><rect x="470" y="640" width="14" height="190"/><rect x="760" y="670" width="16" height="210"/><rect x="1060" y="700" width="18" height="230"/></g>
  <g fill="#e6bb44"><circle cx="196" cy="606" r="14"/><circle cx="477" cy="634" r="16"/><circle cx="768" cy="662" r="18"/><circle cx="1069" cy="690" r="20"/></g>
  <g fill="none" stroke="#a31622" stroke-width="9" stroke-linecap="round"><path d="M196 640 Q 336 700 477 668"/><path d="M477 668 Q 620 730 768 702"/><path d="M768 702 Q 920 770 1069 736"/></g>
  <g><rect x="60" y="560" width="110" height="130" fill="#e9e6dc" rx="8"/><ellipse cx="115" cy="520" rx="90" ry="64" fill="#2d6a35"/><ellipse cx="80" cy="500" rx="40" ry="70" fill="#3a8244"/><ellipse cx="160" cy="496" rx="38" ry="64" fill="#2a5d30"/></g>
  <g><rect x="1330" y="580" width="110" height="130" fill="#e9e6dc" rx="8"/><ellipse cx="1385" cy="540" rx="92" ry="66" fill="#2d6a35"/><ellipse cx="1350" cy="520" rx="38" ry="70" fill="#3a8244"/></g>
  <g><circle cx="1288" cy="366" r="30" fill="#c58b66"/><path d="M1258 358 q30-34 62-4 l-4 -12 q-30-26 -58 0z" fill="#1c1c1c"/>
  <path d="M1250 410 q38-18 76 0 l16 150 h-108z" fill="#e8e4da"/><rect x="1252" y="556" width="72" height="150" fill="#181818" rx="8"/><rect x="1258" y="700" width="24" height="110" fill="#c58b66"/><rect x="1292" y="700" width="24" height="110" fill="#c58b66"/><rect x="1252" y="806" width="36" height="22" fill="#2a2a2a"/><rect x="1292" y="806" width="36" height="22" fill="#2a2a2a"/>
  <path d="M1262 408 l10 120" stroke="#a31622" stroke-width="7"/></g>
  <rect width="1600" height="900" fill="#ffb40014"/></svg>`;
}
(function () {
  const m = $('#heroMedia');
  if (C.hero.video) m.innerHTML = `<video src="${esc(C.hero.video)}" autoplay muted loop playsinline></video>`;
  else if (C.hero.image) m.innerHTML = `<img src="${esc(C.hero.image)}" alt="">`;
  else m.innerHTML = heroScene();
  $('#heroContact').innerHTML = `<h3>Contact</h3><a href="mailto:${esc(C.email)}">${esc(C.email)}</a><div>${esc(C.phone)}</div><div>${esc(C.city)}</div>
    <div class="soc">${C.socials.map(s => `<a href="${esc(s.href)}" aria-label="${esc(s.label)}">${esc(s.short)}</a>`).join('')}<a href="#contact" style="border:0;width:auto;font-size:.95rem">${esc(C.handle)}</a></div>`;

  const e = C.education[0];
  $('#resume').innerHTML = `
  <div class="who fp">
    <div class="avatar">${C.avatar ? `<img src="${esc(C.avatar)}" alt="${esc(C.name)}">` : esc(C.initials)}</div>
    <h2>${esc(C.name)}</h2><p class="role">${C.roles.map(esc).join('<br>')}</p><hr>
    <p class="bio">${C.bio}</p>
    <div class="contact"><h3>Contact</h3><a href="mailto:${esc(C.email)}">${esc(C.email)}</a><span>${esc(C.phone)}</span><span>${esc(C.city)}</span></div>
  </div>
  <div class="fp" style="--d:120ms">
    <div class="edu"><h3>Education</h3>${C.education.map(x => `<div class="when">${esc(x.date)}</div><div class="rail"><strong>${esc(x.school)}</strong>${x.detail.map(d => `<small>${esc(d)}</small>`).join('')}<em>${esc(x.note)}</em></div>`).join('')}</div>
    <div class="timeline"><h3>Work Experience</h3><div class="tl" id="tl">${C.experience.map(j => `<div class="job"><time>${esc(j.when)}</time><strong>${esc(j.place)}</strong>${j.roles.map(r => `<small>${esc(r)}</small>`).join('')}</div>`).join('')}</div></div>
  </div>
  <div class="skills fp" style="--d:240ms"><h3>Skills</h3>
    <div class="group"><p class="lbl">TOOLS</p><ul>${C.tools.map(t => `<li>${esc(t)}</li>`).join('')}</ul></div>
    <div class="group"><p class="lbl">EXPERTISE</p><ul>${C.expertise.map(t => `<li>${esc(t)}</li>`).join('')}</ul></div>
  </div>
  <div class="side fp" style="--d:360ms">
    <section><h3>Interest</h3><ul>${C.interests.map(t => `<li>${esc(t)}</li>`).join('')}</ul></section>
    <section><h3>Languages</h3><ul>${C.languages.map(t => `<li>${esc(t)}</li>`).join('')}</ul></section>
  </div>`;
})();
