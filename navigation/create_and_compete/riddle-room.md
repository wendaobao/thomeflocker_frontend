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
    <title>Riddle Room Chat</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: black;
            color: white;
            padding: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        #chat-container {
            display: flex;
            width: 130%;
        }
        #chat-box {
            flex-grow: 1;
            border: 1px solid #444;
            padding: 10px;
            height: 500px;
            overflow-y: scroll;
            background-color: #222;
            margin-right: 20px;
        }
        #message-input, #answer-input {
            width: calc(100% - 100px);
            padding: 10px;
            margin-top: 10px;
            border: 1px solid #444;
            background-color: #333;
            color: white;
        }
        #send-button, #check-answer {
            width: 100px;
            padding: 10px;
            margin-top: 10px;
            margin-left: 5px;
            background-color: #555;
            color: white;
            border: none;
            cursor: pointer;
        }
        .message {
            margin: 5px 0;
            padding: 8px;
            border-radius: 5px;
            background-color: #555;
        }
        #riddle-container {
            margin-bottom: 20px;
        }
        #riddle-text {
            font-size: 18px;
            color: #ffcc00;
        }
        #users-list {
            width: 150px;
        }
        #users-list h4 {
            margin-bottom: 10px;
        }
        #users-list ul {
            list-style-type: none;
            padding: 0;
        }
    </style>
</head>
<body>
    <h3>Riddle Room Chat</h3>
    <h7>Please enter no extra characters beside the answer</h7>
    <div id="riddle-container">
        <h4>Riddle of the Day</h4>
        <p id="riddle-text"></p>
    </div>

    <div id="chat-container">
        <div id="chat-box"></div>
        
        <div id="users-list">
            <h4>Users</h4>
            <ul id="userList">
                <li>System</li>
            </ul>
        </div>
    </div>

    <div>
        <input type="text" id="message-input" placeholder="Type your message...">
        <button id="send-button" onclick="sendMessage()">Send</button>
    </div>

    <div>
        <input type="text" id="answer-input" placeholder="Enter your answer...">
        <button id="check-answer" onclick="checkAnswer()">Check Answer</button>
    </div>

    <script>
        const chatBox = document.getElementById('chat-box');
        const messageInput = document.getElementById('message-input');
        const answerInput = document.getElementById('answer-input');
        const userList = document.getElementById('userList');
        const riddleText = document.getElementById('riddle-text');
        const users = new Set(['System']);
        let username;
        let currentRiddle;

        function displayRiddle() {
            const riddles = [
                { question: "What has keys but can't open locks?", answer: "piano" },
                { question: "What has a head, a tail, but no body?", answer: "coin" },
                { question: "What comes once in a minute, twice in a moment, but never in a thousand years?", answer: "m" },
                { question: "I'm tall when I'm young, and I'm short when I'm old. What am I?", answer: "candle" },
                { question: "What has to be broken before you can use it?", answer: "egg" }
            ];
            const riddleIndex = new Date().getDate() % riddles.length;
            currentRiddle = riddles[riddleIndex];
            riddleText.textContent = currentRiddle.question;
        }

        function checkForMidnight() {
            const currentDate = new Date().toDateString();
            if (localStorage.getItem('riddleDate') !== currentDate) {
                displayRiddle();
                localStorage.setItem('riddleDate', currentDate);
            }
        }

        function requestUsername() {
            while (true) {
                const enteredUsername = prompt("Enter your username:");
                if (enteredUsername && !users.has(enteredUsername)) {
                    username = enteredUsername;
                    addUser(username);
                    displayMessage(`You have joined as ${username}.`, true);
                    break;
                } else {
                    alert("Username is taken or invalid. Please try again.");
                }
            }
        }

        function displayMessage(message, isSystem = false) {
            const messageElement = document.createElement('div');
            messageElement.classList.add('message', isSystem ? 'system-message' : 'user-message');
            messageElement.textContent = message;
            chatBox.appendChild(messageElement);
            chatBox.scrollTop = chatBox.scrollHeight;
        }

        function addUser(newUsername) {
            users.add(newUsername);
            const userItem = document.createElement('li');
            userItem.textContent = newUsername;
            userList.appendChild(userItem);
        }

        function sendMessage() {
            const messageText = messageInput.value.trim();
            if (messageText !== '') {
                displayMessage(`${username}: ${messageText}`);
                messageInput.value = '';
            }
        }

        function checkAnswer() {
            const userAnswer = answerInput.value.trim().toLowerCase();
            if (userAnswer === currentRiddle.answer) {
                displayMessage(`${username} got it right!`, true);
            } else {
                displayMessage(`${username} guessed wrong! Try again.`, true);
            }
            answerInput.value = '';
        }

        displayMessage("Welcome to the Riddle Room Chat!", true);
        requestUsername();
        displayRiddle();
        localStorage.setItem('riddleDate', new Date().toDateString());
        setInterval(checkForMidnight, 60000);
    </script>
</body>
</html>
