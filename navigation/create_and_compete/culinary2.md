---
layout: post 
title: Create and Compete - Culinary
search_exclude: true
permalink: /create_and_compete/culinarypage
menu: nav/create_and_compete.html
author: Alex, Darsh, Zach, Daksha
---
<style>
    body {
        font-family: Arial, sans-serif;
        background-color: #000;
        color: #fff;
        margin: 0;
        padding: 20px;
        line-height: 1.6;
    }
    h1, h2 {
        color: #ddd;
    }
    form {
        margin: 20px 0;
    }
    input[type="text"] {
        width: calc(100% - 150px);
        padding: 10px;
        border: 1px solid #555;
        border-radius: 5px;
        background-color: #333;
        color: #fff;
    }
    button {
        padding: 10px;
        border: none;
        border-radius: 5px;
        background-color: #28a745;
        color: white;
        cursor: pointer;
        transition: background-color 0.3s;
    }
    button:hover {
        background-color: #218838;
    }
    .recipe-category {
        margin-top: 40px;
    }
    .recipe {
        border: 1px solid #555;
        border-radius: 5px;
        padding: 15px;
        margin: 10px 0;
        background-color: #222;
    }
    .suggestions {
        margin: 20px 0;
        padding: 10px;
        background-color: #444;
        border-radius: 5px;
    }
</style>

<h1>Welcome to the Recipe Finder!</h1>
<p>Enter your available ingredients below to receive a variety of recipe ideas tailored to what you have on hand.</p>

<h2>Ingredient Input</h2>
<form id="ingredientForm">
    <input type="text" id="ingredients" placeholder="e.g., chicken, broccoli, rice">
    <button type="submit">Find Recipes</button>
</form>

<button id="randomRecipeButton">Generate Random Ingredient & Recipe</button>
<button id="customRecipeButton">Generate 5 Random Ingredients for Your Recipe</button>

<div class="suggestions">
    <h2>Random Ingredients Suggestions:</h2>
    <ul id="randomIngredients"></ul>
</div>

<h2>Recipes</h2>
<div id="recipeResults"></div>

<script>
    const recipes = [
        { 
            name: "Chicken Stir-Fry", 
            ingredients: ["chicken", "broccoli", "soy sauce"], 
            description: "Quick and healthy chicken stir-fry with vegetables.", 
            cookingTime: "20 minutes", 
            cookingProcess: "1. Cut chicken and vegetables. 2. Stir-fry in a pan with soy sauce. 3. Serve hot." 
        },
        { 
            name: "Vegan Tacos", 
            ingredients: ["beans", "corn", "avocado"], 
            description: "Flavorful tacos filled with beans, corn, and avocado.", 
            cookingTime: "25 minutes", 
            cookingProcess: "1. Mash beans and mix with corn. 2. Fill tortillas and top with avocado. 3. Serve fresh." 
        },
        { 
            name: "Stuffed Mushrooms", 
            ingredients: ["mushrooms", "cheese", "herbs"], 
            description: "Mushrooms filled with a savory mixture of cheese and herbs.", 
            cookingTime: "30 minutes", 
            cookingProcess: "1. Remove stems from mushrooms. 2. Mix cheese and herbs, fill mushrooms. 3. Bake at 350°F for 20 mins." 
        },
        { 
            name: "Bruschetta", 
            ingredients: ["tomatoes", "basil", "bread"], 
            description: "A delicious Italian starter with tomatoes and basil.", 
            cookingTime: "15 minutes", 
            cookingProcess: "1. Toast bread. 2. Mix tomatoes and basil. 3. Top bread with mixture and serve." 
        },
        { 
            name: "Chocolate Mousse", 
            ingredients: ["chocolate", "cream", "sugar"], 
            description: "A rich and creamy chocolate dessert.", 
            cookingTime: "20 minutes + chilling", 
            cookingProcess: "1. Melt chocolate. 2. Whip cream with sugar. 3. Fold chocolate into cream and chill before serving." 
        }
    ];

    function getRandomIngredients() {
        const ingredients = [
            'Chicken', 'Broccoli', 'Rice', 'Tomatoes', 'Pasta', 'Beans', 'Corn', 
            'Avocado', 'Mushrooms', 'Spinach', 'Peppers', 'Carrots', 'Lentils', 
            'Quinoa', 'Eggplant', 'Zucchini', 'Cabbage', 'Cauliflower', 'Potatoes'
        ];
        const randomItems = [];
        for (let i = 0; i < 5; i++) {
            const randomIndex = Math.floor(Math.random() * ingredients.length);
            randomItems.push(ingredients[randomIndex]);
        }
        document.getElementById('randomIngredients').innerHTML = randomItems.map(item => `<li>${item}</li>`).join('');
    }

    function findRecipes(ingredient) {
        const results = recipes.filter(recipe => recipe.ingredients.includes(ingredient.toLowerCase()));
        const resultsContainer = document.getElementById('recipeResults');
        resultsContainer.innerHTML = ''; // Clear previous results
        if (results.length > 0) {
            results.forEach(recipe => {
                const recipeDiv = document.createElement('div');
                recipeDiv.classList.add('recipe');
                recipeDiv.innerHTML = `<strong>${recipe.name}</strong><br>
                    <em>Description:</em> ${recipe.description}<br>
                    <em>Cooking Time:</em> ${recipe.cookingTime}<br>
                    <em>Ingredients:</em> ${recipe.ingredients.join(', ')}<br>
                    <em>Cooking Process:</em> ${recipe.cookingProcess}`;
                resultsContainer.appendChild(recipeDiv);
            });
        } else {
            resultsContainer.innerHTML = `<p>No recipes found with the ingredient "${ingredient}".</p>`;
        }
    }

    document.getElementById('ingredientForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const input = document.getElementById('ingredients').value;
        findRecipes(input);
    });

    document.getElementById('randomRecipeButton').addEventListener('click', function() {
        const randomRecipe = recipes[Math.floor(Math.random() * recipes.length)];
        alert(`Random Recipe: ${randomRecipe.name}\nPrimary Ingredient: ${randomRecipe.ingredients[0]}`);
    });

    document.getElementById('customRecipeButton').addEventListener('click', function() {
        const randomIngredients = [];
        const ingredients = [
            'Chicken', 'Broccoli', 'Rice', 'Tomatoes', 'Pasta', 'Beans', 
            'Corn', 'Avocado', 'Mushrooms', 'Spinach', 'Peppers', 'Carrots', 
            'Lentils', 'Quinoa', 'Eggplant', 'Zucchini', 'Cabbage', 
            'Cauliflower', 'Potatoes'
        ];
        for (let i = 0; i < 5; i++) {
            const randomIndex = Math.floor(Math.random() * ingredients.length);
            randomIngredients.push(ingredients[randomIndex]);
        }
        const recipePrompt = `Use these ingredients to create your own recipe:\n${randomIngredients.join(', ')}`;
        alert(recipePrompt);
    });

    window.onload = getRandomIngredients;
</script>
