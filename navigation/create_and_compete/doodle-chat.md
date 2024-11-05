---
layout: post
title: Chat Room for Doodle
description: Chat freely with everyone
menu: nav/doodle.html
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
      background-color: #f3f0fa;
      height: 100vh;
      margin: 0;
    }
    #mainContainer {
      width: 100vw;
      height: 100vh;
      display: flex;
      box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
      position: relative;
      transition: all 0.3s;
    }
    #sidebar {
      width: 30%;
      background-color: #e6e1f7;
      border-right: 1px solid #ccc;
      padding: 15px;
      overflow-y: auto;
    }
    .chatBox {
      padding: 12px;
      border-bottom: 1px solid #d1c7f0;
      cursor: pointer;
      border-radius: 8px;
      transition: background-color 0.3s;
    }
    .chatBox:hover {
      background-color: #d8cff6;
    }
    .chatBox h3 {
      margin: 0;
      font-size: 16px;
      color: #5a4b91;
    }
    .chatBox p {
      margin: 4px 0 0;
      color: #836fa9;
      font-size: 14px;
    }
    #chatContainer {
      flex: 1;
      padding: 15px;
      background-color: #ffffff;
      display: flex;
      flex-direction: column;
      height: 100vh;
      transition: all 0.3s;
    }
    #doodleImage {
      width: 100%;
      max-height: 200px;
      border-radius: 8px;
      margin-bottom: 15px;
      object-fit: cover;
      border: 2px solid #a38cd9;
    }
    #messages {
      flex: 1;
      overflow-y: auto;
      border: 1px solid #d1c7f0;
      padding: 15px;
      border-radius: 8px;
      margin-bottom: 15px;
      background-color: #f8f6fc;
    }
    .message {
      margin: 8px 0;
      padding: 10px;
      border-radius: 10px;
      background-color: #d8cff6;
      color: #333;
      font-size: 15px;
      max-width: 80%;
    }
    .message:nth-child(odd) {
      background-color: #a38cd9;
      color: white;
    }
    #inputContainer {
      display: flex;
    }
    #inputMessage {
      flex: 1;
      padding: 12px;
      font-size: 16px;
      border: 1px solid #d1c7f0;
      border-radius: 8px;
      margin-right: 8px;
    }
    #sendButton {
      padding: 12px 16px;
      font-size: 16px;
      background-color: #6c51a4;
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      transition: background-color 0.3s;
    }
    #sendButton:hover {
      background-color: #533b8a;
    }

    /* Fullscreen button styling */
    #fullscreenButton, #exitFullscreenButton {
      position: absolute;
      top: 15px;
      right: 15px;
      background-color: #6c51a4;
      color: white;
      border: none;
      border-radius: 50%;
      padding: 8px;
      font-size: 16px;
      cursor: pointer;
      transition: background-color 0.3s;
      z-index: 100;
    }
    #fullscreenButton:hover, #exitFullscreenButton:hover {
      background-color: #533b8a;
    }
    #exitFullscreenButton {
      display: none;
    }
    .fullscreen #mainContainer {
      width: 100vw;
      height: 100vh;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 200;
      background-color: #ffffff;
    }
    .fullscreen #fullscreenButton {
      display: none;
    }
    .fullscreen #exitFullscreenButton {
      display: block;
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
  <button id="fullscreenButton" onclick="toggleFullscreen()">&#x26F6;</button>
  <button id="exitFullscreenButton" onclick="toggleFullscreen()">X</button>
</div>

<script>
  const messages = document.getElementById('messages');
  const inputMessage = document.getElementById('inputMessage');
  const sendButton = document.getElementById('sendButton');
  const doodleImage = document.getElementById('doodleImage');
  const mainContainer = document.getElementById('mainContainer');

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

  function toggleFullscreen() {
    document.body.classList.toggle('fullscreen');
  }

  loadConversation('Alex');
</script>

</body>
</html>