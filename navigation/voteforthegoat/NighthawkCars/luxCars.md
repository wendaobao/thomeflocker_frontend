---
layout: page
title: Luxury Cars
description: Luxury Car Information and Chatroom
permalink: /luxCars/
---

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Luxury Cars</title>
    <style>
        body {
            background-color: white;
            color: rgb(255, 80, 80);
            font-family: Arial, sans-serif;
        }
        h2, h3 {
            color: rgb(255, 80, 80);
            border-bottom: 2px solid rgb(255, 80, 80);
            font-weight: bold; /* Bold text */
            text-shadow: 1px 1px 0 rgba(255, 255, 255, 0.8),  /* White shadow */
                         2px 2px 0 rgba(255, 255, 255, 0.6); /* Lighter shadow */
            border-radius: 10px; /* Rounded effect */
            padding: 10px; /* Space around the text */
        }
        p {
            color: white;   
        }
        button {
            background-color: rgb(255, 80, 80);
            color: white;
            border: none;
            padding: 10px 15px;
            margin: 5px;
            cursor: pointer;
            border-radius: 15px; /* Rounded corners */
            transition: background-color 0.3s;
        }
        button:hover {
            background-color: rgb(220, 60, 60); /* Slightly darker on hover */
        }
        div {
            margin: 20px 0;
        }
        .message-box {
            border: 1px solid rgb(200, 200, 200); /* Light gray border */
            border-radius: 10px; /* Rounded corners */
            padding: 10px; /* Padding inside the box */
            height: 150px; /* Fixed height */
            overflow-y: auto; /* Scrollable */
            margin-top: 10px; /* Space above message box */
        }
    </style>
</head>
<body>

<h3>Examples</h3>
<p>- (Here goes all the information for Luxury Car examples)</p>

<h3>Pricing</h3>
<p>- (Here goes all the information for Luxury Car pricing)</p>

<h3>Target Market</h3>
<p>- (Here goes all the information for Luxury Car target market)</p>

<h3>Voting</h3>
<div>
    <button>1st car</button>
    <button>2nd car</button>
    <button>3rd car</button>
    <button>4th car</button>
</div>

<h2>Discussion</h2>
<p>- (Discussion content goes here)</p>
<textarea placeholder="Enter your thoughts or comments here..." id="comment"></textarea>

<div class="message-box">
    <p><strong>Previous Messages:</strong></p>
    <p>- User1: I love the new model!</p>
    <p>- User2: The pricing seems competitive.</p>
    <p>- User3: Great features in the latest release!</p>
    <!-- Additional messages can be added here -->
</div>

</body>
</html>