// translationSwitcher.js
// Baut auf window.TRANSLATIONS auf

window.translationSwitcher = function() {
    return {
        // Default = 0 => en
        selected: 0,
        // Zwei Sprachen
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
