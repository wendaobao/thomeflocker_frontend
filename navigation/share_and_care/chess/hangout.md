---
layout: post
title: Chess Hangout
permalink: /chess/hangout
comments: true
authors: Ahaan, Xavier, Spencer, Vasanth
---





<!DOCTYPE html>
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
      <h2>Chess Hangout Zone</h2>
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