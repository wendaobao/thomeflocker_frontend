---
layout: post 
title: Create and Compete - Culinary
search_exclude: true
permalink: /create_and_compete/culinaryposts
author: Daksha, Alex, Darsh, Zach
---

<style>
    body {
        font-family: 'Helvetica Neue', Arial, sans-serif;
        background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
        background-image: url('data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z" fill="%23ffffff" fill-opacity="0.1" fill-rule="evenodd"/%3E%3C/svg%3E');
        color: #333;
        margin: 0;
        padding: 20px;
        line-height: 1.6;
        min-height: 100vh;
    }

    h1, h2 {
        color: #2c3e50;
        text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
        margin-bottom: 1em;
    }

    form {
        margin: 20px 0;
        background: rgba(255, 255, 255, 0.9);
        padding: 25px;
        border-radius: 15px;
        box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        backdrop-filter: blur(5px);
    }

    input[type="text"] {
        width: calc(100% - 150px);
        padding: 12px 15px;
        border: 2px solid #e0e0e0;
        border-radius: 8px;
        background-color: white;
        color: #333;
        font-size: 16px;
        transition: all 0.3s ease;
    }

    input[type="text"]:focus {
        border-color: #3498db;
        box-shadow: 0 0 8px rgba(52,152,219,0.3);
        outline: none;
    }

    button {
        position: relative;
        padding: 15px 30px;
        border: none;
        border-radius: 12px;
        background: linear-gradient(145deg, #1a1a1a, #2d2d2d);
        color: #fff;
        font-weight: 600;
        cursor: pointer;
        text-transform: uppercase;
        letter-spacing: 2px;
        font-size: 0.9em;
        overflow: hidden;
        transition: all 0.3s ease;
        box-shadow: 
            0 5px 15px rgba(0, 0, 0, 0.3),
            inset 0 -2px 5px rgba(0,0,0,0.3),
            inset 0 2px 5px rgba(255,255,255,0.1);
        margin: 10px;
    }

    button:hover {
        transform: translateY(-3px) scale(1.02);
        background: linear-gradient(145deg, #2d2d2d, #1a1a1a);
        box-shadow: 
            0 8px 20px rgba(0, 0, 0, 0.4),
            inset 0 -2px 5px rgba(0,0,0,0.3),
            inset 0 2px 5px rgba(255,255,255,0.1);
    }

    button:active {
        transform: translateY(2px);
        box-shadow: 
            0 2px 10px rgba(0, 0, 0, 0.3),
            inset 0 -1px 3px rgba(0,0,0,0.3),
            inset 0 1px 3px rgba(255,255,255,0.1);
    }

    button::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(
            120deg,
            transparent,
            rgba(255, 255, 255, 0.1),
            transparent
        );
        transition: 0.5s;
    }

    button:hover::before {
        left: 100%;
    }

    #ingredientForm button {
        background: linear-gradient(145deg, #1f2f38, #2c3e50);
        border: 1px solid #34495e;
        box-shadow: 
            0 5px 15px rgba(0, 0, 0, 0.3),
            inset 0 -2px 5px rgba(0,0,0,0.3),
            inset 0 2px 5px rgba(255,255,255,0.1);
    }

    #ingredientForm button:hover {
        background: linear-gradient(145deg, #2c3e50, #1f2f38);
        box-shadow: 
            0 8px 20px rgba(0, 0, 0, 0.4),
            inset 0 -2px 5px rgba(0,0,0,0.3),
            inset 0 2px 5px rgba(255,255,255,0.1);
    }

    #randomRecipeButton {
        background: linear-gradient(145deg, #2c3440, #3d4752);
        border: 1px solid #455261;
        box-shadow: 
            0 5px 15px rgba(0, 0, 0, 0.3),
            inset 0 -2px 5px rgba(0,0,0,0.3),
            inset 0 2px 5px rgba(255,255,255,0.1);
    }

    #randomRecipeButton:hover {
        background: linear-gradient(145deg, #3d4752, #2c3440);
        box-shadow: 
            0 8px 20px rgba(0, 0, 0, 0.4),
            inset 0 -2px 5px rgba(0,0,0,0.3),
            inset 0 2px 5px rgba(255,255,255,0.1);
    }

    #customRecipeButton {
        background: linear-gradient(145deg, #232838, #2f3646);
        border: 1px solid #3a4257;
        box-shadow: 
            0 5px 15px rgba(0, 0, 0, 0.3),
            inset 0 -2px 5px rgba(0,0,0,0.3),
            inset 0 2px 5px rgba(255,255,255,0.1);
    }

    #customRecipeButton:hover {
        background: linear-gradient(145deg, #2f3646, #232838);
        box-shadow: 
            0 8px 20px rgba(0, 0, 0, 0.4),
            inset 0 -2px 5px rgba(0,0,0,0.3),
            inset 0 2px 5px rgba(255,255,255,0.1);
    }

    .button-container {
        display: flex;
        gap: 15px;
        flex-wrap: wrap;
        margin: 20px 0;
    }

    .recipe {
        background: rgba(255, 255, 255, 0.95);
        border-radius: 15px;
        padding: 25px;
        margin: 20px 0;
        box-shadow: 0 8px 16px rgba(0,0,0,0.1);
        transition: transform 0.3s ease;
    }

    .recipe:hover {
        transform: translateY(-5px);
    }

    .suggestions {
        background: linear-gradient(145deg, #1a1a1a, #2d2d2d);
        border-radius: 15px;
        padding: 25px;
        margin: 25px 0;
        box-shadow: 0 8px 16px rgba(0,0,0,0.2);
        backdrop-filter: blur(5px);
        border: 1px solid #3a4257;
        color: #ffffff;
    }

    .suggestions h2 {
        color: #ffffff;
        margin-bottom: 15px;
        font-size: 1.5em;
        text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        border-bottom: 2px solid #3498db;
        padding-bottom: 10px;
    }

    #randomIngredients {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    #randomIngredients li {
        padding: 10px 15px;
        margin: 8px 0;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 8px;
        font-size: 1.1em;
        transition: all 0.3s ease;
        border-left: 3px solid #3498db;
    }

    #randomIngredients li:hover {
        transform: translateX(5px);
        background: rgba(255, 255, 255, 0.15);
        box-shadow: 0 2px 8px rgba(0,0,0,0.2);
    }

    .culinary-posts-btn {
        background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%);
        padding: 15px 30px;
        border-radius: 10px;
        font-weight: 600;
        letter-spacing: 1.5px;
        box-shadow: 0 6px 12px rgba(0,0,0,0.15);
        transition: all 0.3s ease;
    }

    .culinary-posts-btn:hover {
        transform: translateY(-3px);
        box-shadow: 0 8px 15px rgba(0,0,0,0.2);
        background: linear-gradient(135deg, #c0392b 0%, #a93226 100%);
    }

    /* Add a container for better content organization */
    .content-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 20px;
    }

    /* Style for recipe headings */
    .recipe h3 {
        color: #2c3e50;
        border-bottom: 2px solid #3498db;
        padding-bottom: 10px;
        margin-bottom: 15px;
    }

    /* Style for recipe description */
    .recipe p {
        color: #34495e;
        line-height: 1.6;
    }

    /* Style for cooking time and ingredients */
    .recipe strong {
        color: #2980b9;
    }
