const SCENES = {
  m0: () => `<svg viewBox="0 0 400 450" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><rect width="400" height="450" fill="#5b4df0"/>
  <path d="M0 50 C130 20 190 160 120 260 S0 340 0 340Z" fill="#8fe3cf"/>
  <g stroke="#6fcfba" stroke-width="1.5" opacity=".7">${Array.from({ length: 10 }, (_, i) => `<line x1="0" y1="${40 + i * 30}" x2="190" y2="${40 + i * 30}"/>`).join('')}</g>
  <g class="fl"><rect x="40" y="70" width="110" height="64" rx="6" fill="#d9f5ff" transform="rotate(-12 95 100)"/><rect x="56" y="86" width="60" height="6" fill="#4fa0d0" transform="rotate(-12 95 100)"/></g>
  <g class="fl b"><rect x="270" y="90" width="90" height="50" rx="6" fill="#ff8fb0" transform="rotate(14 315 115)"/></g>
  <g class="fl c" fill="#fff" font-family="monospace" font-size="16"><text x="70" y="30">0 0 1 1 0 0</text><text x="260" y="200" font-size="20">{code}</text></g>
  <g><ellipse cx="210" cy="190" rx="92" ry="86" fill="#3a2fd0"/><circle cx="160" cy="130" r="40" fill="#3a2fd0"/><circle cx="262" cy="128" r="42" fill="#3a2fd0"/>
  <circle cx="210" cy="215" r="70" fill="#ffb199"/><circle cx="172" cy="232" r="14" fill="#ff7f8f" opacity=".7"/><circle cx="250" cy="232" r="14" fill="#ff7f8f" opacity=".7"/>
  <g class="blink"><circle cx="185" cy="205" r="14" fill="#fff"/><circle cx="187" cy="207" r="7" fill="#1a1a44"/></g><g class="blink"><circle cx="236" cy="205" r="14" fill="#fff"/><circle cx="238" cy="207" r="7" fill="#1a1a44"/></g>
  <path d="M190 250 q20 22 42 0z" fill="#8a1a3a"/><rect x="170" y="290" width="80" height="150" fill="#1d1d3f"/>
  <path d="M90 340 L220 300 L330 350 L240 420 L100 400Z" fill="#ffc933"/><path d="M220 300 L330 350 L330 370 L220 322Z" fill="#e8a817"/></g></svg>`,
  m1: () => `<svg viewBox="0 0 500 450" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><rect width="500" height="450" fill="#5a6cff"/>
  <rect x="150" y="0" width="350" height="300" fill="#4cc3ff"/><g class="fl" fill="#e8f7ff"><ellipse cx="400" cy="70" rx="48" ry="18"/><ellipse cx="430" cy="58" rx="30" ry="16"/></g>
  <rect x="0" y="360" width="500" height="90" fill="#4a56e0"/>
  <g><rect x="10" y="90" width="150" height="270" fill="#4150d8"/>${Array.from({ length: 5 }, (_, r) => `<rect x="18" y="${100 + r * 52}" width="134" height="6" fill="#2d36a8"/>${Array.from({ length: 9 }, (_, c) => `<rect x="${22 + c * 14}" y="${r * 52 + 64 + 6}" width="9" height="${34 + (c * 7) % 10}" fill="${['#ff7a8a', '#ffd23a', '#8fe3cf', '#fff'][(c + r) % 4]}"/>`).join('')}`).join('')}</g>
  <g transform="translate(48 56)"><circle cx="0" cy="0" r="22" fill="#fff"/><circle cx="0" cy="0" r="18" fill="#ffe2ea" stroke="#ff7a8a" stroke-width="3"/><g><line x1="0" y1="0" x2="0" y2="-12" stroke="#3a2fd0" stroke-width="3"/></g></g>
  <g class="hand" style="--p:0"><line x1="48" y1="38" x2="48" y2="74" stroke="#3a2fd0" stroke-width="3" opacity="0"/><line x1="48" y1="56" x2="48" y2="42" stroke="#3a2fd0" stroke-width="3" stroke-linecap="round"/><line x1="48" y1="56" x2="48" y2="70" stroke="#0000" stroke-width="3"/></g>
  <g><rect x="230" y="300" width="230" height="10" fill="#c8fff0"/><rect x="250" y="310" width="8" height="60" fill="#c8fff0"/><rect x="430" y="310" width="8" height="60" fill="#c8fff0"/>
  <path d="M240 290 L240 220 Q240 200 260 200 L290 200 L290 300Z" fill="#ffc933"/>
  <rect x="330" y="230" width="100" height="68" rx="4" fill="#ffd54a"/><rect x="376" y="298" width="8" height="12" fill="#e8a817"/>
  <circle cx="300" cy="140" r="44" fill="#ffb199"/><path d="M256 130 q10-50 66-34 q34 10 28 44 q-30-26 -94-10z" fill="#f2e6b5"/><g fill="none" stroke="#1d1d3f" stroke-width="3"><circle cx="286" cy="144" r="12"/><circle cx="322" cy="144" r="12"/><line x1="298" y1="144" x2="310" y2="144"/></g>
  <g class="blink"><circle cx="286" cy="144" r="4" fill="#1d1d3f"/></g><g class="blink"><circle cx="322" cy="144" r="4" fill="#1d1d3f"/></g>
  <rect x="268" y="184" width="68" height="110" rx="14" fill="#2b2b2b"/><path d="M336 210 L400 236" stroke="#2b2b2b" stroke-width="22" stroke-linecap="round"/>
  <rect x="270" y="294" width="40" height="90" fill="#3a2fd0"/><rect x="300" y="294" width="40" height="90" fill="#4a40e0"/><rect x="262" y="376" width="48" height="16" fill="#1a1a1a"/><rect x="304" y="376" width="48" height="16" fill="#1a1a1a"/></g></svg>`,
  m2: () => `<svg viewBox="0 0 500 450" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><rect width="500" height="450" fill="#7b86ff"/>
  <path d="M0 330 L500 300 L500 450 L0 450Z" fill="#4a42d6"/>
  <g class="spinz"><circle cx="440" cy="60" r="26" fill="#4cc3ff" opacity=".6"/></g>
  <rect x="160" y="50" width="330" height="260" rx="16" fill="#aef5e2"/><rect x="176" y="66" width="298" height="228" rx="8" fill="#f2f8ff"/>
  <rect x="300" y="310" width="50" height="40" fill="#aef5e2"/><rect x="250" y="350" width="150" height="14" rx="6" fill="#aef5e2"/>
  <g class="fl"><path d="M250 150 L330 110 L410 150 L330 190Z" fill="#4a7ad6"/><path d="M250 150 L330 190 L330 210 L250 170Z" fill="#2f55a8"/><path d="M330 190 L410 150 L410 170 L330 210Z" fill="#3e6cc8"/>
  <rect x="290" y="132" width="80" height="34" fill="#1a2a5a" transform="skewX(-20)"/></g>
  <g class="fl b"><rect x="190" y="200" width="56" height="26" rx="4" fill="#ffb199"/><text x="198" y="218" font-size="13" font-weight="700" fill="#fff" font-family="sans-serif">IDE</text></g>
  <g class="fl c"><circle cx="420" cy="110" r="16" fill="none" stroke="#ff8a73" stroke-width="5"/><path d="M432 122 l14 14" stroke="#ff8a73" stroke-width="5" stroke-linecap="round"/></g>
  <g class="bob"><ellipse cx="90" cy="400" rx="64" ry="14" fill="#2ec7ff"/><ellipse cx="90" cy="394" rx="52" ry="10" fill="#0a4cb0"/>
  <path d="M50 380 Q44 290 90 280 Q136 290 130 380Z" fill="#1d2a6a"/><circle cx="62" cy="276" r="14" fill="#1d2a6a"/><circle cx="118" cy="276" r="14" fill="#1d2a6a"/>
  <ellipse cx="90" cy="310" rx="30" ry="26" fill="#cfd6e8"/><g class="blink"><circle cx="78" cy="300" r="4" fill="#111"/></g><g class="blink"><circle cx="102" cy="300" r="4" fill="#111"/></g>
  <path d="M130 300 L156 262" stroke="#1d2a6a" stroke-width="14" stroke-linecap="round"/></g></svg>`,
  www: () => `<svg viewBox="0 0 960 540" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><rect width="960" height="540" fill="#e1dfd5"/><path d="M0 0 L260 0 L420 340 L0 340Z" fill="#d7cfbf"/>
  <line x1="60" y1="140" x2="900" y2="140" stroke="#fff" stroke-width="2"/><path d="M40 120 l20 0 l-6 20 l-14 0z" fill="#fff"/><path d="M900 140 l-14 -20 l28 0z" fill="#fff"/><line x1="60" y1="140" x2="60" y2="500" stroke="#fff" stroke-width="2"/>
  <g class="slide" style="--x:-70px;--y:10px;--d:0s"><rect x="230" y="300" width="230" height="140" rx="6" fill="#5a82ff"/></g>
  <g class="slide" style="--x:-50px;--y:6px;--d:.1s"><rect x="240" y="320" width="230" height="120" rx="6" fill="#f6bfae"/></g>
  <g class="slide" style="--x:-30px;--y:4px;--d:.2s"><rect x="250" y="340" width="230" height="110" rx="6" fill="#edb04c"/></g>
  <g class="slide" style="--x:-14px;--y:2px;--d:.3s"><rect x="262" y="362" width="230" height="100" rx="6" fill="#2ebf99"/></g>
  <g class="slide" style="--x:-4px;--y:0;--d:.4s"><rect x="274" y="384" width="230" height="100" rx="6" fill="#8fd6c8"/></g>
  <g class="slide" style="--x:0px;--y:-40px;--d:0s"><path d="M560 230 H700 L730 200 H890 V460 H560Z" fill="#8fd6c8" stroke="#0e5a82" stroke-width="3"/><rect x="560" y="200" width="150" height="40" fill="#0f2a56"/><circle cx="578" cy="220" r="5" fill="#8fd6c8"/><circle cx="600" cy="220" r="5" fill="#8fd6c8"/><rect x="735" y="205" width="110" height="26" fill="#d9f2ec" stroke="#0e5a82" stroke-width="2"/><text x="762" y="224" font-size="17" font-weight="700" fill="#0f2a56" font-family="sans-serif">www.</text>
  <rect x="580" y="258" width="290" height="110" fill="#dbe9f7" stroke="#0e5a82" stroke-width="2"/><line x1="580" y1="258" x2="870" y2="368" stroke="#0e5a82" stroke-width="2"/>
  <rect x="580" y="384" width="62" height="40" fill="#254f94"/><rect x="660" y="384" width="120" height="6" fill="#254f94"/><rect x="660" y="398" width="160" height="6" fill="#254f94"/><rect x="660" y="412" width="120" height="6" fill="#254f94"/></g></svg>`,
  seed: () => `<svg viewBox="0 0 800 450" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><rect width="800" height="450" fill="#7fc3e8"/><rect y="0" width="800" height="120" fill="#a9dcee"/>
  <ellipse cx="110" cy="60" rx="130" ry="60" fill="#6f7c74"/><path d="M0 120 Q100 98 200 118 T400 112 T600 120 T800 110 V150 H0Z" fill="#6bbf3f"/>
  <rect y="140" width="800" height="310" fill="#8a4f2c"/>${[[60, 220, 30, 18], [700, 200, 36, 22], [140, 380, 44, 26], [640, 360, 38, 20], [740, 300, 24, 14], [300, 190, 24, 12]].map(([x, y, a, b]) => `<ellipse cx="${x}" cy="${y}" rx="${a}" ry="${b}" fill="#a2643d"/>`).join('')}
  <g class="bob"><path d="M400 120 q-60-50 -90-20 q50 30 90 20z" fill="#3f9a2a"/><path d="M400 120 q70-60 100-20 q-60 36 -100 20z" fill="#4eb338"/><path d="M400 124 q-6-30 0-64" stroke="#2f7a22" stroke-width="6" fill="none"/></g>
  <ellipse cx="400" cy="300" rx="98" ry="134" fill="#f7ecd9"/><ellipse cx="400" cy="300" rx="98" ry="134" fill="none" stroke="#e4d3b3" stroke-width="3"/>
  <g class="blink"><circle cx="360" cy="270" r="9" fill="#1a1a1a"/></g><g class="blink"><circle cx="440" cy="270" r="9" fill="#1a1a1a"/></g><ellipse cx="400" cy="296" rx="14" ry="18" fill="#5a5a5a"/>
  <path d="M312 330 q40 -30 80 6" stroke="#1a1a1a" stroke-width="4" fill="none"/><path d="M488 330 q-40 -30 -80 6" stroke="#1a1a1a" stroke-width="4" fill="none"/>
  <ellipse cx="368" cy="206" rx="26" ry="10" fill="#b5dff2" opacity=".8"/>
  <g class="rain">${Array.from({ length: 16 }, (_, i) => `<line x1="${i * 52}" y1="0" x2="${i * 52 - 36}" y2="110" style="animation-delay:${-(i % 5) * .13}s"/>`).join('')}</g></svg>`,
  bath: () => `<svg viewBox="0 0 800 450" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><rect width="800" height="450" fill="#e6f1f2"/>
  <g stroke="#27a9b5" stroke-width="3" opacity=".8">${Array.from({ length: 14 }, (_, i) => `<line x1="${120 + i * 50}" y1="0" x2="${120 + i * 50}" y2="330"/>`).join('')}${Array.from({ length: 7 }, (_, i) => `<line x1="120" y1="${i * 50}" x2="800" y2="${i * 50}"/>`).join('')}</g>
  <rect width="110" height="330" fill="#b9bdbe"/><rect x="290" y="30" width="22" height="300" fill="#e8962a"/><rect y="330" width="800" height="120" fill="#f5a623"/><rect y="330" width="800" height="8" fill="#d98a14"/>
  <ellipse cx="400" cy="420" rx="120" ry="22" fill="#6bb04a"/>
  <path d="M260 290 H540 Q540 380 470 380 H330 Q260 380 260 290Z" fill="#e9eaea"/><rect x="250" y="276" width="300" height="22" rx="10" fill="#fafafa"/>
  <g>${Array.from({ length: 12 }, (_, i) => `<circle cx="${278 + i * 22}" cy="${270 - (i % 3) * 8}" r="${24 - (i % 4) * 3}" fill="#fff"/>`).join('')}</g>
  <g class="bob"><ellipse cx="400" cy="226" rx="44" ry="56" fill="#f4ead6"/><circle cx="386" cy="218" r="4" fill="#222"/><circle cx="414" cy="218" r="4" fill="#222"/><circle cx="400" cy="156" r="10" fill="#d1242a"/><path d="M400 150 q4-14 14-16" stroke="#2f7a22" stroke-width="3" fill="none"/></g>
  <g>${Array.from({ length: 10 }, (_, i) => `<circle class="bub" style="--d:${-i * .45}s" cx="${300 + i * 24}" cy="260" r="${6 + i % 3 * 3}" fill="#fff" stroke="#9cd8ee" stroke-width="2"/>`).join('')}</g>
  <g><ellipse cx="286" cy="282" rx="16" ry="12" fill="#ffd23a"/><circle cx="276" cy="268" r="9" fill="#ffd23a"/><path d="M268 268 l-9 3 l9 3z" fill="#ff8a1a"/></g>
  <g><rect x="60" y="200" width="80" height="26" rx="10" fill="#e9eaea"/><rect x="72" y="226" width="56" height="104" fill="#e0e2e2"/></g><rect x="660" y="230" width="86" height="12" rx="6" fill="#ccd"/><rect x="684" y="242" width="38" height="88" fill="#ddd"/></svg>`,
  mirror: () => `<svg viewBox="0 0 800 450" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><rect width="800" height="450" fill="#9dd3e8"/><rect y="340" width="800" height="110" fill="#b88a5a"/>
  <rect x="470" y="40" width="260" height="330" rx="130" fill="#e8d4a0"/><rect x="488" y="58" width="224" height="294" rx="112" fill="#d7f1ff"/>
  <g transform="translate(600 220) scale(.52)"><ellipse rx="98" ry="134" class="morph" fill="#f7ecd9"/><circle cx="-40" cy="-30" r="9" fill="#1a1a1a"/><circle cx="40" cy="-30" r="9" fill="#1a1a1a"/><ellipse cx="0" cy="-4" rx="14" ry="18" fill="#5a5a5a"/><path d="M-30 -140 q30-50 60 0" stroke="#3f9a2a" stroke-width="8" fill="none"/></g>
  <ellipse cx="560" cy="360" rx="40" ry="8" fill="#0003"/>
  <g class="bob"><ellipse cx="260" cy="260" rx="92" ry="124" fill="#f7ecd9"/><g class="blink"><circle cx="222" cy="236" r="9" fill="#1a1a1a"/></g><g class="blink"><circle cx="298" cy="236" r="9" fill="#1a1a1a"/></g><ellipse cx="260" cy="262" rx="13" ry="17" fill="#5a5a5a"/>
  <path d="M258 140 q-40-40 -70-10 q40 24 70 10z" fill="#3f9a2a"/><path d="M258 140 q50-50 80-12 q-44 30 -80 12z" fill="#4eb338"/>
  <path d="M170 300 q-34 20 -48 56" stroke="#e4d3b3" stroke-width="18" fill="none" stroke-linecap="round"/></g>
  <g class="fl"><path d="M410 120 l6 14 l15 2 l-11 10 l3 15 l-13 -8 l-13 8 l3 -15 l-11 -10 l15 -2z" fill="#ff9ec0"/></g></svg>`
};
const sceneFor = n => [SCENES.seed, SCENES.bath, SCENES.mirror][n % 3]();
const sceneName = ['Underground', 'Bath time', 'The mirror'];
