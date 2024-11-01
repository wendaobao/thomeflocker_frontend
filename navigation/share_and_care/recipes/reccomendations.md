---
title: Local Restaurants
layout: post
description: A list of favorite restaurants in the area where users can mark their favorites
permalink: /local-restaurants/
toc: true
comments: true
author: Jowan, Ryan, Michelle, Gabriela
---


<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        /* Basic styling for the page and heart icons */
        .restaurant-list {
            list-style: none;
            padding: 0;
        }
        .restaurant-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 10px 0;
        }
        .heart {
            font-size: 24px;
            color: grey;
            cursor: pointer;
            transition: color 0.3s;
        }
        .heart.liked {
            color: red;
        }
    </style>
</head>
<body>
    <h1>Local Restaurants</h1>
    <ul class="restaurant-list">
        <li class="restaurant-item">
            <span>Restaurant A</span>
            <span class="heart" onclick="toggleHeart(this)">♡</span>
        </li>
        <li class="restaurant-item">
            <span>Restaurant B</span>
            <span class="heart" onclick="toggleHeart(this)">♡</span>
        </li>
        <li class="restaurant-item">
            <span>Restaurant C</span>
            <span class="heart" onclick="toggleHeart(this)">♡</span>
        </li>
    </ul>

    <script>
        function toggleHeart(element) {
            element.classList.toggle('liked');
            element.textContent = element.classList.contains('liked') ? '❤️' : '♡';
            // Here you could add code to save the favorite status, e.g., using localStorage or a server request
        }
    </script>
</body>
</html>
