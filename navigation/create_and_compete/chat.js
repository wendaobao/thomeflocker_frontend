document.addEventListener("DOMContentLoaded", function() {
    const chatBox = document.getElementById("chat-box");
    const chatMessage = document.getElementById("chat-message");
    const sendMessageButton = document.getElementById("send-message");

    sendMessageButton.addEventListener("click", function() {
        const message = chatMessage.value.trim();

        if (message !== "") {
            // Create a new message element
            const messageElement = document.createElement("div");
            messageElement.classList.add("message");
            messageElement.textContent = `You: ${message}`;
            
            // Append the message to the chat box
            chatBox.appendChild(messageElement);
            
            // Scroll to the bottom of the chat box
            chatBox.scrollTop = chatBox.scrollHeight;
            
            // Clear the input field
            chatMessage.value = "";
        }
    });
});
