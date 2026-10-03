/* projector start: wait for fonts so the title wipe lands cleanly */
(document.fonts && document.fonts.ready ? Promise.race([document.fonts.ready, new Promise(r => setTimeout(r, 1200))]) : Promise.resolve()).then(() => setTimeout(() => document.body.classList.add('on'), 250));
