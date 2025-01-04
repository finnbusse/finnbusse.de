document.addEventListener("DOMContentLoaded", () => {
    const typingText = document.getElementById("typing-text");

    // Define text entries with gradients
    const texts = [
        { text: "Machine Learning Expert", gradient: "from-yellow-500 to-pink-300" },
        { text: "Python Problem-Solver", gradient: "from-blue-600 to-blue-300" },
        { text: "AI Enthusiast", gradient: "from-red-500 to-orange-300" },
        { text: "Web Developer", gradient: "from-green-500 to-teal-300" },
        { text: "High-School Student", gradient: "from-purple-500 to-indigo-300" },
    ];

    let textIndex = 0; // Tracks the current text
    let charIndex = 0; // Tracks the current character
    let isDeleting = false; // Determines typing or deleting state
    const typingSpeed = 80; // Speed of typing
    const deletingSpeed = 50; // Speed of deleting
    const holdTime = 1500; // Time to hold full text before deleting

    function updateTyping() {
        if (!typingText) return;

        const current = texts[textIndex];
        typingText.className = `text-6xl text-transparent bg-clip-text bg-gradient-to-r ${current.gradient}`;
        const fullText = current.text;

        // Type or delete characters
        if (!isDeleting) {
            charIndex++;
            typingText.textContent = fullText.slice(0, charIndex);
            if (charIndex === fullText.length) {
                setTimeout(() => (isDeleting = true), holdTime); // Hold text
            }
        } else {
            charIndex--;
            typingText.textContent = fullText.slice(0, charIndex);
            if (charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length; // Move to next text
            }
        }

        setTimeout(updateTyping, isDeleting ? deletingSpeed : typingSpeed);
    }

    updateTyping();
});
