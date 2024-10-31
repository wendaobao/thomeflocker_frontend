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
            grid-template-columns: repeat(8, 80px);
            grid-template-rows: repeat(8, 80px);
            border: 2px solid #444;
            margin: 20px auto;
            box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
        }
        .chessboard div {
            width: 80px;
            height: 80px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 40px;
            cursor: pointer;
        }
        .green {
            background-color: #769656;
        }
        .white {
            background-color: #eeeed2;
        }
        .chat-container {
            display: flex;
            justify-content: space-between;
        }
        .chat-box {
            width: 30%;
            background-color: #222;
            padding: 20px;
            border-radius: 8px;
        }
        .chat-messages {
            height: 400px;
            overflow-y: scroll;
            border: 1px solid #444;
            margin-bottom: 15px;
            padding: 10px;
            background-color: #111;
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
            <div class="chessboard" id="chessboard">
                <!-- Generate chessboard squares dynamically -->
            </div>

            <!-- Chat Section -->
            <div class="chat-box">
                <h4>Chat Room</h4>
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
            'R': '&#9814;', // White Rook
            'N': '&#9816;', // White Knight
            'B': '&#9815;', // White Bishop
            'Q': '&#9813;', // White Queen
            'K': '&#9812;', // White King
            'P': '&#9817;', // White Pawn
            'r': '&#9820;', // Black Rook
            'n': '&#9822;', // Black Knight
            'b': '&#9821;', // Black Bishop
            'q': '&#9819;', // Black Queen
            'k': '&#9818;', // Black King
            'p': '&#9823;'  // Black Pawn
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

        // Create chessboard squares
        function generateBoard() {
            chessboard.innerHTML = '';
            let isWhite = true;
            for (let row = 0; row < 8; row++) {
                for (let col = 0; col < 8; col++) {
                    const square = document.createElement('div');
                    square.className = isWhite ? 'white' : 'green';
                    square.dataset.row = row;
                    square.dataset.col = col;

                    if (boardLayout[row][col]) {
                        square.innerHTML = pieces[boardLayout[row][col]];
                    }

                    square.addEventListener('click', () => handleSquareClick(row, col, square));
                    chessboard.appendChild(square);
                    isWhite = !isWhite;
                }
                isWhite = !isWhite;
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
            generateBoard(); // Re-render the board
        }

        generateBoard();

    </script>

    <!-- JS to handle chat functionality -->
    <script>
        const chatMessages = document.getElementById('chatMessages');
        const messageInput = document.getElementById('messageInput');
        const sendBtn = document.getElementById('sendBtn');

        let messages = [];

        function renderMessages() {
            chatMessages.innerHTML = '';
            messages.forEach(msg => {
                const msgElement = document.createElement('p');
                msgElement.textContent = msg;
                chatMessages.appendChild(msgElement);
            });
        }

        sendBtn.addEventListener('click', () => {
            const newMessage = messageInput.value.trim();
            if (newMessage) {
                messages.push(newMessage);
                messageInput.value = '';
                renderMessages();
            }
        });

        setInterval(() => {
            // Polling for new messages can go here
        }, 3000);
    </script>
</body>

</html>
