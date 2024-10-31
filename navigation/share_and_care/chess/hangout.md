---
layout: post
title: Chess Hangout
permalink: /chess/hangout
comments: true
---


<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Chess Hangout Zone</title>

    <!-- Bootstrap CSS for styling -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+Knujsl5/88dpz+q8MBn5E2p3zFcTtv1z5JyyprjSAz5gUm" crossorigin="anonymous">
    
    <style>
        body {
            background-color: #1b1b1b;
            color: #f0f0f0;
            font-family: 'Arial', sans-serif;
        }
        .container {
            margin-top: 30px;
        }
        .chessboard {
            display: grid;
            grid-template-columns: repeat(8, 100px); /* Larger squares */
            grid-template-rows: repeat(8, 100px);
            border: 2px solid #444;
            margin: 20px auto;
            box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
        }
        .chessboard div {
            width: 100px; /* Larger square size */
            height: 100px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 50px; /* Larger piece size */
            font-weight: bold;
            font-family: 'Segoe UI Symbol', sans-serif;
            cursor: pointer;
        }
        .orange {
            background-color: #f39c12;
        }
        .yellow {
            background-color: #f7dc6f;
        }
        .chat-container {
            display: flex;
            justify-content: space-between;
        }
        .chat-box {
            width: 30%;
            background-color: #2a2a2a;
            padding: 20px;
            border-radius: 8px;
        }
        .chat-messages {
            height: 400px;
            overflow-y: scroll;
            border: 1px solid #444;
            margin-bottom: 15px;
            padding: 10px;
            background-color: #1b1b1b;
            border-radius: 10px;
        }
        .message {
            padding: 12px;
            border-radius: 10px;
            margin: 8px 0;
            font-size: 16px;
            word-wrap: break-word;
            display: inline-block;
            max-width: 80%;
        }
        .user-message {
            background-color: #3498db;
            color: white;
            text-align: right;
            margin-left: auto;
            border-radius: 15px 15px 0 15px;
        }
        .bot-message {
            background-color: #27ae60;
            color: white;
            text-align: left;
            margin-right: auto;
            border-radius: 15px 15px 15px 0;
        }
        .bot-message::after {
            content: " 🤖";
        }
        .message-input {
            margin-top: 10px;
        }
        .send-btn {
            background-color: #444;
            color: #f0f0f0;
        }
        .send-btn:hover {
            background-color: #555;
        }
    </style>
</head>

<body>
    <div class="container">
        <h2 class="text-center">Chess Hangout Zone</h2>
        <div class="chat-container">
            <!-- Chessboard -->
            <div class="chessboard" id="chessboard"></div>

            <!-- Chat Section -->
            <div class="chat-box">
                <h4 class="text-center">Chat Room</h4>
                <div id="chatMessages" class="chat-messages"></div>

                <div class="message-input">
                    <input type="text" id="messageInput" class="form-control" placeholder="Type your message">
                    <button id="sendBtn" class="btn send-btn mt-2">Send</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js"></script>

    <!-- JS to handle chess pieces and board -->
    <script>
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
        let selectedSquare = null;

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
            boardLayout[selected.row][selected.col] = '';
            boardLayout[row][col] = piece;
            generateBoard();
        }

        generateBoard();
    </script>

    <!-- JS to handle chat and moderator bot functionality -->
    <script>
        const chatMessages = document.getElementById('chatMessages');
        const messageInput = document.getElementById('messageInput');
        const sendBtn = document.getElementById('sendBtn');

        let messages = [];

        function renderMessages() {
            chatMessages.innerHTML = '';
            messages.forEach(msg => {
                const msgElement = document.createElement('p');
                msgElement.className = `message ${msg.isBot ? 'bot-message' : 'user-message'}`;
                msgElement.textContent = msg.text;
                chatMessages.appendChild(msgElement);
                chatMessages.scrollTop = chatMessages.scrollHeight;
            });
        }

        function addMessage(text, isBot = false) {
            messages.push({ text, isBot });
            renderMessages();
        }

        function handleUserMessage() {
            const userMessage = messageInput.value.trim();
            if (userMessage) {
                addMessage(userMessage, false);
                messageInput.value = '';
                respondToUserMessage(userMessage);
            }
        }

        // Inappropriate keywords for moderation
        const inappropriateWords = ['badword1', 'badword2', 'badword3']; // Replace with actual words

        function isInappropriate(message) {
            return inappropriateWords.some(word => message.toLowerCase().includes(word));
        }

        function respondToUserMessage(userMessage) {
            if (isInappropriate(userMessage)) {
                const botResponse = "Please refrain from using inappropriate language. Let's keep the chat friendly!";
                setTimeout(() => addMessage(botResponse, true), 1000);
            } else {
                const lowerMessage = userMessage.toLowerCase();
                let botResponse;

                if (lowerMessage.includes('chess')) {
                    botResponse = "Great topic! Remember to review your strategies.";
                } else if (lowerMessage.includes('help')) {
                    botResponse = "If you need help, feel free to ask specific questions about chess!";
                } else {
                    botResponse = "Thanks for sharing! Let's keep the conversation going.";
                }

                setTimeout(() => addMessage(botResponse, true), 1000);
            }
        }

        sendBtn.addEventListener('click', handleUserMessage);

        // Optional: Automatically respond if no activity is detected
        setInterval(() => {
            if (messages.length > 0 && (Date.now() - messages[messages.length - 1].timestamp > 30000)) {
                addMessage("It's a bit quiet! What do you think about chess strategies?", true);
            }
        }, 30000);
    </script>
</body>
</html>
