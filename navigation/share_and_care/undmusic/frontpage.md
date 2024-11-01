---
layout: post
title: Underground Music Frontpage
description: The Frontpage for the Underground Music Chatroom
hide: true
permalink: /UndgdMusic/
---

<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
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
</head>
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
        <input type="text" id="message" placeholder="Type a message..." required>
        <button type="submit">Send</button>
      </form>
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
    // Sample function to mimic adding messages (can be replaced with actual chat functionality)
    document.getElementById('chat-form').addEventListener('submit', function(event) {
      event.preventDefault();
      const username = document.getElementById('username').value;
      const message = document.getElementById('message').value;
      const timestamp = new Date().toLocaleTimeString();

      const messageElement = document.createElement('p');
      messageElement.innerHTML = `<span class="username">${username}</span>: ${message} <span class="timestamp">[${timestamp}]</span>`;
      document.getElementById('messages').appendChild(messageElement);

      // Clear message input after sending
      document.getElementById('message').value = '';
    });
  </script>
</body>
</html>