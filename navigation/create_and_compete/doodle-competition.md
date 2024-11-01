---
layout: post 
title: Create and Compete - Doodle Game UI
search_exclude: true
permalink: /moderation/doodle_competition/
author: Arshia, Prajna, Mirabelle, Alex
---

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Drawing Canvas</title>
    <style>
        body { display: flex; flex-direction: column; justify-content: center; align-items: center; height: 100vh; margin: 0; }
        canvas { border: 2px solid #444; cursor: crosshair; margin-top: 10px; }
        .color-button {
            width: 30px;
            height: 30px;
            border: none;
            margin: 2px;
            cursor: pointer;
        }
    </style>
</head>
<body>

<div>
    <button onclick="clearCanvas()" style="font-size: 18px; background-color: #ad3636; padding: 10px 20px; color: white;">Clear Drawing</button>
    <div style="margin-top: 10px;">
        <button class="color-button" style="background-color: #333;" onclick="changeColor('#333')"></button>
        <button class="color-button" style="background-color: #ff0000;" onclick="changeColor('#ff0000')"></button>
        <button class="color-button" style="background-color: #008000;" onclick="changeColor('#008000')"></button>
        <button class="color-button" style="background-color: #0000ff;" onclick="changeColor('#0000ff')"></button>
        <button class="color-button" style="background-color: #ffa500;" onclick="changeColor('#ffa500')"></button>
    </div>
</div>

<canvas id="drawingCanvas" width="600" height="400"></canvas>

<script>
    const canvas = document.getElementById('drawingCanvas');
    const ctx = canvas.getContext('2d');
    let drawing = false;
    let currentColor = '#ad3636';

    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mousemove', draw);

    function startDrawing(event) {
        drawing = true;
        ctx.beginPath();
        ctx.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
    }

    function stopDrawing() {
        drawing = false;
        ctx.closePath();
    }

    function draw(event) {
        if (!drawing) return;
        ctx.lineWidth = 5;
        ctx.lineCap = 'round';
        ctx.strokeStyle = currentColor;
        ctx.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
        ctx.stroke();
    }

    function clearCanvas() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    function changeColor(color) {
        currentColor = color;
    }
</script>

</body>
