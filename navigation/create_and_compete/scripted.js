// Array of zoomed-in image URLs
const imageList = [
    "einstein.jpg",
    "kanye.jpg",
    "lnx.jpg",
    "ryangosling.jpg",
    "tombrady.jpg"
    // Add more image URLs as needed
];

// Wait for the DOM to load before accessing elements
document.addEventListener("DOMContentLoaded", function() {
    // Elements
    const zoomedImage = document.getElementById("zoomed-image");
    const generateImageButton = document.getElementById("generate-image");
    const submitGuessButton = document.getElementById("submit-guess");
    const guessInput = document.getElementById("guess-input");
    const reasoningInput = document.getElementById("reasoning-input");
    const guessFeedback = document.getElementById("guess-feedback");
    const explanationFeedback = document.getElementById("explanation-feedback");
    const feedbackModal = document.getElementById("feedback-modal");
    const closeButton = document.querySelector(".close-button");

    // Generate a random color for each feedback message
    function getRandomColor() {
        const colors = ['#ff6f61', '#6b5b95', '#88b04b', '#ffb6b9', '#92a8d1', '#034f84', '#f7cac9', '#f7786b', '#b565a7'];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    // Generate a random image on button click
    generateImageButton.addEventListener("click", function() {
        const randomIndex = Math.floor(Math.random() * imageList.length);
        const selectedImage = imageList[randomIndex];
        zoomedImage.src = selectedImage;
        zoomedImage.alt = "Zoomed-in image for guessing";
        guessFeedback.innerHTML = ""; // Clear previous guess feedback on new image generation
        explanationFeedback.innerHTML = ""; // Clear previous explanation feedback on new image generation
    });

    // Handle guess submission
    submitGuessButton.addEventListener("click", function() {
        const guess = guessInput.value.trim();
        const reasoning = reasoningInput.value.trim();

        // Check for valid input
        if (guess === "" || reasoning === "") {
            alert("Please enter both your guess and reasoning.");
            return;
        }

        // Generate a new feedback message element for guess
        const guessMessage = document.createElement("div");
        guessMessage.className = "feedback-message";
        guessMessage.style.color = getRandomColor(); // Apply random color
        guessMessage.innerHTML = `<p><strong>Guess:</strong> ${guess}</p>`;

        // Generate a new feedback message element for explanation
        const explanationMessage = document.createElement("div");
        explanationMessage.className = "feedback-message";
        explanationMessage.style.color = getRandomColor(); // Apply random color
        explanationMessage.innerHTML = `<p><strong>Explanation:</strong> ${reasoning}</p>`;

        // Append feedback messages to respective sections
        guessFeedback.appendChild(guessMessage);
        explanationFeedback.appendChild(explanationMessage);

        // Show confirmation modal
        feedbackModal.style.display = "block";

        // Reset input fields
        guessInput.value = "";
        reasoningInput.value = "";
    });

    // Close modal on close button click
    closeButton.addEventListener("click", function() {
        feedbackModal.style.display = "none";
    });

    // Close modal when clicking outside the modal content
    window.addEventListener("click", function(event) {
        if (event.target === feedbackModal) {
            feedbackModal.style.display = "none";
        }
    });
});
