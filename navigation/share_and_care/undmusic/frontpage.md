---
layout: page
title: Underground Music
description: Share music with others!
permalink: /undgdmusic/
---

<table>
    <tr>
        <td><a href="{{site.baseurl}}/undgdmusic/moderation">Moderation</a></td>  
    </tr>
</table>

  <title>Underground Rapper Chatroom</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      font-family: Arial, sans-serif;
      background-color: #1b1b1b;
      color: #f0f0f0;
      display: flex;
      flex-direction: column;
      align-items: center;
      min-height: 100vh;
    }
    header {
      text-align: center;
      padding: 20px;
      background-color: #2a2a2a;
      width: 100%;
      border-bottom: 4px solid #f2b600;
    }
    header h1 {
      font-size: 2.5rem;
      color: #f2b600;
    }
    header p {
      margin-top: 10px;
      font-size: 1.2rem;
      color: #aaa;
    }
    main {
      display: flex;
      gap: 20px;
      max-width: 1000px;
      width: 90%;
      margin-top: 20px;
    }
    #chatroom, #artist-discovery {
      padding: 15px;
      border: 2px solid #f2b600;
      border-radius: 8px;
      width: 100%;
      background-color: #2a2a2a;
    }
    #chatroom {
      flex: 2;
    }
    #artist-discovery {
      flex: 1;
    }
    #messages {
      background-color: #333;
      padding: 10px;
      border-radius: 8px;
      max-height: 400px;
      overflow-y: auto;
      margin-bottom: 10px;
    }
    #messages p {
      margin-bottom: 8px;
      padding: 5px;
      border-radius: 4px;
      background-color: #444;
      color: #fff;
      font-size: 0.9rem;
    }
    #messages p .username {
      font-weight: bold;
      color: #f2b600;
    }
    #messages p .timestamp {
      font-size: 0.8rem;
      color: #bbb;
      float: right;
    }
    #chat-form {
      display: flex;
      gap: 10px;
      align-items: center;
    }
    #chat-form input[type="text"] {
      flex: 1;
      padding: 10px;
      border: none;
      border-radius: 4px;
      background-color: #444;
      color: #f0f0f0;
      font-size: 1rem;
    }
    #chat-form button {
      padding: 10px 15px;
      border: none;
      border-radius: 4px;
      background-color: #f2b600;
      color: #1b1b1b;
      cursor: pointer;
      font-weight: bold;
      font-size: 1rem;
    }
    #clear-chat {
      padding: 8px;
      margin-top: 10px;
      border: none;
      border-radius: 4px;
      background-color: #f44336;
      color: #fff;
      cursor: pointer;
      font-size: 0.9rem;
    }
    #char-count {
      font-size: 0.8rem;
      color: #888;
      margin-left: 10px;
    }
    #artist-discovery h2 {
      margin-bottom: 10px;
      color: #f2b600;
    }
    #artist-discovery ul {
      list-style: none;
      margin-top: 10px;
    }
    #artist-discovery li {
      margin-bottom: 8px;
      font-size: 1.1rem;
    }
    #artist-discovery a {
      color: #f2b600;
      text-decoration: none;
      transition: color 0.2s;
    }
    #artist-discovery a:hover {
      color: #fff;
    }
    #artist-discovery .artist-info {
      font-size: 0.85rem;
      color: #aaa;
    }
    footer {
      margin-top: 20px;
      text-align: center;
      padding: 15px;
      background-color: #2a2a2a;
      width: 100%;
    }
    footer p {
      font-size: 0.9rem;
      color: #888;
    }
    footer a {
      color: #f2b600;
      text-decoration: none;
    }
    /* Scrollbar Styling */
    #messages::-webkit-scrollbar {
      width: 8px;
    }
    #messages::-webkit-scrollbar-thumb {
      background-color: #555;
      border-radius: 4px;
    }
  </style>
<body>
  <header>
    <h1>Underground Rapper Chatroom</h1>
    <p>Connect and discuss your favorite underground artists with fewer than 1 million monthly listeners.</p>
  </header>

  <main>
    <section id="chatroom">
      <h2>Live Chat</h2>
      <div id="messages">
        <!-- Messages will appear here -->
        <p><span class="username">User123</span>: Love the new drop from Artist A! <span class="timestamp">[10:24 PM]</span></p>
        <p><span class="username">HipHopFan42</span>: Totally, their flow has improved so much! <span class="timestamp">[10:25 PM]</span></p>
      </div>
      <form id="chat-form">
        <input type="text" id="username" placeholder="Your Name" required>
        <input type="text" id="message" placeholder="Type a message..." maxlength="200" required>
        <button type="submit">Send</button>
        <span id="char-count">0/200</span>
      </form>
      <button id="clear-chat">Clear Chat</button>
    </section>
    <section id="artist-discovery">
      <h2>Discover Artists</h2>
      <ul>
        <li><a href="#">Artist 1</a><br><span class="artist-info">Top Song: "Track A" | Monthly Listeners: 800k</span></li>
        <li><a href="#">Artist 2</a><br><span class="artist-info">Top Song: "Track B" | Monthly Listeners: 500k</span></li>
        <li><a href="#">Artist 3</a><br><span class="artist-info">Top Song: "Track C" | Monthly Listeners: 300k</span></li>
        <!-- Add more artists here -->
      </ul>
    </section>
  </main>

  <footer>
    <p>&copy; 2024 Underground Rapper Chatroom | <a href="#">Privacy Policy</a></p>
  </footer>

  <script>
    // Scroll to the latest message
    function scrollToLatestMessage() {
      const messages = document.getElementById('messages');
      messages.scrollTop = messages.scrollHeight;
    }

    // Add a new message to the chat
    document.getElementById('chat-form').addEventListener('submit', function(event) {
      event.preventDefault();
      const usernameInput = document.getElementById('username');
      const messageInput = document.getElementById('message');
      const timestamp = new Date().toLocaleTimeString();

      const messageElement = document.createElement('p');
      messageElement.innerHTML = `<span class="username">${usernameInput.value}</span>: ${messageInput.value} <span class="timestamp">[${timestamp}]</span>`;
      document.getElementById('messages').appendChild(messageElement);

      // Auto-scroll to the latest message
      scrollToLatestMessage();

      // Clear message input and update character count
      messageInput.value = '';
      document.getElementById('char-count').textContent = '0/200';
    });

    // Character counter for message input
    document.getElementById('message').addEventListener('input', function() {
      const charCount = this.value.length;
      document.getElementById('char-count').textContent = `${charCount}/200`;
    });

    // Clear chat history
    document.getElementById('clear-chat').addEventListener('click', function() {
      document.getElementById('messages').innerHTML = '';
    });
  </script>
</body>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User List</title>
    <style>
        /* Optional: Basic styling */
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }
        #user-list {
            margin-top: 20px;
        }
        #user-list li {
            list-style-type: none; /* Removes bullets from the list */
            margin: 5px 0; /* Space between list items */
        }
    </style>
</head>

<body>
    <h1>User List</h1>
    <button id="load-users" onclick="fetchUsers()">Load Users</button>
    <ul id="user-list"></ul>
    <script>
        async function fetchUsers() {
            try {
                const response = await fetch('http://127.0.0.1:8887'); // Update with your backend URL
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const users = await response.json();
                const userList = document.getElementById('user-list');
                userList.innerHTML = ''; // Clear any existing list items
                users.forEach(user => {
                    const listItem = document.createElement('li');
                    listItem.textContent = `${user.name} (${user.role})`; // Adjust according to your user object structure
                    userList.appendChild(listItem);
                });
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        }
    </script>
</body>
</html>

