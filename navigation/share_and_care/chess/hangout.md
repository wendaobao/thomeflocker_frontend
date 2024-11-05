---
layout: post
title: Chess Hangout
permalink: /chess/hangout
comments: true
authors: Ahaan, Xavier, Spencer, Vasanth
---





<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chess Hangout Zone - Chess Game with Chat</title>
    <style>
        /* Styles */
        body {
            background-color: #1B1B1B;
            color: #F0F0F0;
            font-family: Arial, sans-serif;
        }
        .container { margin-top: 30px; }
        .chessboard {
            display: grid;
            grid-template-columns: repeat(8, 100px);
            grid-template-rows: repeat(8, 100px);
            border: 2px solid #444;
            margin: 20px auto;
            box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
        }
        .chessboard div {
            width: 100px;
            height: 100px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 50px;
            font-weight: bold;
            cursor: pointer;
            color: #3E3E3E;
        }
        .orange { background-color: #F39C12; }
        .yellow { background-color: #F7DC6F; }
        .chat-container { display: flex; justify-content: space-between; }
        .chat-box {
            width: 40%;
            background-color: #1A1A1A;
            padding: 20px;
            border-radius: 8px;
            border: 2px solid #444;
            box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
        }
        .chat-box h4 { color: #F7DC6F; font-weight: bold; text-align: center; margin-bottom: 15px; }
        .chat-messages {
            height: 400px;
            overflow-y: scroll;
            background-color: #1B1B1B;
            border: 2px solid #444;
            margin-bottom: 15px;
            padding: 10px;
            border-radius: 10px;
        }
        .message { padding: 10px 15px; border-radius: 10px; margin: 8px 0; font-size: 16px; display: inline-block; max-width: 80%; color: #F0F0F0; border: 1px solid #444; box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3); }
        .user-message { text-align: right; margin-left: auto; border-radius: 15px 15px 0 15px; }
        .bot-message { background-color: #B29800; text-align: left; margin-right: auto; border-radius: 15px 15px 15px 0; }
        .message-input { display: flex; gap: 5px; }
        .message-input input { flex-grow: 1; background-color: #2A2A2A; border: 1px solid #555; color: #F0F0F0; }
        .send-btn { background-color: #444; color: #F0F0F0; }
        .send-btn:hover { background-color: #555; }
        .captured-pieces { text-align: center; margin-top: 20px; }
        .turn-popup { position: fixed; top: 20px; left: 50%; transform: translateX(-50%); padding: 10px 20px; background-color: #444; color: #F0F0F0; border: 2px solid #F39C12; border-radius: 5px; font-size: 18px; font-weight: bold; display: none; }
        .game-mode { text-align: center; margin-top: 20px; }
    </style>
</head>
<body>
    <div class="container">
        <h2 class="text-center">Chess Hangout Zone</h2>
        <div class="game-mode">
            <button onclick="startGame('human')" class="btn btn-primary">Play Against Human</button>
            <button onclick="startGame('bot')" class="btn btn-secondary">Play Against Bot</button>
        </div>
        <div class="captured-pieces">
            <h4>White's Captured Pieces</h4>
            <div id="whiteCaptured"></div>
            <h4>Black's Captured Pieces</h4>
            <div id="blackCaptured"></div>
        </div>
        <div class="chat-container">
            <div class="chessboard" id="chessboard"></div>
            <div class="chat-box">
                <h4>Chess-Themed Chat Room</h4>
                <div id="chatMessages" class="chat-messages"></div>
                <div class="message-input">
                    <input type="text" id="messageInput" class="form-control" placeholder="Type your message">
                    <button id="sendBtn" class="btn send-btn">Send</button>
                </div>
            </div>
        </div>
        <div class="turn-popup" id="turnPopup">White's Turn</div>
    </div>

    <script>
        const pieces = { 'R': '&#9814;', 'N': '&#9816;', 'B': '&#9815;', 'Q': '&#9813;', 'K': '&#9812;', 'P': '&#9817;', 'r': '&#9820;', 'n': '&#9822;', 'b': '&#9821;', 'q': '&#9819;', 'k': '&#9818;', 'p': '&#9823;' };
        const boardLayout = [
            ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
            ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
            ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R']
        ];
        const chessboard = document.getElementById('chessboard');
        const turnPopup = document.getElementById('turnPopup');
        const whiteCaptured = document.getElementById('whiteCaptured');
        const blackCaptured = document.getElementById('blackCaptured');
        const chatMessages = document.getElementById('chatMessages');
        const messageInput = document.getElementById('messageInput');
        const sendBtn = document.getElementById('sendBtn');
        let selectedSquare = null;
        let turn = 'white';
        let gameMode = 'human';
        let botMessages = ["Nice move!", "You're doing great!", "Keep it up!", "This is a tough game!", "Impressive!"];
        
        function startGame(mode) {
            gameMode = mode;
            generateBoard();
            displayTurnPopup();
            addMessage(`You are playing against ${mode === 'bot' ? 'the bot!' : 'another player!'}`, 'bot-message');
        }
        
        function generateBoard() {
            chessboard.innerHTML = '';
            let isYellow = true;
            for (let row = 0; row < 8; row++) {
                for (let col = 0; col < 8; col++) {
                    const square = document.createElement('div');
                    square.className = isYellow ? 'yellow' : 'orange';
                    square.dataset.row = row;
                    square.dataset.col = col;
                    if (boardLayout[row][col]) {
                        square.innerHTML = pieces[boardLayout[row][col]];
                    }
                    square.addEventListener('click', () => handleSquareClick(row, col, square));
                    chessboard.appendChild(square);
                    isYellow = !isYellow;
                }
                isYellow = !isYellow;
            }
        }

        function handleSquareClick(row, col, square) {
            if (selectedSquare) {
                movePiece(selectedSquare, row, col);
                selectedSquare = null;
            } else if (boardLayout[row][col]) {
                selectedSquare = { row, col, square };
            }
        }

        function movePiece(selected, row, col) {
            const piece = boardLayout[selected.row][selected.col];
            const target = boardLayout[row][col];
            if (target) {
                if (turn === 'white') {
                    blackCaptured.innerHTML += pieces[target];
                } else {
                    whiteCaptured.innerHTML += pieces[target];
                }
            }
            boardLayout[selected.row][selected.col] = '';
            boardLayout[row][col] = piece;
            turn = turn === 'white' ? 'black' : 'white';
            generateBoard();
            displayTurnPopup();
            if (gameMode === 'bot' && turn === 'black') {
                setTimeout(botMove, 5000); // 5 seconds delay for bot move
            }
        }

        function botMove() {
            let validMoves = [];
            for (let row = 0; row < 8; row++) {
                for (let col = 0; col < 8; col++) {
                    const piece = boardLayout[row][col];
                    if (piece && piece === piece.toLowerCase()) {
                        validMoves.push(...getLegalMoves(piece, row, col));
                    }
                }
            }
            if (validMoves.length > 0) {
                const move = validMoves[Math.floor(Math.random() * validMoves.length)];
                movePiece({ row: move.startRow, col: move.startCol }, move.endRow, move.endCol);
                sendBotMessage();
            }
        }

        function getLegalMoves(piece, startRow, startCol) {
            const moves = [];
            // Add move logic here
            return moves.filter(move => isLegalMove(move));
        }

        function isLegalMove(move) {
            return true; // Add legality check
        }

        function sendBotMessage() {
            addMessage(botMessages[Math.floor(Math.random() * botMessages.length)], 'bot-message');
        }

        function addMessage(text, type) {
            const message = document.createElement('div');
            message.className = `message ${type}`;
            message.textContent = text;
            chatMessages.appendChild(message);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }

        sendBtn.addEventListener('click', () => {
            const text = messageInput.value.trim();
            if (text) {
                addMessage(text, 'user-message');
                messageInput.value = '';
            }
        });

        function displayTurnPopup() {
            turnPopup.textContent = turn === 'white' ? "White's Turn" : "Black's Turn";
            turnPopup.style.display = 'block';
            setTimeout(() => turnPopup.style.display = 'none', 2000);
        }

        generateBoard();
    </script>
</body>
</html>

<script type="module">
    import { pythonURI, fetchOptions } from '{{ site.baseurl }}/assets/js/api/config.js';

    // URL to fetch all posts
    const postApiUrl = `${pythonURI}/api/post`;

    async function fetchData() {
        try {
            // Fetch all posts from the backend
            const postApiResponse = await fetch(postApiUrl, fetchOptions);

            if (!postApiResponse.ok) {
                throw new Error('Failed to fetch post API links: ' + postApiResponse.statusText);
            }

            // Parse the JSON data from the response
            const postData = await postApiResponse.json();

            // Count the total posts and display it
            const postCount = postData.length || 0;
            document.getElementById('count').innerHTML = `<h2>Count: ${postCount}</h2>`;

            // Get the details div
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
            console.error('Error fetching data:', error);
        }
    }

    // Call the fetchData function to load all posts
    fetchData();
</script>




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
</style>
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

<script type="module">
    // Import server URI and standard fetch options
    import { pythonURI, fetchOptions } from '{{ site.baseurl }}/assets/js/api/config.js';

    // Fetch groups for dropdown selection
    async function fetchGroups() {
        try {
            const response = await fetch(`${pythonURI}/api/group`, fetchOptions);
            if (!response.ok) {
                throw new Error('Failed to fetch groups: ' + response.statusText);
            }
            const groups = await response.json();
            const groupSelect = document.getElementById('group_id');
            groups.forEach(group => {
                const option = document.createElement('option');
                option.value = group.id;
                option.textContent = group.name;
                groupSelect.appendChild(option);
            });
        } catch (error) {
            console.error('Error fetching groups:', error);
        }
    }

    // Handle form submission
    document.getElementById('postForm').addEventListener('submit', async function(event) {
        // Prevent default from submission
        event.preventDefault();

        // Extract data from form
        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;
        const group_id = document.getElementById('group_id').value;

        // Create API payload
        const postData = {
            title: title,
            content: content,
            group_id: group_id
        };

        // Trap errors
        try {
            // Send POST request to backend, purpose is to write to database
            const response = await fetch(`${pythonURI}/api/post`, {
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

            // Succesfull post
            const result = await response.json();
            alert('Post added successfully!');
            document.getElementById('postForm').reset();
        } catch (error) {
            // Present alert on error from backend
            console.error('Error adding post:', error);
            alert('Error adding post: ' + error.message);
        }
    });

    // Fetch groups when the page loads
    fetchGroups();
</script>

