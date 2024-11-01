---
layout: post
title: The Hungry Games (Home)
description: Welcome to the Hungry Games! Explore our interactive "fridge," chat with others about food, and more!
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
            background-color: #f8f9fa; 
            display: flex; 
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
        }

        .image-row {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 20px;
            padding: 20px;
            border: 10px solid #1F456E;
            border-radius: 25px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2); 
            background-color: #fff7e6;
            max-width: 90%;
            margin: 20px 0;
        }

        .image-row img {
            width: 300px;
            height: 300px;
            border-radius: 20px;
            transition: transform 0.3s ease-in-out;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
            object-fit: cover;
        }

        .image-row img:hover {
            transform: scale(1.1);
        }

        .fridge {
            position: relative;
            width: 250px;
            height: 400px;
            margin: 20px;
            background-color: #1F456E;
            border: 5px solid #00796B;
            border-radius: 10px;
            overflow: hidden;
            transition: transform 0.5s ease;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        .fridge-door {
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: #B2DFDB;
            transform-origin: left;
            transition: transform 0.5s ease;
            border-radius: 10px;
        }

        .fridge-door.open {
            transform: rotateY(-150deg);
        }

        .fridge-content {
            display: none;
            padding: 10px;
            color: #333;
            text-align: center;
        }

        .fridge.open .fridge-content {
            display: block;
        }

        #itemInput {
            width: 80%;
            padding: 8px;
            margin-top: 10px;
            border: 1px solid #ddd;
            border-radius: 5px;
        }

        button {
            padding: 10px 15px;
            background-color: #00796B;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s;
            margin-top: 10px;
        }

        button:hover {
            background-color: #005b4f;
        }

        ul {
            list-style-type: none;
            padding: 0;
        }

        li {
            background-color: #e0f7fa;
            margin: 5px 0;
            padding: 8px;
            border-radius: 5px;
            transition: background-color 0.3s;
        }

        li:hover {
            background-color: #b2ebf2;
        }

        .recipe-list {
            margin-top: 20px;
            text-align: center;
        }
    </style>
</head>
<body>

    <div class="fridge-container">
        <div class="fridge" id="fridge">
            <div class="fridge-door" id="fridgeDoor"></div>
            <div class="fridge-content" id="fridgeContent">
                <p>Add ingredients here!</p>
                <ul id="fridgeItems"></ul>
                <input type="text" id="itemInput" placeholder="Add item...">
                <button onclick="addItem()">Add</button>
                <button onclick="finishAdding()">Finish Adding Items</button>
            </div>
        </div>
        <button onclick="toggleFridge()">Open/Close Fridge</button>
    </div>

    <div class="recipe-list" id="recipeList"></div>

    <div class="image-row">
        <img src="https://cdn.prod.website-files.com/56f03b1536442f6b27f0f08c/5f03324cbb2506842953d137_worlds-best-foods-pizza.jpg" alt="Pizza">
        <img src="https://www.eatingwell.com/thmb/iCdLRBC1BMcDYKRYMTyyToQ8mRs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/8401873-ad2429ae1858464a92229875c91c093d.jpg" alt="Pasta">
        <img src="https://thatdeliciousdish.com/wp-content/uploads/2020/07/Garlic-Mushroom-Noodles-Recipe-web1-1-800x840.jpg" alt="Ramen">
    </div>

    <script>
        const recipes = {
            'Pizza': ['Cheese', 'Tomato', 'Pepperoni'],
            'Pasta': ['Pasta', 'Tomato', 'Cheese', 'Basil'],
            'Ramen': ['Noodles', 'Broth', 'Egg', 'Green Onion']
        };

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
                itemInput.value = '';
            }
        }

        function finishAdding() {
            const fridgeItems = document.getElementById('fridgeItems');
            const recipeList = document.getElementById('recipeList');
            const items = Array.from(fridgeItems.children).map(li => li.textContent);

            let foundRecipes = Object.keys(recipes).filter(recipe =>
                recipes[recipe].every(ingredient => items.includes(ingredient))
            );

            recipeList.innerHTML = '<h3>Suggested Recipes:</h3>';
            if (foundRecipes.length > 0) {
                foundRecipes.forEach(recipe => {
                    recipeList.innerHTML += `<p>${recipe}</p>`;
                });
            } else {
                recipeList.innerHTML += '<p>No recipes found for the selected ingredients.</p>';
            }
        }
    </script>

</body>
</html>
