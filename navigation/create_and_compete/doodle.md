---
layout: post 
title: Create and Compete - Doodle
search_exclude: true
permalink: /create_and_compete/doodle
menu: nav/create_and_compete.html
author: Alex, Arshia, Prajna, and Mirabelle 
---

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Doodle Animation</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>🎨 Doodle Animation 🎨</h1>
        <div class="canvas-container">
            <canvas id="doodleCanvas" width="800" height="600"></canvas>
        </div>
        <div class="controls">
            <button id="playBtn">Play Animation</button>
            <button id="clearBtn">Clear</button>
        </div>
    </div>
    <script src="script.js"></script>
</body>
<style>
body {
    font-family: 'Arial', sans-serif;
    background-color: #f5f0ff;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    color: #4b0082;
}
.container {
    text-align: center;
    background-color: #e6d7f2;
    border-radius: 20px;
    padding: 30px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}
h1 {
    font-size: 2.5em;
    margin-bottom: 20px;
}
.canvas-container {
    margin: 20px 0;
    border: 2px solid #9b59b6;
    border-radius: 10px;
}
canvas {
    border-radius: 10px;
    background-color: white;
}
button {
    background-color: #9b59b6;
    color: white;
    border: none;
    border-radius: 10px;
    padding: 10px 20px;
    font-size: 1.2em;
    cursor: pointer;
    margin: 5px;
    transition: background-color 0.3s;
}
button:hover {
    background-color: #8e44ad;
}
</style>
<script>
const canvas = document.getElementById('doodleCanvas');
const ctx = canvas.getContext('2d');
const playBtn = document.getElementById('playBtn');
const clearBtn = document.getElementById('clearBtn');
let drawing = false;
let doodleData = [];
let currentPath = [];
// Mouse event listeners for drawing
canvas.addEventListener('mousedown', (e) => {
    drawing = true;
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
    currentPath.push({ x: e.offsetX, y: e.offsetY });
});
canvas.addEventListener('mousemove', (e) => {
    if (drawing) {
        ctx.strokeStyle = '#800080'; // Purple color
        ctx.lineWidth = 5;
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
        currentPath.push({ x: e.offsetX, y: e.offsetY });
    }
});
canvas.addEventListener('mouseup', () => {
    drawing = false;
    ctx.closePath();
    if (currentPath.length > 0) {
        doodleData.push(currentPath);
        currentPath = [];
    }
});
canvas.addEventListener('mouseout', () => {
    drawing = false;
    ctx.closePath();
});
// Play the animation
playBtn.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    playDoodleAnimation();
});
// Clear the canvas
clearBtn.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    doodleData = [];
});
// Function to play the doodle animation
function playDoodleAnimation() {
    let index = 0;
    function animate() {
        if (index < doodleData.length) {
            const path = doodleData[index];
            ctx.beginPath();
            ctx.moveTo(path[0].x, path[0].y);
            for (let i = 1; i < path.length; i++) {
                ctx.lineTo(path[i].x, path[i].y);
            }
            ctx.strokeStyle = '#800080'; // Purple color
            ctx.lineWidth = 5;
            ctx.stroke();
            index++;
            requestAnimationFrame(animate);
        }
    }
    animate();
}
</script>

<details>
  <summary>Room Details</summary>

<a href="{{site.baseurl}}/moderation/rules_doodle/">Moderation Rules</a>

<p> 
The page is a place where people can explore themselves creatively and compete to see who has the best doodle. This allows for players to collaborate over their artistic abilities. Our room includes a chat room where players can converse about their creations, a doodle compete area, a place where people can post their art, and winners get crowned every week. This will help add to our classes page by making a fun artistic environment where everyone can collaborate. </p>

</details>

<a href="{{site.baseurl}}/moderation/chat_doodle/" style="padding: 10px 20px; font-size: 16px; background-color: #7573e6; color: white; border: none; border-radius: 5px; text-decoration: none; display: inline-block;">
  Chat Room
</a>

<a href="{{site.baseurl}}/moderation/doodle_competition/" style="padding: 10px 20px; font-size: 16px; background-color: #7573e6; color: white; border: none; border-radius: 5px; text-decoration: none; display: inline-block;">
  Competition Room
</a>

<a href="{{site.baseurl}}/moderation/artpost_doodle/" style="padding: 10px 20px; font-size: 16px; background-color: #7573e6; color: white; border: none; border-radius: 5px; text-decoration: none; display: inline-block;">
  Artpost
</a>
