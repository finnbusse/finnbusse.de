// translationSwitcher.js
// Baut auf window.TRANSLATIONS auf
console.log("translationSwitcher.js loaded");

window.translationSwitcher = function() {
    if (!window.TRANSLATIONS) {
        console.error("TRANSLATIONS are not defined.");
        return;
    }

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
        menuToggle: false,
        setLanguage(index) {
            if (index < 0 || index >= this.countries.length) {
                console.warn("Invalid language index:", index);
                return;
            }
            this.selected = index;
            console.log("Language switched to:", this.countries[index].label);
        }
    };
};

// AlpineJS-Integration
document.addEventListener('alpine:init', () => {
    if (typeof window.translationSwitcher !== 'function') {
        console.error("translationSwitcher is not a function.");
        return;
    }

    // Registriere das TranslationSwitcher-Objekt in AlpineJS
    Alpine.data('translationSwitcher', window.translationSwitcher);

    console.log("translationSwitcher initialized in AlpineJS.");
});
