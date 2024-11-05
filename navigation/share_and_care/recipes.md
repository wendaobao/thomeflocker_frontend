---
layout: post
title: The Hungry Games
description: Dive into the world of scrumptious foods and get to cooking today!
hide: true
menu: nav/home.html
---




<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Beautiful Food Layout</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f8f9fa; /* Light background for the whole page */
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
    </style>
</head>
<body>


    <div class="image-row">
        <img src="https://cdn.prod.website-files.com/56f03b1536442f6b27f0f08c/5f03324cbb2506842953d137_worlds-best-foods-pizza.jpg" alt="Pizza">
        <img src="https://www.eatingwell.com/thmb/iCdLRBC1BMcDYKRYMTyyToQ8mRs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/8401873-ad2429ae1858464a92229875c91c093d.jpg" alt="Pasta">
        <img src="https://thatdeliciousdish.com/wp-content/uploads/2020/07/Garlic-Mushroom-Noodles-Recipe-web1-1-800x840.jpg" alt="Ramen">
    </div>


</body>
</html>




