---
layout: post 
title: Create and Compete - Riddle Room
search_exclude: true
permalink: /create_and_compete/riddle
menu: nav/create_and_compete.html
author: Kush, Tarun, Vincent, and Nolan
---


<details>

<br>
  <summary>Room Details</summary>

  <a href="{{site.baseurl}}/moderation/rules_riddle/">Moderation Rules</a>


  <p>The main purpose of our riddle room is to have people think critically and collaborate with the other members of the channel to solve the riddle as fast as possible.</p>

  <p>Room will consist of:</p>
  <ul>
    <li>Daily riddle which is optionally pinned to the top of our channel</li>
    <li>Answers will be posted at the end of the day</li>
    <li>Chat box where members of the channel can collaborate to solve the riddle</li>
    <li>AI which posts the answer if someone gets it, else posts the answer at the end of the day</li>
    <li>Profanity is censored</li>
  </ul>

</details>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Chat Box</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: black; /* Set the body background to black */
            color: white; /* Set text color to white */
            padding: 20px;
        }
        #chat-box {
            border: 1px solid #444; /* Darker border for contrast */
            padding: 10px;
            height: 300px;
            overflow-y: scroll;
            background-color: #222; /* Dark gray background for chat box */
        }
        #message-input {
            width: 100%;
            padding: 10px;
            margin-top: 10px;
            border: 1px solid #444; /* Dark border for input */
            background-color: #333; /* Dark background for input */
            color: white; /* White text for input */
        }
        .message {
            margin: 5px 0;
            padding: 8px;
            border-radius: 5px;
            background-color: #555; /* Dark background for messages */
        }
    </style>
</head>
<body>

    <h1>Collaborative Chat Box</h1>
    <div id="chat-box"></div>
    <input type="text" id="message-input" placeholder="Type your message...">

    <script>
        const chatBox = document.getElementById('chat-box');
        const messageInput = document.getElementById('message-input');

        messageInput.addEventListener('keypress', function (event) {
            if (event.key === 'Enter') {
                const messageText = messageInput.value;
                if (messageText.trim() !== '') {
                    displayMessage(messageText);
                    messageInput.value = ''; // Clear the input
                }
            }
        });

        function displayMessage(message) {
            const messageElement = document.createElement('div');
            messageElement.classList.add('message');
            messageElement.textContent = message;
            chatBox.appendChild(messageElement);
            chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
        }
    </script>

</body>
</html>
