---
layout: post
title: Home Page
description: Login and explore our social media hub for everything DNHS 
hide: true
menu: nav/home.html
---
<div style="text-align:center;">
    <a href="https://darsh220.github.io/flocker_frontend/" style="text-decoration:none;">
        <button style="padding: 10px 20px; font-size: 16px;">Home</button>
    </a>
    <a href="https://darsh220.github.io/flocker_frontend/about" style="text-decoration:none;">
        <button style="padding: 10px 20px; font-size: 16px;">About</button>
    </a>
    <a href="https://darsh220.github.io/flocker_frontend/contact" style="text-decoration:none;">
        <button style="padding: 10px 20px; font-size: 16px;">Contact</button>
    </a>
</div>

<style>
    body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 20px;
        background-color: #f4f4f4;
    }
    #chatroom {
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 10px;
        background-color: #000; /* Changed to black */
        color: #fff; /* Changed to white text */
        height: 400px;
        overflow-y: scroll;
    }
    #message {
        width: 80%;
        padding: 10px;
    }
    #send {
        padding: 10px;
    }
    .message {
        margin: 5px 0;
    }
</style>

<h1>Chatroom</h1>
<div id="chatroom"></div>
<input type="text" id="message" placeholder="Type your message...">
<button id="send">Send</button>

<script>
    const chatroom = document.getElementById('chatroom');
    const messageInput = document.getElementById('message');
    const sendButton = document.getElementById('send');

    sendButton.addEventListener('click', () => {
        const messageText = messageInput.value;
        if (messageText.trim() !== '') {
            const messageElement = document.createElement('div');
            messageElement.className = 'message';
            messageElement.textContent = messageText;
            chatroom.appendChild(messageElement);
            messageInput.value = '';
            chatroom.scrollTop = chatroom.scrollHeight; // Auto-scroll
        }
    });

    messageInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            sendButton.click();
        }
    });
</script>

