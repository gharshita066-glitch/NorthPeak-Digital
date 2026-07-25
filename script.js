// Contact Form Validation

const form = document.getElementById("contactForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const company = document.getElementById("company").value.trim();
    const userMessage = document.getElementById("message").value.trim();

    // Email validation pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === "") {
        message.style.color = "red";
        message.textContent = "Please enter your name.";
        return;
    }

    if (!emailPattern.test(email)) {
        message.style.color = "red";
        message.textContent = "Please enter a valid email address.";
        return;
    }

    if (userMessage === "") {
        message.style.color = "red";
        message.textContent = "Please enter your message.";
        return;
    }

    // Success message
    message.style.color = "green";
    message.textContent = "Thank you! Your message has been sent successfully.";

    // Reset the form
    form.reset();
});