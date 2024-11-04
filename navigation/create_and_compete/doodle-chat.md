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
    * {
      box-sizing: border-box;
    }
    body {
      font-family: Arial, sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #f0f2f5;
      height: 100vh;
      margin: 0;
    }
    #mainContainer {
      width: 100vw;
      height: 100vh;
      display: flex;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    }
    #sidebar {
      width: 30%;
      background-color: #ffffff;
      border-right: 1px solid #ddd;
      padding: 10px;
      overflow-y: auto;
    }
    .chatBox {
      padding: 10px;
      border-bottom: 1px solid #ddd;
      cursor: pointer;
    }
    .chatBox:hover {
      background-color: #f0f2f5;
    }
    .chatBox h3 {
      margin: 0;
      font-size: 16px;
      color: #333;
    }
    .chatBox p {
      margin: 4px 0 0;
      color: #777;
      font-size: 14px;
    }
    #chatContainer {
      flex: 1;
      padding: 10px;
      background-color: #ffffff;
      display: flex;
      flex-direction: column;
      height: 100%;
    }
    #doodleImage {
      width: 100%;
      max-height: 200px;
      border-radius: 8px;
      margin-bottom: 10px;
      object-fit: cover;
    }
    #messages {
      flex: 1;
      overflow-y: auto;
      border: 1px solid #ddd;
      padding: 10px;
      border-radius: 8px;
      margin-bottom: 10px;
    }
    .message {
      margin: 5px 0;
      padding: 5px;
      border-radius: 5px;
      background-color: #d0e6f5;
      color: #333;
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

<div id="mainContainer">
  <div id="sidebar">
    <div class="chatBox" onclick="loadConversation('Alex')">
      <h3>Alex</h3>
      <p>"Check out this doodle!"</p>
    </div>
    <div class="chatBox" onclick="loadConversation('Prajna')">
      <h3>Prajna</h3>
      <p>"I tried a new shading technique!"</p>
    </div>
    <div class="chatBox" onclick="loadConversation('Arshia')">
      <h3>Arshia</h3>
      <p>"Let’s brainstorm more ideas!"</p>
    </div>
    <div class="chatBox" onclick="loadConversation('Mirabelle')">
      <h3>Mirabelle</h3>
      <p>"Look at the details on this one!"</p>
    </div>
  </div>

  <div id="chatContainer">
    <img id="doodleImage" src="https://via.placeholder.com/400" alt="Doodle Image">
    <div id="messages"></div>
    <div id="inputContainer">
      <input type="text" id="inputMessage" placeholder="Type a message..." />
      <button id="sendButton">Send</button>
    </div>
  </div>
</div>

<script>
  const messages = document.getElementById('messages');
  const inputMessage = document.getElementById('inputMessage');
  const sendButton = document.getElementById('sendButton');
  const doodleImage = document.getElementById('doodleImage');

  const conversations = {
    'Alex': ["Alex: Check out this doodle!", "You: Wow! Did you use ink?", "Alex: Yes, and some shading too."],
    'Prajna': ["Prajna: I tried a new shading technique!", "You: Looks amazing! It adds depth.", "Prajna: Thanks! I've been practicing!"],
    'Arshia': ["Arshia: Let’s brainstorm more ideas!", "You: How about some abstract doodles?", "Arshia: Great idea! I'll sketch something."],
    'Mirabelle': ["Mirabelle: Look at the details on this one!", "You: That’s so intricate!", "Mirabelle: Thanks! It took ages."]
  };

  function loadConversation(chatName) {
    messages.innerHTML = '';
    const chatMessages = conversations[chatName] || [];
    doodleImage.src = "https://via.placeholder.com/400"; // Replace with specific images per chat if available

    chatMessages.forEach((msg) => {
      addMessage(msg);
    });
  }

  function addMessage(message) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');
    messageDiv.textContent = message;
    messages.appendChild(messageDiv);
    messages.scrollTop = messages.scrollHeight;
  }

  sendButton.addEventListener('click', () => {
    const messageText = inputMessage.value.trim();
    if (messageText) {
      addMessage(`You: ${messageText}`);
      inputMessage.value = '';
    }
  });

  inputMessage.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendButton.click();
  });

  loadConversation('Alex');
</script>

</body>
</html>
