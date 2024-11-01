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
    /* Basic styling */
    body {
      font-family: Arial, sans-serif;
      display: flex;
      justify-content: center;
      background-color: #f0f2f5;
    }
    #mainContainer {
      display: flex;
      width: 80%;
      max-width: 900px;
      margin: 20px auto;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
      border-radius: 8px;
      overflow: hidden;
    }

    /* Sidebar styling */
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

    /* Chat area styling */
    #chatContainer {
      flex: 1;
      padding: 10px;
      background-color: #ffffff;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    #messages {
      height: 400px;
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
  <!-- Sidebar with chat boxes -->
  <div id="sidebar">
    <div class="chatBox" onclick="loadConversation('Chat 1')">
      <h3>Chat 1</h3>
      <p>Hey! How's it going?</p>
    </div>
    <div class="chatBox" onclick="loadConversation('Chat 2')">
      <h3>Chat 2</h3>
      <p>Are we still meeting later?</p>
    </div>
    <div class="chatBox" onclick="loadConversation('Chat 3')">
      <h3>Chat 3</h3>
      <p>Thanks for the update!</p>
    </div>
    <div class="chatBox" onclick="loadConversation('Chat 4')">
      <h3>Chat 4</h3>
      <p>Let me know when you're free.</p>
    </div>
  </div>

  <!-- Main chat area -->
  <div id="chatContainer">
    <h2>Chat Room</h2>
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

  // Fake conversations data
  const conversations = {
    'Mirabelle': ["Hey! How's it going, nice doodle!", "Pretty good! Thank you so much!"],
    'Arshia': ["Are we still meeting later to doodle?", "Yes, see you at 5!"],
    'Prajna': ["Thanks for the update, these doodle is going to be awesome!", "You're welcome!"],
    'Alex': ["Let me know when you're free to doodle..", "Will do!"]
  };

  // Load a selected conversation
  function loadConversation(chatName) {
    messages.innerHTML = ''; // Clear existing messages
    const chatMessages = conversations[chatName] || [];
    chatMessages.forEach((msg, index) => {
      addMessage(msg, index % 2 === 0 ? "Other" : "You");
    });
  }

  // Function to add a message
  function addMessage(message, sender = "You") {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');
    messageDiv.textContent = `${sender}: ${message}`;
    messages.appendChild(messageDiv);
    messages.scrollTop = messages.scrollHeight; // Auto-scroll
  }

  // Send message functionality
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

  // Load the first conversation by default
  loadConversation('Chat 1');
</script>

</body>
</html>
