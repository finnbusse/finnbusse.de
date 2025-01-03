const typingText = document.getElementById("typing-text");

const texts = [
    { text: "Web Developer",    gradient: "from-blue-500 to-blue-300" },
    { text: "Python Developer", gradient: "from-green-500 to-green-300" },
    { text: "AI Enthusiast",    gradient: "from-red-500 to-orange-300" },
    { text: "Student",          gradient: "from-purple-500 to-purple-300" }
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingSpeed = 80;
const deletingSpeed = 50;
const holdTime = 1500;

function updateTyping() {
    const current = texts[textIndex];
    typingText.className = `bg-clip-text text-transparent bg-gradient-to-r ${current.gradient}`;

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
