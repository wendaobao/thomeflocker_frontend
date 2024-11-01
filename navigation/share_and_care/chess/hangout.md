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
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        /* Styles */
        body {
            background-color: #1B1B1B;
            color: #F0F0F0;
            font-family: Arial, sans-serif;
        }
        .container {
            margin-top: 30px;
        }
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
            font-family: 'Segoe UI Symbol', sans-serif;
            cursor: pointer;
            color: #3E3E3E; /* Darker color for better contrast */
        }
        .orange { background-color: #F39C12; }
        .yellow { background-color: #F7DC6F; }
        .chat-container {
            display: flex;
            justify-content: space-between;
        }
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
        // Variables
        const pieces = {
            'R': '&#9814;', 'N': '&#9816;', 'B': '&#9815;', 'Q': '&#9813;', 'K': '&#9812;', 'P': '&#9817;',
            'r': '&#9820;', 'n': '&#9822;', 'b': '&#9821;', 'q': '&#9819;', 'k': '&#9818;', 'p': '&#9823;'
        };
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
        let gameMode = 'human'; // Default to human
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
                setTimeout(botMove, 1000);
            }
        }

        function botMove() {
            // Random move for simplicity
            let moved = false;
            while (!moved) {
                const row = Math.floor(Math.random() * 8);
                const col = Math.floor(Math.random() * 8);
                if (boardLayout[row][col] && boardLayout[row][col].toLowerCase() === boardLayout[row][col]) {
                    const targetRow = Math.floor(Math.random() * 8);
                    const targetCol = Math.floor(Math.random() * 8);
                    if (!boardLayout[targetRow][targetCol] || boardLayout[targetRow][targetCol].toUpperCase() === boardLayout[targetRow][targetCol]) {
                        movePiece({ row, col }, targetRow, targetCol);
                        sendBotMessage();
                        moved = true;
                    }
                }
            }
        }

        function sendBotMessage() {
            const message = botMessages[Math.floor(Math.random() * botMessages.length)];
            addMessage(message, 'bot-message');
        }

        function displayTurnPopup() {
            turnPopup.innerText = `${turn.charAt(0).toUpperCase() + turn.slice(1)}'s Turn`;
            turnPopup.style.display = 'block';
            setTimeout(() => turnPopup.style.display = 'none', 1500);
        }

        function addMessage(text, className) {
            const message = document.createElement('div');
            message.className = `message ${className}`;
            message.innerText = text;
            chatMessages.appendChild(message);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }

        sendBtn.addEventListener('click', () => {
            const message = messageInput.value.trim();
            if (message) {
                addMessage(message, 'user-message');
                messageInput.value = '';
            }
        });

        // Initial board setup
        generateBoard();
    </script>
</body>
</html>

