(function () {
    const button = document.querySelector(".button-switch");
    const outerSpan = document.querySelector(".outer-span");
    const lightSwitch = document.querySelector(".light-switch");
    const darkSwitch = document.querySelector(".dark-switch");
    const html = document.documentElement;

    // Funktion, um das gespeicherte Theme zu laden
    const loadTheme = () => {
        const savedTheme = localStorage.getItem("hs_theme");
        if (savedTheme === "dark") {
            html.classList.add("dark");
            button.classList.add("bg-gray-800");
            outerSpan.classList.add("translate-x-5");
            lightSwitch.classList.remove("opacity-100");
            darkSwitch.classList.add("opacity-100");
        } else {
            html.classList.remove("dark");
            button.classList.remove("bg-gray-800");
            outerSpan.classList.remove("translate-x-5");
            lightSwitch.classList.add("opacity-100");
            darkSwitch.classList.remove("opacity-100");
        }
    };

    // Theme beim Laden der Seite initialisieren
    loadTheme();

    // Event-Listener für den Schalter
    button.addEventListener("click", () => {
        const isDark = html.classList.toggle("dark");
        localStorage.setItem("hs_theme", isDark ? "dark" : "light");

        outerSpan.classList.toggle("translate-x-5");
        button.classList.toggle("bg-gray-800");
        lightSwitch.classList.toggle("opacity-100");
        darkSwitch.classList.toggle("opacity-100");
    });
})();
