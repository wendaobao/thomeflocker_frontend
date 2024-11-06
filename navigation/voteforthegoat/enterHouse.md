---
permalink: /voteforthegoat/calicovote/house
menu: nav/vote_for_the_goat.html
layout: post
title: Entering The House
description: Enter the houses of your favorite critters now
Authors: Maryam, Nora, Kushi, Joanna
---
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>House Page</title>
    <style>
        /* Base Styles */
        body {
            font-family: "Times New Roman", Times, serif;
            transition: background-color 0.5s ease;
            color: #fff;
            margin: 0;
            padding: 0;
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }
        /* Content Container */
        .content {
            padding: 20px;
            max-width: 600px;
            margin: 20px;
            border-radius: 10px;
            text-align: center;
            background: rgba(0, 0, 0, 0.5);
        }
        /* House Information */
        .house-info {
            font-size: 28px;
            font-weight: bold;
            margin-bottom: 15px;
        }
        .message {
            font-size: 20px;
            margin-bottom: 20px;
        }
        /* Button Styles */
        .button {
            padding: 10px 20px;
            font-size: 18px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            background-color: rgba(255, 255, 255, 0.2);
            color: #fff;
            transition: background-color 0.3s ease;
            margin-bottom: 10px;
        }
        .button:hover {
            background-color: rgba(255, 255, 255, 0.4);
        }
        /* Post Container */
        .post-container {
            background: rgba(255, 255, 255, 0.1);
            padding: 15px;
            margin: 10px 0;
            border-radius: 10px;
            text-align: left;
            width: 100%;
        }
        .post-button {
            padding: 8px 15px;
            margin-top: 10px;
            cursor: pointer;
            border-radius: 5px;
            border: none;
            background-color: #444;
            color: #fff;
        }
        .post-button:hover {
            background-color: #666;
        }
    </style>
</head>
<body>
    <div class="content">
        <div id="houseInfo" class="house-info">Loading...</div>
        <div id="message" class="message">Please wait...</div>
        <button id="addPostButton" class="button">Add Post</button>
        <button id="backButton" class="button">Go Back</button>
        <div id="postsContainer"></div>
    </div>
    <script>
        // Retrieve the selected house from local storage
        window.onload = function() {
            const savedHouse = localStorage.getItem('selectedHouse');
            const houseInfo = document.getElementById('houseInfo');
            const message = document.getElementById('message');
            console.log(`Stored house value: ${savedHouse}`); // Debug line
            if (savedHouse) {
                console.log(`Setting background color for ${savedHouse}`); // Debug line
                setBackground(savedHouse);
                renderHousePage(savedHouse);
                houseInfo.textContent = `You selected: ${savedHouse} House`;
            } else {
                houseInfo.textContent = "No house selected.";
                message.textContent = "Please go back and select a house.";
            }
            displayPosts(); // Display posts on page load
        };
        // Function to set the background color based on the selected house
        function setBackground(house) {
            switch (house) {
                case 'Adventure Play':
                    document.body.style.backgroundColor = 'green';
                    break;
                case 'Sylvanian Family Restaurant':
                    document.body.style.backgroundColor = 'blue';
                    break;
                case 'Magical Mermaid Castle':
                    document.body.style.backgroundColor = 'purple';
                    break;
                case 'Woody School':
                    document.body.style.backgroundColor = 'goldenrod';
                    break;
                case 'Spooky Surprise Haunted':
                    document.body.style.backgroundColor = 'darkred';
                    break;
                case 'Brick Oven Bakery':
                    document.body.style.backgroundColor = 'orange';
                    break;
                default:
                    document.body.style.backgroundColor = 'white';
            }
        }
        // Function to set the content based on the selected house
        function renderHousePage(house) {
            const houseInfo = document.getElementById('houseInfo');
            const message = document.getElementById('message');
            switch (house) {
                case 'Adventure Play':
                    houseInfo.textContent = "Welcome to the Adventure Play House!";
                    message.textContent = "Explore and have fun!";
                    break;
                case 'Sylvanian Family Restaurant':
                    houseInfo.textContent = "Welcome to the Sylvanian Family Restaurant House!";
                    message.textContent = "Join us for a delightful meal!";
                    break;
                case 'Magical Mermaid Castle':
                    houseInfo.textContent = "Welcome to the Magical Mermaid Castle!";
                    message.textContent = "Dive into an enchanting experience!";
                    break;
                case 'Woody School':
                    houseInfo.textContent = "Welcome to the Woody School House!";
                    message.textContent = "Get ready to learn and grow!";
                    break;
                case 'Spooky Surprise Haunted':
                    houseInfo.textContent = "Welcome to the Spooky Surprise Haunted House!";
                    message.textContent = "Dare to enter the haunted halls!";
                    break;
                case 'Brick Oven Bakery':
                    houseInfo.textContent = "Welcome to the Brick Oven Bakery House!";
                    message.textContent = "Smell the freshly baked goodies!";
                    break;
                default:
                    houseInfo.textContent = "House not found.";
                    message.textContent = "Please go back and select a house.";
            }
        }
        // Function to handle the "Go Back" button click
        function goBack() {
            window.history.back(); // Navigate to the previous page
        }
        // Set up the "Go Back" button event listener
        document.getElementById('backButton').addEventListener('click', goBack);
        // Add post functionality
        document.getElementById('addPostButton').addEventListener('click', function() {
            const postContainer = document.createElement('div');
            postContainer.classList.add('post-container');
            const textArea = document.createElement('textarea');
            textArea.style.width = '100%';
            textArea.style.height = '100px';
            textArea.placeholder = 'Write your post here...';
            const postButton = document.createElement('button');
            postButton.textContent = 'Post';
            postButton.classList.add('post-button');
            postButton.onclick = function() {
                savePost(textArea.value);
                displayPosts();
                postContainer.remove();
            };
            postContainer.appendChild(textArea);
            postContainer.appendChild(postButton);
            document.body.appendChild(postContainer);
        });
        // Save post to local storage
        function savePost(content) {
            if (!content.trim()) {
                alert('Post content cannot be empty!');
                return;
            }
            let posts = JSON.parse(localStorage.getItem('posts')) || [];
            posts.push({ content: content.trim(), timestamp: new Date().toISOString() });
            localStorage.setItem('posts', JSON.stringify(posts));
        }
        // Display posts from local storage
        function displayPosts() {
            const postsContainer = document.getElementById('postsContainer');
            postsContainer.innerHTML = '';
            let posts = JSON.parse(localStorage.getItem('posts')) || [];
            posts.forEach(post => {
                const postDiv = document.createElement('div');
                postDiv.classList.add('post-container');
                postDiv.textContent = `${new Date(post.timestamp).toLocaleString()}: ${post.content}`;
                postsContainer.appendChild(postDiv);
            });
        }
    </script>
</body>
</html>
