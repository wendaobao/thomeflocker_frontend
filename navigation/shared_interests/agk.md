---
layout: post 
title: Shared Interests - AGK
search_exclude: true
permalink: /shared_interests/agk
menu: nav/shared_interests.html
author: Mihir, Pradyun, Derek, Ansh
---

<style>
    /* Chatroom styles */
    body {
        margin: 0;
        font-family: Arial, sans-serif;
        background-color: #FDF5E6; /* Light background for good contrast */
    }
    .chatroom-container {
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
        border: 2px solid #C5B358; /* Vegas Gold */
        border-radius: 8px;
        background-color: #001F3F; /* Navy Blue */
    }
    .chatroom-header {
        text-align: center;
        color: #FFD700; /* Gold */
    }
    .chat-area {
        height: 400px;
        overflow-y: auto;
        background-color: #228B22; /* Forest Green */
        border: 2px solid #C5B358; /* Vegas Gold */
        border-radius: 8px;
        padding: 10px;
        margin-bottom: 20px;
        color: white;
    }
    .message-form {
        display: flex;
    }
    #messageInput {
        flex: 1;
        padding: 10px;
        border: 2px solid #C5B358; /* Vegas Gold */
        border-radius: 5px;
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
<div class="chatroom-container">
        <header class="chatroom-header">
            <h1>Activity Chatroom</h1>
            <p>Discuss your favorite activities!</p>
        </header>
        <div class="chat-area" id="chatArea">
            <!-- Messages will appear here -->
        </div>
        <form class="message-form" id="messageForm">
            <input type="text" id="messageInput" placeholder="Enter your message..." required>
            <button type="submit">Send</button>
        </form>
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