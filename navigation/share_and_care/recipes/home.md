---
layout: post
title: The Hungry Games (Home)
description: Welcome to the Hungry Games! Explore our interactive "fridge," chat with others about food, and more!
permalink: share_and_care/hungry_games
comments: true 
---

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f8f9fa; 
            display: flex; 
            min-height: 100vh;
            margin: 0;
        }

        .sidebar {
            width: 200px;
            background-color: #007BFF; /* Blue background for sidebar */
            color: white;
            padding: 20px;
            box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
        }

        .sidebar h2 {
            margin: 0 0 20px;
            text-align: center;
        }

        .chat-area {
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 20px;
        }

        .chat-box {
            width: 100%;
            max-width: 600px;
            height: 400px;
            border: 1px solid #ccc;
            border-radius: 10px;
            padding: 10px;
            overflow-y: auto;
            background-color: #fff;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }

        .message-input {
            width: 100%;
            max-width: 600px;
            display: flex;
            margin-top: 10px;
        }

        .message-input input {
            flex: 1;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            margin-right: 10px;
        }

        .message-input button {
            padding: 10px 15px;
            background-color: #007BFF; /* Button color */
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s;
        }

        .message-input button:hover {
            background-color: #0056b3;
        }

        ul {
            list-style-type: none;
            padding: 0;
        }

        li {
            background-color: #e0f7fa;
            margin: 5px 0;
            padding: 8px;
            border-radius: 5px;
            transition: background-color 0.3s;
        }

        li:hover {
            background-color: #b2ebf2;
        }

        .recipe-list {
            margin-top: 20px;
            text-align: center;
        }

        .recipe-list h3 {
            margin-bottom: 10px;
        }
    </style>
</head>
<body>

    <div class="sidebar">
        <h2>User Profiles</h2>
        <ul>
            <li>User 1</li>
            <li>User 2</li>
            <li>User 3</li>
            <li>User 4</li>
        </ul>
    </div>

    <div class="chat-area">
        <div class="chat-box" id="chatBox"></div>
        <div class="message-input">
            <input type="text" id="messageInput" placeholder="Type your message...">
            <button onclick="sendMessage()">Send</button>
        </div>
    </div>

    <div class="recipe-list" id="recipeList"></div>

    <script>
        function sendMessage() {
            const messageInput = document.getElementById('messageInput');
            const chatBox = document.getElementById('chatBox');

            if (messageInput.value.trim()) {
                const messageElement = document.createElement('div');
                messageElement.textContent = messageInput.value;
                chatBox.appendChild(messageElement);
                messageInput.value = ''; // Clear the input after sending
                chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to the bottom
            }
        }
    </script>

</body>
</html>
