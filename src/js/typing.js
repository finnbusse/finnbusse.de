// /src/js/typing.js

document.addEventListener("DOMContentLoaded", () => {
    const typingElement = document.getElementById("typing-text");

    if (!typingElement) {
        console.error("Element mit ID 'typing-text' nicht gefunden.");
        return;
    }

    const texts = [
        { text: "Machine Learning Expert", gradient: "from-yellow-500 to-pink-300", size: "text-6xl" },
        { text: "Python Problem-Solver", gradient: "from-blue-600 to-blue-300", size: "text-5xl" }, // Unterschiedliche Größe
        { text: "AI Enthusiast", gradient: "from-red-500 to-orange-300", size: "text-6xl" },
        { text: "Web Developer", gradient: "from-green-500 to-teal-300", size: "text-6xl" },
        { text: "High-School Student", gradient: "from-purple-500 to-indigo-300", size: "text-6xl" },
    ];

    const typingSpeed = 120; // Millisekunden pro Zeichen
    const deletingSpeed = 100; // Millisekunden pro Zeichen beim Löschen
    const delayBetweenTexts = 2000; // Millisekunden Verzögerung nach vollständigem Tippen

    let currentTextIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;

    function updateGradient(newGradient) {
        // Entferne alle bisherigen 'from-' und 'to-' Klassen
        typingElement.className = 'bg-clip-text text-transparent bg-gradient-to-r ${current.gradient}';
        typingElement.classList.forEach(cls => {
            if (cls.startsWith("from-") || cls.startsWith("to-")) {
                typingElement.classList.remove(cls);
            }
        });

        // Füge die neuen Gradient-Klassen hinzu
        const [fromClass, toClass] = newGradient.split(" ");
        typingElement.classList.add(fromClass, toClass);
    }

    function type() {
        const currentTextObj = texts[currentTextIndex];
        const fullText = currentTextObj.text;

        if (!isDeleting) {
            // Tippen
            typingElement.textContent = fullText.substring(0, currentCharIndex + 1);
            currentCharIndex++;

            if (currentCharIndex === fullText.length) {
                // Vollständig getippt
                isDeleting = true;
                setTimeout(type, delayBetweenTexts);
            } else {
                setTimeout(type, typingSpeed);
            }
        } else {
            // Löschen
            typingElement.textContent = fullText.substring(0, currentCharIndex - 1);
            currentCharIndex--;

            if (currentCharIndex === 0) {
                // Vollständig gelöscht
                isDeleting = false;
                currentTextIndex = (currentTextIndex + 1) % texts.length;
                updateGradient(texts[currentTextIndex].gradient);
                setTimeout(type, typingSpeed);
            } else {
                setTimeout(type, deletingSpeed);
            }
        }
    }

    // Initiale Gradient-Klasse setzen
    updateGradient(texts[currentTextIndex].gradient);
    type();
});
