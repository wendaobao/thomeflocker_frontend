---
layout: post
title: The Hungry Games (Home, Chat, Hunger Calls)
permalink: share_and_care/hungry_games
comments: true
author: Ryan, Jowan, Gabriela, Michelle
---

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>The Hungry Games</title>
    <style>
        body {
            font-family: 'Calibri', sans-serif;
            background-color: #f8f9fa;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
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
            max-width: 1200px;
            margin: 20px auto;
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
            width: 1000px;
            height: 600px;
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
            color: #000;
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
        .restaurant-list {
            list-style: none;
            padding: 0;
        }
        .restaurant-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 10px 0;
            font-weight: bold;
        }
        .heart {
            margin-left: 15px;
            font-size: 50px;
            color: grey;
            cursor: pointer;
            transition: color 0.3s;
        }
        .heart.liked {
            color: red;
        }
        .about-header,
        .rules-header {
            color: #DFAF8A;
        }
        .about-paragraph,
        .rules-paragraph {
            color: #C88F66;
        }
        .link-row {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 20px;
            padding: 20px;
            border: 10px solid #D7C9E5;
            border-radius: 25px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
            background-color: #fff7e6;
            max-width: 90%;
            margin: 20px 0;
        }
        .link-row a {
            text-decoration: none;
            color: #6A0DAD;
            font-size: 20px;
        }
        h1 {
            color: #ff8c00;
        }
        .collapsible {
            background-color: #333;
            color: white;
            cursor: pointer;
            padding: 15px;
            width: 80%;
            margin: 10px auto;
            border: none;
            text-align: left;
            outline: none;
            font-size: 40px;
            transition: 0.4s;
            border-radius: 5px;
            font-family: 'Calibri', sans-serif;
        }
        .content {
            padding: 0 18px;
            display: none;
            overflow: hidden;
            background-color: #222;
            color: white;
        }
        /* Container and form styling for post creation */
        .container {
            display: flex;
            justify-content: center;
            width: 100%;
            max-width: 1200px;
            padding: 20px;
            box-sizing: border-box;
        }
        .form-container {
            display: flex;
            flex-direction: column;
            max-width: 800px;
            width: 100%;
            background-color: #2C3E50;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            color: #ECF0F1;
        }
        .form-container label {
            margin-bottom: 5px;
        }
        .form-container select {
            margin-bottom: 10px;
            padding: 10px;
            border-radius: 5px;
            border: none;
            width: 100%;
            background-color: #34495E;
            color: #ECF0F1;
            font-size: 16px;
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            outline: none;
        }
        .form-container button {
            padding: 10px;
            border-radius: 5px;
            border: none;
            background-color: #34495E;
            color: #ECF0F1;
            cursor: pointer;
        }
    </style>
</head>
<body>

<h1 class="about-header">ABOUT THIS HANGOUT:</h1>
<p class="about-paragraph">This is a hangout all about people's favorite food, restaurants, and more! Explore and have fun!</p>

<button class="collapsible">MODERATION RULES</button>
<div class="content">
    <p class="rules-paragraph">1. Please do not use profanity in the hangout.</p>
    <p class="rules-paragraph">2. Please be respectful of others. Think before you chat or use any of the interactive features.</p>
    <p class="rules-paragraph">3. Reminder that your data is stored in a (local) backend.</p>
    <p class="rules-paragraph">4. Please do NOT spam flood the chat.</p>
    <p class="rules-paragraph">5. Stay on task. This hangout is for people to talk about food, recipes, and restaurants.</p>
    <p class="rules-paragraph">6. Do NOT impersonate people.</p>
</div>

<!-- Create Post Form Section -->
<div class="container">
    <div class="form-container">
        <h2>Select Group and Create Post</h2>
        <form id="postForm">
            <label for="group_id">Group:</label>
            <select id="group_id" name="group_id" required>
                <option value="">Select a group</option>
            </select>
            <label for="title">Title:</label>
            <input type="text" id="title" name="title" required>
            <label for="content">Content:</label>
            <textarea id="content" name="content" required></textarea>
            <button type="submit">Create Post</button>
        </form>
    </div>
</div>

<!-- Chat Box Section (Removed backend code for the chatbox) -->
<div class="chat-container">
    <div class="chat-box">
        <div class="chat-message">
            <span>Welcome to the Hunger Games Chat!</span>
        </div>
    </div>
    <div class="input-box">
        <input type="text" placeholder="Type a message..." id="chat-input" />
        <button id="chat-send">Send</button>
    </div>
</div>

<script>
    document.getElementById('chat-send').addEventListener('click', function() {
        const input = document.getElementById('chat-input');
        const message = input.value.trim();
        if (message) {
            const chatBox = document.querySelector('.chat-box');
            const newMessage = document.createElement('div');
            newMessage.classList.add('chat-message');
            newMessage.textContent = message;
            chatBox.appendChild(newMessage);
            input.value = '';  // Clear the input field
            chatBox.scrollTop = chatBox.scrollHeight;  // Scroll to the bottom of the chatbox
        }
    });
</script>

</body>
</html>
