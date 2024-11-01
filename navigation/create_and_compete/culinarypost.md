---
layout: post 
title: Create and Compete - Culinary
search_exclude: true
permalink: /create_and_compete/culinaryposts
author: Daksha, Alex, Darsh, Zach
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
    input[type="text"], textarea {
        width: calc(100% - 150px);
        padding: 10px;
        border: 1px solid #555;
        border-radius: 5px;
        background-color: #333;
        color: #fff;
        margin-bottom: 10px;
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
    .recipe {
        border: 1px solid #555;
        border-radius: 5px;
        padding: 15px;
        margin: 10px 0;
        background-color: #222;
    }
</style>

<h1>Welcome to the Shared Recipe Space!</h1>
<p>Share your own recipes and explore what others have made.</p>

<h2>Post Your Recipe</h2>
<form id="recipeForm">
    <input type="text" id="recipeName" placeholder="Recipe Name" required>
    <textarea id="recipeDescription" rows="4" placeholder="Recipe Description" required></textarea>
    <input type="text" id="recipeIngredients" placeholder="Ingredients (comma-separated)" required>
    <input type="text" id="recipeInstructions" placeholder="Instructions" required>
    <button type="submit">Post Recipe</button>
</form>

<h2>Shared Recipes</h2>
<div id="sharedRecipes"></div>

<script>
    document.getElementById('recipeForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('recipeName').value;
        const description = document.getElementById('recipeDescription').value;
        const ingredients = document.getElementById('recipeIngredients').value.split(',').map(item => item.trim());
        const instructions = document.getElementById('recipeInstructions').value;

        const recipeDiv = document.createElement('div');
        recipeDiv.classList.add('recipe');
        recipeDiv.innerHTML = `
            <strong>${name}</strong><br>
            <em>Description:</em> ${description}<br>
            <em>Ingredients:</em> ${ingredients.join(', ')}<br>
            <em>Instructions:</em> ${instructions}
        `;

        document.getElementById('sharedRecipes').appendChild(recipeDiv);

        // Clear the form
        document.getElementById('recipeForm').reset();
    });
</script>

