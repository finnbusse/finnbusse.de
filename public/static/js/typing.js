// DOM-Element holen
const typingText = document.getElementById("typing-text");

// Texte + Farbklassen
const texts = [
    { text: "Web Developer",    color: "color-1" },
    { text: "Python Developer", color: "color-2" },
    { text: "AI Enthusiast",    color: "color-3" },
    { text: "Student",          color: "color-4" }
];

// Index
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

// Geschwindigkeiten
const typingSpeed   = 80;   // Tippgeschwindigkeit (ms)
const deletingSpeed = 50;   // Löschgeschwindigkeit (ms)
const holdTime      = 1500; // Zeit nach komplettem Wort

function updateTyping() {
    const current = texts[textIndex];
    const fullText = current.text;

    // Passende Farbe anwenden
    typingText.className = `typing ${current.color}`;

    if (!isDeleting) {
        // Zeichen hinzufügen
        charIndex++;
        typingText.textContent = fullText.slice(0, charIndex);

        // Wort fertig?
        if (charIndex === fullText.length) {
            // kurze Pause
            setTimeout(() => {
                isDeleting = true;
            }, holdTime);
        }
    } else {
        // Löschen
        charIndex--;
        typingText.textContent = fullText.slice(0, charIndex);

        if (charIndex === 0) {
            // Nächster Text
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
        }
    }
}

function loop() {
    updateTyping();
    const delay = isDeleting ? deletingSpeed : typingSpeed;
    setTimeout(loop, delay);
}

// Animation starten
loop();
