// Wait for the DOM to be fully loaded (optional but safe)
document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("nameInput");
    const button = document.getElementById("greetBtn");
    const greeting = document.getElementById("greeting");

    button.addEventListener("click", function () {
        const name = input.value.trim();
        if (name) {
            greeting.textContent = `Hello, ${name}! 👋`;
        } else {
            greeting.textContent = "Please enter your name.";
        }
    });
});
