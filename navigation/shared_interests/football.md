---
layout: base
title: Football
permalink: /shared_interests/football/
menu: nav/shared_interests.html
---

<style>
    /* General styles */
    body {
        margin: 0;
        background-color: #FDF5E6; /* Light background for good contrast */
        font-family: Arial, sans-serif;
    }

    /* Header at the top of the page */
    .page-header {
        text-align: center;
        padding: 20px;
        background-color: #001F3F; /* Navy Blue */
        color: #FFD700; /* Gold */
        border-radius: 8px;
        border: 2px solid #C5B358; /* Vegas Gold */
    }

    /* Layout for the entire page */
    .main-container {
        display: flex;
        justify-content: space-between;
        padding: 20px;
        box-sizing: border-box;
    }

    /* Posts section on the left */
    .posts-wrapper {
        width: 45%;
    }

    .post {
        border: 2px solid #C5B358; /* Vegas Gold */
        border-radius: 8px;
        background-color: #008504; /* Green */
        padding: 15px;
        margin-bottom: 15px;
        color: white;
    }

    .post-header {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
    }

    .post-icon {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: #FFD700; /* Gold */
        display: inline-block;
        margin-right: 10px;
    }

    .post-username {
        font-weight: bold;
        color: #FFD700; /* Gold */
    }

    /* Chatroom section on the right */
    .chatroom-container {
        width: 45%;
        border: 2px solid #C5B358; /* Vegas Gold */
        border-radius: 8px;
        background-color: #001F3F; /* Navy Blue */
        padding: 20px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        max-height: 725px;
        overflow: hidden;
    }

    .chatroom-header {
        text-align: center;
        color: #FFD700; /* Gold */
        margin-bottom: 10px;
    }

    .chat-area {
        flex-grow: 1;
        min-height: 450px;
        max-height: 450px;
        overflow-y: auto;
        background-color: #008504; /* Forest Green */
        border: 2px solid #C5B358;
        border-radius: 8px;
        padding: 10px;
        margin-bottom: 10px;
        color: white;
    }

    .message-form {
        display: flex;
        align-items: center;
    }

    #messageInput {
        flex: 1;
        padding: 10px;
        border: 2px solid #C5B358;
        border-radius: 5px;
        margin-right: 10px;
    }

    button {
        background-color: #FFD700;
        border: none;
        padding: 10px 15px;
        border-radius: 5px;
        cursor: pointer;
    }

    button:hover {
        background-color: #C5B358;
    }
</style>

<!-- Page Header -->
<div class="page-header">
    <h1>Welcome to the Football Flocker Room</h1>
    <p>View announcements, posts, or engage with others in the chat!</p>
</div>

<div class="main-container">
    <!-- Posts Section on the Left -->
    <div class="posts-wrapper">
        <div class="post">
            <div class="post-header">
                <div class="post-icon"></div>
                <span class="post-username">Coach Thompson</span>
            </div>
            <p>Congratulations to the Del Norte High School team for an incredible win last night! Keep the spirit up for the next game!</p>
        </div>
        <div class="post">
            <div class="post-header">
                <div class="post-icon"></div>
                <span class="post-username">Team Captain</span>
            </div>
            <p>Shoutout to all the fans who showed up to support us! Let’s make it even bigger for the next home game. Go Nighthawks!</p>
        </div>
        <div class="post">
            <div class="post-header">
                <div class="post-icon"></div>
                <span class="post-username">Assistant Coach</span>
            </div>
            <p>Reminder: Practice starts at 5:30 AM tomorrow. Let's stay focused and build on our recent success.</p>
        </div>
    </div>
    <!-- Chatroom Section on the Right -->
    <div class="chatroom-container">
        <header class="chatroom-header">
            <h2>Flocker Chatroom</h2>
        </header>
        <div class="chat-area" id="chatArea">
            <!-- Messages will appear here -->
        </div>
        <form class="message-form" id="messageForm">
            <input type="text" id="messageInput" placeholder="Enter your message..." required>
            <button type="submit">Send</button>
        </form>
    </div>
</div>

<script>
    const chatArea = document.getElementById('chatArea');
    const messageForm = document.getElementById('messageForm');
    const messageInput = document.getElementById('messageInput');
    
    messageForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const messageText = messageInput.value.trim();
        if (messageText !== "") {
            const messageElement = document.createElement('p');
            messageElement.textContent = messageText;
            chatArea.appendChild(messageElement);
            messageInput.value = "";
            chatArea.scrollTop = chatArea.scrollHeight; // Auto-scroll to the newest message
        }
    });
</script>

