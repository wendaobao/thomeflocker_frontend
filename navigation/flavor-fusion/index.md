---
permalink: /flavor-fusion/
layout: post
title: Flavor Fusion
description: Flavor Fusion main page
---

<style>
    :root {
        --first: #09090b;
        --second: #18181b;
        --third: #27272a;
        --text: #fafafa;
    }

    body {
        background-color: var(--first);
        color: var(--text);
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
    }

    .flavorflux  {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        margin-top: 70px;
        padding: 15px;
        gap: 30px; /* Increased gap for better spacing */
        flex-wrap: wrap; /* Allows wrapping on smaller screens */
    }

    .combo {
        border: 2px solid var(--third);
        border-radius: 20px;
        padding: 20px;
        width: 300px;
        height: fit-content;
        background-color: var(--second); /* Added background color for contrast */
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Added shadow for depth */
    }

    h1, h2, h3 {
        margin: 0; /* Removes default margins for better alignment */
        padding-bottom: 10px; /* Added space below headings */
    }

    h1 {
        font-size: 24px;
    }

    h2 {
        font-size: 20px;
    }

    h3 {
        font-size: 18px;
    }

    p, ul {
        font-size: 14px; /* Uniform font size for better readability */
    }

    ul {
        padding-left: 20px; /* Added padding to lists */
    }

    button {
        background-color: #3b82f6; /* Button color */
        color: var(--text); /* Text color on button */
        border: none;
        border-radius: 4px; /* Rounded button edges */
        padding: 10px 15px; /* Button padding */
        cursor: pointer;
        transition: background-color 0.3s; /* Smooth transition */
    }

    button:hover {
        background-color: #2563eb; /* Darker shade on hover */
    }

    .left, .right {
        width: 100%; /* Make them stack on small screens */
    }
</style>

<div id="flavorflux">
    <div class="left">
        <h1>Profile</h1>
        <p><strong>Username:</strong> timmy</p>
        <p><strong>Total Combos:</strong> 412</p>
        <h2>Current Combos:</h2>
        <div class="combo">
            <h3>Timmy's Combo</h3>
            <p>A super cool food combo</p>
            <p>🍌 - 🍫 - 🌶️</p>
            <p><strong>Rating:</strong> ⭐⭐⭐⭐⭐</p>
            <p>Comments:</p>
            <ul>
                <li>This is dumb</li>
                <li>I hate Timmy &gt;:(</li>
            </ul>
        </div>
    </div>
</div>
<button onclick="mainPage()">Main Page</button>
<button onclick="leaderboard()">Leaderboard</button>

<script>
    window.currentPage = "/";
    window.userId = "timmymy";

    function addComment(id) {
        let element = document.querySelector(`form[data-postid="${id}"]`);
        let comment = element.getElementsByClassName("commenttext")[0];
        let newComment = {
            comboId: id,
            comment: comment.value,
            commenter: userId,
        };
        console.log(newComment);
    }

    const msgStyles = [
        "font-size: 12px",
        "color: #fafafa",
        "font-family: monospace",
        "background: #18181b",
        "display: inline-block",
        "padding: 1rem 3rem",
        "border: 1px solid #fafafa",
        "border-radius: 4px;",
    ].join(";");

    console.log("%c Flavor Fusion. Best fusion.", msgStyles);

    let mainCode = `<h1>Flavor Fusion</h1>
        <div class="left">
            <h2>Combos4U</h2>
            <div class="combo">
                <h3>Timmy's Combo</h3>
                <p>A super cool food combo</p>
                <p>🍌 - 🍫 - 🌶️</p>
                <p><strong>Rating:</strong> ⭐⭐⭐⭐⭐</p>
                <p>Comments:</p>
                <ul>
                    <li>This is dumb</li>
                    <li>I hate Timmy &gt;:(</li>
                </ul>
                <form method="get" data-postid="123">
                    <label for="commenttext">Add a comment</label>
                    <input type="text" class="commenttext" placeholder="Comment">
                    <button type="submit" onclick="addComment('123');">Submit</button>
                </form>
            </div>
            <div class="combo">
                <h3>Juan's Combo</h3>
                <p>A super sigma food combo ahaha</p>
                <p>🍌 - 🍫 - 🌶️</p>
                <p><strong>Rating:</strong> ⭐⭐⭐</p>
                <p>Comments:</p>
                <ul>
                    <li>Juan is so hot!!!</li>
                    <li>Congrats on getting a gf, Kanhay!</li>
                </ul>
                <form method="get" data-postid="456">
                    <label for="commenttext">Add a comment</label>
                    <input type="text" class="commenttext" placeholder="Comment">
                    <button type="submit" onclick="addComment('456');">Submit</button>
                </form>
            </div>
        </div>`;

        let leaderboardCode = `<table>
<thead>
<tr>
<th>Rank</th>
<th>Chef</th>
<th>Combos</th>
<th>Spins</th>
<th>Average Rating</th>
</tr>
</thead>
<tbody><tr>
<td>1</td>
<td>Claire</td>
<td>18893</td>
<td>38909</td>
<td>4.99</td>
</tr>
<tr>
<td>2</td>
<td>Mickey</td>
<td>18687</td>
<td>37012</td>
<td>4.95</td>
</tr>
<tr>
<td>3</td>
<td>Minnie</td>
<td>17234</td>
<td>36890</td>
<td>4.87</td>
</tr>
<tr>
<td>4</td>
<td>Donald</td>
<td>15873</td>
<td>29734</td>
<td>4.55</td>
</tr>
<tr>
<td>5</td>
<td>Goofy</td>
<td>13731</td>
<td>28394</td>
<td>4.32</td>
</tr>
</tbody></table>`;

    function mainPage() {
        document.getElementById("flavorflux").innerHTML = mainCode;
    }

    function leaderboard() {
      document.getElementById("flavorflux").innerHTML = leaderboardCode;
    }
</script>
