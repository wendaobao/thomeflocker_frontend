---
layout: post
title: Genres
description: Genres
permalink: /voteforthegoat/genres/
comments: true
---

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Music Genre Poll</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
            background-color: #F0F0F0;
        }
        .container {
            text-align: center;
        }
        .vinyl-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
            margin-bottom: 20px;
        }
        .vinyl-item {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .vinyl-item button {
            background-color: transparent;
            border: none;
            cursor: pointer;
            outline: none;
        }
        .vinyl-item img {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            transition: transform 0.3s;
        }
        .vinyl-item img:hover {
            transform: scale(1.1);
        }
        .vinyl-item span {
            margin-top: 8px;
            font-size: 16px;
            color: #333;
        }
        .input-container {
            margin-bottom: 20px;
        }
        .input-container input {
            padding: 8px;
            font-size: 16px;
            border: 1px solid #ccc;
            border-radius: 5px;
            width: 50px;
            text-align: center;
        }
        .button-container button {
            padding: 10px 20px;
            font-size: 16px;
            background-color: #6C63FF;
            color: #fff;
            border: none;
            border-radius: 10px;
            cursor: pointer;
            transition: background-color 0.3s, box-shadow 0.3s;
        }
        .button-container button:hover {
            background-color: #554FD6;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="vinyl-grid">
            <div class="vinyl-item">
                <button onclick="vote('Rock')">
                    <img src="/flocker_frontend/images/whitevinyl.png" alt="Rock Vinyl">
                </button>
                <span>Rock</span>
            </div>
            <div class="vinyl-item">
                <button onclick="vote('Pop')">
                    <img src="/flocker_frontend/images/whitevinyl.png" alt="Pop Vinyl">
                </button>
                <span>Pop</span>
            </div>
            <div class="vinyl-item">
                <button onclick="vote('Hip-Hop')">
                    <img src="/flocker_frontend/images/whitevinyl.png" alt="Hip-Hop Vinyl">
                </button>
                <span>Hip-Hop</span>
            </div>
            <div class="vinyl-item">
                <button onclick="vote('Jazz')">
                    <img src="/flocker_frontend/images/whitevinyl.png" alt="Jazz Vinyl">
                </button>
                <span>Jazz</span>
            </div>
            <div class="vinyl-item">
                <button onclick="vote('Classical')">
                    <img src="/flocker_frontend/images/whitevinyl.png" alt="Classical Vinyl">
                </button>
                <span>Classical</span>
            </div>
            <div class="vinyl-item">
                <button onclick="vote('Electronic')">
                    <img src="/flocker_frontend/images/whitevinyl.png" alt="Electronic Vinyl">
                </button>
                <span>Electronic</span>
            </div>
        </div>
        <div class="input-container">
            <label for="grade">What grade are you in?</label>
            <input type="text" id="grade" name="grade" placeholder="Enter grade">
        </div>
        <label for="genre">Pick Your Favorite Genre Out of These!</label>
        <div class="button-container">
            <button onclick="showReport()">See Your Music Report And Recommendations!</button>
        </div>
    </div>

    <script>
        function vote(genre) {
            alert(genre + " selected!");
        }

        function showReport() {
            alert("Music report coming soon!");
        }
    </script>
</body>
</html>
