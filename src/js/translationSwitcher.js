// translationSwitcher.js
// Baut auf window.TRANSLATIONS auf
console.log("ts.js loaded");


window.translationSwitcher = function() {
    return {

        selected: 0,

        countries: [
            {
                label: "English",
                emoji: "🇬🇧",
                lang: "en"
            },
            {
                label: "German",
                emoji: "🇩🇪",
                lang: "de"
            }
        ],
        translations: window.TRANSLATIONS, // Greift auf das globale Objekt zurück
        menuToggle: false
    };
};
