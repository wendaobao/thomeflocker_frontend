---
layout: post
title: The Hungry Games - home page
description: Dive into the world of scrumptious foods and get to cooking today!
permalink: share_and_care/hungry_games
comments: true 
---

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: Arial, sans-serif;
        }

        .image-row {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 20px; /* Adds spacing between images */
            padding: 20px;
            border: 10px solid #FFD700; /* Larger gold border around the row */
            border-radius: 25px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2); /* Adds a more pronounced shadow */
            background-color: #fff7e6; /* Soft background color */
            max-width: 90%;
            margin: auto;
        }

        .image-row img {
            width: 300px; /* All images are the same width */
            height: 300px; /* All images are the same height */
            border-radius: 20px;
            transition: transform 0.3s ease-in-out;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2); /* Individual image shadow */
            object-fit: cover; /* Ensures images fill their box without distortion */
        }

        .image-row img:hover {
            transform: scale(1.1); /* Slight zoom effect on hover */
        }

        /* Fridge styles */
        .fridge {
            position: relative;
            width: 200px;
            height: 300px;
            margin: 20px auto;
            background-color: #E0F7FA;
            border: 5px solid #00796B;
            border-radius: 10px;
            overflow: hidden;
            transition: transform 0.5s ease;
        }

        .fridge-door {
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: #B2DFDB;
            transform-origin: left;
            transition: transform 0.5s ease;
        }

        .fridge-door.open {
            transform: rotateY(-150deg);
        }

        .fridge-content {
            display: none;
            padding: 10px;
        }

        .fridge.open .fridge-content {
            display: block;
        }
    </style>
</head>
<body>

    <div class="image-row">
        <img src="https://cdn.prod.website-files.com/56f03b1536442f6b27f0f08c/5f03324cbb2506842953d137_worlds-best-foods-pizza.jpg" alt="Pizza">
        <img src="https://www.eatingwell.com/thmb/iCdLRBC1BMcDYKRYMTyyToQ8mRs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/8401873-ad2429ae1858464a92229875c91c093d.jpg" alt="Pasta">
        <img src="https://thatdeliciousdish.com/wp-content/uploads/2020/07/Garlic-Mushroom-Noodles-Recipe-web1-1-800x840.jpg" alt="Ramen">
    </div>

    <div class="fridge" id="fridge">
        <div class="fridge-door" id="fridgeDoor"></div>
        <div class="fridge-content" id="fridgeContent">
            <p>Contents:</p>
            <ul id="fridgeItems"></ul>
            <input type="text" id="itemInput" placeholder="Add item...">
            <button onclick="addItem()">Add</button>
        </div>
    </div>

    <button onclick="toggleFridge()">Open/Close Fridge</button>

    <script>
        function toggleFridge() {
            const fridge = document.getElementById('fridge');
            const fridgeDoor = document.getElementById('fridgeDoor');
            fridge.classList.toggle('open');
            fridgeDoor.classList.toggle('open');
        }

        function addItem() {
            const itemInput = document.getElementById('itemInput');
            const fridgeItems = document.getElementById('fridgeItems');
            if (itemInput.value) {
                const li = document.createElement('li');
                li.textContent = itemInput.value;
                fridgeItems.appendChild(li);
                itemInput.value = ''; // Clear input after adding
            }
        }
    </script>

</body>
</html>
