document.addEventListener("DOMContentLoaded", function() {
    const usernameModal = document.getElementById("username-modal");
    const usernameInput = document.getElementById("username-input");
    const usernameSubmitButton = document.getElementById("username-submit");
    const chatRoomContainer = document.querySelector(".chat-room-container");
    const chatBox = document.getElementById("chat-box");
    const chatMessage = document.getElementById("chat-message");
    const sendMessageButton = document.getElementById("send-message");

    let username = "";

    // Show chat room only after username is entered
    usernameSubmitButton.addEventListener("click", function() {
        if (usernameInput.value.trim() !== "") {
            username = usernameInput.value.trim();
            usernameModal.style.display = "none"; // Hide modal
            chatRoomContainer.style.display = "block"; // Show chat room
        } else {
            alert("Please enter a username.");
        }
    });

    // Send message function
    sendMessageButton.addEventListener("click", function() {
        const message = chatMessage.value.trim();

        if (message !== "") {
            // Create a new message element with the username
            const messageElement = document.createElement("div");
            messageElement.classList.add("message");
            messageElement.textContent = `${username}: ${message}`;
            
            // Append the message to the chat box
            chatBox.appendChild(messageElement);
            
            // Scroll to the bottom of the chat box
            chatBox.scrollTop = chatBox.scrollHeight;
            
            // Clear the input field
            chatMessage.value = "";
        }
    });
});
