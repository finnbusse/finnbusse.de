// typing.js
const typingText = document.getElementById("typing-text");

// Beispieltexte
const texts = [
    { text: "Web Developer",    color: "text-blue-500" },
    { text: "Python Developer", color: "text-green-500" },
    { text: "AI Enthusiast",    color: "text-red-500" },
    { text: "Student",          color: "text-yellow-500" }
];

// Indizes
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

// Geschwindigkeiten
const typingSpeed   = 80;
const deletingSpeed = 50;
const holdTime      = 1500;

function updateTyping() {
    const current = texts[textIndex];
    const fullText = current.text;

    // Tailwind-Klasse anpassen
    typingText.className = `typing ${current.color}`;

    if (!isDeleting) {
        charIndex++;
        typingText.textContent = fullText.slice(0, charIndex);
        if (charIndex === fullText.length) {
            setTimeout(() => { isDeleting = true; }, holdTime);
        }
    } else {
        charIndex--;
        typingText.textContent = fullText.slice(0, charIndex);
        if (charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
        }
    }
}

function loop() {
    updateTyping();
    setTimeout(loop, isDeleting ? deletingSpeed : typingSpeed);
}

// Start
loop();
