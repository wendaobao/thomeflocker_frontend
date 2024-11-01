---
layout: page
title: DNHS Cafe Study Room
description: Help out your peers with school work to earn d'neros!
permalink: /dnhscafestudyroom/
---

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chat Box</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }
        .chat-container {
            width: 300px;
            height: 400px;
            display: flex;
            flex-direction: column;
            border: 1px solid #ccc;
            border-radius: 8px;
            padding: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            background-color: #F9F9F9;
        }
        .chat-box {
            flex: 1;
            overflow-y: auto;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 8px;
            margin-bottom: 10px;
            background-color: #fff;
        }
        .chat-message {
            padding: 8px;
            margin: 5px 0;
            border-radius: 8px;
            background-color: #E0E0E0;
            word-wrap: break-word;
            max-width: 80%;
        }
        .input-box {
            display: flex;
        }
        .input-box input {
            flex: 1;
            padding: 8px;
            border: 1px solid #ddd;
            border-radius: 8px;
            outline: none;
            font-size: 14px;
        }
        .input-box button {
            padding: 8px 12px;
            margin-left: 5px;
            background-color: #C48562;
            border: none;
            color: #fff;
            border-radius: 8px;
            cursor: pointer;
            font-size: 14px;
        }
        .input-box button:hover {
            background-color: #9C694E;
        }
    </style>
</head>
<body>
    <div class="chat-container">
        <div class="chat-box" id="chatBox">
            <!-- Messages will appear here -->
        </div>
        <div class="input-box">
            <input type="text" id="userInput" placeholder="Type a message...">
            <button onclick="sendMessage()">Send</button>
        </div>
    </div>
    <script>
        function sendMessage() {
            // Get the value from the input box
            const inputText = document.getElementById("userInput").value;
            if (inputText.trim() !== "") {  // Ensure it is not empty
                // Create a new div element for the chat message
                const message = document.createElement("div");
                message.classList.add("chat-message");
                message.textContent = inputText;
                // Append the message to the chat box
                document.getElementById("chatBox").appendChild(message);
                // Scroll to the bottom of the chat box
                document.getElementById("chatBox").scrollTop = document.getElementById("chatBox").scrollHeight;
                // Clear the input box
                document.getElementById("userInput").value = '';
            }
        }
    </script>
</body>

