// theme.js

// 1) Pre-Load Glitch verhindern
(function() {
    const html = document.documentElement;
    const isLightOrAuto =
        localStorage.getItem('hs_theme') === 'light'
        || (localStorage.getItem('hs_theme') === 'auto'
            && !window.matchMedia('(prefers-color-scheme: dark)').matches);

    const isDarkOrAuto =
        localStorage.getItem('hs_theme') === 'dark'
        || (localStorage.getItem('hs_theme') === 'auto'
            && window.matchMedia('(prefers-color-scheme: dark)').matches);

    if (isLightOrAuto && html.classList.contains('dark')) {
        html.classList.remove('dark');
    } else if (isDarkOrAuto && !html.classList.contains('dark')) {
        html.classList.add('dark');
    }
})();

// 2) Toggle-Button
document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("darkmode-btn");
    if (!btn) {
        console.warn("[theme.js] -> #darkmode-btn nicht gefunden!");
        return;
    }

    btn.addEventListener("click", () => {
        const htmlEl = document.documentElement;
        if (htmlEl.classList.contains("dark")) {
            // Switch to Light
            htmlEl.classList.remove("dark");
            localStorage.setItem("hs_theme", "light");
        } else {
            // Switch to Dark
            htmlEl.classList.add("dark");
            localStorage.setItem("hs_theme", "dark");
        }
    });
});
