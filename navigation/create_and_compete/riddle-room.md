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

 
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Daily Riddle Generator</title>
    <style>
        body {
            background-color: #F0F0F0;
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }
        .container {
            text-align: center;
        }
        button {
            background-color: #4CAF50; /* Green color */
            color: white;
            padding: 10px 20px;
            border: none;
            font-size: 1em;
            cursor: pointer;
            border-radius: 5px;
            transition: background-color 0.3s;
        }
        button:disabled {
            background-color: #999;
            cursor: not-allowed;
        }
        button:hover:not(:disabled) {
            background-color: #45A049;
        }
        #riddle {
            margin-top: 20px;
            font-size: 1.2em;
            color: #333;
        }
        #message {
            margin-top: 10px;
            font-size: 1em;
            color: #FF6347; /* Red color for message */
        }
    </style>
</head>
<body>
    <div class="container">
        <button id="riddleButton" onclick="generateRiddle()">Generate Random Riddle</button>
        <div id="riddle"></div>
        <div id="message"></div>
    </div>
    <script>
        const riddles = [
            "What has keys but can't open locks? (Answer: A piano)",
            "What has to be broken before you can use it? (Answer: An egg)",
            "I'm tall when I'm young and short when I'm old. What am I? (Answer: A candle)",
            "What comes once in a minute, twice in a moment, but never in a thousand years? (Answer: The letter M)",
            "What has a head, a tail, is brown, and has no legs? (Answer: A penny)"
        ];
        const riddleButton = document.getElementById("riddleButton");
        const riddleDisplay = document.getElementById("riddle");
        const messageDisplay = document.getElementById("message");
        function generateRiddle() {
            const currentTime = Date.now();
            const lastRiddleTime = localStorage.getItem("lastRiddleTime");
            if (lastRiddleTime && currentTime - lastRiddleTime < 24 * 60 * 60 * 1000) {
                // Display stored riddle if within 24-hour period
                const storedRiddle = localStorage.getItem("lastRiddle");
                riddleDisplay.innerText = storedRiddle;
                // Calculate and display remaining time
                const hoursRemaining = Math.ceil((24 * 60 * 60 * 1000 - (currentTime - lastRiddleTime)) / (60 * 60 * 1000));
                messageDisplay.innerText = `Next riddle in ${hoursRemaining} hours`;
                // Disable button
                riddleButton.disabled = true;
            } else {
                // Generate a new riddle and store it
                const randomIndex = Math.floor(Math.random() * riddles.length);
                const newRiddle = riddles[randomIndex];
                riddleDisplay.innerText = newRiddle;
                messageDisplay.innerText = "";
                // Store new riddle and current timestamp
                localStorage.setItem("lastRiddle", newRiddle);
                localStorage.setItem("lastRiddleTime", currentTime);
                // Disable the button
                riddleButton.disabled = true;
            }
        }
        // Check on page load if the button should be disabled and display the stored

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

<h1>Riddle Room</h1>
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
