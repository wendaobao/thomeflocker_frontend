---
layout: base
title: Satire
permalink: /shared_interests/satire/
---


<style>
    /* General styles */
    body {
        margin: 0;
        background-color: #FDF5E6; /* Light background for good contrast */
    }

    /* Header at the top of the page */
    .page-header {
        text-align: center;
        padding: 20px;
        background-color: #001F3F; /* Navy Blue */
        color: #FFD700; /* Gold */
        border-radius: 8px;
        border: 2px solid #C5B358; /* Vegas Gold */
    }

    /* Chatroom wrapper - aligns the chatroom to the right */
    .chatroom-wrapper {
        display: flex;
        justify-content: flex-end;
        padding: 20px;
        box-sizing: border-box;
    }

    .chatroom-container {
        width: 50%; /* Takes up half the width of the screen */
        border: 2px solid #C5B358; /* Vegas Gold */
        border-radius: 8px;
        background-color: #001F3F; /* Navy Blue */
        padding: 20px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column; /* Ensure children stack vertically */
        max-height: 725px; /* Maximum height for the blue part */
        overflow: hidden; /* Prevents the content from overflowing */
    }

    .chatroom-header {
        text-align: center;
        color: #FFD700; /* Gold */
        margin-bottom: 10px;
    }

    .chat-area {
        flex-grow: 1; /* Expands to fill available space */
        min-height: 450px; /* Ensures the green chat area takes up space even without messages */
        max-height: 450px; /* Limits the height of the chat area */
        overflow-y: auto;
        background-color: #008504; /* Forest Green */
        border: 2px solid #C5B358; /* Vegas Gold */
        border-radius: 8px;
        padding: 10px;
        margin-bottom: 10px;
        color: white;
    }

    .message-form {
        display: flex;
        align-items: center; /* Aligns the input and button properly */
    }

    #messageInput {
        flex: 1;
        padding: 10px;
        border: 2px solid #C5B358; /* Vegas Gold */
        border-radius: 5px;
        margin-right: 10px;
    }

    button {
        background-color: #FFD700; /* Gold */
        border: none;
        padding: 10px 15px;
        border-radius: 5px;
        cursor: pointer;
    }

    button:hover {
        background-color: #C5B358; /* Vegas Gold Hover */
    }
</style>

<!-- Page Header at the top -->
<div class="page-header">
    <h1>Welcome to the Satire Flocker Room</h1>
    <p>View announcements, posts, or engage with others in the chat!</p>
</div>

<!-- Chatroom Section aligned to the right -->
<div class="chatroom-wrapper">
    <div class="chatroom-container">
        <header class="chatroom-header">
            <h2>Flocker Chatroom</h2>
        </header>
        <div class="chat-area" id="chatArea">
            <!-- Messages will appear here -->
        </div>
        <form class="message-form" id="messageForm">
            <input type="text" id="messageInput" placeholder="Enter your message..." required>
            <button type="submit">Send</button>
        </form>
    </div>
</div>

<script>
    const chatArea = document.getElementById('chatArea');
    const messageForm = document.getElementById('messageForm');
    const messageInput = document.getElementById('messageInput');
    
    messageForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const messageText = messageInput.value.trim();
        if (messageText !== "") {
            const messageElement = document.createElement('p');
            messageElement.textContent = messageText;
            chatArea.appendChild(messageElement);
            messageInput.value = "";
            chatArea.scrollTop = chatArea.scrollHeight; // Auto-scroll to the newest message
        }
    });
</script>
