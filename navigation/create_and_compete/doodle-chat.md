---
layout: post
title: Chat Room for Doodle
description: Chat freely with everyone
permalink: /moderation/chat_doodle/
author: Arshia, Prajna, Mirabelle, Alex
---

<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Chat Room</title>
  <style>
    /* Basic styling */
    #chatContainer {
      width: 150%;
      max-width: 600px;
      margin: 20px auto;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 8px;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    }
    #messages {
      height: 300px;
      overflow-y: scroll;
      border: 1px solid #ddd;
      padding: 10px;
      border-radius: 8px;
      margin-bottom: 10px;
    }
    .message {
        margin: 5px 0;
      padding: 5px;
        border-radius: 5px;
         background-color: #d0e6f5; /* Light blue background for messages */
        color: #333; /* Darker text color for readability */
    }
    #inputContainer {
      display: flex;
    }
    #inputMessage {
      flex: 1;
      padding: 8px;
      font-size: 16px;
      border: 1px solid #ddd;
      border-radius: 4px;
    }
    #sendButton {
      padding: 8px 12px;
      margin-left: 5px;
      font-size: 16px;
      background-color: #28a745;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
  </style>
</head>
<body>

<div id="chatContainer">
  <h2>Chat Room</h2>
  <div id="messages"></div>
  <div id="inputContainer">
    <input type="text" id="inputMessage" placeholder="Type a message..." />
    <button id="sendButton">Send</button>
  </div>
</div>

<script>
  // Simple front-end chat function
  const messages = document.getElementById('messages');
  const inputMessage = document.getElementById('inputMessage');
  const sendButton = document.getElementById('sendButton');

  function addMessage(message, sender = "You") {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');
    messageDiv.textContent = `${sender}: ${message}`;
    messages.appendChild(messageDiv);
    messages.scrollTop = messages.scrollHeight; // Auto-scroll
  }

  sendButton.addEventListener('click', () => {
    const messageText = inputMessage.value.trim();
    if (messageText) {
      addMessage(messageText);  // Display the message
      inputMessage.value = '';  // Clear the input field
    }
  });

  inputMessage.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendButton.click(); // Send on Enter key press
  });
</script>

</body>
</html>
