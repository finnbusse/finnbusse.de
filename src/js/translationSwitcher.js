document.addEventListener('alpine:init', () => {
    Alpine.data('translationSwitcher', () => ({
        selected: 0,
        menuToggle: false,
        countries: [
            { label: "English", emoji: "🇬🇧", lang: "en" },
            { label: "German", emoji: "🇩🇪", lang: "de" }
        ],
        translations: window.TRANSLATIONS,
        setLanguage(index) {
            this.selected = index;
            this.updateDOM();
        },
        updateDOM() {
            const lang = this.countries[this.selected].lang;
            document.querySelectorAll('[data-translate-key]').forEach(el => {
                const key = el.dataset.translateKey;
                el.textContent = this.translations[lang][key] || key;
            });
        }
    }));
});