</style>

<style>
.culinary-posts-btn {
  position: relative;
  font-size: 1.2em;
  padding: 0.7em 1.4em;
  background-color: #BF0426;
  text-decoration: none;
  border: none;
  border-radius: 0.5em;
  color: #DEDEDE;
  box-shadow: 0.5em 0.5em 0.5em rgba(0, 0, 0, 0.3);
}

.culinary-posts-btn::before {
  position: absolute;
  content: '';
  height: 0;
  width: 0;
  top: 0;
  left: 0;
  background: linear-gradient(135deg, rgba(33,33,33,1) 0%, rgba(33,33,33,1) 50%, rgba(150,4,31,1) 50%, rgba(191,4,38,1) 60%);
  border-radius: 0 0 0.5em 0;
  box-shadow: 0.2em 0.2em 0.2em rgba(0, 0, 0, 0.3);
  transition: 0.3s;
}

.culinary-posts-btn:hover::before {
  width: 1.6em;
  height: 1.6em;
}

.culinary-posts-btn:active {
  box-shadow: 0.2em 0.2em 0.3em rgba(0, 0, 0, 0.3);
  transform: translate(0.1em, 0.1em);
}
</style>



<div class="main">
    <div class="content">
        <div class="form-container">
            <form id="channelForm">
                <div class="form-inputs">
                    <input type="text" id="title" name="title" placeholder="Enter Title Here" required>
                </div>
                <textarea id="textArea" name="textArea" placeholder="Post Here" required></textarea>
                <button type="submit">Post</button>
            </form>
        </div>
        <div id="culinaryposts"></div>
    <div>
