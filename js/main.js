// text in home
const typingText = document.getElementById('typing-text');
const texts = ["Junior Web Developer 😃"];
let textIndex = 0;
let charIndex = 0;
let isErasing = false;

function typeText() {
    const text = texts[textIndex];

    if (isErasing) {
        typingText.textContent = text.substr(0, charIndex);
        charIndex--;

        if (charIndex >= 0) {
            setTimeout(typeText, 100); // Delay between erasing each character
        } else {
            isErasing = false;
            textIndex = (textIndex + 1) % texts.length;
            setTimeout(typeText, 500); // Delay before typing the next text
        }
    } else {
        typingText.textContent = text.substr(0, charIndex);
        charIndex++;

        if (charIndex <= text.length) {
            setTimeout(typeText, 100); // Delay between typing each character
        } else {
            isErasing = true;
            setTimeout(typeText, 1500); // Delay before erasing text
        }
    }
}
typeText();



