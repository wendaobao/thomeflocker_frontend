---
layout: post
title: Voting for Doodles 
description: Vote for your favorite doodles 
menu: nav/doodle.html
permalink: /moderation/gallery_doodle/
author: Arshia, Prajna, Mirabelle, Alex
---

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Image Voting Page</title>
    <style>
        /* Styling for the page background and layout */
        body {
            background-color: #f2e6ff;
            font-family: Arial, sans-serif;
            color: #4d004d;
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            margin: 0;
            padding: 20px;
        }
        /* Container for each image */
        .image-container {
            border: 2px solid #a64dff;
            border-radius: 10px;
            padding: 15px;
            margin: 20px;
            background-color: #e0b3ff;
            text-align: center;
            width: 250px;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
        }
        /* Styling for images */
        .image-container img {
            max-width: 100%;
            border-radius: 10px;
        }
        /* Vote button styling */
        .vote-button {
            background-color: #d966ff;
            color: #fff;
            border: none;
            padding: 10px 15px;
            border-radius: 8px;
            margin-top: 10px;
            font-size: 1rem;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }
        /* Vote button hover effect */
        .vote-button:hover {
            background-color: #9900cc;
        }
        /* Vote count styling */
        .vote-count {
            margin-top: 10px;
            font-weight: bold;
            font-size: 1.2rem;
        }
    </style>
</head>
<body>
    <h1>Vote for Your Favorite Image!</h1>
    <!-- Example of an image container -->
    <div class="image-container">
        <img src="https://via.placeholder.com/200" alt="Sample Image 1">
        <div class="vote-count">Votes: <span id="voteCount1">0</span></div>
        <button class="vote-button" onclick="addVote('voteCount1')">Vote</button>
    </div>
    <!-- Add more images like the one above, with unique IDs -->
    <div class="image-container">
        <img src="https://via.placeholder.com/200" alt="Sample Image 2">
        <div class="vote-count">Votes: <span id="voteCount2">0</span></div>
        <button class="vote-button" onclick="addVote('voteCount2')">Vote</button>
    </div>
    <!-- JavaScript to handle vote counting -->
    <script>
        function addVote(voteId) {
            const voteElement = document.getElementById(voteId);
            let currentVotes = parseInt(voteElement.innerText);
            voteElement.innerText = currentVotes + 1;
        }
    </script>
</body>
