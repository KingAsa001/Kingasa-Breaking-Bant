
// Typing effect for the welcome message
const text = "Welcome to Kingasa Breaking Bant! 😂🔥";  
let i = 0;
function typeEffect() {
    if (i < text.length) {
        document.getElementById("dynamicText").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeEffect, 100);
    }
}
typeEffect();
