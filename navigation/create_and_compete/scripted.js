// Array of zoomed-in image URLs
const imageList = [
    "zoomed-image1.jpg",
    "zoomed-image2.jpg",
    "zoomed-image3.jpg"

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
    const feedbackDisplay = document.getElementById("feedback-display");
    const feedbackModal = document.getElementById("feedback-modal");
    const closeButton = document.querySelector(".close-button");
 
 
    // Generate Random Image
    generateImageButton.addEventListener("click", function() {
        const randomIndex = Math.floor(Math.random() * imageList.length);
        const selectedImage = imageList[randomIndex];
        zoomedImage.src = selectedImage;
        zoomedImage.alt = "Zoomed in image for guessing";
        feedbackDisplay.innerHTML = ""; // Clear previous feedback on new image generation
    });
 
 
    // Submit Guess and Reasoning
    submitGuessButton.addEventListener("click", function() {
        const guess = guessInput.value.trim();
        const reasoning = reasoningInput.value.trim();
 
 
        if (guess === "" || reasoning === "") {
            alert("Please enter both your guess and reasoning.");
            return;
        }
 
 
        // Display the guess and reasoning
        feedbackDisplay.innerHTML = `
            <h3>Your Guess:</h3>
            <p><strong>Guess:</strong> ${guess}</p>
            <p><strong>Reasoning:</strong> ${reasoning}</p>
        `;
 
 
        // Show modal confirmation
        feedbackModal.style.display = "block";
 
 
        // Reset input fields
        guessInput.value = "";
        reasoningInput.value = "";
    });
 
 
    // Close Modal
    closeButton.addEventListener("click", function() {
        feedbackModal.style.display = "none";
    });
 
 
    // Close Modal when clicking outside of it
    window.addEventListener("click", function(event) {
        if (event.target == feedbackModal) {
            feedbackModal.style.display = "none";
        }
    });
 
 
    // Placeholder function to update the leaderboard
    const leaderboard = document.getElementById("leaderboard");
    function updateLeaderboard(name) {
        const listItem = document.createElement("li");
        listItem.textContent = name;
        leaderboard.appendChild(listItem);
    }
 
 
    // Example of adding a name to leaderboard (testing purpose)
    // updateLeaderboard("Top Guesser #1");
 });
 