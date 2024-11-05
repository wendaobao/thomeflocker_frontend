---
permalink: /voteforthegoat/genres/
menu: nav/vote_for_the_goat.html
layout: post
title: Genres Of Music
description: Vote for your favorite genre of music here!
Authors: Hannah, Rowan, Gaheera, Rhea
---

<html lang="en" >
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
            background: pink !important;
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
            background: transparent !important;
        }
        .vinyl-item button {
            border: none;
            cursor: pointer;
            outline: none;
            background: transparent !important;
        }
        .vinyl-item img {
            background-color: #F0F0F0;
            width: 100px;
            height: 100px;
            border-radius: 50%;
            transition: transform 0.3s;
        }
        .vinyl-item img:hover {
            transform: scale(1.1);
        }
        .vinyl-item span {
            margin-top: 8px;
            font-size: 16px;
            color: #FFC0CB;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="vinyl-grid">
            <div class="vinyl-item">
                <button onclick="vote('Rock')">
                    <img src="/flocker_frontend/images/vinyl2.png" alt="Rock Vinyl">
                </button>
                <span>Rock</span>
            </div>
            <div class="vinyl-item">
                <button onclick="vote('Pop')">
                    <img src="/flocker_frontend/images/vinyl2.png" alt="Pop Vinyl">
                </button>
                <span>Pop</span>
            </div>
            <div class="vinyl-item">
                <button onclick="vote('Hip-Hop')">
                    <img src="/flocker_frontend/images/vinyl2.png" alt="Hip-Hop Vinyl">
                </button>
                <span>Hip-Hop</span>
            </div>
            <div class="vinyl-item">
                <button onclick="vote('Jazz')">
                    <img src="/flocker_frontend/images/vinyl2.png" alt="Jazz Vinyl">
                </button>
                <span>Jazz</span>
            </div>
            <div class="vinyl-item">
                <button onclick="vote('Classical')">
                    <img src="/flocker_frontend/images/vinyl2.png" alt="Classical Vinyl">
                </button>
                <span>Classical</span>
            </div>
            <div class="vinyl-item">
                <button onclick="vote('Electronic')">
                    <img src="/flocker_frontend/images/vinyl2.png" alt="Electronic Vinyl">
                </button>
                <span>Electronic</span>
            </div>
        </div>
        <label for="genre">Pick Your Favorite Genre Out of These!</label>
    </div>

    <script>
        function vote(genre) {
            alert(genre + " selected!");
            // Additional logic to display genre-related channels can go here
        }
    </script>
</body>
</html>

<!-- <body style="background-color: #FF474C;"> -->
