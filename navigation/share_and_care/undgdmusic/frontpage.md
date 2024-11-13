---
layout: page
title: Underground Music
description: Share music with others!
permalink: /undgdmusic/
---
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Underground Music Vibes</title>
    <style>
        /* General Styling */
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: Arial, sans-serif;
            background-color: #181818;
            color: #E0E0E0;
            display: flex;
            flex-direction: column;
            align-items: center;
            min-height: 100vh;
            overflow-x: hidden;
        }
        header {
            padding: 20px;
            width: 100%;
            max-width: 1000px;
            background-color: #1F1F1F;
            text-align: center;
            border-bottom: 3px solid #F2B600;
        }
        header h1 {
            font-size: 2.5rem;
            color: #F2B600;
            text-shadow: 0px 2px 8px rgba(255, 209, 102, 0.6);
        }
        header p {
            color: #888;
            font-size: 1rem;
        }
        .top-sections-wrapper {
            display: flex;
            justify-content: space-between;
            width: 100%;
            max-width: 1000px;
            gap: 20px;
            margin-top: 20px;
        }
        .posts-wrapper, .post-form-container, .chatroom-container {
            background-color: #2B2B2B;
            padding: 20px;
            border-radius: 8px;
            border: 2px solid #F2B600;
            flex: 1;
        }
        .posts-wrapper h2, .post-form-container h3, .chatroom-container h2 {
            color: #F2B600;
            text-align: center;
            margin-bottom: 10px;
            text-shadow: 0px 2px 8px rgba(255, 209, 102, 0.6);
        }
        .post-form-container input, .post-form-container textarea, #username, #message {
            width: 100%;
            padding: 10px;
            margin: 5px 0;
            border-radius: 4px;
            border: 1px solid #333;
            background-color: #333;
            color: #E0E0E0;
        }
        .post-form-container button, .message-form button {
            width: 100%;
            padding: 10px;
            border: none;
            border-radius: 4px;
            background-color: #F2B600;
            color: #1B1B1B;
            font-weight: bold;
            cursor: pointer;
            text-shadow: 0px 2px 8px rgba(255, 209, 102, 0.6);
        }
        .delete-button {
            background-color: #FF4C4C;
            color: white;
            border: none;
            border-radius: 4px;
            padding: 5px 10px;
            cursor: pointer;
            margin-left: 10px;
        }
        .delete-button:hover {
            background-color: #FF1C1C;
        }
    </style>
</head>
<body>
<header>
    <h1>Welcome to the Underground Vibes!</h1>
    <p>Share your thoughts, discover artists, and chat with others!</p>
</header>
<div class="top-sections-wrapper">
    <div class="posts-wrapper" id="postsWrapper">
        <h2>Flocker Posts</h2>
        <!-- Posts will be dynamically loaded here -->
    </div>
    <div class="post-form-container">
        <h3>Add a New Post</h3>
        <form id="postForm">
            <input type="text" id="usernameInput" placeholder="Enter your username" required>
            <textarea id="postInput" placeholder="What's on your mind?" required></textarea>
            <button type="submit">Post</button>
        </form>
    </div>
</div>
<div class="chatroom-container">
    <h2>Flocker Chatroom</h2>
    <div class="chat-area" id="messages">
        <!-- Messages will appear here -->
    </div>
    <form class="message-form" id="chat-form">
        <input type="text" id="username" placeholder="Your Name" required>
        <input type="text" id="message" placeholder="Type a message..." maxlength="200" required>
        <button type="submit">Send</button>
    </form>
</div>
<script type="module">
    import { pythonURI, fetchOptions } from '../assets/js/api/config.js';
    // Post-Related Functions
    async function fetchPosts() {
        try {
            const response = await fetch(`${pythonURI}/api/posts`, fetchOptions);
            if (!response.ok) {
                throw new Error("Failed to fetch posts from the backend.");
            }
            const posts = await response.json();
            renderPosts(posts);
        } catch (error) {
            console.error("Error fetching posts:", error);
        }
    }
    function renderPosts(posts) {
        document.getElementById('postsWrapper').innerHTML = posts.map(post => {
            const username = post.username || "Anonymous";
            const content = typeof post.content === 'string' ? post.content : JSON.stringify(post.content);
            return `
                <div class="post" data-post-id="${post.id}">
                    <div class="post-header">
                        <span class="post-username">${username}</span>
                        <button onclick="deletePost('${post.id}')" class="delete-button">Delete</button>
                    </div>
                    <p>${content}</p>
                </div>`;
        }).join('');
    }
    async function deletePost(postId) {
        try {
            const response = await fetch(`${pythonURI}/api/posts/${postId}`, {
                ...fetchOptions,
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
            });
            if (!response.ok) {
                throw new Error("Failed to delete the post.");
            }
            fetchPosts();
        } catch (error) {
            console.error("Error deleting post:", error);
        }
    }
    async function addPost(event) {
        event.preventDefault();
        const username = document.getElementById('usernameInput').value || "Anonymous";
        const content = document.getElementById('postInput').value;
        const postData = { username, content };
        try {
            const response = await fetch(`${pythonURI}/api/posts`, {
                ...fetchOptions,
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(postData)
            });
            if (!response.ok) {
                throw new Error("Failed to add post to the backend.");
            }
            document.getElementById('postForm').reset();
            fetchPosts();
        } catch (error) {
            console.error("Error adding post:", error);
        }
    }
    // Message-Related Functions
    async function fetchMessages() {
        try {
            const response = await fetch(`${pythonURI}/api/messages`, {
                ...fetchOptions,
                method: 'GET',
            });
            if (!response.ok) {
                throw new Error('Failed to fetch messages: ' + response.statusText);
            }
            const messages = await response.json();
            const messagesContainer = document.getElementById("messages");
            messagesContainer.innerHTML = "";
            messages.forEach(message => {
                const messageCard = document.createElement("div");
                messageCard.classList.add("message-card");
                const title = document.createElement("h3");
                title.textContent = message.title;
                const content = document.createElement("p");
                content.textContent = message.content;
                messageCard.appendChild(title);
                messageCard.appendChild(content);
                messagesContainer.appendChild(messageCard);
            });
        } catch (error) {
            console.error('Error fetching messages:', error);
        }
    }
    async function sendMessage(event) {
        event.preventDefault();
        const username = document.getElementById('username').value || "Anonymous";
        const content = document.getElementById('message').value;
        const messageData = {
            title: `Message from ${username}`,
            content: content,
        };
        try {
            const response = await fetch(`${pythonURI}/api/messages`, {
                ...fetchOptions,
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(messageData)
            });
            if (!response.ok) {
                throw new Error('Failed to send message: ' + response.statusText);
            }
            // Refresh messages after sending a new one
            fetchMessages();
            // Clear input field
            document.getElementById('message').value = '';
        } catch (error) {
            console.error('Error sending message:', error);
        }
    }
    // Initialize content on page load
    document.addEventListener('DOMContentLoaded', () => {
        fetchPosts();
        fetchMessages();
        document.getElementById('postForm').addEventListener('submit', addPost);
        document.getElementById('chat-form').addEventListener('submit', sendMessage);
    });
</script>
</body>
</html>