---
layout: post
title: The Hungry Games (Home and Chat)
description: Have fun talking about food, resturants, and more! 
permalink: share_and_care/hungry_games
comments: true
---

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: 'Calibri', sans-serif; 
            background-color: #f8f9fa;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center; /* Center vertically */
            min-height: 100vh;
            margin: 0;
        }
        .button {
            display: inline-block;
            padding: 10px 20px;
            font-size: 16px;
            color: white;
            background-color: #007bff;
            text-decoration: none;
            border-radius: 5px;
            transition: background-color 0.3s ease;
        }
        .button:hover {
            background-color: #0056b3;
        }
        .image-row {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 20px;
            padding: 20px;
            border: 10px solid #FFD700;
            border-radius: 25px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
            background-color: #fff7e6;
            max-width: 90%;
            margin: 20px 0;
        }
        .image-row img {
            width: 300px;
            height: 300px;
            border-radius: 20px;
            transition: transform 0.3s ease-in-out;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
            object-fit: cover;
        }
        .image-row img:hover {
            transform: scale(1.1);
        }
        .chat-container {
            width: 600px;  /* Increased width */
            height: 600px; /* Increased height */
            display: flex;
            flex-direction: column;
            border: 2px solid #ff8c00;
            border-radius: 12px;
            padding: 10px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
            background-color: #fff3e0;
            margin-top: 20px;
            text-align: center; 
        }
        .chat-box {
            flex: 1;
            overflow-y: auto;
            padding: 10px;
            border: 1px solid #ffe0b2;
            border-radius: 10px;
            margin-bottom: 10px;
            background-color: #ffffff;
        }
        .chat-message {
            padding: 10px;
            margin: 5px 0;
            border-radius: 10px;
            background-color: #ffcc80;
            word-wrap: break-word;
            max-width: 80%;
            position: relative; 
            color: #000; /* Dark text color */
        }
        .chat-label {
            color: #333;
            margin-bottom: 10px;
            font-weight: bold;
        }
        .input-box {
            display: flex;
        }
        .input-box input {
            flex: 1;
            padding: 10px;
            border: 1px solid #ffcc80;
            border-radius: 10px;
            outline: none;
            font-size: 14px;
        }
        .input-box button {
            padding: 10px 15px;
            margin-left: 5px;
            background-color: #ff8c00;
            border: none;
            color: #fff;
            border-radius: 10px;
            cursor: pointer;
            font-size: 14px;
        }
        .input-box button:hover {
            background-color: #e67e22;
        }
    </style>
</head>
<body>
    <a href="/moderation/rules_hungry_games/" class="button">Rules</a>
    <a href="{{ site.baseurl }}/reccomendations.html" class="button">Local Restaurants</a>

    <div class="image-row">
        <img src="https://cdn.prod.website-files.com/56f03b1536442f6b27f0f08c/5f03324cbb2506842953d137_worlds-best-foods-pizza.jpg" alt="Pizza">
        <img src="https://www.eatingwell.com/thmb/iCdLRBC1BMcDYKRYMTyyToQ8mRs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/8401873-ad2429ae1858464a92229875c91c093d.jpg" alt="Pasta">
        <img src="https://thatdeliciousdish.com/wp-content/uploads/2020/07/Garlic-Mushroom-Noodles-Recipe-web1-1-800x840.jpg" alt="Ramen">
    </div>

    <div class="chat-container">
        <div class="chat-label">Chat Box</div>
        <div class="chat-box" id="chatBox">
            <!-- Messages will appear here -->
        </div>
        <div class="input-box">
            <input type="text" id="userName" placeholder="Enter your name..." />
            <input type="text" id="userInput" placeholder="Share a recipe or restaurant...">
            <button onclick="sendMessage()">Send</button>
        </div>
    </div>
    
    <script>
        async function fetchMessages() {
            const response = await fetch('http://localhost:5000/messages');
            const messages = await response.json();
            messages.forEach(message => {
                displayMessage(message);
            });
        }

        async function sendMessage() {
            const userName = document.getElementById("userName").value.trim();
            const inputText = document.getElementById("userInput").value.trim();

            if (inputText !== "" && userName !== "") {
                const response = await fetch('http://localhost:5000/messages', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ user: userName, text: inputText }),
                });
                const message = await response.json();
                displayMessage(message);
                document.getElementById("userInput").value = ''; // Clear input box
            } else {
                alert("Please enter both your name and a message.");
            }
        }

        function displayMessage(message) {
            const messageDiv = document.createElement("div");
            messageDiv.classList.add("chat-message");
            messageDiv.innerHTML = `<strong>${message.user}</strong>: ${message.text}`; // Bold user name

            document.getElementById("chatBox").appendChild(messageDiv);
            document.getElementById("chatBox").scrollTop = document.getElementById("chatBox").scrollHeight; // Scroll to the bottom
        }

        // Fetch existing messages when the page loads
        window.onload = fetchMessages;

    </script>

</body>
</html>
