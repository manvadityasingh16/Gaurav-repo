$('#mail').href = `mailto:${C.email}`; $('#mail').textContent = C.email;
$('#footSoc').innerHTML = C.socials.map(s => `<a href="${esc(s.href)}">${esc(s.label)}</a>`).join('');
$('#copy').textContent = `© ${C.year} ${C.name}. Cut and designed in-house.`;
$('#rewind').onclick = () => scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
