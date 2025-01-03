(function () {
    const darkModeSwitch = document.getElementById('darkmode-btn');
    const html = document.documentElement;

    console.log("Dark Mode Switch loaded:", darkModeSwitch);

    const savedTheme = localStorage.getItem('hs_theme');
    if (savedTheme) {
        console.log("Saved theme:", savedTheme);
        html.classList.toggle('dark', savedTheme === 'dark');
    } else {
        const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        console.log("Default theme:", isDark ? "dark" : "light");
        html.classList.toggle('dark', isDark);
    }

    darkModeSwitch.addEventListener('click', () => {
        const isDark = html.classList.toggle('dark');
        localStorage.setItem('hs_theme', isDark ? 'dark' : 'light');
        console.log("Theme toggled:", isDark ? "dark" : "light");
    });
})();
