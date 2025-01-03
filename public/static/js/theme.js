document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('darkmode-btn');
    if (!btn) {
        console.warn('[theme.js] -> Button #darkmode-btn nicht gefunden!');
        return;
    }

    btn.addEventListener('click', () => {
        const htmlEl = document.documentElement;
        if (htmlEl.classList.contains('dark')) {
            // Wechsel zu Light
            htmlEl.classList.remove('dark');
            localStorage.setItem('hs_theme', 'light');
        } else {
            // Wechsel zu Dark
            htmlEl.classList.add('dark');
            localStorage.setItem('hs_theme', 'dark');
        }
    });
});
