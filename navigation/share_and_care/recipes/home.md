---
layout: post
title: The Hungry Games (Home and Chat)
description: Have fun talking about food, resturants, and more! Favorite people's chat messages to store them! 
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
            min-height: 100vh;
            margin: 0;
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
            width: 400px;  /* Increased width */
            height: 500px; /* Increased height */
            display: flex;
            flex-direction: column;
            border: 2px solid #ff8c00;
            border-radius: 12px;
            padding: 10px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
            background-color: #fff3e0;
            margin-top: 20px;
            text-align: center; /* Center text */
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
            position: relative; /* For absolute positioning of heart */
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
        .heart {
            cursor: pointer;
            margin-left: 5px;
            display: inline-block; /* Allow toggling visibility */
        }
        .hidden {
            display: none; /* Hide the heart */
        }
        .chat-label {
            margin-bottom: 10px; /* Spacing between label and chat box */
            font-weight: bold; /* Make the label bold */
        }
    </style>
</head>
<body>

    <div class="image-row">
        <img src="https://cdn.prod.website-files.com/56f03b1536442f6b27f0f08c/5f03324cbb2506842953d137_worlds-best-foods-pizza.jpg" alt="Pizza">
        <img src="https://www.eatingwell.com/thmb/iCdLRBC1BMcDYKRYMTyyToQ8mRs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/8401873-ad2429ae1858464a92229875c91c093d.jpg" alt="Pasta">
        <img src="https://thatdeliciousdish.com/wp-content/uploads/2020/07/Garlic-Mushroom-Noodles-Recipe-web1-1-800x840.jpg" alt="Ramen">
    </div>

    <div class="chat-container">
        <div class="chat-label">Chat Box</div> <!-- Added chat label -->
        <div class="chat-box" id="chatBox">
            <!-- Messages will appear here -->
        </div>
        <div class="input-box">
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
            const inputText = document.getElementById("userInput").value;
            if (inputText.trim() !== "") {
                const response = await fetch('http://localhost:5000/messages', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ text: inputText }),
                });
                const message = await response.json();
                displayMessage(message);
                document.getElementById("userInput").value = ''; // Clear input box
            }
        }

        function displayMessage(message) {
            const messageDiv = document.createElement("div");
            messageDiv.classList.add("chat-message");
            messageDiv.textContent = message.text;

            const heart = document.createElement("span");
            heart.textContent = "❤️";
            heart.classList.add("heart");
            heart.onclick = async function() {
                heart.classList.toggle("hidden"); // Toggle the hidden class to show/hide heart
                const heartResponse = await fetch(`http://localhost:5000/messages/${message.id}/heart`, {
                    method: 'PUT',
                });
                const updatedMessage = await heartResponse.json();
                console.log(updatedMessage.hearts); // Log the updated heart count
            };

            messageDiv.appendChild(heart);
            document.getElementById("chatBox").appendChild(messageDiv);
            document.getElementById("chatBox").scrollTop = document.getElementById("chatBox").scrollHeight; // Scroll to the bottom
        }

        // Fetch existing messages when the page loads
        window.onload = fetchMessages;
    </script>

</body>
</html>

