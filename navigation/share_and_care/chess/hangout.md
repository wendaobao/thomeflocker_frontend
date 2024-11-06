---
layout: post
title: Chess Hangout
permalink: /chess/hangout
comments: true
authors: Ahaan, Xavier, Spencer, Vasanth
---

<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Chess Hangout Zone - Chess Game with Chat</title>
    <style>
      /* General Styles */
      body {
        background-color: #f7dc6f;
        color: #f0f0f0;
        font-family: Arial, sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        min-height: 100vh;
      }
      .container {
        text-align: center;
        margin-top: 20px;
      }
      h2 {
        color: #333;
      }
      .game-mode {
        margin-bottom: 20px;
      }
      .btn {
        padding: 10px 20px;
        margin: 5px;
        cursor: pointer;
        background-color: #444;
        color: #f0f0f0;
        border: none;
        border-radius: 5px;
      }
      .btn:hover {
        background-color: #555;
      }
      .chessboard {
        display: grid;
        grid-template-columns: repeat(8, 60px);
        grid-template-rows: repeat(8, 60px);
        border: 2px solid #444;
        margin: 20px auto;
        box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
      }
      .chessboard div {
        width: 60px;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 30px;
        font-weight: bold;
        cursor: pointer;
      }
      .yellow {
        background-color: #f7dc6f;
      }
      .orange {
        background-color: #f39c12;
      }
      .chat-container {
        display: flex;
        justify-content: space-between;
        width: 100%;
        max-width: 1200px;
      }
      .chat-box {
        width: 40%;
        background-color: #1a1a1a;
        padding: 20px;
        border-radius: 8px;
        border: 2px solid #444;
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
      }
      .chat-messages {
        height: 300px;
        overflow-y: auto;
        background-color: #1b1b1b;
        padding: 10px;
        border-radius: 10px;
        border: 2px solid #444;
      }
      .message {
        margin: 5px 0;
        padding: 5px;
        font-size: 14px;
        color: #f0f0f0;
      }
      .message.user-message {
        background-color: #444;
        border-radius: 15px;
        text-align: right;
      }
      .message.bot-message {
        background-color: #b29800;
        border-radius: 15px;
        text-align: left;
      }
      .channel-select {
        margin: 10px 0;
      }
    </style>
  </head>
  <body>
    <div class="container">
   
      <div class="game-mode">
        <button onclick="startGame('human')" class="btn">
          Play Against Human
        </button>
        <button onclick="startGame('bot')" class="btn">Play Against Bot</button>
      </div>

      <div class="chat-container">
        <div class="chessboard" id="chessboard"></div>
        <div class="chat-box">
          <h4>Chess-Themed Chat Room</h4>
          <div class="channel-select">
            <label for="channel">Channel:</label>
            <select id="channel" onchange="changeChannel()">
              <option value="general">General</option>
              <option value="chess-tips">Chess Tips</option>
              <option value="game-updates">Game Updates</option>
            </select>
          </div>
          <div id="chatMessages" class="chat-messages"></div>
          <div class="message-input">
            <input
              type="text"
              id="messageInput"
              placeholder="Type your message"
            />
            <button id="sendBtn" class="btn">Send</button>
          </div>
        </div>
      </div>
    </div>

    <script>
      const pieces = {
        R: "♖",
        N: "♘",
        B: "♗",
        Q: "♕",
        K: "♔",
        P: "♙",
        r: "♜",
        n: "♞",
        b: "♝",
        q: "♛",
        k: "♚",
        p: "♟",
      };
      const boardLayout = [
        ["r", "n", "b", "q", "k", "b", "n", "r"],
        ["p", "p", "p", "p", "p", "p", "p", "p"],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["P", "P", "P", "P", "P", "P", "P", "P"],
        ["R", "N", "B", "Q", "K", "B", "N", "R"],
      ];

      let selectedSquare = null;
      let gameMode = "human";
      const chatMessages = document.getElementById("chatMessages");
      const chessboard = document.getElementById("chessboard");
      let currentChannel = "general";

      function drawBoard() {
        chessboard.innerHTML = "";
        boardLayout.forEach((row, rowIndex) => {
          row.forEach((piece, colIndex) => {
            const square = document.createElement("div");
            square.classList.add((rowIndex + colIndex) % 2 === 0 ? "yellow" : "orange");
            square.textContent = pieces[piece] || "";
            square.addEventListener("click", () => selectSquare(rowIndex, colIndex));
            chessboard.appendChild(square);
          });
        });
      }

      function startGame(mode) {
        gameMode = mode;
        drawBoard();
        addMessage("bot", `Starting game against ${mode === "human" ? "Human" : "Bot"}!`);
      }

      function selectSquare(row, col) {
        const piece = boardLayout[row][col];
        if (selectedSquare) {
          movePiece(row, col);
          selectedSquare = null;
        } else if (piece) {
          selectedSquare = { row, col, piece };
        }
      }

      function movePiece(newRow, newCol) {
        const { row, col, piece } = selectedSquare;
        if (isMoveValid(row, col, newRow, newCol)) {
          boardLayout[newRow][newCol] = piece;
          boardLayout[row][col] = "";
          drawBoard();
          addMessage("bot", `Moved ${piece} to (${newRow}, ${newCol})`);
          if (gameMode === "bot") botMove();
        }
      }

      function isMoveValid(fromRow, fromCol, toRow, toCol) {
        // Placeholder for more advanced validation
        return boardLayout[toRow][toCol] === ""; // Basic rule: allow moves to empty squares only
      }

      function botMove() {
        // Placeholder: Bot will make a random move
        addMessage("bot", "Bot made a move.");
      }

      function addMessage(sender, message) {
        const messageDiv = document.createElement("div");
        messageDiv.className = `message ${sender === "user" ? "user-message" : "bot-message"}`;
        messageDiv.textContent = message;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
      }

      function changeChannel() {
        currentChannel = document.getElementById("channel").value;
        addMessage("bot", `Switched to channel: ${currentChannel}`);
      }

      document.getElementById("sendBtn").addEventListener("click", () => {
        const messageInput = document.getElementById("messageInput");
        const message = messageInput.value.trim();
        if (message) {
          addMessage("user", `[${currentChannel}] ${message}`);
          messageInput.value = "";
          if (gameMode === "bot") addMessage("bot", "I'm thinking...");
        }
      });

      drawBoard();
    </script>
  </body>
