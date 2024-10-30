---
layout: post
title: My Space 
description: My Interests
hide: true
menu: nav/home.html
---
Do these changes work pls

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
        background-color: #fff;
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

