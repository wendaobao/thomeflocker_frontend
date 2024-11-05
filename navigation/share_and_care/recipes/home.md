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
    </style>
</head>
<body>

<h1 class="about-header">ABOUT THIS HANGOUT:</h1>
<p class="about-paragraph">This is a hangout all about people's favorite food, restaurants, and more! We have a (local) backend running that stores chat messages in a database. We have a list of local restaurants where you can browse. Explore and have fun!</p>

<button class="collapsible">MODERATION RULES</button>
<div class="content">
    <p class="rules-paragraph">1. Please do not use profanity in the hangout.</p>
    <p class="rules-paragraph">2. Please be respectful of others. Think before you chat or use any of the interactive features.</p>
    <p class="rules-paragraph">3. Reminder that your data is stored in a (local) backend.</p>
    <p class="rules-paragraph">4. Please do NOT spam flood the chat.</p>
    <p class="rules-paragraph">5. Stay on task. This hangout is for people to talk about food, recipes, and restaurants.</p>
    <p class="rules-paragraph">6. Do NOT impersonate people.</p>
</div>

<div>
    <h3>Select a Group</h3>
    <select id="group_id">
        <option value="" disabled selected>Select a group</option>
    </select>
</div>

<!-- Add Post Form -->
<div class="form-container">
    <h2>☆*: .｡. Add New Post :coffee:.｡.:*☆</h2>
    <form id="postForm">
        <label for="title">Title:</label>
        <input type="text" id="title" name="title" required>
        <label for="content">Message:</label>
        <textarea id="content" name="content" required></textarea>
        <label for="group_id">Group:</label>
        <select id="group_id" name="group_id" required>
            <option value="">Select a group</option>
            <!-- Options will be dynamically populated -->
        </select>
        <button type="submit">Add Post</button>
    </form>
</div>

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

<h1>Local Restaurants</h1>
<ul class="restaurant-list">
    <li class="restaurant-item">
        <strong>Burger Lounge (Del Sur)</strong>
        <span class="heart" onclick="toggleHeart(this)">♡</span>
    </li>
    <li class="restaurant-item">
        <strong>Chick-fil-A (Del Sur)</strong>
        <span class="heart" onclick="toggleHeart(this)">♡</span>
    </li>
    <li class="restaurant-item">
        <strong>California Pizza Kitchen</strong>
        <span class="heart" onclick="toggleHeart(this)">♡</span>
    </li>
</ul>

<script>
    async function fetchGroups(sectionName) {
        const response = await fetch('http://localhost:5000/api/groups/filter', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ section_name: sectionName })
        });

        if (response.ok) {
            const groups = await response.json();
            populateGroupDropdown(groups);
        } else {
            const error = await response.json();
            alert(error.error || "An error occurred while fetching groups.");
        }
    }

    function populateGroupDropdown(groups) {
        const groupSelect = document.getElementById('group_id');
        groupSelect.innerHTML = "<option value='' disabled selected>Select a group</option>"; // Clear existing options

        groups.forEach(group => {
            const option = document.createElement('option');
            option.value = group.id;
            option.textContent = group.name;
            groupSelect.appendChild(option);
        });
    }

    function sendMessage() {
        const name = document.getElementById("userName").value;
        const message = document.getElementById("userInput").value;
        const chatBox = document.getElementById("chatBox");

        if (name && message) {
            const chatMessage = document.createElement("div");
            chatMessage.classList.add("chat-message");
            chatMessage.textContent = `${name}: ${message}`;
            chatBox.appendChild(chatMessage);
            chatBox.scrollTop = chatBox.scrollHeight;  // Auto-scroll to the latest message

            // Clear input fields after sending
            document.getElementById("userName").value = "";
            document.getElementById("userInput").value = "";
        } else {
            alert("Please enter both your name and a message!");
        }
    }

    window.onload = function() {
        fetchGroups("Home Page");
    }

    function toggleHeart(heart) {
        heart.classList.toggle("liked");
    }

    const coll = document.querySelector(".collapsible");
    coll.addEventListener("click", function() {
        const content = this.nextElementSibling;
        content.style.display = content.style.display === "block" ? "none" : "block";
    });

    document.getElementById("postForm").addEventListener("submit", async function(e) {
        e.preventDefault();

        const postData = {
            title: document.getElementById("title").value,
            content: document.getElementById("content").value,
            group_id: document.getElementById("group_id").value,
        };

        const response = await fetch('http://localhost:5000/api/post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData)
        });

        if (response.ok) {
            alert('Post created successfully!');
        } else {
            const error = await response.json();
            alert(error.error || 'Failed to create post.');
        }
    });
</script>

</body>
<a href="favorites.md" class="link-button">Go to Favorite Restaurants</a>
</html>