</div>

<style>
    .main {
        display: flex;
    }
    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        /* padding-left: 180px; */
    }

    /* Form Styling */
    .form-container {
        padding: 20px;
        background-color: #000000;
        border-radius: 12px;
        width: calc(100% - 400px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        font-family: Arial, sans-serif;
    }

    .form-inputs {
        display: flex;
        gap: 10px;
        align-items: center;
    }

    #title {
        flex: 1;
        padding: 12px;
        border-radius: 8px;
        border: 1px solid #ddd;
        font-size: 16px;
    }

    #textArea {
        width: 100%;
        padding: 12px;
        border-radius: 8px;
        border: 1px solid #ddd;
        font-size: 16px;
        margin-top: 10px;
        resize: none;
        height: 100px;
    }

    button[type="submit"] {
        align-self: flex-start;
        padding: 10px 20px;
        background-color: #1da1f2;
        color: white;
        border: none;
        border-radius: 8px;
        font-size: 16px;
        font-weight: bold;
        cursor: pointer;
        margin-top: 10px;
        transition: background-color 0.2s ease;
    }

    button[type="submit"]:hover {
        background-color: #1a91da;
    }

    /* Channels Container */
    #culinaryposts {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
        padding-top: 20px;
    }

    /* Post Cards Styling */
    .card {
        width: calc(50% - 20px);
        min-width: 300px;
        padding: 20px;
        background-color: #000000;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        text-align: left;
    }

    .card-title {
        font-size: 1.2em;
        font-weight: bold;
        color: #333;
    }

    .card-description {
        color: #555;
        font-size: 1em;
        margin-top: 10px;
    }
</style>

<script type="module">
    import { pythonURI, fetchOptions } from '../assets/js/api/config.js';
    const container = document.getElementById("culinaryposts");

    async function fetchUser() {
        const response = await fetch(`${pythonURI}/api/user`, fetchOptions);
        const user = await response.json();
        console.log(user);
        return user;
    }

    const user = fetchUser();

    async function fetchChannels() {
        try {
            const groupName = 'Culinary Posts';
            const responseData = {
                group_name: groupName,
            };
            // add filter to get only messages from this channel
            const response = await fetch(`${pythonURI}/api/channels/filter`, {
                ...fetchOptions,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(responseData)
            });

            if (!response.ok) {
                throw new Error('Failed to fetch channels: ' + response.statusText);
            }
            const channels = await response.json();
            container.innerHTML = "";

            channels.forEach(channel => {
                const card = document.createElement("div");
                card.classList.add("card");

                const title = document.createElement("h3");
                title.classList.add("card-title");
                title.textContent = channel.name;

                const description = document.createElement("p");
                description.classList.add("card-description");
                description.textContent = channel.attributes["content"];

                card.appendChild(title);
                card.appendChild(description);

                container.appendChild(card);
            });
        } catch (error) {
            console.error('Error fetching channels:', error);
        }
    }

    document.getElementById('channelForm').addEventListener('submit', async function(event) {
        event.preventDefault();

        const title = document.getElementById('title').value;
        const content = document.getElementById('textArea').value;
        const group_id = 13;

        const channelData = {
            name: title,
            group_id: group_id,
            attributes: {"content": content}
        };

        try {
            const response = await fetch(`${pythonURI}/api/channel`, {
                ...fetchOptions,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(channelData)
            });

            if (!response.ok) {
                throw new Error('Failed to add channel: ' + response.statusText);
            }

            fetchChannels();
            document.getElementById('channelForm').reset();
        } catch (error) {
            console.error('Error adding channel:', error);
            alert('Error adding channel: ' + error.message);
        }
    });

    fetchChannels();
</script>
