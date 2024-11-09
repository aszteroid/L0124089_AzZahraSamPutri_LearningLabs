document.addEventListener("DOMContentLoaded", function () {
    const feedbackForm = document.getElementById("feedbackForm");
    const confirmationMessage = document.getElementById("confirmationMessage");

    feedbackForm.addEventListener("submit", function (event) {
        event.preventDefault(); 

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (name && email && message) {
            confirmationMessage.textContent = `Thank you, ${name}! Your feedback has been submitted.`;
            confirmationMessage.style.color = "blue";

            feedbackForm.reset();
        } else {
            confirmationMessage.textContent = "Please fill in all fields.";
            confirmationMessage.style.color = "blue";
        }
    });
});
