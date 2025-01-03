const typingText = document.getElementById("typing-text");
console.log("Typing.js loaded");

const texts = [
    { text: "Web Developer",    color: "color-1" },
    { text: "Python Developer", color: "color-2" },
    { text: "AI Enthusiast",    color: "color-3" },
    { text: "Student",          color: "color-4" }
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingSpeed   = 80;
const deletingSpeed = 50;
const holdTime      = 1500;

function updateTyping() {
    const current = texts[textIndex];
    typingText.className = `typing ${current.color}`;

    const fullText = current.text;
    if (!isDeleting) {
        charIndex++;
        typingText.textContent = fullText.slice(0, charIndex);
        if (charIndex === fullText.length) {
            setTimeout(() => {
                isDeleting = true;
            }, holdTime);
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
loop();