</html>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Group Posts</title>
    <style>
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
            background-color: #2c3e50;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            color: #ecf0f1;
        }
        .form-container label {
            margin-bottom: 5px;
        }
        .form-container input, .form-container textarea, .form-container select {
            margin-bottom: 10px;
            padding: 10px;
            border-radius: 5px;
            border: none;
            width: 100%;
        }
        .form-container button {
            padding: 10px;
            border-radius: 5px;
            border: none;
            background-color: #34495e;
            color: #ecf0f1;
            cursor: pointer;
        }
        .post-item {
            background-color: #34495e;
            padding: 15px;
            margin-bottom: 10px;
            border-radius: 5px;
            color: #ecf0f1;
        }
    </style>
</head>
<body>

<div class="container">
    <div class="form-container">
        <h2>Add New Post</h2>
        <form id="postForm">
            <label for="title">Title:</label>
            <input type="text" id="title" name="title" required>
            <label for="content">Content:</label>
            <textarea id="content" name="content" required></textarea>
            <label for="group_id">Group:</label>
            <select id="group_id" name="group_id" required>
                <option value="">Select a group</option>
            </select>
            <button type="submit">Add Post</button>
        </form>
    </div>
</div>

<div id="count"></div>
<div id="details"></div>

<script type="module">
    import { pythonURI, fetchOptions } from '{{ site.baseurl }}/assets/js/api/config.js';

    // URL to fetch all posts
     const pythonURI = "https://flocker.nighthawkcodingsociety.com";
    const postApiUrl = `${pythonURI}/api/post`;

    // Fetch groups for dropdown selection
    async function fetchGroups() {
        try {
            const response = await fetch(`${pythonURI}/api/group`, fetchOptions);
            if (!response.ok) {
                throw new Error('Failed to fetch groups: ' + response.statusText);
            }
            const groups = await response.json();
            const groupSelect = document.getElementById('group_id');
            
            // Clear the group dropdown
            groupSelect.innerHTML = '<option value="">Select a group</option>';

            groups.forEach(group => {
                const option = document.createElement('option');
                option.value = group.id;
                option.textContent = group.name;
                groupSelect.appendChild(option);
            });

            // Add event listener for group selection
            groupSelect.addEventListener('change', (event) => {
                const selectedGroupId = event.target.value;
                if (selectedGroupId) {
                    fetchGroupPosts(selectedGroupId);
                } else {
                    document.getElementById('details').innerHTML = ''; // Clear posts if no group selected
                }
            });
        } catch (error) {
            console.error('Error fetching groups:', error);
        }
    }

    // Function to fetch and display posts of a selected group
    async function fetchGroupPosts(groupId) {
        try {
            const response = await fetch(`${postApiUrl}?group_id=${groupId}`, fetchOptions);

            if (!response.ok) {
                throw new Error('Failed to fetch posts for selected group: ' + response.statusText);
            }

            const postData = await response.json();

            // Count the total posts and display it
            const postCount = postData.length || 0;
            document.getElementById('count').innerHTML = `<h2>Post Count: ${postCount}</h2>`;

            // Display posts in the details div
            const detailsDiv = document.getElementById('details');
            detailsDiv.innerHTML = ''; // Clear previous posts

            // Iterate over postData and create HTML elements for each item
            postData.forEach(postItem => {
                const postElement = document.createElement('div');
                postElement.className = 'post-item';
                postElement.innerHTML = `
                    <h3>${postItem.title}</h3>
                    <p><strong>Group:</strong> ${postItem.group_name}</p>
                    <p><strong>User:</strong> ${postItem.user_name}</p>
                    <p>${postItem.content}</p>
                `;
                detailsDiv.appendChild(postElement);
            });

        } catch (error) {
            console.error('Error fetching group posts:', error);
        }
    }

    // Handle form submission
    document.getElementById('postForm').addEventListener('submit', async function(event) {
        event.preventDefault(); // Prevent default form submission

        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;
        const group_id = document.getElementById('group_id').value;

        const postData = {
            title: title,
            content: content,
            group_id: group_id
        };

        try {
            const response = await fetch(postApiUrl, {
                ...fetchOptions,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(postData)
            });

            if (!response.ok) {
                throw new Error('Failed to add post: ' + response.statusText);
            }

            alert('Post added successfully!');
            document.getElementById('postForm').reset();

            // Refresh posts for the selected group after adding a new post
            if (group_id) {
                fetchGroupPosts(group_id);
            }
        } catch (error) {
            console.error('Error adding post:', error);
            alert('Error adding post: ' + error.message);
        }
    });

    // Fetch groups when the page loads
    fetchGroups();
</script>

</body>
</html>



