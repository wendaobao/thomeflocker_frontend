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
  <title>Daily Riddle</title>
  <style>
    /* Optional styling for better visibility */
    body {
      font-family: Arial, sans-serif;
      text-align: 50px;
      margin-top: 50px;
    }
    #riddle-container {
      display: inline-block;
      text-align: 50px;
      margin-top: 20px;
    }
    button {
      padding: 10px 20px;
      font-size: 16px;
    }
    #riddle {
      margin-top: 10px;
      font-size: 18px;
      color: #333;
    }
  </style>
</head>
<body>
  <div id="riddle-container">
    <button id="riddleButton" onclick="displayRiddle()">Get Today's Riddle</button>
  </div>

  <script>
    // Array of riddles
    const riddles = [
      "What has keys but can't open locks? (A piano)",
      "What has a head, a tail, but no body? (A coin)",
      "What comes once in a minute, twice in a moment, but never in a thousand years? (The letter 'M')",
      "I'm tall when I'm young, and I'm short when I'm old. What am I? (A candle)",
      "What has to be broken before you can use it? (An egg)"
    ];

    // Function to check and display today's riddle
    function displayRiddle() {
      const date = new Date().toDateString(); // Get the current date as a string
      const savedRiddle = localStorage.getItem('todayRiddle');
      const savedDate = localStorage.getItem('riddleDate');
      const riddleButton = document.getElementById('riddleButton');

      if (savedDate === date && savedRiddle) {
        // If a riddle is already set for today, use the saved one
        riddleButton.innerText = savedRiddle;
      } else {
        // Otherwise, generate a new riddle and save it
        const riddleIndex = new Date().getDate() % riddles.length;
        const todayRiddle = riddles[riddleIndex];
        riddleButton.innerText = todayRiddle;
        
        // Save the riddle and date to localStorage
        localStorage.setItem('todayRiddle', todayRiddle);
        localStorage.setItem('riddleDate', date);
      }
    }
  </script>
</body>
</html>



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

    <h3>Riddle Room Chat</h3>

    <br>
    
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
