---
layout: post
title: Genres
description: Genres
permalink: /voteforthegoat/genres/
comments: true
---
<html lang=“en”>
<head>
    <meta charset=“UTF-8">
    <meta name=“viewport” content=“width=device-width, initial-scale=1.0">
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
        .vinyl-item img {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            cursor: pointer;
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
        .button-container {
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
    <div class=“container”>
        <div class=“vinyl-grid”>
            <div class=“vinyl-item”>
                <img src=“/flocker_frontend/images/vinyl.jpg” alt=“Rock Vinyl” onclick=“alert(‘Rock selected!’)“>
                <span>Rock</span>
            </div>
            <div class=“vinyl-item”>
                <img src=“/flocker_frontend/images/vinyl.jpg” alt=“Pop Vinyl” onclick=“alert(‘Pop selected!’)“>
                <span>Pop</span>
            </div>
            <div class=“vinyl-item”>
                <img src=“/flocker_frontend/images/vinyl.jpg” alt=“Hip-Hop Vinyl” onclick=“alert(‘Hip-Hop selected!’)“>
                <span>Hip-Hop</span>
            </div>
            <div class=“vinyl-item”>
                <img src=“/flocker_frontend/images/vinyl.jpg” alt=“Jazz Vinyl” onclick=“alert(‘Jazz selected!’)“>
                <span>Jazz</span>
            </div>
            <div class=“vinyl-item”>
                <img src=“/flocker_frontend/images/vinyl.jpg” alt=“Classical Vinyl” onclick=“alert(‘Classical selected!’)“>
                <span>Classical</span>
            </div>
            <div class=“vinyl-item”>
                <img src=“/flocker_frontend/images/vinyl.jpg” alt=“Electronic Vinyl” onclick=“alert(‘Electronic selected!’)“>
                <span>Electronic</span>
            </div>
        </div>
        <div class=“input-container”>
            <label for=“grade”>What grade are you in?</label>
            <input type=“text” id=“grade” name=“grade” placeholder=“Enter grade”>
        </div>
        <label for=“genre”>Click on one vinyl to select your favorite genre</label>
        <div class=“button-container”>
            <button onclick=“alert(‘Music report coming soon!’)“>See Your Music Report and Recommendations!</button>
        </div>
    </div>
</body>
</html>
<body style=“background-color: pink !important;“>