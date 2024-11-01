---
layout: post 
title: Create and Compete - Culinary
search_exclude: true
permalink: /create_and_compete/culinary
menu: nav/create_and_compete.html
author: Daksha, Zach, Alex, Darsh
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
        background-color: #28A745;
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
    <input type="text" id="ingredients" placeholder="e.g., chicken, mushrooms, tomatoes">
    <button type="submit">Find Recipes</button>
</form>

<button id="randomRecipeButton">Generate Random Recipe</button>
<button id="customRecipeButton">Generate 5 Random Ingredients</button>

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
        },
        {
            name: "Spaghetti Carbonara",
            ingredients: ["pasta", "cheese", "bacon", "eggs"],
            description: "Creamy pasta with cheese, bacon, and eggs.",
            cookingTime: "15 minutes",
            cookingProcess: "1. Cook pasta. 2. Fry bacon until crispy. 3. Mix pasta with bacon, cheese, and whisked eggs. Serve hot."
        },
        {
            name: "Garlic Butter Shrimp",
            ingredients: ["shrimp", "garlic", "butter", "parsley"],
            description: "Tender shrimp cooked in a garlic butter sauce with fresh parsley.",
            cookingTime: "10 minutes",
            cookingProcess: "1. Melt butter in a pan. 2. Add garlic and shrimp, cook until pink. 3. Garnish with parsley and serve."
        },
        {
            name: "Avocado Toast",
            ingredients: ["bread", "avocado", "lemon", "pepper"],
            description: "Quick and healthy avocado toast with lemon and pepper.",
            cookingTime: "5 minutes",
            cookingProcess: "1. Mash avocado with lemon juice. 2. Spread on toasted bread. 3. Sprinkle with pepper and serve."
        },
        {
            name: "Fruit Salad",
            ingredients: ["strawberries", "blueberries", "grapes", "mint"],
            description: "A refreshing mix of fresh berries and grapes with mint.",
            cookingTime: "5 minutes",
            cookingProcess: "1. Slice strawberries and mix with blueberries and grapes. 2. Garnish with mint and serve."
        },
        {
            name: "Chicken Tacos",
            ingredients: ["chicken", "tortillas", "onion", "cilantro"],
            description: "Tasty chicken tacos with fresh cilantro and onion.",
            cookingTime: "20 minutes",
            cookingProcess: "1. Cook chicken with spices. 2. Assemble in tortillas with chopped onion and cilantro. Serve."
        },
        {
            name: "Vegetable Stir-Fry",
            ingredients: ["bell peppers", "broccoli", "carrots", "soy sauce"],
            description: "Quick vegetable stir-fry with a soy sauce glaze.",
            cookingTime: "15 minutes",
            cookingProcess: "1. Chop vegetables. 2. Stir-fry in a hot pan with soy sauce. Serve hot."
        },
        {
            name: "Banana Pancakes",
            ingredients: ["banana", "eggs", "cinnamon"],
            description: "Fluffy banana pancakes with a hint of cinnamon.",
            cookingTime: "10 minutes",
            cookingProcess: "1. Mash banana and mix with eggs and cinnamon. 2. Pour batter onto a hot griddle. Cook until golden brown on both sides. Serve."
        },
        {
            name: "Mango Smoothie",
            ingredients: ["mango", "yogurt", "honey"],
            description: "Refreshing mango smoothie with yogurt and honey.",
            cookingTime: "5 minutes",
            cookingProcess: "1. Blend mango, yogurt, and honey until smooth. 2. Pour into a glass and enjoy."
        },
        {
            name: "Lemon Herb Chicken",
            ingredients: ["chicken", "lemon", "thyme", "garlic"],
            description: "Juicy lemon herb chicken with garlic and thyme.",
            cookingTime: "25 minutes",
            cookingProcess: "1. Marinate chicken with lemon, thyme, and garlic. 2. Bake at 400°F until cooked through. Serve."
        },
        {
            name: "Cucumber Salad",
            ingredients: ["cucumber", "dill", "yogurt", "lemon"],
            description: "Refreshing cucumber salad with dill and a creamy yogurt dressing.",
            cookingTime: "5 minutes",
            cookingProcess: "1. Slice cucumber and mix with yogurt, dill, and lemon juice. 2. Toss well and serve."
        },
        {
    name: "Beef Stir-Fry",
    ingredients: ["beef", "broccoli", "soy sauce", "ginger"],
    description: "Quick beef stir-fry with broccoli and a ginger-soy sauce.",
    cookingTime: "20 minutes",
    cookingProcess: "1. Slice beef and marinate with soy sauce and ginger. 2. Stir-fry with broccoli. 3. Serve with rice."
},
{
    name: "Vegetable Quesadilla",
    ingredients: ["tortillas", "cheese", "bell peppers", "onion"],
    description: "Cheesy quesadilla filled with bell peppers and onions.",
    cookingTime: "15 minutes",
    cookingProcess: "1. Sauté bell peppers and onion. 2. Place on a tortilla with cheese. 3. Cook on a skillet until crispy."
},
{
    name: "Salmon with Quinoa",
    ingredients: ["salmon", "quinoa", "lemon", "parsley"],
    description: "Healthy salmon served on a bed of quinoa with lemon and parsley.",
    cookingTime: "25 minutes",
    cookingProcess: "1. Cook quinoa. 2. Bake salmon with lemon. 3. Serve salmon over quinoa and garnish with parsley."
},
{
    name: "Chickpea Curry",
    ingredients: ["chickpeas", "coconut milk", "curry powder", "spinach"],
    description: "Creamy chickpea curry with spinach.",
    cookingTime: "30 minutes",
    cookingProcess: "1. Sauté chickpeas with curry powder. 2. Add coconut milk and spinach. 3. Simmer and serve."
},
{
    name: "Zucchini Noodles",
    ingredients: ["zucchini", "tomato sauce", "basil"],
    description: "A healthy alternative to pasta using zucchini noodles and tomato sauce.",
    cookingTime: "15 minutes",
    cookingProcess: "1. Spiralize zucchini. 2. Sauté with tomato sauce and basil. 3. Serve hot."
},
{
    name: "Stuffed Bell Peppers",
    ingredients: ["bell peppers", "rice", "ground beef", "tomato sauce"],
    description: "Bell peppers stuffed with a savory mixture of rice and ground beef.",
    cookingTime: "40 minutes",
    cookingProcess: "1. Cook rice and mix with beef and tomato sauce. 2. Stuff bell peppers and bake. 3. Serve warm."
},
{
    name: "Spinach Feta Omelette",
    ingredients: ["eggs", "spinach", "cheese"],
    description: "Fluffy omelette filled with spinach and feta cheese.",
    cookingTime: "10 minutes",
    cookingProcess: "1. Whisk eggs and pour into a hot pan. 2. Add spinach and cheese. 3. Cook until set and serve."
},
{
    name: "Pasta Primavera",
    ingredients: ["pasta", "bell peppers", "zucchini", "olive oil"],
    description: "Light pasta dish with fresh vegetables.",
    cookingTime: "20 minutes",
    cookingProcess: "1. Cook pasta. 2. Sauté bell peppers and zucchini in olive oil. 3. Toss with pasta and serve."
},
{
    name: "Sweet Potato Fries",
    ingredients: ["sweet potatoes", "olive oil", "paprika"],
    description: "Crispy sweet potato fries seasoned with paprika.",
    cookingTime: "30 minutes",
    cookingProcess: "1. Cut sweet potatoes into fries. 2. Toss with olive oil and paprika. 3. Bake until crispy."
},
{
    name: "Mushroom Risotto",
    ingredients: ["rice", "mushrooms", "vegetable broth", "parmesan cheese"],
    description: "Creamy risotto with mushrooms and parmesan cheese.",
    cookingTime: "35 minutes",
    cookingProcess: "1. Sauté mushrooms. 2. Add rice and gradually pour in broth. 3. Stir until creamy and serve."
},
{
    name: "Garlic Lemon Shrimp",
    ingredients: ["shrimp", "garlic", "lemon", "parsley"],
    description: "Shrimp sautéed in garlic and lemon sauce.",
    cookingTime: "10 minutes",
    cookingProcess: "1. Sauté garlic in olive oil. 2. Add shrimp and cook until pink. 3. Add lemon juice and parsley, then serve."
},
{
    name: "Creamy Tomato Soup",
    ingredients: ["tomatoes", "cream", "basil"],
    description: "Rich and creamy tomato soup garnished with basil.",
    cookingTime: "25 minutes",
    cookingProcess: "1. Cook tomatoes and blend until smooth. 2. Stir in cream and heat through. 3. Serve with fresh basil."
},
{
    name: "Cabbage Rolls",
    ingredients: ["cabbage", "rice", "ground pork", "tomato sauce"],
    description: "Savory cabbage rolls filled with rice and ground pork.",
    cookingTime: "60 minutes",
    cookingProcess: "1. Blanch cabbage leaves. 2. Mix pork and rice, roll in leaves. 3. Bake with tomato sauce."
},
{
    name: "Eggplant Parmesan",
    ingredients: ["eggplant", "cheese", "tomato sauce", "basil"],
    description: "Layers of eggplant, cheese, and tomato sauce baked to perfection.",
    cookingTime: "45 minutes",
    cookingProcess: "1. Slice and roast eggplant. 2. Layer with cheese and sauce in a dish. 3. Bake until bubbly."
},
{
    name: "Quinoa Salad",
    ingredients: ["quinoa", "cucumber", "tomatoes", "parsley"],
    description: "A refreshing salad with quinoa, cucumber, and tomatoes.",
    cookingTime: "15 minutes",
    cookingProcess: "1. Cook quinoa. 2. Mix with diced cucumber, tomatoes, and parsley. 3. Dress with olive oil and serve."
},
{
    name: "Peanut Butter Banana Smoothie",
    ingredients: ["banana", "milk", "peanut butter", "honey"],
    description: "A creamy smoothie made with banana and peanut butter.",
    cookingTime: "5 minutes",
    cookingProcess: "1. Blend banana, milk, peanut butter, and honey until smooth. 2. Pour and enjoy."
},
{
    name: "Vegetable Fried Rice",
    ingredients: ["rice", "peas", "carrots", "soy sauce"],
    description: "Fried rice loaded with vegetables and soy sauce.",
    cookingTime: "15 minutes",
    cookingProcess: "1. Cook rice. 2. Sauté peas and carrots. 3. Add rice and soy sauce, stir-fry until heated."
},
{
    name: "Chicken Fajitas",
    ingredients: ["chicken", "bell peppers", "onion", "tortillas"],
    description: "Sizzling chicken fajitas with bell peppers and onion.",
    cookingTime: "25 minutes",
    cookingProcess: "1. Cook chicken with spices. 2. Add peppers and onion, cook until tender. 3. Serve in tortillas."
},
{
    name: "Broccoli Cheddar Soup",
    ingredients: ["broccoli", "cheese", "cream"],
    description: "Creamy soup filled with broccoli and cheddar cheese.",
    cookingTime: "30 minutes",
    cookingProcess: "1. Cook broccoli until tender. 2. Blend with cream and cheese until smooth. 3. Heat through and serve."
},
{
    name: "Avocado Chickpea Salad",
    ingredients: ["chickpeas", "avocado", "onion", "cilantro"],
    description: "A refreshing salad with chickpeas, avocado, and onion.",
    cookingTime: "10 minutes",
    cookingProcess: "1. Mash avocado. 2. Mix with chickpeas, diced onion, and cilantro. 3. Serve chilled."
},
{
    name: "Herb Roasted Potatoes",
    ingredients: ["potatoes", "olive oil", "rosemary"],
    description: "Crispy roasted potatoes with rosemary and olive oil.",
    cookingTime: "30 minutes",
    cookingProcess: "1. Cut potatoes and toss with olive oil and rosemary. 2. Roast until golden brown. 3. Serve hot."
},
{
    name: "Tuna Salad Sandwich",
    ingredients: ["tuna", "bread", "mayonnaise", "celery"],
    description: "Simple tuna salad sandwich with celery and mayonnaise.",
    cookingTime: "10 minutes",
    cookingProcess: "1. Mix tuna with mayonnaise and chopped celery. 2. Spread on bread. 3. Serve with lettuce."
},
{
    name: "Oven-Baked Tofu",
    ingredients: ["tofu", "soy sauce", "garlic", "ginger"],
    description: "Crispy oven-baked tofu marinated in soy sauce.",
    cookingTime: "25 minutes",
    cookingProcess: "1. Marinate tofu with soy sauce, garlic, and ginger. 2. Bake until golden. 3. Serve with rice."
},
{
    name: "Carrot Ginger Soup",
    ingredients: ["carrots", "ginger", "vegetable broth", "cream"],
    description: "A warm soup of carrots and ginger with a creamy finish.",
    cookingTime: "30 minutes",
    cookingProcess: "1. Sauté carrots and ginger. 2. Add broth and simmer. 3. Blend until smooth and stir in cream."
},
{
    name: "Almond Flour Pancakes",
    ingredients: ["almond flour", "eggs", "milk", "honey"],
    description: "Fluffy pancakes made with almond flour and sweetened with honey.",
    cookingTime: "20 minutes",
    cookingProcess: "1. Mix almond flour, eggs, milk, and honey. 2. Cook on a skillet until golden. 3. Serve with syrup."
}
    ];

    function getRandomIngredients() {
        const ingredients = [
            'Chicken', 'Broccoli', 'Rice', 'Tomatoes', 'Pasta', 'Beans', 'Corn', 'Avocado', 'Mushrooms', 'Spinach',
            'Peppers', 'Carrots', 'Lentils', 'Quinoa', 'Eggplant', 'Zucchini', 'Cabbage', 'Cauliflower', 'Potatoes', 'Onion', 
            'Garlic', 'Ginger', 'Beef', 'Pork', 'Salmon', 'Tuna', 'Shrimp', 'Tofu', 'Chickpeas', 'Black Beans',
            'Asparagus', 'Green Beans', 'Sweet Potatoes', 'Bell Peppers', 'Kale', 'Arugula', 'Olives', 'Cheese', 'Bread', 'Tortillas', 
            'Yogurt', 'Milk', 'Cream', 'Butter', 'Almonds', 'Cashews', 'Peanuts', 'Pumpkin Seeds', 'Flax Seeds', 'Sunflower Seeds', 
            'Basil', 'Thyme', 'Rosemary', 'Oregano', 'Sage', 'Chives', 'Mint', 'Parsley', 'Cilantro', 'Tarragon',
            'Caraway', 'Cumin', 'Paprika', 'Chili Powder', 'Turmeric', 'Curry Powder', 'Cinnamon', 'Nutmeg', 'Cloves', 'Vanilla', 
            'Honey', 'Maple Syrup', 'Brown Sugar', 'Granulated Sugar', 'Baking Powder', 'Baking Soda', 'Yeast', 'Flour', 
            'Cornstarch', 'Rice Vinegar', 'Balsamic Vinegar', 'Apple Cider Vinegar', 'Soy Sauce', 'Olive Oil', 'Vegetable Oil', 
            'Sesame Oil', 'Butter', 'Cream Cheese', 'Sour Cream', 'Pesto', 'Chili Sauce', 'Mustard', 'Ketchup', 'Mayonnaise', 
            'Pickles', 'Relish', 'Nuts', 'Dried Fruit', 'Seeds', 'Coconut Milk', 'Vegetable Broth', 'Chicken Broth', 'Beef Broth', 
            'Tomato Sauce', 'Pasta Sauce', 'Salsa', 'Taco Seasoning', 'Coconut Flakes', 'Chocolate Chips', 'Marshmallows'
        ];

        const randomIngredients = [];
        for (let i = 0; i < 5; i++) {
            const randomIndex = Math.floor(Math.random() * ingredients.length);
            randomIngredients.push(ingredients[randomIndex]);
        }
        return randomIngredients;
    }

    document.getElementById('customRecipeButton').addEventListener('click', () => {
        const randomIngredients = getRandomIngredients();
        document.getElementById('randomIngredients').innerHTML = randomIngredients.map(ingredient => `<li>${ingredient}</li>`).join('');
    });

    document.getElementById('ingredientForm').addEventListener('submit', (event) => {
        event.preventDefault();
        const inputIngredients = document.getElementById('ingredients').value.split(',').map(ingredient => ingredient.trim().toLowerCase());
        const filteredRecipes = recipes.filter(recipe => recipe.ingredients.some(ingredient => inputIngredients.includes(ingredient)));
        
        if (filteredRecipes.length > 0) {
            const recipeResults = filteredRecipes.map(recipe => `
                <div class="recipe">
                    <h3>${recipe.name}</h3>
                    <p>${recipe.description}</p>
                    <p><strong>Cooking Time:</strong> ${recipe.cookingTime}</p>
                    <p><strong>Ingredients:</strong> ${recipe.ingredients.join(', ')}</p>
                    <p><strong>Cooking Process:</strong> ${recipe.cookingProcess}</p>
                </div>
            `).join('');
            document.getElementById('recipeResults').innerHTML = recipeResults;
        } else {
            document.getElementById('recipeResults').innerHTML = '<p>No recipes found with the provided ingredients.</p>';
        }
    });

    document.getElementById('randomRecipeButton').addEventListener('click', () => {
        const randomRecipe = recipes[Math.floor(Math.random() * recipes.length)];
        const recipeResult = `
            <div class="recipe">
                <h3>${randomRecipe.name}</h3>
                <p>${randomRecipe.description}</p>
                <p><strong>Cooking Time:</strong> ${randomRecipe.cookingTime}</p>
                <p><strong>Ingredients:</strong> ${randomRecipe.ingredients.join(', ')}</p>
                <p><strong>Cooking Process:</strong> ${randomRecipe.cookingProcess}</p>
            </div>
        `;
        document.getElementById('recipeResults').innerHTML = recipeResult;
    });
</script>
