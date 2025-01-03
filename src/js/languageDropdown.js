// languageDropdown.js

// Übersetzungen
const TRANSLATIONS = {
    en: {
        navbar: {
            about: "About Me",
            projects: "Projects",
            skills: "Skill Matrix",
        },
        header: {
            title: "Hey, I'm Finn!",
            subtitle: "I am a",
        },
        about: {
            title: "About Me",
            intro: "My educational background so far:",
            abiturYear: "est. 2027 – Abitur",
            gymYear: "2024-today – High school",
            praktikum: "June 2024 – Two-week student internship",
            gymSince2018: "2018-today – Gymnasium",
            grundschule: "2014-2018 – Elementary School",
        },
        projects: {
            title: "Projects",
            proj1: "Project 1: Portfolio Website",
            grabbeAI: "GrabbeAI",
        },
        skills: {
            title: "Skill Matrix",
            cpp: "planned - 0%",
        },
        footer: {
            rights: "© 2025 Finn Busse. All rights reserved.",
            madeWith: "Made with ♥ by Finn Busse",
        },
    },
    de: {
        navbar: {
            about: "Lebenslauf",
            projects: "Projekte",
            skills: "Kompetenzen",
        },
        header: {
            title: "Hey, ich bin Finn!",
            subtitle: "Ich bin ein",
        },
        about: {
            title: "Über mich",
            intro: "Dies ist meine bisherige Bildung:",
            abiturYear: "vsl. 2027 – Abitur",
            gymYear: "2024-heute – Gymnasiale Oberstufe",
            praktikum: "Juni 2024 – Zweiwöchiges Schülerbetriebspraktikum",
            gymSince2018: "2018-heute – Gymnasium",
            grundschule: "2014-2018 – Grundschule",
        },
        projects: {
            title: "Projekte",
            proj1: "Projekt 1: Portfolio-Website",
            grabbeAI: "GrabbeAI",
        },
        skills: {
            title: "Meine Kompetenzen",
            cpp: "geplant - 0%",
        },
        footer: {
            rights: "© 2025 Finn Busse. Alle Rechte vorbehalten.",
            madeWith: "Made with ♥ by Finn Busse",
        },
    },
};

// Language Switcher Logic
document.addEventListener("DOMContentLoaded", () => {
    const dropdownButton = document.getElementById("dropdown-button");
    const dropdownMenu = document.getElementById("dropdown-menu");
    const selectedLanguageSpan = document.getElementById("selected-language");

    const countries = [
        { label: "English", emoji: "🇬🇧", lang: "en" },
        { label: "German", emoji: "🇩🇪", lang: "de" },
    ];
    let currentLanguage = "en"; // Default language

    // Event Listener for Dropdown Toggle
    dropdownButton.addEventListener("click", () => {
        dropdownMenu.classList.toggle("hidden");
    });

    // Event Listener for Language Selection
    dropdownMenu.addEventListener("click", (e) => {
        const target = e.target.closest("a");
        if (target && target.dataset.lang) {
            currentLanguage = target.dataset.lang;
            const selectedCountry = countries.find((c) => c.lang === currentLanguage);
            selectedLanguageSpan.innerHTML = `${selectedCountry.emoji} ${selectedCountry.label}`;
            dropdownMenu.classList.add("hidden");
            updateTranslations(currentLanguage);
        }
    });

    // Function to Update Translations
    function updateTranslations(lang) {
        document.querySelectorAll("[data-translate-key]").forEach((el) => {
            const keys = el.dataset.translateKey.split(".");
            let value = TRANSLATIONS[lang];
            keys.forEach((key) => {
                value = value[key];
            });
            el.textContent = value || el.dataset.translateKey;
        });
    }

    // Initialize Default Language
    updateTranslations(currentLanguage);
});
